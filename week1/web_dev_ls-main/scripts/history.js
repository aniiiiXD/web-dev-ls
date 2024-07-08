let contentIndex = 0;
const contentArray = [
    "The History of FPS video games goes way back, starting with the famous 'COUNTER STRIKE' series, which popularized the multiplayer genre.",
    "Development started in 2012 by RIOT GAMES, undergoing many changes. It was finally released in beta under the name 'PROJECT A', and in 2020 it was officially released as 'VALORANT'.",
    "It gained popularity very quickly, attracting players from different games like CS2, Overwatch, and Fortnite.",
    "Currently, it has a huge player base for both casual and competitive playstyles."
];

function showContent(index) {
    const contentDiv = document.querySelector('.content p');
    contentDiv.textContent = contentArray[index];
}

function prevContent() {
    contentIndex = (contentIndex - 1 + contentArray.length) % contentArray.length;
    showContent(contentIndex);
}

function nextContent() {
    contentIndex = (contentIndex + 1) % contentArray.length;
    showContent(contentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showContent(contentIndex);
});
