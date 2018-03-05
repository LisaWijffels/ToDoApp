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
    newTitle.innerHTML = title + "<br>";
      
    let btnRemove = document.createElement('a');
    btnRemove.classList.add("card-remove");
    btnRemove.href = "#";
    btnRemove.innerHTML = "Remove";
      
    
    
    btnRemove.addEventListener('click', this.remove.bind(newTitle, title));
      
    this.add(newNote, newTitle, btnRemove);
    this.saveToStorage(this.title);
    
  }
  
  add(newNote, newTitle, btnRemove){
    // HINT🤩
    // this function should append the note to the screen somehow
      let divNotes = document.querySelector(".notes");
      newNote.appendChild(newTitle);
      newNote.appendChild(btnRemove);
      divNotes.appendChild(newNote);
      
  }
    

    
  saveToStorage(title){
      /*if(localStorage.clickcount){
          localStorage.clickcount = parseInt(localStorage.clickcount) +1;
          localStorage.setItem("note"+localStorage.clickcount, title);
          console.log("taking"+localStorage.getItem("note"+localStorage.clickcount));
          
      } else {
          console.log("else");
          localStorage.clickcount = 1;
          localStorage.setItem("note"+localStorage.clickcount, title);
          console.log("saving"+localStorage.getItem("note"+localStorage.clickcount));
      }*/
      row.push(title);
      
      for(let i = 0; i<row.length; i++){
          localStorage.setItem(i, row[i]);
          console.log("Saving "+localStorage.getItem(i)+" on "+i);
      }
      
      
      
      //i++;
      //console.log("i value "+i);
      
      
      
      //localStorage.clear();
      
        
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(newTitle, title){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
      //this.parentNode.removeChild(this);
      
      
      //console.log(localStorage.getItem("note"+i));
      //localStorage.removeItem("note"+i);
      
      /*for ( var i = 0, len = localStorage.length; i < len; ++i ) {
          console.log( localStorage.key( i ) );
      }*/
      console.log("title "+newTitle);
      
      for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        console.log("key "+localStorage[key]+" value "+value);
        if(value === newTitle){
            console.log(key + " => " + value);
            localStorage.removeItem(key);
            row.splice(i, 1);
            console.log("i value "+i);
            localStorage.clear();
            for(let i = 0; i<row.length; i++){
                localStorage.setItem(i, row[i]);
                console.log("Saving "+localStorage.getItem(i)+" on "+i);
            }
        }
      }
      this.parentNode.parentNode.removeChild(this.parentNode);
            
      
      
  } 
}

class App {
  constructor() {
    
    // clicking the button should work
    // pressing the enter key should also work
    this.loadNotesFromStorage();
    this.btnAdd = document.getElementById("btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this) );
    this.btnAdd.addEventListener("click", this.reset.bind(this) );
    
    window.addEventListener("keydown", function(){
        if(window.event.keyCode=='13'){
            btnAdd.click();
        }
    });
      
    for(let i = 0; i< localStorage.length; i++){
          console.log("Found "+localStorage.getItem(i)+" on "+i);
        
    }
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
      let divNotes = document.querySelector(".notes");
      for(let i = 0; i< localStorage.length; i++){
          let thatNote = localStorage.getItem(i);
          if(thatNote !== null){
              //row.push(thatNote);
              console.log(thatNote+" found");
              let m1 = new Note(thatNote);
              
          }
      }
      
      
      
      console.log("Storage length "+localStorage.length);
      
              
   
      
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
      document.getElementById("form").reset();
  }
  
}

let app = new App();

//localStorage.clear();
