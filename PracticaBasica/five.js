let meatBeefValue = 9000;
let meatPigValue = 8000;
let amountMeatBeefBoy = 9;
let amountMeatPigBoy = 9;
let amountMeatBeefGirl = 10;
let amountMeatPigGirl = 10;
let nameBoy = 'Juan';
let nameGirl = 'Victoria';
let totalBoy = (meatBeefValue * amountMeatBeefBoy)+ (meatPigValue*amountMeatPigBoy);
let totalGirl =(meatBeefValue * amountMeatBeefGirl) + (meatPigValue * amountMeatPigGirl);
if (totalBoy > totalGirl) {
  console.log(nameBoy,'compro:', totalBoy,'en carne de res y cerdo,', nameGirl,'compro:', totalGirl,'en carne de res y cerdo. el que mas carne compro fue: ',nameBoy);
} else {
    console.log(nameBoy,'compro:', totalBoy,'en carne de res y cerdo,', nameGirl,'compro:', totalGirl,'en carne de res y cerdo. el que mas carne compro fue: ',nameGirl);
}