var slideInterval = 3500;

function getFigures(){
    return document.getElementById("carousel").getElementsByTagName('figure');
}

function moveForward(){
    var figures = getFigures();
    var point;
    for(var i=0; i<figures.length; i++){
        if(figures[i].className == 'visible'){
            figures[i].className = '';
            point = i;
        }
    }
    if(++point == figures.length){
        point = 0;
    }
    figures[point].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback(){
    setTimeout(moveForward, slideInterval);
}

startPlayback();
