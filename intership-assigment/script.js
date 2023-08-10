const createButton = document.getElementById("createButton");
const deleteButton = document.getElementById("deleteButton");
const retrieveButton = document.getElementById("retrieveButton");

createButton.addEventListener("click", createCookie);
deleteButton.addEventListener("click", deleteCookie);
retrieveButton.addEventListener("click", retrieveCookie);

function createCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    document.cookie = `${name}=${value}`;
    alert(`Cookie "${name}" created.`);
}

function deleteCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const cookieData = `${name}=${value}`;
    document.cookie = `${cookieData}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    localStorage.setItem("deletedCookie", cookieData);
    alert(`Cookie "${name}" deleted.`);
}

function retrieveCookie() {
    const deletedCookie = localStorage.getItem("deletedCookie");
    if (deletedCookie) {
        const [name, value] = deletedCookie.split("=");
        document.cookie = `${name}=${value}`;
        alert(`Cookie "${name}" retrieved from local storage.`);
    } else {
        alert("No deleted cookie found in local storage.");
    }
}