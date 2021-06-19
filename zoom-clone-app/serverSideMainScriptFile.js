const express = require("express");
const app = express();
const server = require("http").Server(app);
const {v4: uuidv4} = require("uuid");
const io = require("socket.io")(server);




//-----------------------create USE--------------------------------------
app.set("view engine", "ejs");
app.use(express.static("public"));



//----------------------------------GET--------------------------------------
app.get("/",(req,res)=>{
  //res.status(200).send("Hello World.");
  //res.render("room")
  res.redirect(`/${uuidv4()}`);

})
app.get("/:room", (req,res)=>{
  res.render("room", {roomId: req.params.room});
});
io.on("connection", (socket)=>{
  socket.on("join-room", (roomId, userId)=>{
    console.log("Akshay joined the room "+ roomId);
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
  });
});

server.listen(process.env.PORT || 3000, ()=>{
  console.log("Zoom backend server is started.");
})
