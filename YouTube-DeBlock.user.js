// ==UserScript==
// @name         YouTube DeBlock
// @description  Working 2023 adblock for YouTube video. Uses "yout-ube.com" and replaces all videos with embeds.
// @author       YelloNolo
// @version      0.9
// @date         2023-10-10
// @namespace    https://yello.zip
// @homepage     https://github.com/YelloNolo/YouTube-Adblock
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    // Function remove the "ad" from the page. It finds the "ad" by searching for the class name.
    function removeElementsByClassName(className) {
        const elements = document.querySelectorAll('.' + className);
        elements.forEach(element => {
            element.remove();
        });
    }

    // Function that replaces the video with an embed of "yout-ube.com". It finds the video by searching for the class name.
    function replaceVideoToEmbed(className) {
        const currentURL = window.location.href;
        const newURL = getNewURL();
        const elements = document.querySelectorAll("." + className);

        elements.forEach(element => {
            const iframe = document.createElement('iframe');
            iframe.src = newURL;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.zIndex = '9999';
            iframe.allowfullscreen = 'true';

            // Replace the existing element with the custom URL
            element.parentNode.replaceChild(iframe, element);
            console.log("Modified URL:", newURL);
        });
    }

    // Function to replace "youtube.com" with "yout-ube.com"
    function getNewURL() {
        const currentURL = window.location.href;
        if (currentURL.includes("youtube.com")) {
            const newURL = currentURL.replace("youtube.com", "yout-ube.com");
            return newURL;
        }
    }

    // Check for text "This video is unavailable" and reloads script if found 5 times.
    function checkForUnavailable() {
        const textToFind = "This video is unavailable";
        const pageText = document.body.textContent;
        const iframe = document.getElementById('iframe');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const iframeText = iframeDocument.body.textContent;

        setTimeout(function() {
            if (iframeText.includes(textToFind)) {
                iframe.contentWindow.location.reload();
                console.log("A");

            }
        }, 1000);
    }

    function isBlocked() {

        return false;
    }

    // Just for testing...
    function test() {
        const testNewURL = getNewURL();
        console.log(testNewURL);
    }

    // Main function for organising actions
    function removeAndReplace() {
        removeElementsByClassName('ytd-enforcement-message-view-model');
        replaceVideoToEmbed('yt-playability-error-supported-renderers');
        //setTimeout(function() { checkForUnavailable(); }, 3000); checkForUnavailable();
    }

    // Function to run when the button is clicked
    function onButtonClick() {
        removeAndReplace();
        //test();
    }

    // Function that checks if the page is even blocked
    function onCheckForBlock() {
        null;
    }

    //window.addEventListener('load', onCheckForBlock);

    // Button for testing. I've yet to get the page to auto load. It also helps with debugging.
    const button = document.createElement('button');
    button.textContent = 'Remove Enforcement';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.addEventListener('click', onButtonClick);

    document.body.appendChild(button);

})();
