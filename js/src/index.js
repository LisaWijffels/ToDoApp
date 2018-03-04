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
    this.saveToStorage(title);
    
  }
  
  add(newNote){
    // HINT🤩
    // this function should append the note to the screen somehow
      let divNotes = document.querySelector(".notes");
      divNotes.appendChild(newNote);
      
  }
    

    
  saveToStorage(title){
      if(localStorage.clickcount){
          console.log("if");
          console.log("title"+title);
          console.log("clickcount"+localStorage.clickcount);
          localStorage.clickcount = parseInt(localStorage.clickcount) +1;
          localStorage.setItem("note"+localStorage.clickcount, title);
          console.log("taking"+localStorage.getItem("note"+localStorage.clickcount));
          
      } else {
          console.log("else");
          localStorage.clickcount = 1;
          localStorage.setItem("note"+localStorage.clickcount, title);
          console.log("taking"+localStorage.getItem("note"+localStorage.clickcount));
      }
      
      
      //localStorage.clear();
      
      /*let sNotes.push(title);
      for(let i = 1; i<sNotes.length; i++){
          localStorage.setItem("note"+i, title);
      }*/
      
            
      
        
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
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
      let divNotes = document.querySelector(".notes");
      
      if(localStorage.clickcount){
          for(let i = 1; i<=localStorage.clickcount; i++){
              let newDiv = document.createElement('div');
              newDiv.classList.add("card");
              newDiv.innerHTML = localStorage.getItem("note"+i);
              console.log(localStorage.getItem("note"+i));
              divNotes.appendChild(newDiv);
              let btnRemove = document.createElement('a');
              btnRemove.classList.add("card-remove");
              btnRemove.href = "#";
              btnRemove.innerHTML = "Remove";
              newDiv.appendChild(btnRemove);
          }
      }
    
      
      
      
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let text = document.getElementById("txtAddNote").value;
    let m1 = new Note(text);
    //console.log("This is a note "+m1.title);
    
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


