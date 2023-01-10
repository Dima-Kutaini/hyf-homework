
// Vioce Assistant: 


 const toDo=[]; 
 let name; 
 
 function getReply(command){

let words = command.split(' '); 
//console.log(words); 
 
   if( command.startsWith('Hello my name is' ) || command.startsWith('Hi i am')){
      
         const lastWord= words.pop(''); 
         const  name= lastWord ;
          
         if( name == 'Benjamin'){
         
         return'Nice to meet you'+' '+ name; 

      }
         if(name!=='Benjamin'){
         return 'Nice to meet you' +' '+ name; 
         
      }
        if (name == '' || name == undefined){
       return 'What is your name?';

    }
      }
   
 //todo list: 

    if (command.startsWith('add') && command.includes(' to my todo')){
          const task= words.slice( 1 , words.length - 3).join(' ');
          toDo.push( task) ; 
          return task + 'is added to my todo';  
         }
         
        else if ( command.startsWith('remove')&& command.includes('from my todo')){
            const removeItem = toDo.slice( toDo[0] , 1); 
            return removeItem + 'is  removed from my todo'; 

        }
      

      // date: 

      if( command.startsWith('what') && command.includes('today?')){

         const today = new Date();
         const  day = today.getDate();
          const month = today.toLocaleString('en', {month:'long',}); 
           const Year = today.getFullYear();
           return 'today is '+ day +'. of ' + month +' '+  Year;
       }
      

       //math : 
       if (command.startsWith('what is ') && command.includes('+') || command.includes('-') || 
           command.includes('*') ||command.includes('/')){
               
         if ( command.includes('+')){

               return parseInt(words[2]) + parseInt(words[4]);
         }
         
         if ( command.includes('-')){

            return parseInt(words[2]) - parseInt(words[4]);
      }
      
      if ( command.includes('*')){

         return parseInt(words[2]) * parseInt(words[4]);
   }
   
   if ( command.includes('/')){

      return parseInt(words[2]) / parseInt(words[4]);
}
           }



       // timer: 
       if( command.startsWith('set')&& command.includes('a timer for')){

       let minutes= words[words.length - 2];
       let seconds= minutes * 60* 1000; 
      
       function setTimer(minutes){

      console.log( 'timer is set for ' + minutes+' '+ 'minutes'); 
      
       }
     setTimer(4); 
       
     function setTimeout(seconds){
      if(seconds === 0 ){
         console.log('Time is over'); 
      }
     }
     setTimeout(0); 

       
}
 }
 console.log(getReply('Hello my name is Benjamin'));
 console.log(getReply('Hi i am  Ahmad'));
console.log(getReply('add fishing  to my todo'));
console.log(getReply('add singing  to my todo'));
console.log(getReply('add dancing to my todo'));
console.log(toDo);
console.log(getReply('remove fishing from my todo'));
console.log(getReply('what is today?'));
console.log(getReply('what is 3 + 4'));
console.log(getReply('what is 50 - 30'));
console.log(getReply('what is 13 * 10'));
console.log(getReply('what is 60 / 12'));
console.log(getReply('set a timer for 4 minutes')); 