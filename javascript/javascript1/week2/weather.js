 // weather wear
 // Based on the teperature it should return what user should wear  

  function Weather(temperature){


     if (temperature <=  7 ){
        return "It is cold and You shoul wear a winter jacket.";
     }
     else if (temperature > 7  && temperature <= 22  ){
        return "you should to wear  light to medium coat or alightwieght knit vests."; 
        
     }
     else if ( temperature <22 && temperature <= 40 ){
        return " Ihe weater is nice tody and you should wear shorts.";
     }
     else if ( temperature > 40 ){
        return "it is too hot and we advice you to go to the beach or stay at home.";
     }

     else  return " wrong enter !"; 

  };
     let  clothesToWear = Weather(10); 
      console.log(clothesToWear);
      
   
 