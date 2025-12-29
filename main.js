let cart2Icon = document.querySelector("#cart2-icon");
let cart2 = document.querySelector("#cart2");
let closeCart2 = document.querySelector("#close-cart2");
//Open cart2
cart2Icon.onclick = () =>{
    cart2.classList.add("active");
};
//Close cart2
cart2Icon.onclick = () =>{
    cart2.classList.add("active");
};


//Cart2 Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}


//Making function

function_ready(){

    //reomve Items Form.Cart2
    var reomveCart2Buttons = document.getElementsByClassName('Cart2-remove')
    console.log(reomveCart2Buttons)
    for (var i = 0; i <reomveCart2Buttons.length; i++){
        var button = reomveCart2Buttons[i]
        button.addEventListener('click', removeCart2Item)
    }
}

//reomve Items Form.Cart2
function removeCart2Item(event){
    var buttonClicked = event.target
    ButtonClicked.parentElement.remove();
}