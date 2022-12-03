// Student manager 


const class07Students = [];
function addStudentToClass(studentName) {
     const queen = "denmarkQueen"; 
    if ( class07Students.length > 6){
        return " Connot add more students to class 07";

    }
    // use Arry.includes  to find if the array contains the given value 
    else if ( class07Students.includes(studentName)=== true ){
        return " Student is alraedy in the class"; 
    }
     else if ( studentName === queen && class07Students.length === 6){
         console.log( class07Students.push(queen)); 

     }
     else if ( studentName === "" ){
        return " You connot add an empty string to a class"; 
     }
     else {class07Students.push(studentName); 
        return " well done";
    }
    
  
}


function getNumberOfStudents(index) {
     console.log( index.length);
     

}

   // add  to the array
   addStudentToClass(" Amy");
   addStudentToClass("Dima");
   addStudentToClass("jan");
   addStudentToClass("Dima");
   addStudentToClass("sam");
   addStudentToClass("dani");
   addStudentToClass("emil");
   addStudentToClass("sami");
   addStudentToClass("queen");

   getNumberOfStudents(class07Students);

    