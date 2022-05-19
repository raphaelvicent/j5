
let x = 500;
let y = 250;
let y_react = 250;
let xSpeed = 5;
let ySpeed = 5;
let position = 500;

let refY = 250;

function setup() {
    createCanvas(1000, 500);
}

// function f_CollisionW() {
//     if (y > 500 || y < 0) {
//         ySpeed *= -1;
//     }
// }
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
            refY = refY + 5;
        } else if (keyCode === RIGHT_ARROW) {
            refY = refY - 5;
    }
}

function draw() {
    background(200, 200, 200);
    noStroke();
    rect(500, 0, 3, 500);

    rect(960, 250, 15, 100, 10);
    rect(20, refY, 15, 100, 10);

    // f_CollisionW();

    x += xSpeed;
    y += ySpeed;

    fill(51);
    circle(x, y, 30);

    if (y > 500 || y < 0) {
        ySpeed *= -1;
    }

    if (x > 1000 || x < 0) {
        xSpeed *= -1;
    }
    
    //rect(500, 250, 3, 500)
    //rect(20, 250, 15, 100, 10)
    //rect(980, 250, 15, 100, 10)
    

    // if (x > 400) {
    //     x = 10;
    // }

    // if (y > 400) {
    //     y = 10;
    // }


}