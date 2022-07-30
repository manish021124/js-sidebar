let list = document.getElementById('list');

document.getElementById('btn').addEventListener("click", show);
document.getElementById('btn1').addEventListener("click", unshow);


function show(){
    list.style.visibility = "visible";
}

function unshow(){
    list.style.visibility = "hidden";
}


