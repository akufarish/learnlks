let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let horizontal = 25;
let back = false;

function animate() {
  requestAnimationFrame(animate);
  canvas.width = canvas.width;
  canvas.height = canvas.height;

  ctx.arc(horizontal, 130, 15, 0, 10);
  ctx.fillStyle = "#fff";
  ctx.fill();

  if (!back) {
    if (horizontal < 390) {
      horizontal += 5;
    } else {
      back = true;
    }
  } else {
    if (horizontal == 0) {
      back = false;
    }
    horizontal -= 5;
  }
}

animate();
