"use strict";

var screen = document.getElementById("screen").getContext("2d");

var atom = function atom(x, y, c) {
  screen.fillStyle = c;
  screen.fillRect(x, y, 3, 3);
};

document.getElementById('updateButton').addEventListener('click', function () {
  console.log('button pressed');
  var zoomValue = parseFloat(document.getElementById('zoom_range').value);
  var xValue = parseFloat(document.getElementById('x_range').value);
  var yValue = parseFloat(document.getElementById('y_range').value);
  screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);
  var y = 1;

  function draw() {
    if (y < 1000) {
      for (var x = 1; x < 1000; x++) {
        var dx = (x - 500) / (200 + zoomValue) + -xValue / 100;
        var dy = (y - 500) / (200 + zoomValue) + yValue / 100;
        var a = dx;
        var b = dy;

        for (var t = 1; t < 200; t++) {
          var d = a * a - b * b + dx;
          b = 2 * (a * b) + dy;
          a = d;

          if (d > 200) {
            atom(x, y, "rgb(" + t * 3 + "," + t + "," + t * 0.5 + ")");
            break;
          }
        }
      }

      y++;
      requestAnimationFrame(draw);
    }
  }

  draw();
});