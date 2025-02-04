const socket = io({autoConnect: false});
// TODO: handle quesitons duplicates in client side. Easier for no !! 
const api_endpoint = 'http://localhost:8002';
let i = 1 ; 
console.log("Start api")
async function fetchQuestion(id) {
const q = document.querySelector('#question');
const response = await fetch(`${api_endpoint}/questions/${id}`)
const question = await response.json()
if (question) {
const clubs = question.club_list.map(club => `<li>${club}</li>`).join('');
q.innerHTML = `<ul>${clubs}</ul>`;
return question.answer;    
} 
else {
    q.textContent = `Question ${id} not found.`;
}
}


document.getElementById("join-btn").addEventListener("click", function() {
let username = document.getElementById("username").value;

socket.connect();

socket.on("connect", function() {
socket.emit("user_join", username);
})

fetchQuestion(i);
document.getElementById("chat").style.display = "block";
document.getElementById("landing").style.display = "none";

});

document.getElementById("message").addEventListener("keyup", async function (event) {
if (event.key == "Enter") {
const answer = await fetchQuestion(i);
let message = document.getElementById("message").value;
socket.emit("new_message", message);
if (message === answer) {
    alert("Correct answer!");
    i++;
    try {
        await fetchQuestion(i);
    } catch (error) {
        alert("No more questions available.");
    }
} else {
    alert("Incorrect answer.");
}

document.getElementById("message").value = "";
}
})

// socket.on("chat", function(data) {
//     let ul = document.getElementById("chat-messages");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(data["username"] + ": " + data["message"]));
//     ul.appendChild(li);
//     ul.scrolltop = ul.scrollHeight; // Scroll to the bottom
// })