let row = [];

class Note {
    
  constructor(title) {
    this.title = title;
    this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.classList.add("card");
      
    let newTitle = document.createElement("p");
    newTitle.innerHTML = title;
      
    let btnRemove = document.createElement('a');
    btnRemove.classList.add("card-remove");
    btnRemove.href = "#";
    btnRemove.innerHTML = "Remove";
      
    btnRemove.addEventListener('click', this.remove.bind(newTitle, title));
      
    this.add(newNote, newTitle, btnRemove);
    this.saveToStorage(this.title);
  }
  
  add(newNote, newTitle, btnRemove){
      let divNotes = document.querySelector(".notes");
      newNote.appendChild(newTitle);
      newNote.appendChild(btnRemove);
      divNotes.appendChild(newNote);
  }
    
  saveToStorage(title){
      row.push(title);
      
      for(let i = 0; i<row.length; i++){
          localStorage.setItem(i, row[i]);
      }
  }
  
  remove(newTitle, title){
      for(let i=0; i<localStorage.length; i++) {
          let key = localStorage.key(i);
          let value = localStorage[key];
          if(value === newTitle){
              localStorage.removeItem(key);
              row.splice(i, 1);
              localStorage.clear();
            
              for(let i = 0; i<row.length; i++){
                  localStorage.setItem(i, row[i]);
              }
          }
      }
      this.parentNode.parentNode.removeChild(this.parentNode);
  } 
}

class App {
  constructor() {
    this.loadNotesFromStorage();
      
    this.btnAdd = document.getElementById("btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this) );
    let submit = this.btnAdd;
    this.btnAdd.addEventListener("click", this.reset.bind(this) );
    
    window.addEventListener("keydown", function(e){
        if(window.event.keyCode=='13'){
            e.preventDefault();
            submit.click();
        }
    });
  }
  
  loadNotesFromStorage() {
      let divNotes = document.querySelector(".notes");
      for(let i = 0; i< localStorage.length; i++){
          let thatNote = localStorage.getItem(i);
          if(thatNote !== null){
              let m1 = new Note(thatNote);
          }
      }
  }
   
  createNote(e){
      let text = document.getElementById("txtAddNote").value;
      let m1 = new Note(text);
  }
  
  reset(){
      document.getElementById("form").reset();
  }
  
}

let app = new App();

//localStorage.clear();
