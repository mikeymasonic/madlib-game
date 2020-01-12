const fillInBlanks = () => {
    
    const number1Input = document.getElementById('number1Input');
    const number1Output = number1Input.value;
    number1.textContent = number1Output;

    const occupation1Input = document.getElementById('occupation1Input');
    const occupation1Output = occupation1Input.value;
    occupation1.textContent = occupation1Output;

    const occupation2Input = document.getElementById('occupation2Input');
    const occupation2Output = occupation2Input.value;
    occupation2.textContent = occupation2Output;

    const place1Input = document.getElementById('place1Input');
    const place1Output = place1Input.value;
    place1.textContent = place1Output;

    const personInRoomInput = document.getElementById('personInRoomInput');
    const personInRoomOutput = personInRoomInput.value;
    personinroom.textContent = personInRoomOutput;
    personinroom1.textContent = personInRoomOutput;
    personinroom2.textContent = personInRoomOutput;

    const place2Input = document.getElementById('place2Input');
    const place2Output = place2Input.value;
    place2.textContent = place2Output;

    const occupation3Input = document.getElementById('occupation3Input');
    const occupation3Output = occupation3Input.value;
    occupation3.textContent = occupation3Output;

    const bodyPart1Input = document.getElementById('bodyPart1Input');
    const bodyPart1Output = bodyPart1Input.value;
    bodypart1.textContent = bodyPart1Output;

    const adjectiveInput = document.getElementById('adjectiveInput');
    const adjectiveOutput = adjectiveInput.value;
    adj.textContent = adjectiveOutput;

    const nounInput = document.getElementById('nounInput');
    const nounOutput = nounInput.value;
    noun.textContent = nounOutput;

    const bodyPart2Input = document.getElementById('bodyPart2Input');
    const bodyPart2Output = bodyPart2Input.value;
    bodypart2.textContent = bodyPart2Output;

    const celebrityInput = document.getElementById('celebrityInput');
    const celebrityOutput = celebrityInput.value;
    celebrity.textContent = celebrityOutput;
    celebrity1.textContent = celebrityOutput;
    celebrity2.textContent = celebrityOutput;

    const verbingInput = document.getElementById('verbingInput');
    const verbingOutput = verbingInput.value;
    verbing.textContent = verbingOutput;

    const adverbInput = document.getElementById('adverbInput');
    const adverbOutput = adverbInput.value;
    adverb.textContent = adverbOutput;

    const verbSInput = document.getElementById('verbSInput');
    const verbSOutput = verbSInput.value;
    verbS.textContent = verbSOutput;

    document.getElementById("storyResults").style.display = "block";
};

button.addEventListener('click', fillInBlanks);
