const socket = io();
let myVideoStream;
const myVideo = document.createElement("video");
myVideo.muted = true;
const videoGrid = document.getElementById("video-grid");


navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream =>{
  myVideoStream = stream;
  addVideoStream(myVideo, stream);
});

const addVideoStream = (video, stream)=>{
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", ()=>{
    video.play();
  });
  videoGrid.append(video);
}


socket.on("user-connected", (userId)=>{
  connectWithNewUser(userId);
})

const connectWithNewUser = (userId)=>{
  console.log("This is new user : "+ userId);
}
