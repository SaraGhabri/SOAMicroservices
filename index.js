const BASE_URL = "https://openlibrary.org/search.json?title=";

async function getBookData(title) {
    try {
        const response = await fetch(BASE_URL + encodeURIComponent(title));
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();

        if (data.docs.length > 0) {
            const book = data.docs[0]; // Prendre le premier résultat
            console.log("📖 Titre :", book.title);
            console.log("✍️ Auteur(s) :", book.author_name ? book.author_name.join(", ") : "Inconnu");
            console.log("📅 Année de publication :", book.first_publish_year || "Inconnue");
        } else {
            console.log("Aucun résultat trouvé pour ce titre.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données du livre :", error);
    }
}

getBookData("Harry Potter");
