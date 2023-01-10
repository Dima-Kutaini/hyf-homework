
// Save a note:

const notes = [];

function saveNote(content, id) {
notes.push({content,id});

  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// Get a note:

function getNote(id) {
  for(let i=0; i<= notes.length; i++){
    if( notes[i].id=== id  || typeof id === "number"){
      return notes[i]; 
    }
        
else return` an error string!`;
  }
 

}

const firstNote = getNote(1);
console.log(firstNote);


// Log out notes:

function logOutNotesFormatted() {
  for( const i in notes){
    console.log(`he note with id:${notes[i].id}, has  the following note text: ${notes[i].content}}` ); 

  }
 
  
}

logOutNotesFormatted(1);

// Unique feature: 
//function Notes( arr ,date){
  //const objDateIndex=arr.findIndex(obj)=> obj.date=== date;

//}

