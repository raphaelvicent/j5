
let x = 500;
let y = 250;
let y_react = 250;
let xSpeed = 4;
let ySpeed = 4;
let position = 500;

function setup() {
    createCanvas(1000, 500);
    rect(980, y_react, 15, 100, 10);
}

function f_CollisionW() {
    if (y > 500 || y < 0) {
        ySpeed *= -1;
    }
}

function draw() {
    background(200);

    f_CollisionW();

    x += xSpeed;
    y += ySpeed;

    fill(51);
    circle(x, y, 30);
    
    //rect(500, 250, 3, 500)
    //rect(20, 250, 15, 100, 10)
    //rect(980, 250, 15, 100, 10)
    

    if (x > 400) {
        x = 10;
    }

    if (y > 400) {
        y = 10;
    }


}