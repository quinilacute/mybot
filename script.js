const visaInfo = {
    tourist: "A tourist visa is for those visiting the country for leisure or vacation. Requirements include a valid passport, proof of accommodation, and return travel tickets.",
    work: "A work visa requires a job offer from a company within the country. Necessary documents include a work contract, proof of qualifications, and health insurance.",
    student: "A student visa is for those pursuing studies. You need an admission letter from a recognized educational institution, proof of funds, and health insurance.",
    medical: "A medical visa is for those seeking medical treatment. Required documents include a medical appointment confirmation, proof of funds, and a valid passport.",
    family: "A family reunion visa allows family members to join a resident in the country. Required documents include proof of relationship, proof of residence, and financial support evidence."
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    const chatOutput = document.getElementById('chat-output');


    // const userMessage = document.getElementById('user-message');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    const userLabel = document.createElement('div');
    userMessage.appendChild(userLabel);
    userLabel.className = 'user-label';
    userLabel.innerText = "user";
    chatOutput.appendChild(userMessage);


    // const botResponse = document.getElementById('bot-response');
    const botResponse = document.createElement('div');
    botResponse.className = 'bot-response';
    botResponse.innerText = getBotResponse(userInput);
    const botLabel = document.createElement('div');
    botResponse.appendChild(botLabel);
    botLabel.className = 'bot-label';
    botLabel.innerText = "bot";
    chatOutput.appendChild(botResponse);

    document.getElementById('user-input').value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("visa")) {
        if (input.includes("tourist")) {
            return visaInfo.tourist;
        } else if (input.includes("work")) {
            return visaInfo.work;
        } else if (input.includes("student")) {
            return visaInfo.student;
        } else if (input.includes("medical")) {
            return visaInfo.medical;
        } else if (input.includes("family")) {
            return visaInfo.family;
        } else {
            return "Please specify the type of visa you are interested in (e.g., tourist, work, student, medical, family).";
        }
    } else {
        return "I'm here to help with information about visas. Please ask about a specific type of visa.";
    }
}

function showVisaTypes() {
    const visaInfoDiv = document.getElementById('visa-info');
    visaInfoDiv.innerHTML = `
        <p>Tourist Visa: ${visaInfo.tourist}</p>
        <p>Work Visa: ${visaInfo.work}</p>
        <p>Student Visa: ${visaInfo.student}</p>
        <p>Medical Visa: ${visaInfo.medical}</p>
        <p>Family Reunion Visa: ${visaInfo.family}</p>
    `;
}
