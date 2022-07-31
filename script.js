let list = document.getElementById('list');

document.getElementById('btn').addEventListener("click", show);
document.getElementById('btn').addEventListener("click", anime);
document.getElementById('btn1').addEventListener("click", reverseAnime);

function show(){
    list.style.visibility = "visible";
}

function anime(){
    let pos = -480;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 0){
            clearInterval(id);
        }else{
            pos++;
            list.style.left = pos + "px";
        }
    }
}

function reverseAnime(){
    let pos = 0;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == (-480)){
            clearInterval(id);
        }else{
            pos--;
            list.style.left = pos + "px";
        }
    }
}