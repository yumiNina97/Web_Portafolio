/**
 * Sets up smooth scrolling for navigation links
 */
export function setupSmoothScrolling(): void {
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