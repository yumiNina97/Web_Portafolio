import BaseHTMLElement from "../base/BaseHTMLElement.js";
import ProjectList from "../../services/ProjectList.js";

class ProjectPage extends BaseHTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        const blockElement = document.getElementById('projects-template').content.cloneNode(true).firstElementChild;
        this.shadowRoot.appendChild(blockElement);
        await this.loadCSS("/blocks/projects/projects.css");
        
        ProjectList.getInstance().addObserver(() => this.render());
        this.render();
    }

    render() {
        const projectCards = this.shadowRoot.querySelector('.projects__cards');
        const seeMoreButton = this.shadowRoot.querySelector('.projects__button');
        projectCards.innerHTML = "";
        
        const projectList = ProjectList.getInstance();
        const fragment = new DocumentFragment();

        for(let project of projectList.projects) {
            const template = document.getElementById('project-card-template');
            const card = template.content.cloneNode(true).firstElementChild;
            card.id = `project-id-${project.id}`;
            
            const img = card.querySelector(".projects__card-image");
            const title = card.querySelector(".projects__card-title");
            const paragraph = card.querySelector(".projects__card-paragraph");
            const link = card.querySelector(".projects__card-button");
            const likesCounter = card.querySelector(".projects__card-heart-content");
            const saveIcon = card.querySelector(".projects__save-icon");
            const heartIcon = card.querySelector(".projects__heart-icon");

            img.src = project.imageURL;
            title.textContent = project.title;
            paragraph.textContent = project.content;
            link.href = project.githubURL;
            likesCounter.textContent = project.likes;

            if(project.save === "true") {
                saveIcon.classList.add("projects__save-icon--save");
            }

            if(project.like === "true") {
                heartIcon.classList.add("projects__heart-icon--liked");
            }

            this.addListeners(heartIcon, saveIcon, project.id);
            fragment.appendChild(card);
        }

        if(!projectList.limitedView) {
            seeMoreButton.hidden = true;
        }

        if(!seeMoreButton.hasListener) {
            seeMoreButton.addEventListener("click", () => {
                projectList.seeMore();
                this.render();
            });
            seeMoreButton.hasListener = true;
        }

        projectCards.appendChild(fragment);
    }


    addListeners(heartIcon, saveIcon, projectId) {
        if (!saveIcon.hasListener) {
            saveIcon.parentElement.addEventListener("click", () => {
                const projectList = ProjectList.getInstance();
                if (projectList.find(projectId).save === "true") {
                    projectList.unsaveProject(projectId);
                } else {
                    projectList.saveProject(projectId);
                }
            });
            saveIcon.hasListener = true;
        }

        if (!heartIcon.hasListener) {
            heartIcon.parentElement.addEventListener("click", () => {
                const projectList = ProjectList.getInstance();
                if (projectList.find(projectId).like === "true") {
                    projectList.removeLike(projectId);
                } else {
                    projectList.addLike(projectId);
                }
            });
            heartIcon.hasListener = true;
        }
    }
}

customElements.define("project-page", ProjectPage);