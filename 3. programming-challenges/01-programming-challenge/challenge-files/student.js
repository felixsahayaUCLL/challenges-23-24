function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
} 

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward5(bike) {
    let i = 5
    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward10(bike) {
    let i = 10
    while (i > 0) {
        forward(bike);
        i = i - 1 ;
    }

}

function right(bike) {
    turnRight(bike);
    forward(bike);
}


function ellShape(bike) {
    let i = 5
    while (i > 0) {
        forward(bike);
        i = i - 1 ;
    }
    turnRight(bike);
    let j = 4
    while ( j > 0) {
        forward(bike);
        j = j - 1 ;
    }

}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}

function crookedUTurn(bike) {
    forward5(bike);
    twiceForward(bike);
    turnRight(bike);
    forward5(bike);
    forward4(bike);
    turnRight(bike);
    thriceForward(bike);
}

function forwardUntilWall(bike) {
    while(!sensor(bike)) {
        forward(bike);
    }
}

function smartEllShape(bike) {
    while(!sensor(bike)) {
        forward(bike)
    }
    turnRight(bike);
    while(!sensor(bike)){
        forward(bike);
    }
}

function spiral(car) {
    while(!sensor(car)){
    forwardUntilWall(car);
    turnRight(car);
    }
}

function turnLeft(car) {
    let i = 3
    while (i > 0) {
        turnRight(car);
        i = i - 1
    }
}

function left(car) {
    turnLeft(car);
    forward(car);
}

function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);

}

function leftOrRight(car){
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}

function incompleteU(car){
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);

}

function whichDirection(car) {
    while(sensor(car)){
        turnLeft(car);
    }
    forwardUntilWall(car);
}

function sensorRight(car) {
    turnRight(car);
    return sensor(car);
    turnLeft(car);
}

function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }
}

function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}

function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }

    turnRight(car);
    forwardUntilWall(car);
}

function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car)
    turnRight(car);

    return result;

}

function firstLeft(car){
    while(sensorLeft(car)) {
        forward(car);
    }
    turnLeft(car);
    forwardUntilWall(car);
}

function zigZag(car){
    firstRight(car);
    firstLeft(car);
    turnRight(car);
    turnRight(car);
    forward(car);
    turnRight(car);
    forwardUntilWall(car);
}

function forwardUntilFreeRight(car) {
    while(sensorRight(car)) {
        forward(car);
    }
}

function firstRight(car) {
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

function secondRight(car){
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

function thirdRight(car) {
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

/*function fourthRight(car) {
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}*/

function forwardUntilNthRight(car, nrights) {
    let i = nrights;

    while (i > 0) {
        forward(car);

        if (!sensorRight(car)) {
            i = i - 1;
        }
    }
}

function fourthRight(car) {
    forwardUntilNthRight(car, 4);
    turnRight(car);
    forwardUntilWall(car);
}

function forwardUntilFreeLeft(car) {
    while(sensorLeft(car)) {
        forward(car);
    }
}
/*function fifthLeft(car){
    forwardUntilFreeLeft(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeLeft(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeLeft(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeLeft(car);
    turnRight(car);
    turnLeft(car);
    forward(car);
    forwardUntilFreeLeft(car);
    turnLeft(car);
    forwardUntilWall(car);
}*/
function forwardUntilNthLeft(car, nrights) {
    let i = nrights;

    while (i > 0) {
        forward(car);

        if (!sensorLeft(car)) {
            i = i - 1;
        }
    }
}

function fifthLeft(car){
    forwardUntilNthLeft(car, 5);
    turnLeft(car);
    forwardUntilWall(car);
}

function maze(car) {
    function L(n) {
        forwardUntilNthLeft(car, n);
        turnLeft(car);
    }

    function R(n) {
        forwardUntilNthRight(car, n);
        turnRight(car);
    }

    R(2);
    L(1);
    L(2);
    L(2);
    R(4);
    R(1);
    L(3);
    forwardUntilWall(car);
}

function turnAround(car){
    turnRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

function backward(car){
    turnRight(car);
    turnRight(car);
    forward(car);
    turnRight(car);
    turnRight(car);
}
