const notesContainer = document.querySelector(".container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();  // Update storage when a new note is created
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        // console.log(e.target.tagName);
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })

    }
})
// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG" && e.target.classList.contains("delete-btn")) {
//         e.target.parentElement.remove();
//         updateStorage();
//     }
// });

// notesContainer.addEventListener("keyup", function (e) {
//     if (e.target.className.contains("input-box")) {
//         // notes = document.querySelectorAll(".input-box");
//         updateStorage();
//     }
// });

// Load notes from localStorage when the page is loaded

