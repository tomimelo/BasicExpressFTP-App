require("dotenv").config();
const Client = require('ftp');

const express = require("express");
const app = express();

const config = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    user: process.env.FTP_USER_NAME,
    password: process.env.FTP_USER_PWD
}

app.use( express.json() );

app.get("/send", (req, res) => {

    try {

        const c = new Client();

        c.on('ready', function() {
            c.put('test.txt', 'test.txt', function(err) {
                if (err) throw err;
                c.end();
                res.json({
                    ok: true,
                    msg: "File sent succesfully"
                });
            });
        });

        c.connect(config);
        
    } catch (error) {
        
        console.log(error);     
        
    }

});

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
    console.log("Make a request to /send to send the file");
});