let contentIndex = 0;
const contentArray = [
    "This is the genre of FPS games and in this fast-paced world, this has emerged as one of the most fun to play.",
    "Valorant is a team-based tactical shooter and first-person shooter set in the near future.",
    "Players control agents, characters who have supernatural powers from all over the world.",
    "Each agent has unique abilities, each requiring charges, as well as a unique ultimate ability which requires charging through kills, deaths, or spike actions."
];

function showContent(index) {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = `<p>${contentArray[index]}</p>`;
}

function prevContent() {
    contentIndex = (contentIndex - 1 + contentArray.length) % contentArray.length;
    showContent(contentIndex);
}

function nextContent() {
    contentIndex = (contentIndex + 1) % contentArray.length;
    showContent(contentIndex);
}

function scrollToContent() {
    const videoSection = document.getElementById('video-section');
    videoSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    showContent(contentIndex);
});
