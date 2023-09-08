const { dowlnloadPokemonPicture } = require("./downloader.js");

dowlnloadPokemonPicture().then(savedFileOutput => {
    console.log("New image is saved to: " + savedFileOutput);
}).catch(error => {
    console.log(error);
});

async function exampleDownload(){
    let savedFileOutput = await dowlnloadPokemonPicture();
    console.log("New image is async saved to: " + savedFileOutput);
}
exampleDownload();