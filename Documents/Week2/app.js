var firstname =prompt("What is your First name?");

var calc =prompt("Do you want to conver Celcius=C to Farenheit=F?");

// The choices

if (calc =="C") {
    
    var celcius =prompt("What is the Tempature outside in Celcius");

    var temp1 = ((celcius * 9) / 5) + 32;

    console.log (`${firstname}, ${celcius} C is ${temp1} F`);

} else if (calc == "F") {
    var farenheit =prompt("What is the Tempature outside in Farenheit");

    var temp1 = (((farenheit -32) *5) /9 );

    console.log (`${firstname}, ${farenheit} F is ${temp1} C`);
} else {
    console.log(`${firstname}, You did not pick C or F`); 
}


