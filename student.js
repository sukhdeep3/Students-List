let roll = $('#roll');
let names = $('#name');
let marks = $('#marks');
let list = $('#list');
let rollValue;
let nameValue ;
let marksValue ;


let array = [];

function showNotification(text){
    alert(text);
}

function addToDOM(){
    let li = document.createElement('li');

    li.innerHTML =`
    Roll No: <span>${rollValue}</span>, <span>${nameValue}</span> has scored <span>${marksValue}</span> marks.`

    list.append(li);
}


$('#btn').click(function(){
     rollValue = roll.val();
     nameValue = names.val();
     marksValue = marks.val();
    
     if(!rollValue || !nameValue || !marksValue){
        showNotification("Complete all the fields");
        return;
     }

     addToDOM();

     roll.val('');
     names.val('');
     marks.val('');

})