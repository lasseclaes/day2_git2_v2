window.addEventListener("load", start);

function start() {
  const bubbles = document.querySelectorAll("#wrapper>div");
  console.log(bubbles);
  bubbles.forEach(animateBubble);
}

function animateBubble(bubble) {
  /*bubble.style.transform = "translate(50vw, 50vh)"; step 2 (CSS is step 1)*/
  const randX = Math.random() * 100;
  const randY = Math.random() * 100;
  const hue = Math.random() * 360;
  bubble.style.transform = "translate(" + randX + "vw, " + randY + "vh)";
  //  bubble.style.background = "hsl(120),70%,70%";
  bubble.style.background = "hsl(" + hue + "),70%,70%";
}


/*
 bubbles.forEach(bubble=>{
  bubble.style.transform
 });
*/
