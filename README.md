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





