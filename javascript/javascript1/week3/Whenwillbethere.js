
// When will be there . 
// Time = distance/ speed


  const travelInformation ={
    speed: 50,  
     distinationDistance : 432, // km
     

  }

   function travelTimeCalcu(myTime){
   let time = myTime.distinationDistance / myTime.speed;
   let hours= Math.floor(time);
   let minutes= (time - hours)* 60; 
   return ` Time is ${hours} hours and  ${minutes} minutes`;

}
 const travelTime= travelTimeCalcu(travelInformation);
 console.log(travelTime);  // 8 hours and 38 minutes 



