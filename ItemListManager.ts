// ItemListManager.ts

interface Item {
    id: number | string;
    // ... otras propiedades
}

// Interfaz para los observadores
interface ListObserver {
    update(items: Item[]): void;
}

class ItemListManager {
    private static instance: ItemListManager;
    private items: Item[] = [];
    private observers: ListObserver[] = [];

    private constructor() {
        // Cargar ítems desde localStorage si existen
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
        return [...this.items]; // Devuelve una copia para evitar mutaciones externas directas
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

// Ejemplo de uso:
// const listManager = ItemListManager.getInstance();

// class MyComponent implements ListObserver {
//     constructor() {
//         listManager.addObserver(this);
//     }
//     update(items: Item[]) {
//         console.log('La lista ha cambiado:', items);
//         // Actualizar la UI
//     }
// }

export default ItemListManager;