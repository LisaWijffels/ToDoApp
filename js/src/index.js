class Note {
  constructor(title) {
    this.title = title;
    this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.classList.add("card");
    let newTitle = document.createElement("p");
    newTitle.innerHTML = title + "<br>";
    let btnRemove = document.createElement('a');
    btnRemove.classList.add("card-remove");
    btnRemove.href = "#";
    btnRemove.innerHTML = "Remove";
      
    newNote.appendChild(newTitle);
    newNote.appendChild(btnRemove);
    
    btnRemove.addEventListener('click', this.remove.bind(newNote));
      
    this.add(newNote);
    this.saveToStorage(newNote);
    
  }
  
  add(newNote){
    // HINT🤩
    // this function should append the note to the screen somehow
      let divNotes = document.querySelector(".notes");
      divNotes.appendChild(newNote);
  }
  
  saveToStorage(newNote){
      console.log("this is a new note "+newNote);
      localStorage.setItem("note", newNote);
      console.log("This is in storage "+localStorage.getItem("note"));
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(newNote){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
      this.parentNode.removeChild(this);
      
  } 
}

class App {
  constructor() {
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.getElementById("btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let text = document.getElementById("txtAddNote").value;
    let m1 = new Note(text);
    console.log("This is a note "+m1.title);
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();

console.log("test");

