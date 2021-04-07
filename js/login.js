const inputs = document.querySelectorAll('.input');

inputs.forEach( input =>{
    input.addEventListener("focus", addFocus);
    input.addEventListener("blur", removeFocus);
});


function addFocus() {
    //
    let parent = this.parentNode.parentNode; // fields.focus
    parent.classList.add('focus');

}

function removeFocus () {
    //
    let parent = this.parentNode.parentNode; //fields
    if(this.value == "") {
        parent.classList.remove('focus');
    } // end of if

}

