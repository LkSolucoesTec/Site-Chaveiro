document.addEventListener('DOMContentLoaded', () => {
    // 1. Registro do Plugin GSAP para Gatilhos de Scroll
    gsap.registerPlugin(ScrollTrigger);

    // 2. Controle da Navbar Adaptável (Efeito Oishii / Lustra)
    const nav = document.querySelector('#mainNav');
    
    const handleNavbarScroll = () => {
        // Se o scroll passar de 60px, ativa o fundo Obsidian sólido
        if (window.scrollY > 60) {
            nav.classList.add('nav-active');
        } else {
            nav.classList.remove('nav-active');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);

    // 3. Animação de Entrada - Seção Hero
    // Faz o logo e os títulos surgirem de forma suave ao carregar
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-logo-main", {
        duration: 1.5,
        y: -30,
        opacity: 0,
        ease: "power4.out"
    })
    .from(".hero-title", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    }, "-=1") // Inicia 1 segundo antes de terminar a anterior
    .from(".hero-action", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)"
    }, "-=0.8");

    // 4. Reveal da Seção Sobre (Lado a Lado)
    // A imagem vem da esquerda e o texto da direita ao rolar
    gsap.from(".about-visual", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%", // Inicia quando o topo da seção atinge 80% da tela
        },
        duration: 1.2,
        x: -100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
        },
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: "power2.out"
    });

    // 5. Reveal dos Cards de Serviço (Grid 2x2)
    // Efeito de 'Stagger' faz cada card aparecer um após o outro
    gsap.from(".flip-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2, // Atraso entre o surgimento de cada card
        ease: "power3.out"
    });

    // 6. Reveal da Localização e Botão Prata
    gsap.from(".address-premium-card", {
        scrollTrigger: {
            trigger: ".location-premium",
            start: "top 75%",
        },
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power2.out"
    });
});