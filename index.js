let floor = 1
let destination = Math.floor(Math.random() * (21 - 1 + 1)) + 1
let direction = 1

function randomFloor() {
  elevatorInterval = setInterval(elevatorGoes, 1500);
  setTimeout(elevatorInterval, 5000);
  // TODO create special function and resolve hight loading on the page
  let tmp=Math.floor(Math.random() * (21 - 1 + 1)) + 1;
    while(tmp==floor)
    {
        tmp=Math.floor(Math.random() * (21 - 1 + 1)) + 1
    }
    destination=tmp;
  console.log("Лифт вызван на этаж " + destination + ".");
  if (destination < floor) {
    direction = 0;
  } else {
    direction = 1;
  }
}
// TODO fix circle dependency
function elevatorGoes() {
  if (direction == 1) {
    floor++;
  } else {
    floor--;
  }
  console.log("Лифт едет на " + floor + " этаже.");
  if (floor == destination) {
    console.log("Лифт остановился на " + destination + " этаже.");
    setTimeout(randomFloor, 5000);
    clearInterval(elevatorInterval);
  }
}
// TODO fix circle dependency
let elevatorInterval = setInterval(elevatorGoes, 1500);

// Start elevator function on button
function startingElevatorIntervals(){
  return alert(true)
}
// Stop WORD
function stopElevatorIntervals(){

}