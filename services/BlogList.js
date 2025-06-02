import BlogList from "../blocks/blogDetails/BlogDetailsPage.js";
import { observerMixin } from "./Mixins.js";
import { Commnad } from "./SaveCommand.js";
import { COMMANDS } from "./SaveCommand.js";
import { CommandExecutor } from "./SaveCommand.js";

class BlogListList {

    #Blog = [];
    #limitedView = true;

    get blog() {

        if(this.#limitedView)
            return this.#Blog.slice(0, 3);

        return this.#Blog;
    }

    get allBlog() {
        return this.#Blog;
    }

    get limitedView() {
        return this.#limitedView;
    }

    static instance = null;
    static {
        this.instance = new ProjectList();
    }

    constructor(){
        if(ProjectList.instance)
            throw new Error("Ya existe una instancia");
    }

    static getInstance() {
        return this.instance;
    }

    find(id) {
        return this.#Blog.find(project => project.id == id);
    }

    addLike(id) {
        const project = this.find(id);
        project.likes = Number(project.likes) + 1;
        project.like = "true";

        this.notify();
    }

    removeLike(id) {
        const project = this.find(id);
        project.likes = Number(project.likes) - 1;
        project.like = "false";        
        
        this.notify();
    }


    saveProject(id) {
        const project = this.find(id);
        project.save = "true";   

        this.notify();
        const command = new Commnad(COMMANDS.SAVE, project);
        CommandExecutor.execute(command);
        
    }

    unsaveProject(id) {
        const project = this.find(id);
        project.save = "false";

        const command = new Commnad(COMMANDS.UNSAVE, project);
        CommandExecutor.execute(command);

        this.notify();
    }


    addProject(project) {
        this.#Blog.push(project);

        this.notify();
    }

    setBlog(blog) {
        this.#Blog = blog;
    }

    seeMore(){
        this.#limitedView = false;
    }

}


Object.assign(BlogList.prototype, observerMixin);

export default BlogListList;