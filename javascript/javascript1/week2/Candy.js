// Candy helper optional 


const boughtCandyPrice = []; 
function addCandy( candyType , weight){
   
   let firstType =("Sweet", 20);
   let  secondType =("Chocolate", 30);
   let thirdType =("Toffee", 30);
   let fourthType = ("Chewing-gum", 50);
    let price = 0; 
    //const amountToSpend = Math.random() * 100; 

    if ( candyType === "Sweet"){
         price  = weight * 0.5;
         console.log(boughtCandyPrice.push(price)); 
    }
    else if ( candyType === "Chocolate"){
           price = weight * 0.7;

        console.log( boughtCandyPrice.push(price));
    }

    else if ( candyType === "Toffee"){
          price= weight * 1.1;

        console.log( boughtCandyPrice.push(price));
    }
    else if ( candyType === "Chewing-gum"){
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
 
    while( i=0, i < boughtCandyPrice.length, i++){
    
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


