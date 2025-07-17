// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Loading Animation
    initLoading();
    
    // Initialize all animations
    initAnimations();
    
    // Initialize interactions
    initInteractions();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize custom cursor
    initCursor();
    
    // Initialize progress bar
    initProgressBar();
});

// Loading Animation
function initLoading() {
    // Create loading overlay
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: #ff4757;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
    `;
    loader.innerHTML = 'AJANS SU 2.0';
    document.body.appendChild(loader);

    // Set initial body overflow
    gsap.set("body", { overflow: "hidden" });

    // Animate loader out
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        onComplete: () => {
            loader.remove();
            gsap.set("body", { overflow: "auto" });
        }
    });
}

// Initialize all animations
function initAnimations() {
    // Navbar animation
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });

    // Hero section animations
    const heroTl = gsap.timeline({ delay: 1 });
    
    heroTl
        .from(".hero-badge", {
            y: 30,
            opacity: 0,
            duration: 0.8
        })
        .from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5")
        .from(".hero-description", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "-=0.3")
        .from(".hero-buttons", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "-=0.2")
        .from(".tech-logos", {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, "-=0.1")
        .from(".hero-visual", {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.8");

    // Hero visual floating animation
    gsap.to(".hero-logo", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });

    gsap.to(".play-button", {
        scale: 1.1,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });

    // Features section animation
    gsap.from(".features-header", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%"
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // API section animation
    gsap.from(".api-content", {
        scrollTrigger: {
            trigger: ".api-section",
            start: "top 70%"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".code-block", {
        scrollTrigger: {
            trigger: ".api-section",
            start: "top 70%"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
    });

    // Code block typing animation
    const codeLines = document.querySelectorAll('.code-content div');
    gsap.from(codeLines, {
        scrollTrigger: {
            trigger: ".code-block",
            start: "top 80%"
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Contact section animation
    gsap.from(".contact-container > *", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Footer animation
    gsap.from(".footer-container", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
}

// Initialize interactions
function initInteractions() {
    // Feature cards hover animations
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(card.querySelector('.feature-icon'), {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(card.querySelector('.feature-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
    });

    // Button hover animations
    document.querySelectorAll('.btn-primary, .btn-secondary, .demo-btn, .contact-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Tech logos floating animation
    document.querySelectorAll('.tech-logo').forEach((logo, index) => {
        gsap.to(logo, {
            y: -10,
            duration: 2 + (index * 0.3),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Play button click effect
    document.querySelector('.play-button')?.addEventListener('click', () => {
        gsap.to('.play-button', {
            scale: 0.9,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    });
}

// Initialize scroll effects
function initScrollEffects() {
    // Navbar background change on scroll
    ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        toggleClass: {
            className: "scrolled",
            targets: ".navbar"
        }
    });

    // Parallax effect for hero section
    gsap.to(".hero-visual", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        opacity: 0.5
    });

    // API stats counter animation
    document.querySelectorAll('.stat-number').forEach(stat => {
        const finalNumber = stat.textContent;
        stat.textContent = '0';
        
        ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            onEnter: () => {
                gsap.to(stat, {
                    textContent: finalNumber,
                    duration: 2,
                    ease: "power2.out",
                    snap: { textContent: 1 }
                });
            }
        });
    });

    // Reveal animations on scroll
    gsap.utils.toArray('.feature-card, .api-content, .code-block').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}

// Initialize custom cursor
function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button, .feature-card, .play-button, .tech-logo').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

// Initialize progress bar
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    }

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
}

// Intersection Observer for performance
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.feature-card, .api-content, .code-block').forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Window resize handler
function handleResize() {
    ScrollTrigger.refresh();
}

window.addEventListener('resize', debounce(handleResize, 250));

// Utility function: debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    });
}

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Skip to main content on Tab
    if (e.key === 'Tab' && !e.shiftKey) {
        const firstFocusable = document.querySelector('a, button, input, textarea, select');
        if (document.activeElement === document.body && firstFocusable) {
            firstFocusable.focus();
            e.preventDefault();
        }
    }
    
    // Escape key to close any open modals or menus
    if (e.key === 'Escape') {
        // Close any open menus or modals
        document.querySelectorAll('.menu-open').forEach(el => {
            el.classList.remove('menu-open');
        });
    }
});

// Reduce motion for accessibility
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.01);
    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
}

// Initialize intersection observer for better performance
initIntersectionObserver();