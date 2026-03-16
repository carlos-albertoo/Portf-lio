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

// Smooth scroll para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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