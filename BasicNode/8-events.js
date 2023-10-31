const EventEmitter = require("events");
// Event emitter is a Class

// emitter is an object (instance of EventEmitter class);
const emitter = new EventEmitter();

// .addEventListner()

// Register an listner

emitter.on("logging", () => {
  console.log("Listner of logging");
  //   db call to log the thing
});

// Emiited an event

emitter.emit("logging");
