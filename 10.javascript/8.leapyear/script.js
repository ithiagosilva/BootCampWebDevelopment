function isLeap(year) {
    if (year % 100 != 0 && year % 4 == 0) {
        return `${year} is a leap year.`;
    }
    if (year % 100 != 0 && year % 400 == 0){
        return `${year} is a leap year.`;
    }
     else {
        return `${year} is not a leap year`;
    }
}

console.log(isLeap(2024));