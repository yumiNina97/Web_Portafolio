
import Command from './Command';
import ItemListManager from './ItemListManager'; 

class SaveCommand implements Command {
    private itemListManager: ItemListManager;

    constructor() {
        this.itemListManager = ItemListManager.getInstance();
    }

    execute(): void {
      
        console.log('Datos guardados (o se intentó guardar).');
        
    }
}
export default SaveCommand;