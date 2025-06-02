import BaseHTMLElement from "../base/BaseHTMLElement.js";
import Markdown from "../../services/Markdown.js";

export default class AboutMePage extends BaseHTMLElement {
    constructor() {
        super();
    }

    async connectedCallback(){
        const aboutMe = document.getElementById('about-me-template').content.cloneNode(true).firstElementChild;
        const profile = document.getElementById('profile-template').content.cloneNode(true).firstElementChild;

        const paragraph = aboutMe.querySelector(".about-me__paragraph");
        const preview  = aboutMe.querySelector(".about-me__paragraph-view");

       
       
        preview.addEventListener("click", (event) => {
            paragraph.classList.remove("about-me__paragraph--hidden");
            preview.classList.add("about-me__paragraph--hidden");
        })

        paragraph.addEventListener("blur", (event) => {
            paragraph.classList.add("about-me__paragraph--hidden");
            preview.classList.remove("about-me__paragraph--hidden");
        })


        const fragment = new DocumentFragment();
        
        fragment.appendChild(aboutMe);
        fragment.appendChild(profile);

        this.shadowRoot.appendChild(fragment);
        await this.loadCSS("/blocks/about-me/about-me.css");
    }
}


customElements.define("about-me-page", AboutMePage);