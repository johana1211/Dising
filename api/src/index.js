const server = require('./app.js'); 
const { conn } = require('./src/db.js'); 


conn.sync().then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001'); 
    })
})
