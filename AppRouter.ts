
type ViewRenderer = () => HTMLElement;


const viewRenderers: Record<string, ViewRenderer> = {
    "/": () => {
       
        const el = document.createElement("div");
        
        el.innerHTML = "<h2>Home Section</h2><p>Content for the home page.</p>"; 
        return el;
    },
    "/about": () => {
        const el = document.createElement("div");
        el.innerHTML = "<h2>About Section</h2><p>Content for the about page.</p>";
        return el;
    },
    "/projects": () => {
        const el = document.createElement("div");
        el.innerHTML = "<h2>Projects Section</h2><p>Content for the projects page.</p>";
        return el;
    },
    "/contact": () => {
        const el = document.createElement("div");
        el.innerHTML = "<h2>Contact Section</h2><p>Content for the contact page.</p>";
        return el;
    },
   
    "/404": () => {
        const el = document.createElement("h1");
        el.textContent = "404 - Page Not Found";
        return el;
    }
};

const AppRouter = {
    
    init: (): void => {
   
        document.querySelectorAll('a.nav__link').forEach(link => {
            link.addEventListener('click', (event: Event) => {
                event.preventDefault();
                const target = event.currentTarget as HTMLAnchorElement;
                const href = target.getAttribute('href');
                if (href) {
                    AppRouter.go(href);
                }
            });
        });

       
        window.addEventListener('popstate', (event: PopStateEvent) => {
            AppRouter.go(event.state?.route || location.pathname, false);
        });

       
        AppRouter.go(location.pathname);
    },

    
    go: (route: string, addToHistory: boolean = true): void => {
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }

       
        const renderer = viewRenderers[route] || viewRenderers['/404'];
        const pageElement = renderer();

       
        const mainContentArea = document.getElementById('main-content'); 

        if (mainContentArea) {
           
            mainContentArea.innerHTML = ''; 
            
            // Add new content
            if (pageElement) {
                mainContentArea.appendChild(pageElement);
            }
        } else {
            console.error('AppRouter: Main content area (e.g., <main id="main-content">) not found in the DOM.');
        }

        window.scrollTo(0, 0); 
    },
};

export default AppRouter;