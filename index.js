let screen = document.getElementById("inp");
buttons = document.querySelectorAll("button");
var screentext ="";
ans = document.getElementById("ans");


for(btn of buttons){
    btn.addEventListener("click",(event)=>{
        let buttonText = event.target.innerHTML;
        
        if(buttonText == "x"){
            buttonText = "*";
            screentext += buttonText;
            screen.value = screentext;
        }
        else if(buttonText == "Clear"){
            screen.value = "";
            screentext = "";
        }
        else if(buttonText == "÷"){
            buttonText = "/"
            screentext += buttonText;
            screen.value = screentext;
        }
        else if(buttonText == "^"){
            buttonText = "**"
            screentext += buttonText;
            screen.value = screentext;
        }
        else if(buttonText == "="){
            if (screen.value == "Error"){
                screen.value = "Error";
            }
            else{
                try {
                    answer = eval(screen.value);
                    screen.value = answer;
                    screentext =answer;
                    ans.value = answer;
                }
                catch(err) {
                    screen.value = "Error";
                    screentext ="";
                }
            }
        }
        else{
            screentext += buttonText;
            screen.value = screentext;
        }
    })
}