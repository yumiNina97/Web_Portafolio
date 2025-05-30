crea los sigueintes puntos para este proyectos  e indicame como lo haces 
creatte Local storage for data persistence
item list use sigleton  for list observer  or proxy  event dispatcher
apply command  design pattern for search and save 
use mixin to extend functionality when needed
create a search bar web component with shadow DOM and local styles 
create save button  web component whithout shadow DOM*/

create search-bar.js  web component
input field = for search terms
search execution when press enter  isntantiate a searchcommand and execute it 
search add a ui element for the search input  only focus on implementing the design pattern.
implementing keyboard shortcuts
crtl+k for the search bar focus
listen for the keydown event  on the document
when the press ctrl+lk  se emite el focus search-bar input field esta 
accion debe encapsular  a un nuevo focussearchcommand que  el metodo llama focus()
crtl+f to toggle favorite for current  item 
considera que debes implementar a command a toggle favorite for the currently viewed proyect/blog post using ctrl+f 


const inputElement = document.getElementById('myInput');
inputElement.focus();






