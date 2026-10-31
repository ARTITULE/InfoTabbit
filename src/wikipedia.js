import { getRandomWikipediaArticle } from "./api.js";

export async function initializeWikipedia() {
    const titleElement = document.querySelector("#random-wikipedia-title");
    const textElement = document.querySelector("#random-wikipedia-text");
    const imageElement = document.querySelector("#random-wikipedia-image");
    const linkElement = document.querySelector("#random-wikipedia-link");
    const button = document.querySelector("#random-wikipedia-button");

    async function loadArticle() {
        const article = await getRandomWikipediaArticle();

        if (!article) {
            titleElement.textContent = "Could not load article.";
            textElement.textContent = "";
            imageElement.removeAttribute("src");
            return;
        }

        titleElement.textContent = article.title;
        textElement.textContent = article.extract;

        if (article.thumbnail) {
            imageElement.src = article.thumbnail.source;
            imageElement.hidden = false;
        } else {
            imageElement.hidden = true;
        }

        linkElement.href = article.content_urls.desktop.page;
    }

    await loadArticle();

    button.addEventListener("click", async () => {
        button.disabled = true;
        titleElement.textContent = "Loading article...";
        textElement.textContent = "";

        try {
            await loadArticle();
        } finally {
            button.disabled = false;
        }
    });
}