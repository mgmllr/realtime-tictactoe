Play TicTacToe with your friends in real-time.

## Step 1 - Express boilerplate modifications

1. Create a boilerplate express app.
2. [app.js] Edit the boilerplate routes definition.
3. [./routes] Delete user.js file.
4. [./routes/index.js] Modify index.js file to encapsulate all routes in create function and export.
5. [app.js] Require ./routes/index file and pass app through our new routes handler function.

## Test our progress

1. run 'npm install' from our working directory.
2. run 'node app.js' from working directory.
3. Open browser and launch localhost:3000. Confirm that we see our 'TicTacToe Board page'.

## Step 2 - Build our TicTacToe Board

1. Copy and past the CSS that is provided in class.
2. Build the HTML DOM element structure to display the board.

## Step 3 - Implement Socket.io

1. [app.js] Modify app to require socket.io and listen over web socket connection.
2. [./routes/index] Modify create function to accept io variable along with app variable.
2. [package.json] Modify to include socket.io in dependencies.

## Test our progress

1. Run 'npm install' from working directory and restart server.

## Step 4 - Implement test web socket functionality

1. [/public/javascripts] Create socket.js file and add boilerplate socket.io 'news' event listener.
2. [layout.jade] Add script to load socket.js file.
2. [app.js] Add socket.io 'news' event emitter.

## Test our progress

1. Restart server and re-load localhost:3000. Make sure real-time event is handled.


## Step 5 - Implement player functionality

1. [app.js] Remove 'my other event' event from the server (we don't need it).
2. [app.js] Create our 'playerX' event that simply console.log's the data it receives.
3. [style.css] Change all the .a1, etc. classes to be id's. We need a unique identifier for each position on the playing board.
4. [style.css] Change the :hover classes to be a single class called .position:hover (we only need one of these since all positions utilize the same style).
5. [index.jade] Update the jade file to account for new changes to css (i.e. change appropriate classes to id's and include the .position class on each board position).
6. [socket.js] Encapsulate entire file into an anonymous function. We need this because we're going to start registering "events" to the DOM.
7. [socket.js] Add a click handler that executes each time the .position class is clicked.
8. [socket.js] When a player clicks on the board position, check if the clicked position has already been played. If it has, print a message to the client. If not, change the background of that position to red. When a valid position is clicked, use socket to send the board position back to the server.
  





