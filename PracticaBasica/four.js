let yearCurrent = 2022;
let yearBirth = 2007;
let age = yearCurrent - yearBirth;
if (age >= 18) {
  console.log('Es mayor de edad');
} else {
  let ageMissing = 18 - age;
  console.log('Es menor de edad, para ser mayor de edad le faltan', ageMissing,'años');
}