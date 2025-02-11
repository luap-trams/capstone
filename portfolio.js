
function darkTheme() {
    const dark = document.getElementById('main-sec');
     dark.style.backgroundColor = "black";
     dark.style.color = "white";
     
     return dark;
 }

 function lightTheme() {
     const white = document.getElementById('main-sec');
     white.style.backgroundColor = "white";
     white.style.color = "black"

     return white;
     
 }


 // function themeToggle() {
 //     const toggle = document.getElementById('main-body');
 //     const dark = document.getElementById('dark')
 //     const light = document.getElementById('light')

 //     if (toggle.style.visibility === 'hidden') 
 //         {
 //         toggle.style.visibility = 'visible';
 //         light.innerHTML = '-';
 //         }
 //     else 
 //         {toggle.style.visibility = 'hidden';
 //         dark.innerHTML = '+';
 //         }
 // }


function totalBuy(){
    let qty= document.getElementById('qty');
    let buy = document.getElementById('buy');
    let tBuyValue = (qty.value) * (buy.value);

    let tBuyTotal = document.getElementById('tBuy');
    tBuyTotal.innerText = tBuyValue;
    
    return tBuyValue
}



function totalSell(){

    let qty= document.getElementById('qty');
    let sell = document.getElementById('sell');
    let tSellValue = (qty.value) * (sell.value);

    let tSellTotal = document.getElementById('tSell');
    tSellTotal.innerText = tSellValue;
   
    return tSellValue

}

function commissionBuy(){
    const comms  = 0.01 * totalBuy() ;
   
    
    let cDisplay = document.getElementById('tCommsBuy');
    cDisplay.innerText = comms;

return comms;
}

function commissionSell(){
    const comms = 0.01 * totalSell() ;
    
    let cDisplay = document.getElementById('tCommsSell');
    cDisplay.innerText = comms;


return comms;
}

function totalComms(){
    const finalComms =  commissionBuy() + commissionSell();
    
    let overAll = document.getElementById('overall');
    overAll.innerText = finalComms;


    return finalComms;
}

function gainedReturns(){
    const sale = totalSell() 
    const buy = totalBuy() 
    const commission = totalComms() 
    const gains = sale - buy - commission;

    let profit = document.getElementById('profit');
    profit.innerText = gains;

    return gains;

}

function roiNaira(){
    const nairaExchange = 1650;
    const $equivalent = gainedReturns();
    const naira = nairaExchange * $equivalent;

    let amount = document.getElementById('profit-naira');
    amount.innerText = naira;
  
    return naira
}
function upperCase(){


}