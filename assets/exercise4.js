document.getElementById("videoPlay").addEventListener("click", ()=>{
    var video = document.getElementById("myVideo")
    video.setAttribute("controls", "");
    video.setAttribute("src", "../images/Sea.mp4");
    video.play();
});

$(document).ready(function() {
    function loop() {
        $('#hero').animate ({
            top: '+50',
        }, 3000, 'linear', function() {
            loop();
        });
        $('#hero').animate ({
            top: '-50',
        }, 3000, 'linear', function() {
            loop();
        });
    }
    loop();
});

var clients = document.getElementById("clients");
clients.addEventListener("mouseover", function(){
     let counter = 0;
        setInterval(function(){
        counter++;
        if(counter<232) {
            clients.innerHTML = counter;
        }else {
            clients.innerHTML = 232;
        }
    }, 5)
});

var projects = document.getElementById("projects");
projects.addEventListener("mouseover", function(){
     let counter = 0;
        setInterval(function(){
        counter++;
        if(counter<521) {
            projects.innerHTML = counter;
        }else {
            projects.innerHTML = 521;
        }
    }, 5)
});

var hours = document.getElementById("hours");
hours.addEventListener("mouseover", function(){
     let counter = 0;
        setInterval(function(){
        counter++;
        if(counter<1463) {
            hours.innerHTML = counter;
        }else {
            hours.innerHTML = 1463;
        }
    }, 0.1)
});

var workers = document.getElementById("workers");
workers.addEventListener("mouseover", function(){
     let counter = 0;
        setInterval(function(){
        counter++;
        if(counter<15) {
            workers.innerHTML = counter;
        }else {
            workers.innerHTML = 15;
        }
    }, 100)
});
var all = document.getElementById("all");
var app = document.getElementById("app");
var card = document.getElementById("card");
var web = document.getElementById("web");


all.addEventListener("click", function(){
    all.setAttribute("class", "verde");
    app.removeAttribute("class", "verde");
    card.removeAttribute("class", "verde");
    web.removeAttribute("class", "verde");
});
app.addEventListener("click", function(){
    app.setAttribute("class", "verde");
    all.removeAttribute("class", "verde");
    card.removeAttribute("class", "verde");
    web.removeAttribute("class", "verde");
});
card.addEventListener("click", function(){
    card.setAttribute("class", "verde");
    all.removeAttribute("class", "verde");
    app.removeAttribute("class", "verde");
    web.removeAttribute("class", "verde");
});
web.addEventListener("click", function(){
    web.setAttribute("class", "verde");
    all.removeAttribute("class", "verde");
    app.removeAttribute("class", "verde");
    card.removeAttribute("class", "verde");
});
var messageName = document.getElementById("messageName");
var messageEmail = document.getElementById("messageEmail");
var messageSubject = document.getElementById("messageSubject");
var messageBtn = document.getElementById("messageBtn");
var messageLista = document.getElementById("messageLista");
var message = document.getElementById("message");

messageBtn.addEventListener("click", ()=>{
    console.log(messageName.value);
if (messageName.value=="", messageEmail.value=="", messageSubject.value=="", message.value==""){
    alert("Please, fill the blanks!")
}else{
    messageLista.innerHTML= `<li class="list-group-item"> Name: ${messageName.value}</li><li class="list-group-item"> Email: ${messageEmail.value}</li><li class="list-group-item"> Subject: ${messageSubject.value}</li><li class="list-group-item"> Message: ${message.value}</li>`
}
messageName.value='';
messageEmail.value='';
messageSubject.value='';
message.value='';
})

var subBtn = document.getElementById("subBtn");
var subEmail = document.getElementById("subEmail");

subBtn.addEventListener("click", ()=>{
    alert(`The subscription information has sent to email: ${subEmail.value}`);
    subEmail.value='';
})
