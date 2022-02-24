
let screen = document.getElementById('screen');
//if a button is clicked, then here we are taking all the elements which are clicked
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    // on clicking, we are writing an arrow function
    item.addEventListener('click', (e)=>{
        //inner text is taking in the text
        buttonText = e.target.innerText;
        //just checking whether it is working or not on console
        console.log('Button text is' , buttonText);
        //logic
        //multiply
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}