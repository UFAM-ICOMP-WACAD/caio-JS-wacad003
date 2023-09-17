const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


const storyText = `Hoje está um belo dia para uma massa, então que tal um :insertx:?. Vá comprar os ingredientes para um bom :inserty:, e como proteina... que tal :insertz:?. No fim do preparo, você Bob, terá um bom :insertx: para aproveitar.`

const insertx = ["Espaguete", "Penne", "Macarrão Parafuso"]
const inserty = ["Molho de tomate", "Molho branco", "Alho e óleo"]
const insertz = ["Carne", "Frango", "Bacon"]

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("ita").checked) {
        // const weight = Math.round(300 * 0.0714286) + ' stone';
        // const temperature = Math.round((94-32) * 5/9) + ' centigrade';
        // newStory = newStory.replace('94 fahrenheit', temperature);
        // newStory = newStory.replace('300 pound', temperature);

        newStory = newStory.replace("Espaguete", "Spaguetti");
        newStory = newStory.replace("Parafuso", "Maccheroni alle viti");

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}