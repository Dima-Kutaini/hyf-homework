 
 // Start up generator :)
 
 const firstWords =["foxface","dylanf", "eylash", "moreman", "doll", "looney", "erak", "unicrain", "fairy", "neo"];
 const secondWords = ["lily","jarno", "easy", "awesome", "corporate", "foobey", "twilixo", "teenpulp", "voolzie", "lyzoo"];
 const randomNumber = Math.floor(Math.random() * 10);
 
    let startupName = firstWords[randomNumber] + secondWords[randomNumber];
    let length = startupName.length;
    
       console.log("The startup name is " + "\'" + startupName + "\'" +"  with " + length + " characters :).");