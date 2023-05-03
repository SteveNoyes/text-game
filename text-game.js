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


// Iteration.2




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



// Iteration 3

// Define the game map
const map = [
  ['You are in a dark room. There is a door to the north.', 'north', 1],
  ['You are in a bright room. There is a door to the south and a key on the table.', 'south', 0, true],
  ['You are in a hallway. There are doors to the east and west.', 'east', 3, false, true],
  ['You are in a library. There are books on the shelves and a locked door to the north.', 'west', 2],
  ['You are in a garden. There are flowers and a bench here.', 'north', 6],
  ['You are in a kitchen. There are pots and pans on the stove.', 'south', 5],
];

// Define the player's starting position
let playerPos = 0;

// Define a variable to store the player's inventory
const inventory = [];

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
      inventory.push('key');
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
      destinationRoom[3] = false;
      inventory.push('key');
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
  } else if (input === 'look inventory') {
    console.log('You have:', inventory.join(', '));
  } else if (input === 'sit on bench') {
    if (playerPos === 4) {
      console.log('You sit on the bench and enjoy some flowers.');
    } else {
      console.log('There is no bench here to sit on.');
    }
  } else {
    console.log('I do not understand that command.');
  }
}

// I added two new rooms to the map array - a garden to the north of the dark room and a kitchen to the south of the bright room. I also defined a new inventory array to keep track of the items the player collects during the game.

// The new feature I added is the ability for the player to sit on the bench in the garden. If the player types 'sit on bench' while in the garden, the game will print a message saying that the player is enjoying