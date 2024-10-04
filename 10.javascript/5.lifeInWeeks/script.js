function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        var yearsLeft = 90 - age
        var daysLeft = yearsLeft * 365;
        var weeksLeft = yearsLeft * 52;
        var monthsLeft = yearsLeft * 12;
        return `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
        
    /*************Don't change the code below**********/
    }
    
    console.log(lifeInWeeks(56));