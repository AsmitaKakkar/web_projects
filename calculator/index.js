let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;

        console.log("Button Text = ",buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText
            screen.value=screenValue;
        }
        /*if(buttonText=='sin')
        {
            let x=screenValue;
            screenValue=Math.sin(x);
            screenValue=eval(screenValue);
        }*/
        /*if(buttonText=='cos')
        {
            let x=screenValue;
            screenValue=Math.cos(x);
            screenValue=eval(screenValue);
        }
        if(buttonText=='tan')
        {
            let x=screenValue;
            screenValue=Math.tan(x);
            screenValue=eval(screenValue);
        }*/
        /*if(buttonText=='sqrt')
        {
            let x=screenValue;
            screenValue=Math.sqrt(x);
            screenValue=eval(screenValue);
        }*/
        else if(buttonText=='AC')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText
            screen.value=screenValue;
        }
    })
   
}