

// Formal fullname 



let firstName =" Benjamin"; 
 let surName = " Hughes"; 
 let gender= "male"; 
 let useFormalName = true ; 

  function  getFullname (firstName , surName , useFormalName, gender){

    if (useFormalName === true && gender === "male" ){
        return `lord  ${firstName} + ${surName}`;
    }
     else if ( useFormalName === true && gender !== "male"){
       return ` Mis ${firstName } ${surName}`;
      
     }
     else if (useFormalName !== true){
       return `invalid entry `; 
     }
     else {
       return( "try again "); 
     }
  }
  console.log(getFullname(firstName, surName, true, true));
   