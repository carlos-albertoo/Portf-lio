document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito Typewriter Refinado
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    
    function typeText(element, text, speed, callback = null) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 500);
            }
        }
        type();
    }

    setTimeout(() => {
        typeText(nameElement, 'Carlos Alberto', 80, () => {
            typeText(titleElement, 'Desenvolvedor Web', 60);
        });
    }, 300);

    // 2. Animação de Scroll Nativa (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // Anima só uma vez
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // 3. Atualização do Menu Ativo usando Observer (Alta Performance)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const indicator = document.querySelector('.indicator');

    function updateIndicator(targetLink) {
        if (!indicator || window.innerWidth <= 768) return;
        const linkRect = targetLink.getBoundingClientRect();
        const navRect = document.querySelector('.navbar').getBoundingClientRect();
        indicator.style.left = `${linkRect.left - navRect.left}px`;
        indicator.style.width = `${linkRect.width}px`;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        updateIndicator(link);
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" });

    sections.forEach(section => sectionObserver.observe(section));

    // Comportamento dos links de navegação
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            menuToggle.checked = false; // Fecha menu mobile
            
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ajusta indicador no resize
    window.addEventListener('resize', () => {
        const active = document.querySelector('.nav-menu a.active');
        if (active) updateIndicator(active);
    });

    // Inicializa indicador
    setTimeout(() => {
        const active = document.querySelector('.nav-menu a.active');
        if (active) updateIndicator(active);
    }, 500);

    // 4. Efeito Especial: Rede Neural (Network Particles em Soft Red)
    initNetworkCanvas();

    // 5. Envio do Formulário de Contato via AJAX
    const contactForm = document.getElementById('contact-form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede a página de recarregar
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Feedback visual de carregamento
            btn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            fetch(this.action, {
                method: this.method,
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Sucesso
                    btn.innerHTML = 'Enviado com sucesso! <i class="fas fa-check"></i>';
                    btn.style.backgroundColor = '#28a745'; // Cor verde
                    this.reset(); // Limpa os campos
                } else {
                    // Erro na API
                    btn.innerHTML = 'Erro ao enviar <i class="fas fa-times"></i>';
                    btn.style.backgroundColor = '#dc3545'; // Cor vermelha
                }
                
                // Retorna o botão ao estado original após 4 segundos
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 4000);
                
            }).catch(error => {
                // Erro de rede
                btn.innerHTML = 'Erro de Conexão <i class="fas fa-times"></i>';
                btn.style.backgroundColor = '#dc3545';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 4000);
            });
        });
    }
});

function initNetworkCanvas() {
    const canvas = document.getElementById('network-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const color = '#e63946'; // Soft Red

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Rebater nas bordas
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 12000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                             + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(230, 57, 70, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connect();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    init();
    animate();
}