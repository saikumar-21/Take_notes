console.log('working!');
showNote();

let addbtn = document.getElementById('addbtn');


// Event to add a note to the storage

addbtn.addEventListener('click', function () {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log('fired');
    showNote();
});


// Event to Show/display the note!
function showNote() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="cardname mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text" >${element}</p>
                    <Button id = "${index}" Onclick = "deleteNote(this.id)"class="btn btn-primary">Delete Note</Button>
                </div>
            </div>`;
    })
    let notesElm = document.getElementById('notes');
    console.log(notesElm);
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `NO Item in your note!`;
    }

}

// Event to Delete a note and update local storage !
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNote();
}

// Event to sort through searchbar

let search = document.getElementById('search')
search.addEventListener("input", function () {
    let inputVal = search.value;
    // console.log(inputVal);
    let cardtxt = document.getElementsByClassName('cardname');
    Array.from(cardtxt).forEach(function (element) {
        let cardElm = element.getElementsByTagName("p")[0].innerHTML;
        if (cardElm.includes(inputVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
        console.log(cardElm);
    })
})

