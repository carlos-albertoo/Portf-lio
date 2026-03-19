// Efeito typewriter para o nome
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Efeito typewriter para o título
function typeWriterTitle(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animação do navbar com indicador e links ativos
function initNavbarAnimation() {
    const navLinks = document.querySelectorAll('.navbar a');
    const indicator = document.querySelector('.indicator');
    const menuToggle = document.getElementById('menu-toggle');
    
    function updateIndicator(link) {
        if (!link || !indicator) return;
        
        const linkRect = link.getBoundingClientRect();
        const navbarRect = document.querySelector('.navbar ul').getBoundingClientRect();
        
        if (navbarRect.width > 0) {
            indicator.style.left = (linkRect.left - navbarRect.left) + 'px';
            indicator.style.width = linkRect.width + 'px';
        }
    }
    
    function setActiveLink(link) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
        updateIndicator(link);
    }
    
    // Evento de clique nos links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            setActiveLink(this);
            
            // Fechar menu mobile
            if (menuToggle) {
                menuToggle.checked = false;
            }
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Detectar link ativo ao fazer scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
                updateIndicator(link);
            }
        });
    });
    
    // Inicializar indicador no primeiro link
    if (navLinks.length > 0) {
        setActiveLink(navLinks[0]);
    }
    
    // Atualizar indicador ao redimensionar
    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.navbar a.active');
        if (activeLink) {
            updateIndicator(activeLink);
        }
    });
}

// Inicializar efeitos quando a página carregar
window.addEventListener('load', () => {
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');

    typeWriter(nameElement, 'Carlos Alberto', 100);
    setTimeout(() => {
        typeWriterTitle(titleElement, 'Desenvolvedor Front-end', 100);
    }, 2000); // Delay para começar o título após o nome

    // Efeito de fumaça neon azul na seção hero
    initNeonSmokeEffect();
    
    // Inicializar animação do navbar
    initNavbarAnimation();
});

// Função para o efeito de fumaça neon azul
function initNeonSmokeEffect() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    const heroSection = document.getElementById('hero');

    // Ajustar tamanho do canvas
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouse = { x: 0, y: 0 };
    let particles = [];
    let isMouseInHero = false;

    // Classe para partículas
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.01;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;
            this.size *= 0.98;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = '#00d4ff';
            ctx.shadowColor = '#00d4ff';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Event listeners para mouse
    heroSection.addEventListener('mouseenter', () => {
        isMouseInHero = true;
    });

    heroSection.addEventListener('mouseleave', () => {
        isMouseInHero = false;
    });

    heroSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;

        if (isMouseInHero) {
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouse.x, mouse.y));
            }
        }
    });

    // Animação
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles = particles.filter(particle => particle.life > 0);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}