

interface Item {
    id: number | string;

}

interface ListObserver {
    update(items: Item[]): void;
}

class ItemListManager {
    private static instance: ItemListManager;
    private items: Item[] = [];
    private observers: ListObserver[] = [];

    private constructor() {
        
        const storedItems = localStorage.getItem('projectItems');
        if (storedItems) {
            this.items = JSON.parse(storedItems);
        }
    }

    public static getInstance(): ItemListManager {
        if (!ItemListManager.instance) {
            ItemListManager.instance = new ItemListManager();
        }
        return ItemListManager.instance;
    }

    public addItem(item: Item): void {
        this.items.push(item);
        this.notifyObservers();
        this.saveToLocalStorage();
    }

    public removeItem(itemId: number | string): void {
        this.items = this.items.filter(item => item.id !== itemId);
        this.notifyObservers();
        this.saveToLocalStorage();
    }

    public getItems(): Item[] {
        return [...this.items]; 
    }

    public addObserver(observer: ListObserver): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: ListObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.getItems());
        }
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('projectItems', JSON.stringify(this.items));
    }
}


export default ItemListManager;