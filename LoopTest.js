var ethanAgeYears =15;
var dadAgeYears = 45;
var ethanAgeDays = ethanAgeYears*365; //Ethan age in years multiplied by 365 days
var dadAgeDays = dadAgeYears*365;

 // Here's a clue: var ethanAgeHours = ethanAgeDays*24;
 // Here's a clue: var dadAgeHours = dadAgeDays*24;

for (vDate=2018; vDate < 2060; vDate++) { 

                ethanAgeYears ++;

                dadAgeYears ++;

                ethanAgeDays+=365; //Increment by 365 days

                dadAgeDays+=365;

                //  Here's another Clue What do you need to increment ethanAgeHours by?

                //  Here's another Clue What do yo uneed to increment dadAgeHours by?

                outputEthan = "When the year is: " + vDate + " Ethan will be " + ethanAgeYears + " Years old " +  "Or " + ethanAgeDays + " Days old";

               //  Your last clue what do you need to add to outputEthan to give the number of hours?

                outputDad = "When the year is: " + vDate + " Dad will be " + dadAgeYears + " Years old " +  "Or " + dadAgeDays + " Days old";

               //  Your last clue what do you need to add to outputDad to give the number of hours?

                console.log (outputEthan);

                console.log (outputDad);

}