// Define the game map
const map = [
  ['You are in a dark room. There is a door to the north.', 'north', 1],
  ['You are in a bright room. There is a door to the south and a key on the table.', 'south', 0, true],
];

// Define the player's starting position
let playerPos = 0;

// Define a function to move the player
function move(direction) {
  const currentRoom = map[playerPos];
  const directionIndex = currentRoom.indexOf(direction);
  
  if (directionIndex === -1) {
    console.log('You cannot go that way!');
  } else {
    const destinationIndex = currentRoom[directionIndex + 1];
    const destinationRoom = map[destinationIndex];
    
    console.log(destinationRoom[0]);
    playerPos = destinationIndex;
    
    if (destinationRoom[3]) {
      console.log('You found a key!');
      destinationRoom[3] = false;
    }
  }
}

// Define the main game loop
while (true) {
  const currentRoom = map[playerPos];
  console.log(currentRoom[0]);
  
  const input = prompt('What do you want to do?');
  
  if (input === 'north' || input === 'south') {
    move(input);
  } else if (input === 'look') {
    console.log(currentRoom[0]);
  } else if (input === 'take key') {
    if (currentRoom[3]) {
      console.log('You found a key!');
      currentRoom[3] = false;
    } else {
      console.log('There is no key here.');
    }
  } else {
    console.log('I do not understand that command.');
  }
}

// Define the game map
const map = [
  ['You are in a dark room. There is a door to the north.', 'north', 1],
  ['You are in a bright room. There is a door to the south and a key on the table.', 'south', 0, true],
  ['You are in a hallway. There are doors to the east and west.', 'east', 3, false, true],
  ['You are in a library. There are books on the shelves and a locked door to the north.', 'west', 2],
];

// Define the player's starting position
let playerPos = 0;

// Define a function to move the player
function move(direction) {
  const currentRoom = map[playerPos];
  const directionIndex = currentRoom.indexOf(direction);
  
  if (directionIndex === -1) {
    console.log('You cannot go that way!');
  } else {
    const destinationIndex = currentRoom[directionIndex + 1];
    const destinationRoom = map[destinationIndex];
    
    console.log(destinationRoom[0]);
    playerPos = destinationIndex;
    
    if (destinationRoom[3]) {
      console.log('You found a key!');
      destinationRoom[3] = false;
    }
  }
}

// Define the main game loop
while (true) {
  const currentRoom = map[playerPos];
  console.log(currentRoom[0]);
  
  const input = prompt('What do you want to do?');
  
  if (input === 'north' || input === 'south' || input === 'east' || input === 'west') {
    move(input);
  } else if (input === 'look') {
    console.log(currentRoom[0]);
  } else if (input === 'take key') {
    if (currentRoom[3]) {
      console.log('You found a key!');
      currentRoom[3] = false;
    } else {
      console.log('There is no key here.');
    }
  } else if (input === 'unlock door') {
    if (currentRoom[4]) {
      console.log('You unlocked the door!');
      currentRoom[4] = false;
    } else {
      console.log('There is no locked door here.');
    }
  } else {
    console.log('I do not understand that command.');
  }
}