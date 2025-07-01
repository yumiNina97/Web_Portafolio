const Router = {
    init() {
        if (!document.getElementById('main')) {
            const main = document.createElement('main');
            main.id = 'main';
            document.body.appendChild(main);
        }
        const links = document.querySelectorAll(".nav__item a");
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const route = event.target.getAttribute("href");
                this.go(route, true);
            });
        });


        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });

        this.go(location.pathname);
    },


    go(route, saveToHistory = false) {
        if(saveToHistory) {
            history.pushState({ route }, "", route);
        }

        const mainElement = document.getElementById('main');
        if (!mainElement) {
            console.error('Main element not found');
            return;
        }

        mainElement.innerHTML = "";
        let pageElement = null;

        switch(route){
            case '/':            case '':
                pageElement = document.createElement("hero-page");
                break;
            case '/about-me':
                pageElement = document.createElement("about-me-page");
                break;
            case '/projects':
                pageElement = document.createElement("project-page");
                break;
            case '/blogs':
                pageElement = document.createElement("blog-page");
                break;
            default:
                pageElement = document.createElement("hero-page");
                break;
        }

        mainElement.appendChild(pageElement);
        
        window.scrollX = 0;
        window.scrollY = 0;
    }
}

export default Router;