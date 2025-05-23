// Type definitions for form elements
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  setupSmoothScrolling();

  // Form validation
  setupFormValidation();
});

/**
 * Sets up smooth scrolling for navigation links
 */
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

/**
 * Sets up form validation for the contact form
 */
function setupFormValidation(): void {
  const contactForm = document.getElementById('contactForm') as ContactForm;

  if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

      const nameInput = contactForm.elements.name;
      const emailInput = contactForm.elements.email;
      const messageInput = contactForm.elements.message;

      // Basic validation
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

      // If validation passes, you would typically send the form data to a server
      // For this example, we'll just show a success message
      showSuccess(contactForm);
    });
  }
}

/**
 * Validates a name input
 * @param name - The name to validate
 * @returns True if the name is valid, false otherwise
 */
function validateName(name: string): boolean {
  return name.trim().length > 0;
}

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns True if the email is valid, false otherwise
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a message input
 * @param message - The message to validate
 * @returns True if the message is valid, false otherwise
 */
function validateMessage(message: string): boolean {
  return message.trim().length > 10;
}

/**
 * Shows an error message for an input element
 * @param inputElement - The input element with an error
 * @param message - The error message to display
 */
function showError(inputElement: HTMLInputElement | HTMLTextAreaElement, message: string): void {
  // Remove any existing error messages
  const existingError = inputElement.parentElement?.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Add error class to input
  inputElement.classList.add('error');

  // Create and append error message
  const errorElement = document.createElement('p');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.style.color = 'red';
  errorElement.style.fontSize = '12px';
  errorElement.style.marginTop = '4px';

  inputElement.parentElement?.appendChild(errorElement);

  // Focus the input element
  inputElement.focus();
}

/**
 * Shows a success message and resets the form
 * @param form - The form that was successfully submitted
 */
function showSuccess(form: HTMLFormElement): void {
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = '¡Mensaje enviado con éxito!';
  successMessage.style.color = 'green';
  successMessage.style.fontSize = '16px';
  successMessage.style.padding = '10px';
  successMessage.style.marginTop = '10px';
  successMessage.style.textAlign = 'center';

  // Add success message to form
  form.appendChild(successMessage);

  // Reset form
  form.reset();

  // Remove success message after 3 seconds
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
                
                // Añadir clase activa al botón
                button.classList.toggle('active');
            }
        });
    });
});
