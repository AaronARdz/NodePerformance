// node myFiles.js
const pendingTimers = [];
const pendinOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations, are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: any pending setTimeout, setInterval, setInmediate?
	// Check two: Any pending OS tasks? (like server listening to port)
	// Check three: Any pending long running operations?  (like fs module)

	return pendingTimers.length || pendinOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
	// 1) Node looks at pendingTimers and sees if any functions
	// are ready to be called

	// 2) Node looks at pendingOSTasks and pendingOperations
	// and calls relevant callbacks

	// 3) Pause execution. Continue when...
	// - a new pendingOSTask is done
	// - a new pendingOperation is donde
	// - a timer is about to complete

	// 4) look at pendingTimers. Call any setInmediate

	// 5) Handle any 'close events'
}

// exit back to terminal