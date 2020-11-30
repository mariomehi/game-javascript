//tuonome=window.prompt("Come ti chiami?","");
//window.alert("Benvenuto " + tuonome + " \nUsa le Frecce della tua tastiera per giocare!");

var y=document.documentElement.clientHeight;
var x=document.documentElement.clientWidth;
console.log("Max height: " + y + " max width: " + x);

const Keys = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
};

const directions = new Map([
  [Keys.LEFT,  { axis: "x", delta: -10 }],
  [Keys.RIGHT, { axis: "x", delta:  10 }],
  [Keys.UP,    { axis: "y", delta: -10 }],
  [Keys.DOWN,  { axis: "y", delta:  10 }],
]);

let bird = document.getElementById("bird");
let gnat = document.getElementById("gnat");
let stategnat = {
  x: 300,
  y: 300,
  direction: Keys.RIGHT,
};
let playground = document.getElementById("playground");

let state = {
  x: 200,
  y: 200,
  direction: Keys.RIGHT,
};

document.addEventListener("keydown", function(event) {
  // if different from 37,38,39,40 return
  if (!directions.has(event.keyCode)) return;

  let move = directions.get(event.keyCode);
  state[move.axis] += move.delta;
  state[move.direction] = event.keyCode;

  render(bird);
});

render(bird);
rendergnat(gnat);

function rendergnat() {
//document.getElementById("gnat").style.transform= `translate(${stategnat.x}px, ${stategnat.y}px)`;
document.getElementById("gnat").style.transform= `translate(300px, 300px)`;
}

function render() {
  let translation = `translate(${state.x}px, ${state.y}px)`;
  bird.style.transform = `${translation}`;
  
// AGGIUNTA
let translationn = `translate(100px, 100px)`;
let positx=`${state.x}`;

if ( ((`${state.x}`) > x-100) || ((`${state.x}`) < 0) || ((`${state.y}`) > y-100) || ((`${state.y}`) < 0) ) {
        window.alert("Bang!");
        let randb = Math.floor((Math.random() * x) + 1);
        document.getElementById("bird").style.transform = `translate(${randb}px, ${randb}px)`;

} else {

let gnatx=`${stategnat.x}`;
let gnaty=`${stategnat.y}`;
//gnatx=eval(gnatx)+100;
//console.log("Gnat " + gnatx);

if ( (((`${state.x}`) > eval(gnatx)-100) && ((`${state.x}`) < eval(gnatx)+100))  && (((`${state.y}`) > eval(gnaty)-100) && ((`${state.y}`) < eval(gnaty)+100)) ) 
  {
    window.alert("Perso!");
    
    let randX = Math.floor((Math.random() * x) + 1);
    let randY = Math.floor((Math.random() * y) + 1);
    console.log(randX);
    console.log(randY);
    //document.getElementById("gnat").style.top = randY + "px";
    //document.getElementById("gnat").style.right = randX + "px";

document.getElementById("gnat").style.transform = `translate(${randX}px, ${randY}px)`;
  }

}
  console.log("Bird " + translation);
}