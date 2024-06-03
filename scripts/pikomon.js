import { pikomonData } from "./database.js"

//define and export function to generate HTML blocks for each pikomon in database
    //each block should have:
        //image at the top
        //name just beneath image
        //details beneath name



export const createPikomonHtml = () => {
    const pikomon = pikomonData()
    let pikomonHtml = ``
    pikomon.forEach((piko) => {
        pikomonHtml += `
            <article class="piko-card">
            <img class="piko-img" src="${piko.imageUrl}" alt="Picture of ${piko.name}">
            <h3 class="honk">#${piko.id} ${piko.name}</h3>
            <ul class="piko-info bungee-spice">
                <li class="piko-category">Category: ${piko.category}</li>
                <li class="piko-abilities">Ability: ${piko.abilities}</li>
                <li class="piko-weakness">Weakness: ${piko.weakness}</li>
            </ul>
            </article>
        `
    })
    return pikomonHtml
}

