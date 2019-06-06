/* eslint-disable no-empty */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-sequences */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

// Rover Object Goes Here
const rover = {
  name: 'rover1',
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

const rover2 = {
  name: 'rover2',
  direction: 'N',
  x: 0,
  y: 1,
  travelLog: [],
};
// ====================== Board ================================================
// It's necessary to set the rover position through: @setRoverPosition function
const board = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]];
// =============================================================================
function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;

    case 'E':
      rover.direction = 'N';
      break;

    case 'S':
      rover.direction = 'E';
      break;

    case 'W':
      rover.direction = 'S';
      break;

    default:
      console.log('Error');
      break;
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'N';
      break;

    default:
      console.log('Error');
      break;
  }
}
// ===================== Move Functions ====================================
function moveForward(rover) {
  console.log('moveForward was called');
  switch (rover.direction) {
    case 'N':
      if (validGridFoward(rover) && reportObstacleFoward(rover)) {
        updateBoardGrid(rover);
        rover.y -= 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'S':
      if (validGridFoward(rover) && reportObstacleFoward(rover)) {
        updateBoardGrid(rover);
        rover.y += 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'E':
      if (validGridFoward(rover) && reportObstacleFoward(rover)) {
        updateBoardGrid(rover);
        rover.x += 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'W':
      if (validGridFoward(rover) && reportObstacleFoward(rover)) {
        updateBoardGrid(rover);
        rover.x -= 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    default:
      console.log('Error');
      break;
  }
}

function moveBackward(rover) {
  console.log('moveBackward was called');
  switch (rover.direction) {
    case 'N':
      if (validGridBackward(rover) && reportObstacleBackward(rover)) {
        updateBoardGrid(rover);
        rover.y += 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'S':
      if (validGridBackward(rover) && reportObstacleBackward(rover)) {
        updateBoardGrid(rover);
        rover.y += 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'E':
      if (validGridBackward(rover) && reportObstacleBackward(rover)) {
        updateBoardGrid(rover);
        rover.x -= 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    case 'W':
      if (validGridBackward(rover) && reportObstacleBackward(rover)) {
        updateBoardGrid(rover);
        rover.x += 1;
        updateRoverPosition(rover);
        currentPosition(rover);
      }
      break;

    default:
      console.log('Error');
      break;
  }
}
// ====================== Coordinates Functions ======================
function currentPosition(rover) { console.log(rover.x, rover.y); }
function currentDirection(rover) { console.log(rover.direction); }
function printTravelLog(rover) {
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i]);
  }
}
// ===================================================================

// ======================= Command function  & Validation===========================
function roverCommands(command, rover) {
  if (validCommand(command)) {
    for (let i = 0; i < command.length; i++) {
      switch (command[i].toLowerCase()) {
        case 'f':
          moveForward(rover);
          rover.travelLog.push(`(${rover.x},${rover.y})`);
          break;

        case 'b':
          moveBackward(rover);
          rover.travelLog.push(`(${rover.x},${rover.y})`);
          break;

        case 'l':
          turnLeft(rover);
          break;

        case 'r':
          turnRight(rover);
          break;

        default:
          console.log('Unexpected error ocurred');
          break;
      }
    }
  } else {
    console.log('Error: Wrong input value - ', command);
  }
}

function validCommand(command) {
  for (let i = 0; i < command.length; i++) {
    if (command[i] !== 'f' || command[i] !== 'b' || command[i] !== 'l' || command[i] !== 'r') {
      return false;
    }
  }
  return true;
}
// ===================== Grid Validations ===================================
function validGridFoward(rover) {
  if (rover.direction === 'N' && rover.y === 0) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'S' && rover.y === 9) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'E' && rover.x === 9) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'W' && rover.x === 0) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  }
  return true;
}

function validGridBackward(rover) {
  if (rover.direction === 'N' && rover.y === 9) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'S' && rover.y === 0) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'E' && rover.x === 0) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  } else if (rover.direction === 'W' && rover.x === 9) {
    console.log("Error: Rover can't leave the grid !");
    return false;
  }
  return true;
}

function reportObstacleFoward(rover) {
  let somethingFound = true;
  switch (rover.direction) {
    case 'N':
      if (board[rover.x][rover.y - 1]) {
        console.log(`Rover found something unexpected at: (${rover.x},${rover.y - 1}) ${board[rover.x][rover.y - 1]}`);
        somethingFound = false;
      }
      break;

    case 'S':
      if (board[rover.x][rover.y + 1]) {
        console.log(`Rover found something unexpected at: (${rover.x},${rover.y + 1}) ${board[rover.x][rover.y + 1]}`);
        somethingFound = false;
      }
      break;

    case 'E':
      if (board[rover.x + 1][rover.y]) {
        console.log(`Rover found something unexpected at: (${rover.x + 1},${rover.y}) ${board[rover.x + 1][rover.y]}`);
        somethingFound = false;
      }
      break;

    case 'W':
      if (board[rover.x - 1][board.y]) {
        console.log(`Rover found something unexpected rover at: (${rover.x - 1},${rover.y}) ${board[rover.x - 1][rover.y]}`);
        somethingFound = false;
      }
      break;

    default:
      console.log('An unexpected error ocurred');
  }
  return somethingFound;
}

function reportObstacleBackward(rover) {
  let somethingFound = true;
  switch (rover.direction) {
    case 'N':
      if (board[rover.x][rover.y + 1]) {
        console.log(`Rover found something unexpected at: (${rover.x},${rover.y + 1}) ${board[rover.x][rover.y + 1].name}`);
        somethingFound = false;
      }
      break;
    case 'S':
      if (board[rover.x][rover.y - 1]) {
        console.log(`Rover found something unexpected at: (${rover.x},${rover.y - 1}) ${board[rover.x][rover.y - 1]}`);
        somethingFound = false;
      }
      break;
    case 'E':
      if (board[rover.x - 1][board.y]) {
        console.log(`Rover found something unexpected at: (${rover.x - 1},${rover.y}) ${board[rover.x - 1][rover.y]}`);
        somethingFound = false;
      }
      break;
    case 'W':
      if (board[rover.x + 1][board.y]) {
        console.log(`Rover found something unexpected at: (${rover.x + 1},${rover.y}) ${board[rover.x + 1][rover.y]}`);
        somethingFound = false;
      }
      break;
    default:
      console.log('An unexpected error ocurred');
  }
  return somethingFound;
}
// ========= Updates the Rover Position in the Grid ===========
function updateRoverPosition(rover) {
  board[rover.x][rover.y] = rover;
}
// ========= Updates the Board Grid ===========
function updateBoardGrid(rover) {
  board[rover.x][rover.y] = null;
}
// ========= Set/Teleport a rover to a position in the board and refreshes it ===========
function setRoverPosition(rover, x, y) {
  rover = board[x][y];
  updateBoardGrid(rover);
  updateRoverPosition(rover);
}
