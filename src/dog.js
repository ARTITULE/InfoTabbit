import { getRandomDog } from "./api";


export async function initializeDog() {
    
    const dogImage = document.querySelector("#random-dog-image");
    const newDogButton = document.querySelector("#random-dog-button");

    const imageData = await getRandomDog();
    dogImage.src = imageData.message;

    newDogButton.addEventListener("click", async () => {
        newDogButton.disabled = true;

        try {

            const imageData = await getRandomDog();
            dogImage.src = imageData.message;

        } finally {
            newDogButton.disabled = false;
        }

    });

}