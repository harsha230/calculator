var buttons = document.getElementsByTagName("button");
const display = document.querySelector(".text-display");
var operand1=null;
var operand2=null;
var operator='';
for(const element of buttons){
  element.addEventListener('click',function(){
      var value=this.getAttribute('data-value');
      
      if(value=='AC'){
      
         display.innerText=0;
         buttons[0].innerText='AC';

      }
      else if(value=='change'){
          var text= display.innerText;
          display.innerText=-text;
      }
      else if(value=='%'){
           operator='%';
           if(display.innerText=='0')
            {
              alert('please enter a number');
            }
           operand1= display.innerText+operator;
           display.innerText='0';
           

      }
      else if(value=='/'){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
        operator='/';
        operand1= display.innerText+operator;
        display.innerText='0';
      }
      else if(value=='*'){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
        operator='*';
        operand1= display.innerText+operator;
        display.innerText='0';
      }
      else if(value=='-'){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
        operator='-';
        operand1= display.innerText+operator;
        display.innerText='0';
      }
      else if(value=='+'){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
        operator='+';
        operand1= display.innerText+operator;
        display.innerText='0';
      }
      else if(value=='='){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
          operand2=display.innerText;
          display.innerText=eval(operand1+operand2);
      }
      else if(value=='.'){
        if(display.innerText=='0')
        {
          alert('please enter a number');
        }
        display.innerText+=".";
      }
      else{
          if(display.innerText=='0')
              display.innerText='';
          display.innerText+=value;
          buttons[0].innerText='C';
      }


  })
}




