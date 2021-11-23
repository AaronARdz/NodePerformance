const https = require('https');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// What functions in node std library use the OS´s async features?
// R: Almost everythin around networking for all OS's. Some other stuff is OS specific

// How does this os async stuff fit into the event loop?
// R: Tasks using the underlyion OS reflected in our 'pendingOSTasks' array in NodeEventLoop.js file

// increase font size on important words or functions