import { getRandomFact } from "./api";

export async function initializeFact() {

    const factElement = document.querySelector("#random-fact");
    const newFactButton = document.querySelector('#random-fact-button');
    

    const factData = await getRandomFact();
    factElement.textContent = factData.text;

    newFactButton.addEventListener("click", async () => {
        newFactButton.disabled = true;
        factElement.textContent = "Loading a fact...";

        try {
            const factData = await getRandomFact();
            factElement.textContent = factData.text;
        }
        finally {
            newFactButton.disabled = false;
        }
    });
    
}