function setContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(result => {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(result, 'text/html');

        // Get the needed section
        var section = doc.querySelector('#main').innerHTML;
        console.log(section);
        
        // Set innerHTML
        const mainSection = document.getElementById('main');
        mainSection.innerHTML = section;
    });
}


function modifyContent(title) {
    if (title == '') {
        const nextURL = `/`;
        const nextTitle = 'index';
        const nextState = { additionalInformation: 'Updated the URL with JS' };
        // This will create a new entry in the browser's history, without reloading
        window.history.pushState(nextState, nextTitle, nextURL);
    
        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL);
    
        // Change content 
        setContent(nextURL);
        document.title = 'Home';
    
        // Enable going back to previous page in history
        window.onpopstate = function(event) {
            console.log(event.state.section);
            // TO DO
        } 

    } else {
        const nextURL = `/${title}/`;
        const nextTitle = `${title}`;
        const nextState = { additionalInformation: 'Updated the URL with JS' };
        
        // This will create a new entry in the browser's history, without reloading
        window.history.pushState(nextState, nextTitle, nextURL);
    
        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL);
    
        // Change content 
        setContent(nextURL);
        document.title = title.charAt(0).toUpperCase() + title.slice(1);;
    
        // Enable going back to previous page in history
        window.onpopstate = function(event) {
            console.log(event.state.section);
            // TO DO
        } 

    } // if else

}