 // Seies duration of my life. 

 const seriesDurations = [
    {
      title: "CSI",
      days: 6,
      hours: 18,
      minutes: 24,
    },
    {
      title: "brotherhood",
      days: 1,
      hours: 5,
      minutes: 0,
    },
    {
      title: "Halo",
      days: 1,
      hours: 14,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText() {
    
     let age = 80; 
     let ageToMinutes= 80 * 365 * 24 * 60;

     let totalDuration= 0; 
     for ( let i = 0; i < seriesDurations.length ; i++) {

       let  minutesOfDays = seriesDurations[i].days * 24 * 60; 
       let hoursToMinutes= seriesDurations[i].hours *60;
     let fullMinutes= minutesOfDays + hoursToMinutes + seriesDurations[i].minutes; 
      let  procentageOfAvrage = ( fullMinutes / ageToMinutes) * 100;
          
       totalDuration += procentageOfAvrage;

      console.log(`${seriesDurations[i].title} took ${procentageOfAvrage} % of my life`);
     
        
    };
    return ` In total that is ${totalDuration} % of my life`;
}
      console.log (logOutSeriesText());
