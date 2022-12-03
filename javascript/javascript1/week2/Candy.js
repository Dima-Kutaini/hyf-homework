// Candy helper optional 


const boughtCandyPrice = []; 
function addCandy( candyType , weight){
   
   let firstType ="Sweet";
   let  secondType ="Chocolate";
   let thirdType ="Toffee";
   let fourthType = "Chewing-gum";
    let price = 0; 
    //const amountToSpend = Math.random() * 100; 

    if ( firstType === "Sweet"){
         price  = weight * 0.5;
         console.log(boughtCandyPrice.push(price)); 
    }
    else if ( secondType === "Chocolate"){
           price = weight * 0.7;

        console.log( boughtCandyPrice.push(price));
    }

    else if ( thirdType === "Toffee"){
          price= weight * 1.1;

        console.log( boughtCandyPrice.push(price));
    }
    else if ( fourthType === "Chewing-gum"){
      price= weight * 0.03;

        console.log(boughtCandyPrice.push(price));
    }
    else {
        console.log("wrong enter"); 
    }

}

addCandy("Sweet", 30);
addCandy("Toffee" ,40);
addCandy("candy", 200); 
console.log(boughtCandyPrice);



// Can i buy more? 

  const amountToSpend = Math.random() * 100; 
  function canBuyMoreCandy(){
    let total=0; 
    let i=0; 
    while( i < boughtCandyPrice.length){
      i++; 
      total += boughtCandyPrice[i];
        i++;

    }
if ( total < amountToSpend){
  console.log ("you can buy more candy , if you want that"); 
}
else{ 
  console.log (" that is too much!  Enough candy for you!")

}

}

console.log (addCandy("Sweet", 500));

canBuyMoreCandy(); 


