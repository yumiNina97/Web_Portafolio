import BaseHTMLElement from "../base/BaseHTMLElement.js";
import ApiBlog from "../../services/ApiBlog.js";

class BlogPage extends BaseHTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const blockElement = document.getElementById('blog-template').content.cloneNode(true).firstElementChild;
        this.shadowRoot.appendChild(blockElement);
        await this.loadCSS("/blocks/blog/blog.css");

        ApiBlog.reset();
        
        const observerBlock = blockElement.querySelector(".blog__observer");
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.loadBlogs();
            }
        }, { threshold: 0.2 });
        
        observer.observe(observerBlock);
    }

    async loadBlogs() {
        const container = this.shadowRoot.querySelector(".blog__cards");
        const blogs = await ApiBlog.getNextBlogs();
        
        if (!blogs) return;

        const fragment = new DocumentFragment();

        for (let blog of blogs) {
            const template = document.getElementById("blog-card-template");
            const element = template.content.cloneNode(true).firstElementChild;

            const imageElement = element.querySelector(".blog__card-image");
            const titleElement = element.querySelector(".blog__card-title");
            const contentElement = element.querySelector(".blog__card-paragraph");
            const dateElement = element.querySelector(".blog__card-date");

            imageElement.src = blog.image;
            titleElement.textContent = blog.title;
            contentElement.textContent = blog.paragraph;
            dateElement.textContent = blog.date;

            fragment.appendChild(element);
        }

        container.appendChild(fragment);
    }
}

customElements.define("blog-page", BlogPage);