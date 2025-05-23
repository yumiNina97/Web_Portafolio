/**
 * Shows an error message for an input element
 * @param inputElement - The input element with an error
 * @param message - The error message to display
 */
export function showError(inputElement: HTMLInputElement | HTMLTextAreaElement, message: string): void {
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

    inputElement.parentElement?.appendChild(errorElement);

    // Focus the input element
    inputElement.focus();
}

/**
 * Shows a success message and resets the form
 * @param form - The form that was successfully submitted
 */
export function showSuccess(form: HTMLFormElement): void {
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = '¡Mensaje enviado con éxito!';

    // Add success message to form
    form.appendChild(successMessage);

    // Reset form
    form.reset();

    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}