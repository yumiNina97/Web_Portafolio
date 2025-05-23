// Interfaces
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    setupSmoothScrolling();
    setupFormValidation();
    setupLikeButtons();
});

function setupLikeButtons(): void {
    const likeButtons = document.querySelectorAll('.projects__card-heart');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countElement = button.querySelector('.projects__card-heart-content');
            if (countElement) {
                let count = parseInt(countElement.textContent || '0');
                count++;
                countElement.textContent = count.toString();
                button.classList.toggle('active');
            }
        });
    });
}