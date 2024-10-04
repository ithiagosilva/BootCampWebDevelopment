//OBJECTS =============================================
// var houseKeeper1 = {
//     nome: "Med",
//     yearsOfExp: 10,
//     goodAtCleaning: ["Bathrooms", "Kitchen"]
// }
// console.log(houseKeeper1.nome);

//CONSTRUCTOR FUNCTION (Like a factory) ============================================
function HouseKeeper (name, yearsOfExp, goodAtCleaning){
    this.name = name;
    this.yearsOfExp = yearsOfExp;
    this.goodAtCleaning = goodAtCleaning;
    this.clean = function (){
        alert("Cleaning in progress...");
    } 
}

var houseKeeper1 = new HouseKeeper("Jane", 5, ["Bathroom", "Living Room"]);