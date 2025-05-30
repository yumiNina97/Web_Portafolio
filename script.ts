// TypeScript for Yuvinca Nina Portfolio

// Define types for DOM elements
interface HTMLElementWithValue extends HTMLElement {
  value: string;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupContactForm();
  setupProjectInteractions();
});

// Setup smooth scrolling for navigation links
function setupNavigation(): void {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();

      const target = link.getAttribute('href');
      if (target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Setup contact form validation and submission
function setupContactForm(): void {
  const contactForm = document.querySelector('.contact-form') as HTMLFormElement;

  if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const nameInput = document.getElementById('name') as HTMLElementWithValue;
      const emailInput = document.getElementById('email') as HTMLElementWithValue;
      const messageInput = document.getElementById('message') as HTMLElementWithValue;

      // Simple validation
      if (!nameInput.value.trim()) {
        alert('Por favor, ingresa tu nombre');
        return;
      }

      if (!emailInput.value.trim()) {
        alert('Por favor, ingresa tu correo electrónico');
        return;
      }

      if (!isValidEmail(emailInput.value)) {
        alert('Por favor, ingresa un correo electrónico válido');
        return;
      }

      if (!messageInput.value.trim()) {
        alert('Por favor, ingresa un mensaje');
        return;
      }

      // Here you would typically send the form data to a server
      // For this example, we'll just show a success message
      alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
      contactForm.reset();
    });
  }
}

// Email validation helper function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Setup project card interactions (like and bookmark buttons)
function setupProjectInteractions(): void {
  const likeButtons = document.querySelectorAll('.like-button');
  const bookmarkButtons = document.querySelectorAll('.bookmark-button');

  // Like button functionality
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectCard = button.closest('.project-card');
      if (projectCard) {
        const likeCount = projectCard.querySelector('.like-count');
        if (likeCount) {
          const currentCount = parseInt(likeCount.textContent || '0', 10);
          likeCount.textContent = (currentCount + 1).toString();
        }

        // Add visual feedback
        button.classList.add('liked');
        setTimeout(() => {
          button.classList.remove('liked');
        }, 300);
      }
    });
  });

  // Bookmark button functionality
  bookmarkButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('bookmarked');

      // Add visual feedback
      const projectCard = button.closest('.project-card');
      if (projectCard) {
        projectCard.classList.toggle('bookmarked-project');
      }
    });
  });
}

// Add responsive menu toggle for mobile
window.addEventListener('resize', adjustForScreenSize);

function adjustForScreenSize(): void {
  const width = window.innerWidth;
  const navList = document.querySelector('.nav-list');

  if (width <= 640 && navList) {
    if (!document.querySelector('.mobile-menu-toggle')) {
      createMobileMenuToggle();
    }
  }
}

function createMobileMenuToggle(): void {
  const header = document.querySelector('.header .container');
  const navList = document.querySelector('.nav-list');

  if (header && navList) {
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
    mobileToggle.innerHTML = '<span></span><span></span><span></span>';

    mobileToggle.addEventListener('click', () => {
      const mainNav = document.querySelector('.main-nav');
      if (mainNav) {
        mainNav.classList.toggle('mobile-nav-open');
      }
    });

    header.insertBefore(mobileToggle, header.firstChild);
  }
}

// Initialize on load
adjustForScreenSize();


// Función para la búsqueda de proyectos
function setupProjectSearch(): void {
    const searchInput = document.getElementById('projectSearchInput') as HTMLInputElement | null;
    const searchButton = document.getElementById('projectSearchButton') as HTMLButtonElement | null;
    const projectsContainer = document.querySelector('.projects-container');

    if (!searchInput || !searchButton || !projectsContainer) {
        console.warn('Elementos de búsqueda de proyectos no encontrados. La funcionalidad de búsqueda no estará activa.');
        return;
    }

    const projectCards = Array.from(projectsContainer.getElementsByClassName('project-card')) as HTMLElement[];

    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        projectCards.forEach(card => {
            const titleElement = card.querySelector('.project-title') as HTMLElement | null;
            const descriptionElement = card.querySelector('.project-description') as HTMLElement | null;

            const title = titleElement ? titleElement.textContent?.toLowerCase() || '' : '';
            const description = descriptionElement ? descriptionElement.textContent?.toLowerCase() || '' : '';

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}

import AppRouter from './AppRouter'; 

document.addEventListener('DOMContentLoaded', () => {
    AppRouter.init();
    setupProjectSearch(); 

});
