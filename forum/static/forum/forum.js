function modifyContent(title) { 
    const nextURL = `/${title}/`;
    const nextTitle = `${title}`;
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);

    // This will replace the current entry in the browser's history, without reloading
    window.history.replaceState(nextState, nextTitle, nextURL);

    function setContent(title) {
        fetch(`/${title}/`)
        .then(response => response.text())
        .then(result => {
            // Convert the HTML string into a document object
            var parser = new DOMParser();
            var doc = parser.parseFromString(result, 'text/html');
    
            // Get the needed section
            var section = doc.querySelector('#main').innerHTML;
            console.log(section);
            
            // Set innerHTML
            mainSection.innerHTML = section;
        });
    }

    // Change content 
    const mainSection = document.getElementById('main');
    setContent(title);

    // Enable going back to previous page in history
    window.onpopstate = function(event) {
        console.log(event.state.section);
        // TO DO
    }
}