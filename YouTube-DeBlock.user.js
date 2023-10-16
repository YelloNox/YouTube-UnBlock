// ==UserScript==
// @name            YouTube DeBlock
// @description     Semi-working 2023 adblock for YouTube video. Uses "yout-ube.com" and replaces all videos with embeds.
// @author          YelloNolo
// @version         1.0.0
// @created         2023-10-10
// @namespace       https://yello.zip
// @homepage        https://github.com/YelloNolo/YouTube-Adblock
// @match           *://www.youtube.com/*
// @grant           none
// ==/UserScript==

(function () {
    // Any class the blocker uses to find the message.
    const blockerClass = 'ytd-enforcement-message-view-model';
    // Any class the broken video uses to be replaced.
    const ogVideoClass = 'yt-playability-error-supported-renderers';
    // Video Site
    const youtubeURL = "youtube.com";

    // Domains to redirect to.
    var domainList = [
        "yout-ube.com",
        "nsfwyoutube.com"
    ];

    // --- Do Not Touch --- //
    var newDomain = domainList[0];
    // Temp Functions //
    const tempReplaceClass = "replaceme";
    let isBlocked = false;
    let isSubclick = false;
    var updatedURL = window.location.href;

    // Function remove the "ad" from the page. It finds the "ad" by searching for the class name.
    function removeElementsByClassName(removeClass) {
        const elements = document.querySelectorAll('.' + removeClass);
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
            removeElementsByClassName(blockerClass);
            createJFrame(ogVideoClass);
            isSubclick = true;
        } else {
            console.log("replacing subclick");
            updateVideoToNewFrame(tempReplaceClass, newDomain);
        }
        isBlocked = false;
    }

    // Function to run when the button is clicked
    function reloadFrame() {
        replaceVideo();
        addDomainToURLs();

        console.log("clicked");
    }

    // Function that checks if the page is even blocked
    function checkClass() {
        const elements = document.querySelectorAll("." + blockerClass);
        if (elements.length > 0) {
            isBlocked = true;
        }
        if (isBlocked) {
            console.log("Replacing Original");
            replaceVideo();
            addDomainToURLs();
        } else {
            urlTracker();
            dropdownTracker();
        }
    }

    // Checks if the url has changed, if so, reload the iframe (thus reloading the video)
    function urlTracker() {
        var currentURL = window.location.href;

        if (currentURL != updatedURL) {
            console.log("Found New URL");
            updatedURL = window.location.href;

            isBlocked = true;
        }
    }

    // Checks if the dropdown has changed
    function dropdownTracker() {
        var dropdown = document.getElementById("dropdown");

        if (dropdown) {
            dropdown.addEventListener('change', function () {
                newDomain = domainList[dropdown.value];
                console.log("Selection Changed: " + newDomain);
                reloadFrame();
            });
        }
    }

    // Save button to local storage
    function dropdownStore() {
        rememberButton.addEventListener('click', function () {
            localStorage.setItem('selectedOption', dropdown.value);
            console.log("Selection Stored");
        });
    }

    // Custom CSS
    var css = `
    .btn-style {
        position: relative;
        display: inline-block;
        padding: 9px;
        height: 40px;
        color: white;
        background-color: transparent;
        box-shadow: none;
        text-shadow: none;
        border: 1px solid white;
        border-radius: 0px;
        z-index: 9999;
        opacity: 100%;
        transition: transform 0.3s ease;
        user-select: none;
    }
    .btn-style:hover {
        opacity: 80%;
    }
    .main-btn {
        margin-right: 16px;
        transition: transform 0.1s ease;
    }
    .main-btn:active {
        border: 1px solid transparent !important;
        transform: scale(0.9);
    }
    .dropdown-content {
        position: relative;
        background-color: black;
    }
    .custom-container {
        border: none;
        display: inline-block;
        margin-right: 16px;
        margin-left: 16px;
        transition: transform 0.3s ease;

    }
    `;

    // Create Container
    var customContainer = document.createElement("div");
    customContainer.classList.add("custom-container");

    // Create Button
    var reloadButton = document.createElement('button');
    reloadButton.textContent = 'Reload Frame';
    reloadButton.classList.add("btn-style", "main-btn");

    // Create Dropdown Menu
    var dropdownButton = document.createElement("select");
    dropdownButton.id = "dropdown";
    dropdownButton.classList.add("btn-style");
    dropdownButton.innerHTML = `
        <option class="dropdown-content" value="0">YouT-ube</option>
        <option class="dropdown-content" value="1">NSFW YouTube</option>
    `;

    // Add items to Container
    customContainer.appendChild(reloadButton);
    customContainer.appendChild(dropdownButton);

    // Append CSS to page
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // Find ID Location
    var exsistingParent = document.getElementById("end");

    // Add Container to Page
    var exsistingParent = document.getElementById("end");
    exsistingParent.insertBefore(customContainer, exsistingParent.firstChild);

    // Listen
    reloadButton.addEventListener('click', reloadFrame);

    // Run every second to check for updates on page
    // Will not ping any server till a new page is clicked
    const classCheckInterval = setInterval(checkClass, 1000);
    document.addEventListener('click', checkClass, 1000);

})();
