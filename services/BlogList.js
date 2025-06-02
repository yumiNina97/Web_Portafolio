import BlogList from "../blocks/blogDetails/BlogDetailsPage.js";
import { observerMixin } from "./Mixins.js";
import { Commnad } from "./SaveCommand.js";
import { COMMANDS } from "./SaveCommand.js";
import { CommandExecutor } from "./SaveCommand.js";

class BlogList {
    #blogs = [];
    #limitedView = true;

    get blogs() {
        if(this.#limitedView)
            return this.#blogs.slice(0, 3);
        return this.#blogs;
    }

    get allBlogs() {
        return this.#blogs;
    }

    get limitedView() {
        return this.#limitedView;
    }

    static instance = null;
    static {
        this.instance = new BlogList();
    }

    constructor() {
        if(BlogList.instance)
            throw new Error("Ya existe una instancia");
    }

    static getInstance() {
        return this.instance;
    }

    find(id) {
        return this.#blogs.find(blog => blog.id == id);
    }

    addLike(id) {
        const blog = this.find(id);
        blog.likes = Number(blog.likes) + 1;
        blog.like = "true";
        this.notify();
    }

    removeLike(id) {
        const blog = this.find(id);
        blog.likes = Number(blog.likes) - 1;
        blog.like = "false";
        this.notify();
    }

    setBlogs(blogs) {
        this.#blogs = blogs;
        this.notify();
    }

    seeMore() {
        this.#limitedView = false;
        this.notify();
    }
}

Object.assign(BlogList.prototype, observerMixin);
export default BlogList;
