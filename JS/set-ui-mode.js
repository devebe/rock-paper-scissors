function setUiMode() {
    let today = new Date();
    let timeNow = today.getHours();
    // timeNow = 14;
    console.log(timeNow);

    const selectedClass = document.querySelector('.container');
    console.log(selectedClass);
    if (timeNow > 6 && timeNow < 18) {
        selectedClass.classList.add('light');
    }
    else {
        selectedClass.classList.add('dark');
    }
}

setUiMode();