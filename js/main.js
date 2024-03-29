const words = ["elephant", "courage", "umbrella", "sunflower", "whisper", "mysterious", "laughter", "wanderlust", "paradise", "quasar", "zeppelin", "flamingo", "obsidian", "chocolate", "quokka", "marathon", "butterfly", "avalanche", "giraffe", "infinity", "serendipity", "caterpillar", "lighthouse", "carousel", "harmony", "whimsical", "breathtaking", "fandango", "moonlight", "effervescent","labyrinth", "sapphire", "stellar", "aurora", "jubilant", "lullaby", "bamboo", "puzzle", "quicksilver", "oblivion","silhouette", "enchantment", "whirlwind", "gobsmacked", "nectar", "cascade", "velvet", "enigma", "ripple", "cloudberry","radiant", "zenith", "mellifluous", "effulgent", "tranquil", "whistle", "ethereal", "frolic", "nectarine", "gossamer","halcyon", "moonstone", "bamboozle", "magenta", "eloquent", "surreptitious", "alabaster", "chimerical", "petrichor", "chalice","ephemeral", "enigmatic", "quintessential", "resplendent", "cosmic", "luminescent", "oasis", "rhapsody", "symphony", "traverse","umbra", "verdant", "wonder", "zephyr", "beatitude", "bucolic", "evanescent", "luminary", "moondust", "sibilant", "brilliant", "red", "guess", "planet", "word", "constellation", "food", "sunflower", "whisper", "paradise", "mysterious", "umbrella", "nebula", "bright", "elephant", "panda", "harmony", "moonlight", "thereafter", "labyrinth", "sapphire", "stellar", "wonderstruck", "breathtaking", "ethereal", "puzzle", "bamboo", "silhouette", "enchantment", "moondust", "starlight", "star", "tranquil", "peace", "solace", "serene", "fragment", "trouble", "dysfunction", "petrify", "rattle", "intimidate", "nuisance", "harrassment", "despair", "disheartenment", "dejected", "jolly", "optimistic", "upbeat", "adieu", "candy", "cane", "delicious", "international", "characteristics", "person", "toothpaste", "development", "downtown", "general", "insurance", "language", "guess", "accurate", "laughter", "appear", "mother", "grandfather", "partake", "throat", "argument", "consist", "weight", "bee", "hysterical", "strew", "beet", "elegant", "wonderful", "chew", "kindhearted", "forecast", "approach", "fragrant", "breathe", "pardon", "neglect", "rhythm", "loss", "collect", "broadcast", "urge", "pollution", "fashion", "saturate", "anger", "fury", "curious", "scheme", "glue", "scissors", "fortunate", "fate", "destiny", "quiver", "constitute", "dinosaurs", "smiling", "cheer", "possessive", "interesting", "kindhearted", "rabbits", "process", "fragile", "shallow", "fork", "dream", "delusion", "belief", "hideous", "comfortable", "lettuce", "uncle", "uttermost", "fumbling", "mountain", "ubiquitous", "advertisement", "unslightly", "wrench", "wizard", "threatening", "jewel", "continue", "quarter", "nickel", "penny", "dime", "worthless", "government", "digestion", "vegetable", "sign", "easy", "promise", "rainbow", "lucky", "imperil", "vague", "overconfident", "aquatic", "opposite", "salvation", "king", "writer", "protagonist", "reader", "sword", "shield", "dagger", "weakness", "strength", "blend", "direction", "denominator", "ruthless", "thyself", "odds", "reveal", "perfect", "story", "tales", "false", "last", "innermost", "accursed", "victorious", "reindeer", "euouae", "incomprehensible", "pomegranate", "dragonfruit", "starfruit", "butterscotch", "butterfly", "polar", "rosemary", "flower", "deserving", "queue", "acute", "obtuse", "seraphim", "cherubim", "hereafter", "outline", "furthermore", "additionally", "welcome", "soar", "daffodil", "magazine", "string", "program", "manipulate", "fascinate", "unforeseen", "timeline", "eon", "alliance", "approximately", "atmosphere", ];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
let incorrectG = [];
let veiledW = Array(randomWord.length).fill('-');

console.log(randomWord);
console.log(veiledW);

const DOMSelectors = {
    form: document.querySelector(".formm"),
    text: document.querySelector(".guesses"),
};

function display() {
    document.getElementById("random-word").innerHTML = veiledW.join(' ');
    document.getElementById("incorrect-guesses").innerHTML = `Incorrect Guesses: ${incorrectG.join(', ')}`;
}

function guess() {
    document.querySelector(".enter-button").addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(".alert-warning").textContent = '';
        let guessedL = DOMSelectors.text.value.toLowerCase();
        DOMSelectors.text.value = '';
        match(guessedL);
        display();

        if (incorrectG.length > 6) {
            document.querySelector(".alert-warning").textContent = ``;
            document.querySelector(".alert-warning").textContent = `Game over. You lost. The word was ${randomWord}.`;
            DOMSelectors.text.disabled = true;
        } else if(randomWord === veiledW.join(``)){
            document.querySelector(".alert-warning").textContent = ``;
            document.querySelector(".alert-warning").textContent = `You won!`;
            DOMSelectors.text.disabled = true;
        } else {
            console.log('continue');
        }
    });
}

function match(x) { 
    if (incorrectG.includes(x) || veiledW.includes(x)) {
        document.querySelector(".alert-warning").textContent = "Please do not repeat a guess.";
    } else if (randomWord.includes(x)) {
        console.log(x);
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === x) {
                veiledW[i] = x;
            }
        }
    } else {
        incorrectG.push(x);
        console.log(incorrectG);
    }
}

function newGame() {
    location.reload();
}

document.querySelector(".new-game-b").addEventListener('click', function() {
    console.log("New Game button clicked");
    newGame();
});

display();
guess();
