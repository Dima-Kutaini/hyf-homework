

// Event application 

function getEventWeekday(days) {

  const weekDays= [ "Sunday", "Monday", "Tuseday" , "wednasday" , "Thursday" , "Friday" , "Satutday"];
   
    let day = new Date(); //  This gets the current date // Sat.
  
    let today= weekDays[day.getDay()]
    let eventDay= day.getDay() + (days);
     let event="";
  
  if( eventDay < 7 ){
    event = weekDays[eventDay] ; 
  }
  else { event= weekDays[ (eventDay % 7)]

  } 
  return event;

 
}


 console.log( getEventWeekday(9));
 
