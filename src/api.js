

export async function getRandomFact() {

    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return { text: "Could not load a fact." }
    }

    
}

export async function getRandomDog() {

    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return {
            message: null,
            status: "error"
        };

    }
    
}

export async function getPokemon(id) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;

    }
}

export async function getRandomWikipediaArticle() {
    try {
        const randomResponse = await fetch(
            "https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&origin=*"
        );

        if (!randomResponse.ok) {
            throw new Error("Request failed");
        }

        const randomData = await randomResponse.json();
        const title = randomData.query.random[0].title;

        const summaryResponse = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
        );

        if (!summaryResponse.ok) {
            throw new Error("Request failed");
        }

        return await summaryResponse.json();

    } catch (error) {
        console.error(error);
        return null;
    }
}