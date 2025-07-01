import BaseHTMLElement from "../base/BaseHTMLElement.js";

class HeroPage extends BaseHTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const blockElement = document.getElementById('hero-template').content.cloneNode(true).firstElementChild;
        this.shadowRoot.appendChild(blockElement);
        await this.loadCSS("/blocks/hero/hero.css");
    }
}

customElements.define("hero-page", HeroPage);