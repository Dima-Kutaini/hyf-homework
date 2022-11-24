let dogYearOfBirth= 2017; 
let dogYearFuture = 2027;
 dogYear = dogYearFuture - dogYearOfBirth;
 console.log(dogYear);
  shouldShowResultInDogYears = dogYear * 7 ; 
  console.log(shouldShowResultInDogYears);

 if (shouldShowResultInDogYears == true){ 
    console.log("your dog will be" + shouldShowResultInDogYears + "dog years old in 2027");

 }
 else { 
    console.log("your dog will be" + dogYear + "human years old in 2027");
 }

 