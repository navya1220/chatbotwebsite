let chatbotMsgList = ["Hi", "Hey", "Good morning", "Good Morning", "How are you", "Fine", "Hello", "How can I help you?", "Thank you", "Your Welcome"];
let chatContainerel = document.getElementById("chatContainer");
let userInputel = document.getElementById("userInput");
let sendMsgBtnel = document.getElementById("sendMsgBtn")
let count = 0;
let c = 1;
sendMsgBtnel.onclick = function() {
    let userinputdata = userInputel.value;
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("msg-to-chatbot-container");
    chatContainerel.appendChild(divcontainer);

    let userspan = document.createElement("span");
    userspan.textContent = userinputdata;
    userspan.classList.add("msg-to-chatbot");
    divcontainer.appendChild(userspan);

    chatbotmessage();
    count = count + 2;
    c = c + 2;
    userInputel.value = "";

}

function chatbotmessage() {
    let userinput = userInputel.value;
    if (userinput === chatbotMsgList[count]) {
        let divcontainer = document.createElement("div");
        divcontainer.classList.add("msg-from-chatbot-container");
        chatContainerel.appendChild(divcontainer);

        let userspan1 = document.createElement("span");
        userspan1.textContent = chatbotMsgList[c];
        userspan1.classList.add("msg-from-chatbot");
        divcontainer.appendChild(userspan1);
    }
}