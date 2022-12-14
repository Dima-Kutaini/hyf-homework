// Adding an activity


 const activities=[]; 
function addActivity( date, activity, duration){
    
    activities.push({date, activity, duration});
 return activities;
}
addActivity("23/7-18", "YouTube",30);
addActivity("24/7-18","Facebook", 40);
addActivity("15/7-18", "twitter", 25); 
addActivity("15/7-18" , "Instegram", 18); 
console.log(activities); 

// Show my status: 

function showStatus(activities){
    let total=0; 
      for(let i = 0; i<= activities.length; i++){
        total += activities[i].duration; 
        if(! i === ""){

            console.log(` you hav added 4 activities ${activities[i].activity}. They amount to ${total} min.of usage`);

        }
 else return `Add some activities before calling showStatus`; 
      }
     
}
console.log(showStatus(activities)); 


// Usage limit: 
 //function 

 function usageLimit(storageLimit){
    if( storageLimit==="number" && storageLimit<= showStatus(activities)){
      return (` you should stope usinge mobile!`)
    }
  
 else {
 return(`youe have more time to use your mobil`)
 }
}
console.log(usageLimit(50)); 

 