function getVideo() {
    const currentURL = new URL(window.location.toLocaleString());
    const title = document.getElementById("title");
    const video = document.getElementById("watch");

    if (video === null || title === null) {
        console.error("Video Element not found.");
    }

    switch (currentURL.search) {
        case '?season=1':
            title.innerHTML = "The Mandalorian Season 1";
            video.src = "components/assets/season1.webm";
            break;
        case '?season=2':
            title.innerHTML = "The Mandalorian Season 2";
            video.src = "components/assets/season2.webm";
            break;
        case '?season=3':
            title.innerHTML = "The Mandalorian Season 3";
            video.src = "components/assets/season3.webm";
            break;
        default:
            video.style = "display: none;"
    }
}