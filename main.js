//1.Create an html-page for displaying and editing text. When opening the page, the text should be

document.addEventListener("keydown", (event) => {
    console.log(event.ctrlKey);
     // Don’t forget to turn off default settings for these hotkey combinations.

    // When clicking Ctrl+E, textarea appears instead of div and can be edited. 
    if (event.code === 'KeyE' && event.ctrlKey) {
        event.preventDefault()
        const textAreaEdit = document.getElementById('editText')
        textAreaEdit.classList.add("visible");

        const displayText = document.getElementById('display_text')
        displayText.classList.add("hidden");
        textAreaEdit.value = displayText.textContent;

    }

    // When pressing Ctrl+S, the div with edited text appears instead of textarea
    if (event.code === 'KeyS' && event.ctrlKey) {
        event.preventDefault()
        const textAreaEdit = document.getElementById('editText')
        textAreaEdit.classList.remove("visible");

        const displayText = document.getElementById('display_text')
        displayText.classList.remove("hidden");

        displayText.textContent = textAreaEdit.value;
    }
});

//displayed with div tag.