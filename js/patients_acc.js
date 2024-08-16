// get the date value
function onChangeDate(){
    var date = document.getElementById("id_date").value;
    console.log("date admitted value: " + date);
}

// create variable
var diseasesCont = document.getElementById('id_diseases_cont');

// create add function
function add(){
    var newTable = document.createElement('input');
    newTable.setAttribute('class','in-text');
    diseasesCont.appendChild(newTable);
    console.log("show me");
}

// remove table
function remove(){
    var input_tags = diseasesCont.getElementsByTagName('input');
    if(input_tags.length > 2) {
        diseasesCont.removeChild(input_tags[(input_tags.length) - 1]);
    }
}



