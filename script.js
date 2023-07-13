const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className ="input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "delete-button-6030454_1280.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG") {
      e.target.parentElement.remove();
    upadteStorage();
    
  }
  else if(e.target.tagName === "P") {
    notes = doncument.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateStorage();
      }
    })
  }
})



function toggleNav() {
  const navMenu = document.querySelector(".nav-menu");
  const navList = document.querySelector(".nav-menu ul");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
    navList.style.display = "none";
  } else {
    navMenu.style.display = "block";
    navList.style.display = "block";
  }
}
