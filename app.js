const resultElement = document.getElementById("result");
const input1 = document.getElementById("input_1");
const input2 = document.getElementById("input_2");
const submit = document.getElementById("calc");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
const resetBtn = document.getElementById("reset");
let action = "+";

plusBtn.onclick = function(){
     action = "+";
}

minusBtn.onclick = function(){
   action = "-";
}

mulBtn.onclick = function(){
    action = "*";
 }

 divBtn.onclick = function(){
    action = "/";
 }
 
function obrahunok(element1 , element2, symbol){
    const num1= Number(element1.value);
    const num2= Number(element2.value);
    if(symbol === "+"){
      return num1 + num2;
    }
    else if(symbol === "-"){
        return num1-num2;
    }
    else if(symbol === "/"){
        return num1/num2;
    }
    else if(symbol === "*"){
        return num1*num2;
    }



}
submit.onclick = function(){
   if(action === "+"){
    const res = obrahunok(input1, input2  , action)
    resultElement.textContent = res;
   }
   else if(action === "-"){
    res = obrahunok(input1, input2  , action)
    resultElement.textContent = res;
   }
   else if(action === "/"){
    res = obrahunok(input1, input2  , action)
    resultElement.textContent = res;
   }
   else if(action === "*"){
     res = obrahunok(input1, input2  , action)
    resultElement.textContent = res;
   }
}

resetBtn.onclick = function(){
    input1.value = "";
    input2.value = "";
    resultElement.textContent = "";

}

