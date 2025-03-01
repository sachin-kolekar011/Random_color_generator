






let btn = document.getElementById('generate') ;

btn.addEventListener('click',change_color) ;

function change_color()
{
    let h2 = document.getElementById('head') ;
    let clr = getRandomColor() ;
    h2.style.color = clr ;
    h2.innerText= clr ;
    let box = document.querySelector('.color_box') ;
    box.style.backgroundColor=  clr;
    
}


function getRandomColor()
{
    let red = Math.floor(Math.random() * 255 );
    let green = Math.floor(Math.random()* 255)  ;
    let blue = Math.floor(Math.random() * 255) ;

    let color = `rgb(${red},${green},${blue})` ;
    return color ;
}




let dark_mode = document.querySelector('#dark-mode');

dark_mode.addEventListener('click', dOrWMode);

function dOrWMode() {
    let divM = document.querySelector('.centerd_div');
    if (divM.style.backgroundColor === 'black') {
        divM.style.backgroundColor = 'white';
        divM.style.color = 'black'; // Change text color back to black
    } else {
        divM.style.backgroundColor = 'black';
        divM.style.color = 'white'; // Change text color to white
    }
}

let btns = document.querySelectorAll('button') ;

 for (let btn of btns)  {
    btn.addEventListener('mouseenter' , colorRed);
    btn.addEventListener('mouseleave' , colorDefault);
 }


function colorRed(event)
{
    event.target.style.backgroundColor='red' ;
}
function colorDefault(event) {
    event.target.style.backgroundColor = ''; // Set it back to default
}