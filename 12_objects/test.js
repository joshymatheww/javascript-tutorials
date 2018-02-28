// var myCar = {
//   maxSpeed:100,
//   driver : "Sujo Mol",
//   drive : function () {
//       document.write('My driver: '+this.driver);
//   }
// };

//Constructor functions

var Car = function (maxSpeed,driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.getDriver = function () {
    document.write('My driver: ' + this.driver + " can driver upto " + this.maxSpeed + " km/h");
  }
}

var myCar = new Car(70,"Joshy");
myCar.getDriver();
