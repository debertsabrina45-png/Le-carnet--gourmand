console.log("JavaScript chargé !");

const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const errorMessage = document.querySelector("#error-message");
const commentsList = document.querySelector("#comments-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name.length < 2) {
        errorMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
        errorMessage.style.display = "block";
        return;
    }

    if (comment.length < 10) {
        errorMessage.textContent = "Le commentaire doit contenir au moins 10 caractères.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.textContent = "";
    errorMessage.style.display = "none";

    const commentCard = document.createElement("article");
    commentCard.classList.add("comment");

    const author = document.createElement("div");
    author.classList.add("comment-author");
    author.textContent = name;

    const text = document.createElement("p");
    text.classList.add("comment-text");
    text.textContent = comment;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "🗑️ Supprimer";

    deleteButton.addEventListener("click", function () {
        commentCard.remove();
    });

    commentCard.appendChild(author);
    commentCard.appendChild(text);
    commentCard.appendChild(deleteButton);

    commentsList.prepend(commentCard);

    form.reset();
});