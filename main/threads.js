const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 4;

const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('6: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('7: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('8: ', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('9: ', Date.now() - start);
});

// Can we use the threadpool for javascript code or can only nodeJS functions use it?
// R: We can write custom JS that uses the thread pool.

// What functions in node std library use the threadpool?
// R: All 'fs' module functions. some crypto stuff. Depends on OS (windows vs unix based)

// How does this threadpool stuff fit into the event loop?
// R: Tasks running in the threadpool are the 'pendingOperations' in our NodeEventloop.js file example

