import { ContactForm } from '../types/form';
import { validateName, validateEmail, validateMessage } from './validation';
import { showError, showSuccess } from './ui';

/**
 * Sets up form validation for the contact form
 */
export function setupFormValidation(): void {
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

            // If validation passes, show success message
            showSuccess(contactForm);
        });
    }
}