let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613 // bisa menggunakan Date.now()
  }
]

const createNote = (head, desc, nama) => {
  // kode kalian
  const tempNote = {...notes[0]}
  tempNote.id = notes.length + 1
  tempNote.heading = head
  tempNote.description = desc
  tempNote.created_by = nama
  tempNote.created_at = Date.now()
  notes.push(tempNote)
}

const readNote = () => {
  // kode kalian
  return console.log(JSON.stringify(notes))
}

const updateNote = (idIn, head, desc, nama) => {
  // kode kalian
  let i = idIn-1
  notes[i].id == idIn
  notes[i].heading = head
  notes[i].description = desc
  notes[i].created_by = nama
}

const deleteNote = (idIn) => {
  // kode kalian
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1)
readNote()
