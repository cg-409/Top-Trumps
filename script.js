const cards = [
    {
        name: "APT1 (Comment Crew)",
        image: "apt1.jpg",
        sophistication: 75,
        impact: 80,
        stealth: 65,
        resources: 70,
        notoriety: 85,
        description: "APT1 is a cyber espionage group linked to the Chinese military, known for targeting a wide range of industries."
    },
    {
        name: "APT3 (Gothic Panda)",
        image: "apt3.jpg",
        sophistication: 80,
        impact: 85,
        stealth: 70,
        resources: 75,
        notoriety: 80,
        description: "APT3 is a Chinese threat group that has conducted cyber espionage operations against various sectors."
    },
    {
        name: "APT10 (Stone Panda)",
        image: "apt10.jpg",
        sophistication: 85,
        impact: 75,
        stealth: 80,
        resources: 90,
        notoriety: 85,
        description: "APT10 is a Chinese cyber espionage group targeting managed IT service providers to access client networks."
    },
    {
        name: "APT12 (Numbered Panda)",
        image: "apt12.jpg",
        sophistication: 70,
        impact: 65,
        stealth: 60,
        resources: 65,
        notoriety: 75,
        description: "APT12 is a Chinese cyber espionage group known for its attacks on media, aviation, and defense sectors."
    },
    {
        name: "APT15 (Ke3chang)",
        image: "apt15.jpg",
        sophistication: 75,
        impact: 70,
        stealth: 75,
        resources: 70,
        notoriety: 70,
        description: "APT15 is a Chinese threat group targeting government and diplomatic entities in Europe and the United States."
    },
    {
        name: "APT18 (Wekby)",
        image: "apt18.jpg",
        sophistication: 80,
        impact: 80,
        stealth: 85,
        resources: 75,
        notoriety: 80,
        description: "APT18 is a Chinese cyber espionage group known for targeting the healthcare and medical technology sectors."
    },
    {
        name: "APT19 (Deep Panda)",
        image: "apt19.jpg",
        sophistication: 85,
        impact: 85,
        stealth: 80,
        resources: 85,
        notoriety: 90,
        description: "APT19 is a Chinese cyber espionage group known for targeting high-tech and government sectors."
    },
    {
        name: "APT22 (Barista)",
        image: "apt22.jpg",
        sophistication: 65,
        impact: 60,
        stealth: 70,
        resources: 65,
        notoriety: 60,
        description: "APT22 is a suspected Chinese cyber espionage group targeting telecommunication companies."
    },
    {
        name: "APT30",
        image: "apt30.jpg",
        sophistication: 75,
        impact: 75,
        stealth: 70,
        resources: 80,
        notoriety: 75,
        description: "APT30 is a Chinese cyber espionage group targeting government and political organizations in Southeast Asia."
    },
    {
        name: "APT32 (OceanLotus)",
        image: "apt32.jpg",
        sophistication: 90,
        impact: 85,
        stealth: 80,
        resources: 85,
        notoriety: 90,
        description: "APT32 is a Vietnamese cyber espionage group targeting foreign governments, dissidents, and journalists."
    },
    {
        name: "APT33",
        image: "apt33.jpg",
        sophistication: 80,
        impact: 75,
        stealth: 70,
        resources: 75,
        notoriety: 85,
        description: "APT33 is an Iranian threat group targeting aerospace and energy sectors in the United States and the Middle East."
    },
    {
        name: "APT34 (OilRig)",
        image: "apt34.jpg",
        sophistication: 75,
        impact: 70,
        stealth: 75,
        resources: 80,
        notoriety: 75,
        description: "APT34 is an Iranian cyber espionage group targeting financial, energy, telecommunications, and chemical industries."
    },
    {
        name: "APT35 (Charming Kitten)",
        image: "apt35.jpg",
        sophistication: 70,
        impact: 65,
        stealth: 60,
        resources: 65,
        notoriety: 80,
        description: "APT35 is an Iranian cyber espionage group targeting various industries, known for spear-phishing campaigns."
    },
    {
        name: "APT37 (Reaper)",
        image: "apt37.jpg",
        sophistication: 75,
        impact: 70,
        stealth: 75,
        resources: 70,
        notoriety: 80,
        description: "APT37 is a North Korean cyber espionage group targeting South Korean government and military entities."
    },
    {
        name: "APT38",
        image: "apt38.jpg",
        sophistication: 85,
        impact: 90,
        stealth: 80,
        resources: 85,
        notoriety: 90,
        description: "APT38 is a North Korean group focused on financial gain through cyber-enabled heists."
    },
    {
        name: "APT39",
        image: "apt39.jpg",
        sophistication: 70,
        impact: 65,
        stealth: 60,
        resources: 65,
        notoriety: 75,
        description: "APT39 is an Iranian cyber espionage group targeting telecommunications and travel industries."
    },
    {
        name: "APT40",
        image: "apt40.jpg",
        sophistication: 80,
        impact: 85,
        stealth: 70,
        resources: 75,
        notoriety: 80,
        description: "APT40 is a Chinese cyber espionage group targeting maritime industries and defense sectors."
    },
    {
        name: "APT41 (Double Dragon)",
        image: "apt41.jpg",
        sophistication: 95,
        impact: 90,
        stealth: 85,
        resources: 95,
        notoriety: 95,
        description: "APT41 is a Chinese cyber threat group known for both cyber espionage and financially motivated attacks."
    },
    {
        name: "APT42 (Charming Kitten 2)",
        image: "apt42.jpg",
        sophistication: 70,
        impact: 65,
        stealth: 60,
        resources: 65,
        notoriety: 75,
        description: "APT42 is an Iranian cyber espionage group known for targeting activists and dissidents."
    },
    {
        name: "APT43",
        image: "apt43.jpg",
        sophistication: 75,
        impact: 70,
        stealth: 75,
        resources: 80,
        notoriety: 75,
        description: "APT43 is a suspected North Korean cyber espionage group targeting the defense sector."
    },
    {
        name: "APT44",
        image: "apt44.jpg",
        sophistication: 80,
        impact: 75,
        stealth: 80,
        resources: 85,
        notoriety: 80,
        description: "APT44 is a Russian cyber espionage group targeting critical infrastructure and government entities."
    },
    {
        name: "Anonymous Sudan",
        image: "anon.jpg",
        sophistication: 80,
        impact: 60,
        stealth: 75,
        resources: 50,
        notoriety: 85,
        description: "Anonymous Sudan is a hacker group that has participated in a variety of distributed denial-of-service (DDoS) attacks."
    },
    {
        name: "Black Basta",
        image: "basta.jpg",
        sophistication: 80,
        impact: 80,
        stealth: 70,
        resources: 70,
        notoriety: 65,
        description: "Black Basta practices double extortion – demanding payment for a decryptor, as well as for the non-release of stolen data."
    },
    {
        name: "APT29 (Cosy Bear)",
        image: "apt29.jpg",
        sophistication: 85,
        impact: 90,
        stealth: 85,
        resources: 85,
        notoriety: 90,
        description: "APT29 is a Russian hacker group believed to be associated with one or more intelligence agencies of Russia."
    },
    {
        name: "KillNet",
        image: "killnet.jpg",
        sophistication: 45,
        impact: 50,
        stealth: 55,
        resources: 40,
        notoriety: 75,
        description: "Killnet is a pro-Russia hacker group known for its attacks towards government institutions and private companies in several countries."
    },
    {
        name: "Lazarus",
        image: "lazarus.jpg",
        sophistication: 75,
        impact: 75,
        stealth: 80,
        resources: 85,
        notoriety: 80,
        description: "Lazarus is a hacker group made up of an unknown number of individuals, alleged to be run by the government of North Korea."
    },
    {
        name: "NoName057",
        image: "noname.jpg",
        sophistication: 70,
        impact: 65,
        stealth: 70,
        resources: 55,
        notoriety: 80,
        description: "NoName057 performs politically motivated attacks on websites belonging to governments, utilities, telecommunications, and transportation companies"
    },
];

let playerDeck = [];
let opponentDeck = [];
let currentPlayerCard;
let currentOpponentCard;
let playerTurn = true;

function startGame() {
    // Shuffle the cards
    const shuffledCards = shuffle(cards);
    // Divide the cards between the player and the opponent
    playerDeck = shuffledCards.slice(0, Math.ceil(shuffledCards.length / 2));
    opponentDeck = shuffledCards.slice(Math.ceil(shuffledCards.length / 2));

    // Hide the start button and show attribute buttons
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('attribute-buttons').style.display = 'block';

    // Display the first card
    displayCurrentCard();
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function displayCurrentCard() {
    const playerCardContainer = document.getElementById('current-player-card');
    const opponentCardContainer = document.getElementById('current-opponent-card');
    playerCardContainer.innerHTML = '';
    opponentCardContainer.innerHTML = '';
    currentPlayerCard = playerDeck[0];
    currentOpponentCard = opponentDeck[0];
    const playerCardHtml = createCardHtml(currentPlayerCard);
    const opponentCardHtml = createHiddenCardHtml(currentOpponentCard);
    playerCardContainer.innerHTML = playerCardHtml;
    opponentCardContainer.innerHTML = opponentCardHtml;
}

function createCardHtml(card) {
    return `
        <div class="card">
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name}">
            <p>${card.description}</p>
            <ul class="attributes">
                <li>Sophistication: ${card.sophistication}</li>
                <li>Impact: ${card.impact}</li>
                <li>Stealth: ${card.stealth}</li>
                <li>Resources: ${card.resources}</li>
                <li>Notoriety: ${card.notoriety}</li>
            </ul>
        </div>
    `;
}

function createHiddenCardHtml(card) {
    return `
        <div class="card">
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name}">
            <p>${card.description}</p>
            <ul class="attributes">
                <li>Sophistication: ?</li>
                <li>Impact: ?</li>
                <li>Stealth: ?</li>
                <li>Resources: ?</li>
                <li>Notoriety: ?</li>
            </ul>
        </div>
    `;
}

function playRound(attribute) {
    const playerAttribute = currentPlayerCard[attribute];
    const opponentAttribute = currentOpponentCard[attribute];

    let resultMessage = `Player's ${attribute}: ${playerAttribute} vs Opponent's ${attribute}: ${opponentAttribute}. `;

    if (playerAttribute > opponentAttribute) {
        resultMessage += 'Player wins this round!';
        playerDeck.push(opponentDeck.shift());
        playerDeck.push(playerDeck.shift());
    } else if (playerAttribute < opponentAttribute) {
        resultMessage += 'Opponent wins this round!';
        opponentDeck.push(playerDeck.shift());
        opponentDeck.push(opponentDeck.shift());
    } else {
        resultMessage += 'It\'s a tie!';
        playerDeck.push(playerDeck.shift());
        opponentDeck.push(opponentDeck.shift());
    }

    document.getElementById('result').innerText = resultMessage;

    if (playerDeck.length === 0) {
        document.getElementById('result').innerText = 'Opponent wins the game!';
        endGame();
    } else if (opponentDeck.length === 0) {
        document.getElementById('result').innerText = 'Player wins the game!';
        endGame();
    } else {
        displayCurrentCard();
    }
}

function endGame() {
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('attribute-buttons').style.display = 'none';
}