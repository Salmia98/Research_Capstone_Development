initialize();
// call initialize
function initialize(){
    var wholeContainer = document.getElementById("id_whole_container");
    wholeContainer.style.display = "none";
    console.log("hide");
}
// hide and show Manage account button
function onClickManageAccount(){
    var wholeContainer = document.getElementById("id_whole_container");
    if (wholeContainer.style.display == "flex"){
        wholeContainer.style.display = "none";
    }else {
        wholeContainer.style.display = "flex";
    }
    
    console.log("manage click");

}



// let hour = 20;

// if (hour >= 6 && hour < 12) 
//   console.log('Good morning');
  
// else if (hour >= 12 && hour < 18) 
//   console.log('Good afternoon');
  
// else
// console.log('Good evening');