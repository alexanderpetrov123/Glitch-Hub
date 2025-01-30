const canvas = document.querySelector('.matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "1010101010101010".split("");
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#8f00ff";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Flowchart Animation
    gsap.from(".svg-container", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".svg-container",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

    // Drawing effect for arrows
    gsap.from(".svg-draw", {
        strokeDasharray: 200,
        strokeDashoffset: 200,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".svg-container",
            start: "top 80%",
        }
    });

    // Pulsing effect for shapes
    gsap.from(".svg-animate", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: ".svg-container",
            start: "top 80%",
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // ✨ Soft fade + lift effect for paragraphs
    gsap.from(".lorem-section p, .lorem-section ul li", {
        opacity: 0,
        y: 10,
        duration: 1,
        ease: "power1.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".lorem-section",
            start: "top 85%",
        }
    });

    // 📝 Smooth fade-in for headers (slower & elegant)
    gsap.from(".lorem-section h2, .lorem-section h3", {
        opacity: 0,
        y: 15,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".lorem-section",
            start: "top 90%",
        }
    });
});