const show=document.getElementById("show");

function appendInput(input){
    show.value+=input;
}

function clearScreen(){
    show.value="";
}

function cal(){
    try{
        show.value=eval(show.value);
    }
    catch(error){
        show.value="Invalid"
    }
}