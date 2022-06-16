let h1 = document.querySelector(".h1");
let box = document.getElementById("box");
let krug = document.querySelector(".krug");
let icon = document.querySelector("nav i")


box.addEventListener("click", light);
// icon.addEventListener("click", dev)

function light (){
  document.body.classList.toggle("light")
  box.classList.toggle("color")
  krug.classList.toggle("onclick")
  icon.classList.toggle("blue")
}
// function dev (){
//   icon.classList.toggle("saidmurod")
// }