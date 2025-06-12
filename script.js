// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    initMobileMenu();
    initSmoothScrolling();
    initStatsAnimation();
    initTabSwitching();
    initGuiaTabs();
    initFAQAccordion();
    initContactForm();
    initBackToTop();
    initScrollAnimations();
    initHeaderScroll();
    initAdvancedFeatures();
    initCalculadoraAyudas();
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger lines
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                resetHamburger();
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                resetHamburger();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                resetHamburger();
            }
        });
        
        function resetHamburger() {
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Stats Animation
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateStats() {
        if (animated) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.textContent.includes('%') ? '%' : '';
            let current = 0;
            const increment = target / 100;
            const duration = 2000;
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (target >= 1000) {
                    stat.textContent = Math.floor(current).toLocaleString() + suffix;
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, stepTime);
        });
        
        animated = true;
    }
    
    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
}

// Tab Switching Functionality
function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Add animation effect
            const activePanel = document.querySelector('.tab-panel.active');
            if (activePanel) {
                activePanel.style.opacity = '0';
                activePanel.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    activePanel.style.opacity = '1';
                    activePanel.style.transform = 'translateY(0)';
                }, 150);
            }
        });
    });
}

// Guía Tabs Functionality
function initGuiaTabs() {
    const guiaTabButtons = document.querySelectorAll('.guia-tab-btn');
    const guiaTabPanels = document.querySelectorAll('.guia-tab-panel');
    
    guiaTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            guiaTabButtons.forEach(btn => btn.classList.remove('active'));
            guiaTabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Add animation effect
            const activePanel = document.querySelector('.guia-tab-panel.active');
            if (activePanel) {
                activePanel.style.opacity = '0';
                activePanel.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    activePanel.style.opacity = '1';
                    activePanel.style.transform = 'translateY(0)';
                }, 150);
            }
        });
    });
}

// Calculadora de Ayudas
function initCalculadoraAyudas() {
    const calcButton = document.querySelector('.btn-calc');
    
    if (calcButton) {
        calcButton.addEventListener('click', function() {
            const situacion = document.querySelector('.calc-form select').value;
            const ingresos = document.querySelector('.calc-form input[type="number"]').value;
            const hijos = document.querySelectorAll('.calc-form input[type="number"]')[1].value;
            
            // Simulate calculation
            let ayudasRecomendadas = [];
            
            if (situacion === 'Desempleado') {
                ayudasRecomendadas.push('Prestación por Desempleo');
                if (parseInt(ingresos) < 1000) {
                    ayudasRecomendadas.push('Ingreso Mínimo Vital');
                }
            }
            
            if (parseInt(hijos) > 0) {
                ayudasRecomendadas.push('Ayuda por Hijo a Cargo');
            }
            
            if (parseInt(ingresos) < 800) {
                ayudasRecomendadas.push('Ayudas de Alquiler');
            }
            
            // Show results
            const resultMessage = ayudasRecomendadas.length > 0 
                ? `Puedes solicitar: ${ayudasRecomendadas.join(', ')}`
                : 'Consulta con tu oficina SEPE para más información personalizada';
                
            showNotification(resultMessage, 'success');
            
            // Track calculation
            console.log('Calculadora usada:', { situacion, ingresos, hijos, ayudasRecomendadas });
        });
    }
}
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            const isActive = answer.classList.contains('active');
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                const a = q.nextElementSibling;
                const i = q.querySelector('i');
                if (q !== this) {
                    a.classList.remove('active');
                    q.classList.remove('active');
                    i.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ item
            if (isActive) {
                answer.classList.remove('active');
                this.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.add('active');
                this.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<div class="loading"></div> Enviando...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('Mensaje enviado correctamente. Te responderemos pronto.', 'success');
                this.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
        
        // Form validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// Field Validation
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (fieldType === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Introduce un email válido');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = 'var(--error-color)';
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'block';
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.style.borderColor = 'var(--border-color)';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.type-card, .modality-card, .info-card, .stat-card, .timeline-item, .service-category, .quick-service-card, .ayuda-destacada, .tramite-card, .curso-stat');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    closeButton.addEventListener('click', function() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility Functions
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

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Keyboard Navigation Enhancement
document.addEventListener('keydown', function(e) {
    // Escape key closes modals/menus
    if (e.key === 'Escape') {
        const activeMenu = document.querySelector('.nav-menu.active');
        if (activeMenu) {
            activeMenu.classList.remove('active');
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
        
        const activeFAQ = document.querySelector('.faq-answer.active');
        if (activeFAQ) {
            activeFAQ.classList.remove('active');
            activeFAQ.previousElementSibling.classList.remove('active');
        }
    }
    
    // Tab navigation for FAQ items
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('faq-question')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Focus management for accessibility
function manageFocus() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="email"], input[type="radio"], input[type="checkbox"], select'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2563eb';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Advanced Features
function initAdvancedFeatures() {
    manageFocus();
    initPerformanceMonitoring();
    initAccessibilityEnhancements();
    trackUserInteractions();
}

// Performance monitoring
function initPerformanceMonitoring() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (window.performance) {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            }
        }, 0);
    });
}

// Accessibility Enhancements
function initAccessibilityEnhancements() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#inicio';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.textContent.trim() && button.querySelector('i')) {
            const icon = button.querySelector('i');
            const iconClass = icon.className;
            
            if (iconClass.includes('fa-arrow-up')) {
                button.setAttribute('aria-label', 'Volver arriba');
            } else if (iconClass.includes('fa-bars')) {
                button.setAttribute('aria-label', 'Menú de navegación');
            }
        }
    });
}

// Track User Interactions
function trackUserInteractions() {
    // Track navigation clicks
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Navigation clicked:', this.textContent);
        });
    });
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
        });
    });
    
    // Track FAQ interactions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            console.log('FAQ toggled:', this.textContent);
        });
    });
    
    // Track service link clicks
    document.querySelectorAll('.service-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.querySelector('span').textContent;
            console.log('Service clicked:', serviceName);
            showNotification(`Información sobre: ${serviceName}`, 'info');
        });
    });
    
    // Track quick service clicks
    document.querySelectorAll('.quick-service-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.querySelector('h3').textContent;
            console.log('Quick service clicked:', serviceName);
            showNotification(`Accediendo a: ${serviceName}`, 'info');
        });
    });
    
    // Track ayuda buttons
    document.querySelectorAll('.btn-ayuda').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const actionName = this.textContent;
            console.log('Ayuda action:', actionName);
            showNotification(`Procesando: ${actionName}`, 'info');
        });
    });
    
    // Track trámite buttons
    document.querySelectorAll('.btn-tramite').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tramiteName = this.textContent;
            console.log('Trámite clicked:', tramiteName);
            showNotification(`Redirigiendo a: ${tramiteName}`, 'info');
        });
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// Scroll Performance Optimization
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events that don't need to run on every scroll
}, 100);

const throttledScrollHandler = throttle(function() {
    // Handle scroll events that need frequent updates
}, 16);

window.addEventListener('scroll', throttledScrollHandler);
window.addEventListener('scroll', debouncedScrollHandler);

// Page Visibility API for performance optimization
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden - pausing operations');
    } else {
        console.log('Page visible - resuming operations');
    }
});

// Final initialization message
console.log('InfoSEPE portal initialized successfully');

// Export functions for external use
window.InfoSEPE = {
    showNotification: showNotification,
    validateField: validateField,
    debounce: debounce,
    throttle: throttle,
    version: '1.0.0',
    initialized: true
};