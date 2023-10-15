// ==UserScript==
// @name         YouTube DeBlock
// @description  Semi-working 2023 adblock for YouTube video. Uses "yout-ube.com" and replaces all videos with embeds.
// @author       YelloNolo
// @version      0.9.5
// @date         2023-10-10
// @namespace    https://yello.zip
// @homepage     https://github.com/YelloNolo/YouTube-Adblock
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    // The site that will replace the broken domain
    const newDomain = "yout-ube.com";
    // Any class the blocker uses to find the message.
    const blockerClass = 'ytd-enforcement-message-view-model';
    // Any class the broken video uses to be replaced.
    const ogVideoClass = 'yt-playability-error-supported-renderers';
    // Video Site
    const youtubeURL = "youtube.com";


    // --- Do Not Touch --- //
    // Temp Functions //
    const tempReplaceClass = "replaceme";
    let isBlocked = true;
    let isSubclick = false;
    var updatedURL = window.location.href;
    // Sets new domain
    function redirectDomain() {
        var userChoice = 1;
        var domainList = [
            "yout-ube.com",
            "nsfwyoutube.com"
        ];
        return redirectDomain(domainList[userChoice]);
    }

    // Function remove the "ad" from the page. It finds the "ad" by searching for the class name.
    function removeElementsByClassName() {
        const elements = document.querySelectorAll('.' + blockerClass);
        elements.forEach(element => {
            element.remove();
        });
    }

    // Create video embedding frame
    let globalFrame;
    function createJFrame(classToOverturn) {
        const newURL = getNewURL(newDomain);
        const elements = document.querySelectorAll("." + classToOverturn);

        elements.forEach(element => {
            const iframe = document.createElement('iframe');
            iframe.src = newURL;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.zIndex = '9999';
            iframe.allowfullscreen = 'true';

            globalFrame = iframe;

            // Replace the existing element with the custom URL
            element.parentNode.replaceChild(iframe, element);
            console.log("Modified URL:", newURL);
        });
    }


    // Removes the original video frame.
    function removeOgIframe() {
        const iframes = document.querySelectorAll('iframe');
        console.log("beginning the removal");
        iframes.forEach(iframe => {
            const paragraph = document.createElement('p');
            paragraph.className = tempReplaceClass;
            iframe.parentNode.insertBefore(paragraph, iframe);
            iframe.remove();
            console.log("Out with the old");
        });
    }

    // Embeds the new video into the page
    function updateVideoToNewFrame() {
        removeOgIframe();
        createJFrame(tempReplaceClass);
        console.log("In with the new");
    }

    // Temp function from testing. It tries to find if the video is unavalible, but is yet to work.
    function tmp() {
        const textToFind = "This video is unavailable";

        setTimeout(function () {
            for (let i = 0; i <= 100; i++) {
                if (window.includes(textToFind)) {
                    reloadPage();
                    console.log("Fetch Error Found... Reloading...");
                }
            }
            console.log("Fetch Pass");
        }, 3000);
    }

    // Function to replace "youtube.com" with "yout-ube.com"
    function getNewURL(newDomain) {
        const currentURL = window.location.href;
        if (currentURL.includes(youtubeURL)) {
            const newURL = currentURL.replace(youtubeURL, newDomain);
            return newURL;
        }
    }

    // Adds "youtube.com" to all nameless urls on webpage
    function addDomainToURLs() {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            let href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('www')) {
                href = 'https://www.' + youtubeURL + href;

                link.setAttribute('href', href);
            }
        });
    }

    function reloadPage() {
        location.reload();
    }

    // Just for testing...
    function test() {
        const testNewURL = getNewURL();
        console.log(testNewURL);
    }

    function replaceVideo() {
        if (!isSubclick) {
            console.log("replacing");
            removeElementsByClassName();
            createJFrame(ogVideoClass);
            isSubclick = true;
        } else {
            console.log("replacing subclick");
            updateVideoToNewFrame(tempReplaceClass, newDomain);
        }
        isBlocked = false;
    }

    // Function to run when the button is clicked
    function forceFix() {
        replaceVideo();
        addDomainToURLs();

        console.log("clicked");
        //test();
    }

    // Function that checks if the page is even blocked
    function checkClass() {
        // Webpage Search for Class(s)
        if (isBlocked) {
            console.log("Replacing Original");
            replaceVideo();
            addDomainToURLs();
        } else {
            urlTracker();
        }
    }

    function urlTracker() {
        var currentURL = window.location.href;

        if (currentURL != updatedURL) {
            console.log("Found New URL");
            updatedURL = window.location.href;

            isBlocked = true;
        } else {
            console.log("checking");
        }

    }

    var css = `
    .custom-btn:hover {
        transform: scale(0.95);
    }
    .custom-btn:active {
        transform: scale(0.8);
        border: none !important;

        transition: transform 0.1s ease;
    }
    .custom-btn {
        position: relative;
        displaty: inline-block;
        padding: 9px;
        margin-right: 16px;
        margin-left: 16px;
        color: white;
        background-color: transparent;
        box-shadow: none;
        text-shadow: none;
        border: 1px solid white;
        border-radius: 0px;
        z-index: 9999;

        transition: transform 0.3s ease;
    }
    `;

    // Add custom css to page
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));

    document.head.appendChild(style);

    // Create Button
    const button = document.createElement('button');
    button.textContent = 'Reload Frame';
    button.id.add = "button";
    button.classList.add("custom-btn");

    // Add button to page
    var exsistingParent = document.getElementById("end");
    exsistingParent.insertBefore(button, exsistingParent.firstChild);

    // Listen
    button.addEventListener('click', forceFix);

    // Run every second to check for updates on page
    // Will not ping any server till a new page is clicked
    const classCheckInterval = setInterval(checkClass, 1000);
    document.addEventListener('click', checkClass, 1000);

})();
