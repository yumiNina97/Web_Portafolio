import Command from './Command';
import ItemListManager from './ItemListManager'; 

class SearchCommand implements Command {
    private query: string;
    private itemListManager: ItemListManager;

    constructor(query: string) {
        this.query = query;
        this.itemListManager = ItemListManager.getInstance();
    }
   
    execute(): void {
        const allItems = this.itemListManager.getItems();
        
        const results = allItems.filter(item => 
            (item.name as string).toLowerCase().includes(this.query.toLowerCase())
            
        );
        console.log(`Resultados de búsqueda para "${this.query}":`, results);
        
    }
}
export default SearchCommand;