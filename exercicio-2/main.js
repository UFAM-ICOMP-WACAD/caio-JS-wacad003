const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = ['onepiece.jpe','jujutsu.jpg','hunterxhunter.jpe','fullmetal.jpe','wanpanman.jpg'];

/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg': 'eye',
    'pic2.jpg': 'blur',
    'pic3.jpg': 'flour',
    'pic4.jpg': 'anubis',
    'pic1.jpg': 'buttlerfly',
}

/* Looping through images */

fileNames.forEach((e) => {
    
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${e}`);
    newImage.setAttribute('src', `./images/${e}`);
    newImage.setAttribute('alt', altText[e]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', `./images/${e}`)
    });

})

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.setAttribute("style", "background-color: rgba(0,0,0,0.5)");
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.setAttribute("style", "background-color: rgba(0,0,0,0)");
    }
});
