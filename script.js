// if the user adds a note, add it to the local storage

shownotes(); //localstorage.clear() use before

let addbtn = document.getElementById('addbtn');

addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtxt.value);

    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notesobj);

    shownotes();


});


//function to show  elements to local storage
function shownotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (i, index) {

        html += `
    <div class="notecard card my-2 mx-2" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${i}</p>
            <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">delete Notes</button>
        </div>

    </div>`;
    });

    let noteselement = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselement.innerHTML = html;
    }
    else {
        noteselement.innerHTML = "add a note please";
    }
}


//funtion to delete notes

function deletenote(index){
    // console.log("i am deleeeted" , index);

    let notes  = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }

    notesobj.splice("index",1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

// *****************************search the text **********************************
let search = document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    // console.log("input event fired",inputval);

    let notecards = document.getElementsByClassName("notecard");

    Array.from(notecards).forEach(function(element){
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtext);

        if(cardtext.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})