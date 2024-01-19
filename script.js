const button=document.querySelector("#btn");
const notesContainer=document.querySelector(".notes-container");
let notes=document.querySelectorAll(".input-box");


button.addEventListener("click",()=>{
   let paragraphElement=document.createElement("p");
   let image=document.createElement("img");
   image.src="images/delete.png";
   paragraphElement.className="input-box";
   paragraphElement.setAttribute("contenteditable","true");
   notesContainer.appendChild(paragraphElement).appendChild(image);
   updateNotes();
});

notesContainer.addEventListener("click",function(e){
   if(e.target.tagName==="IMG")
   {
    e.target.parentElement.remove();
    updateNotes();
   }
   else if(e.target.tagName==="P")
   {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note=>{
        note.onkeyup=function(){
           updateNotes();
        }
    })
   }
});
function updateNotes(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();