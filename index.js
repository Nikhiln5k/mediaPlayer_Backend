// import json server library in index.json file

const jsonServer = require('json-server')

// create json-server

const mediaPlayerServer = jsonServer.create()

// create path to json file

const router = jsonServer.router('db.json')

// middleware to convert json to js

const middleware = jsonServer.defaults()

// use middlware and router in server

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// setup port for running server ->  this is for no to clash with react port 3000 server also run 3000

const port = 5000 || process.env.PORT 

//  to listen server for resolving request from client

mediaPlayerServer.listen(port,() =>{
    console.log(`mediaPlayerServer started at ${port} and waiting for the request`);
})
