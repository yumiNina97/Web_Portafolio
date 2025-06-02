import ProjectList from "./ProjectList.js"
import APIProject from "./apiProject.js";
import SaveItemList from "./SaveItemsList.js";
import BlogList from "./BlogList.js";
import ApiBlog from "./ApiBlog.js";

const projectList = ProjectList.getInstance();
const saveItemList = SaveItemList.getInstance();
const blogList = BlogList.getInstance();

const LocalStorage = {
    saveProjects () {
        localStorage.setItem("projects", JSON.stringify(projectList.allProjects));
    },

    async loadProjects() {
        let projects = JSON.parse(localStorage.getItem("projects"));
        let save = false;

        if(!projects) {
            projects = await APIProject.getProjects();
            save = true;            
        }

        projectList.setProjects(projects);

        if(save) {
            this.saveProjects();
        }
    },

    saveSavedItemList() {
        localStorage.setItem("savedItems", JSON.stringify(SaveItemList.getInstance().projects));
    },

    async loadSavedItemList() {
        let savedItems = JSON.parse(localStorage.getItem("savedItems"));

        if(!savedItems) {
            savedItems = [];
        }

        SaveItemList.getInstance().setProjects(savedItems);
        this.saveSavedItemList();
    },

   
    saveBlogs() {
        localStorage.setItem("blogs", JSON.stringify(blogList.allBlogs));
    },

    async loadBlogs() {
        let blogs = JSON.parse(localStorage.getItem("blogs"));
        let save = false;

        if(!blogs) {
            blogs = await ApiBlog.getNextBlogs();
            save = true;            
        }

        blogList.setBlogs(blogs);

        if(save) {
            this.saveBlogs();
        }
    },

    saveBlogLikes() {
        localStorage.setItem("blogLikes", JSON.stringify(blogList.allBlogs.map(blog => ({
            id: blog.id,
            likes: blog.likes,
            like: blog.like
        }))));
    }
}


projectList.addObserver(LocalStorage.saveProjects);
saveItemList.addObserver(LocalStorage.saveSavedItemList);
blogList.addObserver(LocalStorage.saveBlogs);
blogList.addObserver(LocalStorage.saveBlogLikes);

export default LocalStorage;
