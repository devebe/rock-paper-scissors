function setUiMode() {
    let today = new Date();
    let timeNow = today.getHours();
    // timeNow = 12;

    const selectedClass = document.querySelector('.container');
    if (timeNow > 6 && timeNow < 18) {
        selectedClass.classList.add('light');
    }
    else {
        selectedClass.classList.add('dark');
    }
}

setUiMode();