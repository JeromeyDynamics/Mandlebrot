const screen = document.getElementById("screen").getContext("2d");

const atom = function(x,y,c){
    screen.fillStyle = c; 
    screen.fillRect(x, y, 3, 3);
};

document.getElementById('updateButton').addEventListener('click', function() {
    console.log('button pressed');
    
    const zoomValue = parseFloat(document.getElementById('zoom_range').value);
    const xValue = parseFloat(document.getElementById('x_range').value);
    const yValue = parseFloat(document.getElementById('y_range').value);
    
    screen.clearRect(0, 0, screen.canvas.width, screen.canvas.height);
    
    let y = 1;
    function draw() {
        if (y < 1000) {
            for (let x = 1; x < 1000; x++) {
                let dx = (x - 500) / (200 + zoomValue) + (-xValue/100);
                let dy = (y - 500) / (200 + zoomValue) + (yValue/100);

                let a = dx;
                let b = dy;
                for (let t = 1; t < 200; t++) {
                    let d = (a * a) - (b * b) + dx;
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