const express = require('express');
const app = express();
const config = require("config");
if (config.has("keyname")) {
    console.log("config==============", config.get("keyName"));
}
console.log(config.has("keyname"), process.env)
app.get("/", (req, res, next) => {
    res.send("Server works")
})
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on ${process.env.PORT?process.env.PORT:3000}`);
});