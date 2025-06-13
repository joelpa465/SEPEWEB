/**
 * ========================================
 * UTILS.JS - InfoSEPE 2025
 * Utilidades JavaScript reutilizables
 * ========================================
 */

// ========================================
// CONSTANTES GLOBALES
// ========================================
const INFOSEPE_CONFIG = {
  API_BASE_URL: 'https://sede.sepe.gob.es',
  ANALYTICS_ID: 'GA_MEASUREMENT_ID',
  ADSENSE_CLIENT: 'ca-pub-XXXXXXXXXX',
  VERSION: '2025.1.0',
  DEBUG: false,
  STORAGE_PREFIX: 'infosepe_',
  ANIMATION_DURATION: 300,
  SEARCH_DEBOUNCE: 500,
  COOKIE_EXPIRY_DAYS: 365
};

// ========================================
// UTILIDADES DE DOM
// ========================================
const DOM = {
  /**
   * Selector mejorado que devuelve el primer elemento o null
   */
  query: (selector, context = document) => {
    return context.querySelector(selector);
  },

  /**
   * Selector que devuelve todos los elementos
   */
  queryAll: (selector, context = document) => {
    return Array.from(context.querySelectorAll(selector));
  },

  /**
   * Crear elemento con atributos y contenido
   */
  create: (tag, attributes = {}, content = '') => {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else {
        element.setAttribute(key, value);
      }
    });
    
    if (content) {
      element.innerHTML = content;
    }
    
    return element;
  },

  /**
   * Verificar si elemento está visible en viewport
   */
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  },

  /**
   * Scroll suave a elemento
   */
  scrollTo: (element, offset = 0) => {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  },

  /**
   * Añadir clase con animación
   */
  addClass: (element, className, duration = INFOSEPE_CONFIG.ANIMATION_DURATION) => {
    element.classList.add(className);
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  },

  /**
   * Remover clase con animación
   */
  removeClass: (element, className, duration = INFOSEPE_CONFIG.ANIMATION_DURATION) => {
    element.classList.remove(className);
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }
};

// ========================================
// UTILIDADES DE ALMACENAMIENTO
// ========================================
const Storage = {
  /**
   * Guardar en localStorage con prefijo
   */
  set: (key, value, expiry = null) => {
    const item = {
      value: value,
      timestamp: Date.now(),
      expiry: expiry ? Date.now() + (expiry * 24 * 60 * 60 * 1000) : null
    };
    
    try {
      localStorage.setItem(INFOSEPE_CONFIG.STORAGE_PREFIX + key, JSON.stringify(item));
      return true;
    } catch (error) {
      console.warn('Error guardando en localStorage:', error);
      return false;
    }
  },

  /**
   * Obtener de localStorage
   */
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(INFOSEPE_CONFIG.STORAGE_PREFIX + key);
      if (!item) return defaultValue;
      
      const parsed = JSON.parse(item);
      
      // Verificar expiración
      if (parsed.expiry && Date.now() > parsed.expiry) {
        localStorage.removeItem(INFOSEPE_CONFIG.STORAGE_PREFIX + key);
        return defaultValue;
      }
      
      return parsed.value;
    } catch (error) {
      console.warn('Error leyendo localStorage:', error);
      return defaultValue;
    }
  },

  /**
   * Eliminar de localStorage
   */
  remove: (key) => {
    try {
      localStorage.removeItem(INFOSEPE_CONFIG.STORAGE_PREFIX + key);
      return true;
    } catch (error) {
      console.warn('Error eliminando de localStorage:', error);
      return false;
    }
  },

  /**
   * Limpiar todo el storage con prefijo
   */
  clear: () => {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(INFOSEPE_CONFIG.STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.warn('Error limpiando localStorage:', error);
      return false;
    }
  }
};

// ========================================
// UTILIDADES DE URL Y NAVEGACIÓN
// ========================================
const URL = {
  /**
   * Obtener parámetros de la URL
   */
  getParams: () => {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
      result[key] = value;
    }
    return result;
  },

  /**
   * Obtener parámetro específico
   */
  getParam: (name, defaultValue = null) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || defaultValue;
  },

  /**
   * Actualizar URL sin recargar página
   */
  updateParam: (key, value) => {
    const url = new URL(window.location);
    if (value === null || value === '') {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
    window.history.replaceState({}, '', url);
  },

  /**
   * Navegar a URL externa de forma segura
   */
  openExternal: (url, newTab = true) => {
    const link = document.createElement('a');
    link.href = url;
    link.rel = 'noopener noreferrer';
    if (newTab) {
      link.target = '_blank';
    }
    link.click();
  },

  /**
   * Verificar si URL es externa
   */
  isExternal: (url) => {
    try {
      const urlObj = new URL(url, window.location.origin);
      return urlObj.origin !== window.location.origin;
    } catch {
      return false;
    }
  }
};

// ========================================
// UTILIDADES DE VALIDACIÓN
// ========================================
const Validate = {
  /**
   * Validar email
   */
  email: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  /**
   * Validar DNI español
   */
  dni: (dni) => {
    const regex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!regex.test(dni)) return false;
    
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const number = parseInt(dni.substr(0, 8), 10);
    const letter = dni.substr(8, 1).toUpperCase();
    
    return letters[number % 23] === letter;
  },

  /**
   * Validar NIE español
   */
  nie: (nie) => {
    const regex = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!regex.test(nie)) return false;
    
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const firstLetter = nie.substr(0, 1).toUpperCase();
    const number = nie.substr(1, 7);
    const checkLetter = nie.substr(8, 1).toUpperCase();
    
    let prefix = '';
    switch (firstLetter) {
      case 'X': prefix = '0'; break;
      case 'Y': prefix = '1'; break;
      case 'Z': prefix = '2'; break;
    }
    
    const fullNumber = parseInt(prefix + number, 10);
    return letters[fullNumber % 23] === checkLetter;
  },

  /**
   * Validar teléfono español
   */
  phone: (phone) => {
    const cleanPhone = phone.replace(/\s|-|\+34/g, '');
    const regex = /^[679][0-9]{8}$/;
    return regex.test(cleanPhone);
  },

  /**
   * Validar código postal español
   */
  postalCode: (code) => {
    const regex = /^[0-4][0-9]{4}|5[0-2][0-9]{3}$/;
    return regex.test(code);
  },

  /**
   * Validar formulario completo
   */
  form: (formData, rules) => {
    const errors = {};
    
    Object.entries(rules).forEach(([field, fieldRules]) => {
      const value = formData[field];
      
      fieldRules.forEach(rule => {
        if (rule.required && (!value || value.trim() === '')) {
          errors[field] = rule.message || `${field} es obligatorio`;
          return;
        }
        
        if (value && rule.type) {
          let isValid = true;
          
          switch (rule.type) {
            case 'email':
              isValid = Validate.email(value);
              break;
            case 'dni':
              isValid = Validate.dni(value);
              break;
            case 'nie':
              isValid = Validate.nie(value);
              break;
            case 'phone':
              isValid = Validate.phone(value);
              break;
            case 'postalCode':
              isValid = Validate.postalCode(value);
              break;
          }
          
          if (!isValid) {
            errors[field] = rule.message || `${field} no es válido`;
          }
        }
        
        if (value && rule.minLength && value.length < rule.minLength) {
          errors[field] = rule.message || `${field} debe tener al menos ${rule.minLength} caracteres`;
        }
        
        if (value && rule.maxLength && value.length > rule.maxLength) {
          errors[field] = rule.message || `${field} no debe exceder ${rule.maxLength} caracteres`;
        }
      });
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

// ========================================
// UTILIDADES DE FORMATO
// ========================================
const Format = {
  /**
   * Formatear número con separadores de miles
   */
  number: (num, decimals = 0) => {
    return new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  },

  /**
   * Formatear moneda en euros
   */
  currency: (amount, decimals = 2) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(amount);
  },

  /**
   * Formatear fecha
   */
  date: (date, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    const formatOptions = { ...defaultOptions, ...options };
    return new Intl.DateTimeFormat('es-ES', formatOptions).format(new Date(date));
  },

  /**
   * Formatear fecha relativa (hace X tiempo)
   */
  dateRelative: (date) => {
    const now = new Date();
    const targetDate = new Date(date);
    const diffTime = Math.abs(now - targetDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
    return `Hace ${Math.floor(diffDays / 365)} años`;
  },

  /**
   * Capitalizar primera letra
   */
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Formatear duración en horas
   */
  duration: (hours) => {
    if (hours < 24) {
      return `${hours} horas`;
    } else {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return remainingHours > 0 ? 
        `${days} días y ${remainingHours} horas` : 
        `${days} días`;
    }
  },

  /**
   * Truncar texto con puntos suspensivos
   */
  truncate: (text, maxLength = 100, suffix = '...') => {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength - suffix.length) + suffix;
  }
};

// ========================================
// UTILIDADES DE NOTIFICACIONES
// ========================================
const Notify = {
  /**
   * Mostrar notificación toast
   */
  show: (message, type = 'info', duration = 4000) => {
    const colors = {
      info: '#6366f1',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    };

    const icons = {
      info: '💡',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    };

    // Crear contenedor si no existe
    let container = DOM.query('.toast-container');
    if (!container) {
      container = DOM.create('div', {
        className: 'toast-container',
        style: 'position: fixed; top: 20px; right: 20px; z-index: 10000; max-width: 400px;'
      });
      document.body.appendChild(container);
    }

    // Crear toast
    const toast = DOM.create('div', {
      className: 'toast',
      style: `
        background: ${colors[type]}; color: white;
        padding: 1rem 1.5rem; margin-bottom: 0.5rem;
        border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        transform: translateX(100%); transition: transform 0.3s ease;
        display: flex; align-items: center; gap: 0.5rem;
        font-size: 0.9rem; line-height: 1.4;
      `
    }, `<span>${icons[type]}</span><span>${message}</span>`);

    container.appendChild(toast);

    // Animación de entrada
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    // Auto-remover
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (container.contains(toast)) {
          container.removeChild(toast);
        }
        // Remover contenedor si está vacío
        if (container.children.length === 0) {
          document.body.removeChild(container);
        }
      }, 300);
    }, duration);

    return toast;
  },

  /**
   * Métodos de conveniencia
   */
  success: (message, duration) => Notify.show(message, 'success', duration),
  error: (message, duration) => Notify.show(message, 'error', duration),
  warning: (message, duration) => Notify.show(message, 'warning', duration),
  info: (message, duration) => Notify.show(message, 'info', duration)
};

// ========================================
// UTILIDADES DE ANALYTICS
// ========================================
const Analytics = {
  /**
   * Enviar evento a Google Analytics
   */
  trackEvent: (action, category = 'General', label = '', value = null) => {
    if (typeof gtag !== 'undefined') {
      const eventData = {
        event_category: category,
        event_label: label
      };
      
      if (value !== null) {
        eventData.value = value;
      }
      
      gtag('event', action, eventData);
    }
    
    if (INFOSEPE_CONFIG.DEBUG) {
      console.log('📊 Analytics Event:', { action, category, label, value });
    }
  },

  /**
   * Enviar página vista
   */
  trackPageView: (page = window.location.pathname) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', INFOSEPE_CONFIG.ANALYTICS_ID, {
        page_path: page
      });
    }
    
    if (INFOSEPE_CONFIG.DEBUG) {
      console.log('📈 Page View:', page);
    }
  },

  /**
   * Eventos específicos del SEPE
   */
  trackSearch: (query, category = 'default') => {
    Analytics.trackEvent('search', 'SEPE Search', `${category}: ${query}`);
  },

  trackFormSubmit: (formName) => {
    Analytics.trackEvent('form_submit', 'Forms', formName);
  },

  trackDownload: (fileName) => {
    Analytics.trackEvent('download', 'Files', fileName);
  },

  trackOutboundLink: (url) => {
    Analytics.trackEvent('outbound_link', 'External Links', url);
  }
};

// ========================================
// UTILIDADES DE AJAX
// ========================================
const Ajax = {
  /**
   * Realizar petición HTTP genérica
   */
  request: async (url, options = {}) => {
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    const config = { ...defaultOptions, ...options };
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error('Error en petición AJAX:', error);
      throw error;
    }
  },

  /**
   * GET request
   */
  get: (url, params = {}) => {
    const urlObj = new URL(url);
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.append(key, value);
    });
    
    return Ajax.request(urlObj.toString());
  },

  /**
   * POST request
   */
  post: (url, data = {}) => {
    return Ajax.request(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

// ========================================
// UTILIDADES DE DEBOUNCE Y THROTTLE
// ========================================
const Performance = {
  /**
   * Debounce - ejecutar función después de un retraso
   */
  debounce: (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(this, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(this, args);
    };
  },

  /**
   * Throttle - limitar ejecución de función
   */
  throttle: (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Lazy loading de imágenes
   */
  lazyLoadImages: () => {
    const images = DOM.queryAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
};

// ========================================
// UTILIDADES ESPECÍFICAS DEL SEPE
// ========================================
const SEPE = {
  /**
   * Generar enlaces oficiales del SEPE
   */
  getOfficialLink: (service) => {
    const links = {
      'cita-previa': 'https://sede.sepe.gob.es/SolicitudCitaPrevia/solicitudCita.do',
      'renovar-demanda': 'https://sede.sepe.gob.es/renovacionDemandaInicio.do',
      'sellar-paro': 'https://sede.sepe.gob.es/renovacionDemandaInicio.do',
      'prestaciones': 'https://sede.sepe.gob.es/prestacionesInicio.do',
      'subsidios': 'https://sede.sepe.gob.es/subsidiosInicio.do',
      'formacion': 'https://sede.sepe.gob.es/formacionInicio.do'
    };
    
    return links[service] || 'https://sede.sepe.gob.es';
  },

  /**
   * Validar datos específicos del SEPE
   */
  validateSEPEData: (type, value) => {
    switch (type) {
      case 'nss':
        // Número de Seguridad Social
        return /^[0-9]{12}$/.test(value.replace(/\s/g, ''));
      case 'demanda':
        // Número de demanda de empleo
        return /^[0-9]{10,12}$/.test(value);
      case 'expediente':
        // Número de expediente
        return /^[A-Z]{2}[0-9]{8,10}$/.test(value);
      default:
        return false;
    }
  },

  /**
   * Calcular prestación orientativa
   */
  calculatePrestacion: (baseReguladora, dias) => {
    let porcentaje;
    if (dias <= 180) {
      porcentaje = 0.7; // 70% primeros 6 meses
    } else {
      porcentaje = 0.5; // 50% después de 6 meses
    }
    
    const prestacionDiaria = (baseReguladora / 30) * porcentaje;
    const prestacionMensual = prestacionDiaria * 30;
    
    // Aplicar topes (orientativos para 2025)
    const topeMinimo = 480.00;
    const topeMaximo = 1395.60;
    
    return {
      diaria: Math.max(topeMinimo / 30, Math.min(prestacionDiaria, topeMaximo / 30)),
      mensual: Math.max(topeMinimo, Math.min(prestacionMensual, topeMaximo)),
      porcentaje: porcentaje * 100
    };
  }
};

// ========================================
// UTILIDADES DE COOKIES
// ========================================
const Cookies = {
  /**
   * Establecer cookie
   */
  set: (name, value, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  },

  /**
   * Obtener cookie
   */
  get: (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  /**
   * Eliminar cookie
   */
  delete: (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },

  /**
   * Verificar consentimiento de cookies
   */
  hasConsent: (type = 'all') => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) return false;
    
    try {
      const preferences = JSON.parse(consent);
      return type === 'all' ? 
        preferences.analytics && preferences.advertising :
        preferences[type];
    } catch {
      return false;
    }
  }
};

// ========================================
// INICIALIZACIÓN Y AUTO-SETUP
// ========================================
const App = {
  /**
   * Inicializar aplicación
   */
  init: () => {
    // Configurar lazy loading
    Performance.lazyLoadImages();
    
    // Configurar enlaces externos
    App.setupExternalLinks();
    
    // Configurar formularios
    App.setupForms();
    
    // Configurar búsqueda
    App.setupSearch();
    
    // Configurar scroll effects
    App.setupScrollEffects();
    
    if (INFOSEPE_CONFIG.DEBUG) {
      console.log('🚀 InfoSEPE App inicializada correctamente');
    }
  },

  /**
   * Configurar enlaces externos
   */
  setupExternalLinks: () => {
    DOM.queryAll('a[href^="http"]').forEach(link => {
      if (URL.isExternal(link.href)) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.addEventListener('click', (e) => {
          Analytics.trackOutboundLink(link.href);
        });
      }
    });
  },

  /**
   * Configurar formularios
   */
  setupForms: () => {
    DOM.queryAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        const formName = form.getAttribute('id') || form.getAttribute('class') || 'unknown';
        Analytics.trackFormSubmit(formName);
      });
    });
  },

  /**
   * Configurar búsqueda global
   */
  setupSearch: () => {
    const searchInputs = DOM.queryAll('input[type="search"], .search-input');
    
    searchInputs.forEach(input => {
      const debouncedSearch = Performance.debounce((value) => {
        if (value.length >= 3) {
          Analytics.trackSearch(value, 'global');
        }
      }, INFOSEPE_CONFIG.SEARCH_DEBOUNCE);
      
      input.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
      });
    });
  },

  /**
   * Configurar efectos de scroll
   */
  setupScrollEffects: () => {
    const header = DOM.query('.header');
    if (header) {
      const throttledScroll = Performance.throttle(() => {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, 100);
      
      window.addEventListener('scroll', throttledScroll);
    }
  }
};

// ========================================
// EXPORTAR PARA USO GLOBAL
// ========================================
window.InfoSEPE = {
  DOM,
  Storage,
  URL,
  Validate,
  Format,
  Notify,
  Analytics,
  Ajax,
  Performance,
  SEPE,
  Cookies,
  App,
  CONFIG: INFOSEPE_CONFIG
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}

// ========================================
// FUNCIONES DE CONVENIENCIA GLOBALES
// ========================================
window.$ = DOM.query;
window.$ = DOM.queryAll;
window.notify = Notify.show;
window.trackEvent = Analytics.trackEvent;