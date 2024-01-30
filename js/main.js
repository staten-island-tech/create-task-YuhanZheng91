const words = ["apple", "banana", "orange", "grape", "strawberry", "melon", "peach", "plum", "pear", "kiwi", "mango", "blueberry", "watermelon", "cherry", "pineapple", "apricot", "raspberry", "blackberry", "lemon", "lime", "coconut", "pomegranate", "avocado", "fig", "grapefruit", "nectarine", "cranberry", "papaya", "passionfruit", "cantaloupe", "date", "guava", "lychee", "persimmon", "dragonfruit", "boysenberry", "elderberry", "kumquat", "mulberry", "quince", "rhubarb", "tangerine", "kiwifruit", "tamarind", "kiwano", "mangosteen", "plantain", "soursop", "starfruit", "ugli fruit", "acorn squash", "butternut squash", "zucchini", "pumpkin", "spaghetti squash", "cucumber", "bell pepper", "tomato", "carrot", "cabbage", "broccoli", "cauliflower", "spinach", "lettuce", "kale", "radish", "asparagus", "sweet potato", "potato", "onion", "garlic", "ginger", "turnip", "beet", "parsnip", "rutabaga", "celery", "celeriac", "fennel", "jicama", "leek", "shallot", "brussels sprout", "chard", "artichoke", "watercress", "endive", "escarole", "collard greens", "mustard greens", "arugula", "bok choy", "pak choi", "chives", "cilantro", "dill", "parsley", "thyme", "rosemary", "sage", "oregano", "basil", "mint", "coriander", "marjoram", "tarragon", "lavender", "cinnamon", "nutmeg", "cloves", "cardamom", "allspice", "vanilla", "chocolate", "caramel", "butterscotch", "marshmallow", "toffee", "fudge", "honey", "maple syrup", "molasses", "treacle", "jam", "jelly", "marmalade", "preserves", "relish", "chutney", "ketchup", "mayonnaise", "mustard", "vinegar", "soy sauce", "teriyaki sauce", "hoisin sauce", "salsa", "guacamole"];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
let incorrectG = [];
let veiledW = Array(randomWord.length).fill('-');
console.log(randomWord);
console.log(veiledW);

const DOMSelectors = {
    form: document.querySelector(".formm"),
    text: document.querySelector(".guesses"),
}

function display(){
    document.getElementById("random-word").innerHTML = veiledW.join(` `);
    document.getElementById("incorrect-guesses").innerHTML = incorrectG.join(`, `);
}

function guess(){
    document.querySelector(".enter-button").addEventListener('click', function(event){
        event.preventDefault();
        let guessedL = DOMSelectors.text.value;        
        DOMSelectors.text.value = ``;
        console.log(guessedL);
    });
}
guess();

display();