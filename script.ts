// Type definitions for form elements
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}


document.addEventListener('DOMContentLoaded', () => {
  
  setupSmoothScrolling();

 
  setupFormValidation();
});


function setupSmoothScrolling(): void {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();

      const target = link.getAttribute('href');
      if (!target) return;

      const targetElement = document.querySelector(target);
      if (!targetElement) return;

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      });
    });
  });
}


function setupFormValidation(): void {
  const contactForm = document.getElementById('contactForm') as ContactForm;

  if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const nameInput = contactForm.elements.name;
      const emailInput = contactForm.elements.email;
      const messageInput = contactForm.elements.message;

      
      if (!validateName(nameInput.value)) {
        showError(nameInput, 'Por favor ingrese un nombre válido');
        return;
      }

      if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Por favor ingrese un correo electrónico válido');
        return;
      }

      if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'Por favor ingrese un mensaje');
        return;
      }

      
      showSuccess(contactForm);
    });
  }
}

/**
 * Validates a name input
 * @param name 
 * @returns 
 */
function validateName(name: string): boolean {
  return name.trim().length > 0;
}

/**
 * Validates an email address
 * @param email 
 * @returns
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a message input
 * @param message 
 * @returns 
 */
function validateMessage(message: string): boolean {
  return message.trim().length > 10;
}

/**
 * Shows an error message for an input element
 * @param inputElement 
 * @param message 
 */
function showError(inputElement: HTMLInputElement | HTMLTextAreaElement, message: string): void {
 
  const existingError = inputElement.parentElement?.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

 
  inputElement.classList.add('error');

  const errorElement = document.createElement('p');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.style.color = 'red';
  errorElement.style.fontSize = '12px';
  errorElement.style.marginTop = '4px';

  inputElement.parentElement?.appendChild(errorElement);

 
  inputElement.focus();
}

/**
 * Shows a success message and resets the form
 * @param form 
 */
function showSuccess(form: HTMLFormElement): void {
  
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = '¡Mensaje enviado con éxito!';
  successMessage.style.color = 'green';
  successMessage.style.fontSize = '16px';
  successMessage.style.padding = '10px';
  successMessage.style.marginTop = '10px';
  successMessage.style.textAlign = 'center';

  
  form.appendChild(successMessage);

  
  form.reset();

 
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countElement = button.parentElement?.querySelector('.like-count');
            if (countElement) {
                let count = parseInt(countElement.textContent || '0');
                count++;
                countElement.textContent = count.toString();
                
                
                button.classList.toggle('active');
            }
        });
    });
});
