// ==UserScript==
// @name            YouTube DeBlock
// @description     Fully Working 2023 UnBlocker for YouTube. Get rid of that pesky blocker, and return my vids!
// @author          YelloNolo
// @version         1.1.3
// @created         2023-10-10
// @namespace       https://yello.zip
// @homepage        https://github.com/YelloNolo/YouTube-Adblock
// @match           *://www.youtube.com/*
// @grant           none
// ==/UserScript==

(function () {
  "use strict";

  /* User Customization */
  const disableTheaterToggle = false;
  const disableReloadToggle = false;
  const disableOptionsMenu = false;
  /* Language INFO: https://github.com/YelloNolo/YouTube-UnBlock/blob/main/language.md */
  const language = "en";
  /* End User Customization */

  // Any class the blocker uses
  const blockerClass = "ytd-enforcement-message-view-model";
  // Any class on the broken video (e.x. yt-playability-error-supported-renderers)
  const ogVideoClass = "yt-playability-error-supported-renderers";
  // Class of the parent for the custom content locaiton
  const customContentParentID = "end";
  // Original Youtube URL
  const youtubeURL = "youtube.com";
  // Change to theater mode on load
  const changeTheaterOnStart = false;

  // Domains to redirect to.
  var domainList = ["youtube.com/embed", "yout-ube.com", "nsfwyoutube.com"];

  // --- Do Not Touch --- //
  var newDomain = domainList[0];
  // Temp Functions //
  const tempReplaceClass = "replaceme";
  let isBlocked = false;
  let isSubChange = false;
  let isChangingFrame = false;
  var updatedURL = window.location.href;
  var previousDropdownValue;
  // --- Do Not Touch --- //

  // -------------- Main Loop Funcitons -------------- //

  // Function that checks if the page is even blocked
  var theaterStartRunOnce = false;
  function checkClass() {
    const elements = document.querySelectorAll("." + blockerClass);

    if (elements.length > 0) {
      isBlocked = true;
      console.log("blocked [checkClass]: yes");
    }

    if (isBlocked) {
      console.log("Replacing Original [checkClass]");
      replaceVideo();
      addDomainToURLs();
      isBlocked = false;
    } else {
      // console.log("[checkClass] #2") - Cogs Log
      urlTracker();
      dropdownTracker();
    }

    if (changeTheaterOnStart && !theaterStartRunOnce) {
      changeTheaterMode(true);
      theaterStartRunOnce = true;
    }
  }

  // -------------- Event Listeners -------------- //

  // Checks if the url has changed, if so, reload the iframe (thus reloading the video)
  function urlTracker() {
    var currentURL = window.location.href;
    // console.log("Test URL [urlTracker]"); - Cogs Log
    if (currentURL != updatedURL) {
      console.log("Found New URL");
      updatedURL = window.location.href;
      if (isSubChange) {
        isBlocked = true;
      }
    }
  }

  // Checks if the dropdown has changed
  function dropdownTracker() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown) {
      changeSelection(dropdown);
    }
  }

  function changeSelection(dropdown) {
    try {
      dropdown.addEventListener("change", function () {
        checkDropdownChange(dropdown);
      });
    } catch (error) {
      console.error("Error [changeSelection]: " + error);
    }
  }

  function checkDropdownChange(dropdown) {
    var newValue = dropdown.value;

    // Check if the value has actually changed
    if (newValue !== previousDropdownValue) {
      newDomain = domainList[newValue];
      console.log("Selection Changed: " + newDomain);
      reloadFrame();

      // Update the previousValue variable
      previousDropdownValue = newValue;
    }
  }

  // Reload Frame when "Reload Frame" button is clicked
  function reloadFrame() {
    replaceVideo();
    addDomainToURLs();

    console.log("clicked");
  }

  // -------------- Checks -------------- //

  function appendingFrame(isSet) {
    if (isSet == true) {
      isChangingFrame = true;
    } else {
      isChangingFrame = false;
    }
    console.log("ChangingFrames: " + changingFrame);
  }

  // -------------- Actions -------------- //

  // Remove the *blocker* from the page by locating the class name.
  function removeElementsByClassName(removeClass) {
    console.log("Removing [removeElementsByClassName]: " + removeClass);
    const elements = document.querySelectorAll("." + removeClass);
    try {
      elements.forEach((element) => {
        element.remove();
      });
    } catch (error) {
      console.error(
        "Error removing elements [removeElementsByClassName]: " + error
      );
    }
  }

  // Checks string and returns if contains matching text
  function checkText(string, text) {
    console.log("Checking string [checkText]");
    return string.includes(text);
  }

  // Function to replace "youtube.com" with selected domain
  function getNewURL(newDomain) {
    console.log("New URL [newDomain]: " + newDomain);
    const currentURL = window.location.href;
    try {
      if (currentURL.includes(youtubeURL)) {
        const newURL = currentURL.replace(youtubeURL, newDomain);
        return newURL;
      }
    } catch (error) {
      console.error("Error [newURL]: " + error);
    }
  }

  // Adds "youtube.com" to all nameless urls on webpage
  function addDomainToURLs() {
    console.log("Adding [addDomainToURLs]");
    const links = document.querySelectorAll("a");

    try {
      links.forEach((link) => {
        let href = link.getAttribute("href");
        if (href && !href.startsWith("http") && !href.startsWith("www")) {
          href = "https://www." + youtubeURL + href;

          link.setAttribute("href", href);
        }
      });
    } catch (error) {
      console.error("[addDomainToURLs] #1", error);
    }
  }

  // Is it the first video change, or recurring?
  function replaceVideo() {
    if (!isSubChange) {
      console.log("replacing [replaceVideo]");
      removeElementsByClassName(blockerClass);
      createJFrame(ogVideoClass);
      isSubChange = true;

      return;
    }
    if (isSubChange) {
      console.log("replacing subclick [replaceVideo]");
      removeOgIframe();
      createJFrame(tempReplaceClass);
      console.log("In with the new [replaceVideo]");
    }

    isBlocked = false;
  }

  // Fixes unusable URL(s)
  function fixURL(URL) {
    const playlistCheck = "&list=";
    const watchStamp = "watch?v=";
    const timestamp = "&t=";
    const isURL = checkText(URL, youtubeURL);
    const isPlaylist = checkText(URL, playlistCheck);
    const isTimestamp = checkText(URL, timestamp);

    console.log(
      "isURL:" +
        isURL +
        " isPlaylist:" +
        isPlaylist +
        " isTimestamp:" +
        isTimestamp
    );
    console.log("URL [fixURL]:" + URL);

    if (isURL) {
      URL = URL.replace(watchStamp, "");
      console.log("Is Not Playlist [fixURL]: " + URL);
    }
    if (isURL && isTimestamp) {
      URL = URL.split("&t=")[0];
      console.log("URL Split Timestamp Fix [fixURL]: " + URL);
    }
    if (isPlaylist) {
      URL = URL.split(playlistCheck)[0];
      console.log("URL Split Playlist Fix [fixURL]: " + URL);
    }

    return URL;
  }

  var theaterModeToggle = true;
  function toggleTheater() {
    if (theaterModeToggle) {
      console.log("Changing Mode [toggleTheater]: Off");
      theaterModeToggle = false;
    } else {
      console.log("Changing Mode [toggleTheater]: On");
      theaterModeToggle = true;
    }
    changeTheaterMode(theaterModeToggle);
  }

  // Thanx https://stackoverflow.com/questions/53584026/toggle-the-cinema-mode-on-youtube-with-javascript :>
  function changeTheaterMode(state) {
    try {
      const collection = document.getElementsByTagName("ytd-watch-flexy");
      const ytd_watch_flexy = collection.item(0);
      if (!ytd_watch_flexy) {
        console.error("No ytd-watch-flexy Found[changeTheaterMode]");
        return;
      }

      if (state) {
        ytd_watch_flexy.theater = true;
        console.log("Theater On [changeTheaterMode]");
      } else {
        ytd_watch_flexy.theater = false;
        console.log("Theater Off [changeTheaterMode]");
      }
    } catch (error) {
      console.error("Theater-Mode Error [changeTheaterMode]: " + error);
    }
  }

  // -------------- JFrame Control -------------- //
  // Create video embedding frame
  function createJFrame(classToOverturn) {
    var newURL = getNewURL(newDomain);
    const elements = document.querySelectorAll("." + classToOverturn);
    console.log("newURL Beginning [createJFrame]: " + newURL);

    newURL = fixURL(newURL);

    try {
      elements.forEach((element) => {
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.src = newURL;
        iframe.allow =
          "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        // autoplay                   ^ (autoplay removed after bug; also never worked anyhow)
        iframe.allowFullscreen = true;
        iframe.zIndex = "9999";

        // Replace the existing element with the custom URL
        element.parentNode.replaceChild(iframe, element);
        console.log("Modified URL:", newURL);
      });
    } catch (error) {
      console.error("Error creating iframe [createJFrame]: " + error);
    }
  }

  // Removes the original video frame.
  function removeOgIframe() {
    const iframes = document.querySelectorAll("iframe");

    console.log("removing jFrame [removeOgIframe]");
    try {
      iframes.forEach((iframe) => {
        const paragraph = document.createElement("p");
        paragraph.className = tempReplaceClass;
        iframe.parentNode.insertBefore(paragraph, iframe);
        iframe.remove();
        console.log("Out with the old [removeOgIframe]");
      });
    } catch (error) {
      console.error("Error [removeOgIframe]: " + error);
    }
  }

  // -------------- Experimental Features (unused) -------------- //

  // Save dropdown selection to local storage
  function dropdownStore() {
    try {
      rememberButton.addEventListener("click", function () {
        localStorage.setItem("selectedOption", dropdown.value);
        console.log("Selection Stored");
      });
    } catch (error) {
      console.error("Error [dropdownStore]: " + error);
    }
  }

  // -------------- Language Information -------------- //

  // xtxt is for the type of text needed (i.e. dropdown / theater mode button / ect...) for the main category of text.
  // vers is the item in the container (i.e. dropdown: youtube, yout-ube) for multiple subtexts.
  // top tier explination!
  function getText(xtxt, vers) {
    const translations = {
      en: {
        theaterMode: ["Theater"],
        reloadFrame: ["Reload Frame"],
        dropdown: ["YouTube™", "YouTube [Embed]"],
      },
      de: {
        theaterMode: ["Theater"],
        reloadFrame: ["Rahmen neu laden"],
        dropdown: ["YouTube™", "YouTube [Einbetten]"],
      },
      es: {
        theaterMode: ["Teatro"],
        reloadFrame: ["Recargar Marco"],
        dropdown: ["YouTube™", "YouTube [Incrustar]"],
      },
      fr: {
        theaterMode: ["Théâtre"],
        reloadFrame: ["Recharger le Cadre"],
        dropdown: ["YouTube™", "YouTube [Intégrer]"],
      },
      it: {
        theaterMode: ["Teatro"],
        reloadFrame: ["Ricarica Cornice"],
        dropdown: ["YouTube™", "YouTube [Incorpora]"],
      },
      jp: {
        theaterMode: ["劇場"],
        reloadFrame: ["フレームを再読み込み"],
        dropdown: ["YouTube™", "YouTube [埋め込み]"],
      },
      ko: {
        theaterMode: ["극장"],
        reloadFrame: ["프레임 다시 로드"],
        dropdown: ["YouTube™", "YouTube [임베드]"],
      },
      nl: {
        theaterMode: ["Theater"],
        reloadFrame: ["Frame Herladen"],
        dropdown: ["YouTube™", "YouTube [Insluiten]"],
      },
      pl: {
        theaterMode: ["Teatr"],
        reloadFrame: ["Przeładuj Ramkę"],
        dropdown: ["YouTube™", "YouTube [Osadź]"],
      },
      pt: {
        theaterMode: ["Teatro"],
        reloadFrame: ["Recarregar Quadro"],
        dropdown: ["YouTube™", "YouTube [Embutir]"],
      },
      ru: {
        theaterMode: ["Театр"],
        reloadFrame: ["Перезагрузить Рамку"],
        dropdown: ["YouTube™", "YouTube [Вставить]"],
      },
      ar: {
        theaterMode: ["مسرح"],
        reloadFrame: ["إعادة تحميل الإطار"],
        dropdown: ["YouTube™", "YouTube [تضمين]"],
      },
      zh: {
        theaterMode: ["剧院"],
        reloadFrame: ["重新加载框架"],
        dropdown: ["YouTube™", "YouTube [嵌入]"],
      },
      hi: {
        theaterMode: ["रंगमंच"],
        reloadFrame: ["फ्रेम पुनः लोड करें"],
        dropdown: ["YouTube™", "YouTube [एम्बेड करें]"],
      },
      sv: {
        theaterMode: ["Teater"],
        reloadFrame: ["Ladda om Ramen"],
        dropdown: ["YouTube™", "YouTube [Bädda in]"],
      },
      no: {
        theaterMode: ["Teater"],
        reloadFrame: ["Last Inn Rammen på Nytt"],
        dropdown: ["YouTube™", "YouTube [Bygg inn]"],
      },
      da: {
        theaterMode: ["Teater"],
        reloadFrame: ["Genindlæs Rammen"],
        dropdown: ["YouTube™", "YouTube [Vložit]"],
      },
      cs: {
        theaterMode: ["Divadlo"],
        reloadFrame: ["Rámeček znovu načíst"],
        dropdown: ["YouTube™", "YouTube [Vložit]"],
      },
      hu: {
        theaterMode: ["Színház"],
        reloadFrame: ["Keret Újratöltése"],
        dropdown: ["YouTube™", "YouTube [Beágyazás]"],
      },
      tr: {
        theaterMode: ["Tiyatro"],
        reloadFrame: ["Çerçeveyi Yeniden Yükle"],
        dropdown: ["YouTube™", "YouTube [Gömme]"],
      },
    };

    const languageTranslations = translations[language];
    return languageTranslations && languageTranslations[xtxt]
      ? languageTranslations[xtxt][vers]
      : undefined;
  }

  // -------------- Custom HTML Start -------------- //

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

  var ranCustomContentOnce = false;
  function customContent() {
    // Create Container
    var customContainer = document.createElement("div");
    customContainer.classList.add("custom-container");
    /* Not Complete */
    // Create Button Theater Mode
    var theaterButton = document.createElement("button");
    theaterButton.textContent = getText("theaterMode", 0);
    theaterButton.classList.add("btn-style", "main-btn");
    /**/
    // Create Button Reload
    var reloadButton = document.createElement("button");
    reloadButton.textContent = getText("reloadFrame", 0);
    reloadButton.classList.add("btn-style", "main-btn");

    // Create Dropdown Menu
    var dropdownButton = document.createElement("select");
    dropdownButton.id = "dropdown";
    dropdownButton.classList.add("btn-style");
    const options = [
      { value: "0", text: getText("dropdown", 0) },
      { value: "1", text: getText("dropdown", 1) },
      //{ value: "2", text: "NSFW YouTube [Broken!]" } Fix later?
    ];
    var htmlContent = options
      .map(
        (option) =>
          `<option class="dropdown-content" value="${option.value}">${option.text}</option>`
      )
      .join("");
    dropdownButton.innerHTML = htmlContent;

    // -------------- Custom HTML End -------------- //

    // ----- Appending custom content to page ----- //

    // Add items to Container

    if (!disableTheaterToggle) {
      customContainer.appendChild(theaterButton);
    }
    if (!disableReloadToggle) {
      customContainer.appendChild(reloadButton);
    }
    if (!disableOptionsMenu) {
      customContainer.appendChild(dropdownButton);
    }

    // Append CSS to page
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // Find ID Location
    var exsistingParent = document.getElementById(customContentParentID);
    console.log("Found exsistingParent: " + exsistingParent);

    // Add Container to Page
    exsistingParent.insertBefore(customContainer, exsistingParent.firstChild);
    console.log("Added customContainer to page");

    theaterButton.addEventListener("click", toggleTheaterStingyWorkaround);
    reloadButton.addEventListener("click", reloadFrame);

    ranCustomContentOnce = true;
  }

  try {
    if (!ranCustomContentOnce) {
      customContent();
      console.log("Loaded [customContent]");
    } else {
      console.log("Tried to load, but was allready loaded [customContent]");
    }
  } catch (error) {
    console.error("Error [customContent]: " + error);
  }

  // -------------- Active Listeners -------------- //

  // Run every second to check for updates on page (Will not ping any server till a new page is clicked)
  try {
    window.setInterval(checkClass, 1000);
  } catch (error) {
    console.error("Error Running [window.setInterval]: " + error);
  }
  try {
    document.addEventListener("click", checkClass, 1000);
  } catch (error) {
    console.error("Error Running [document.addEventListener]: " + error);
  }

  // ------------- Passive Listeners ------------- //

  // Fullscreen Toggle
  function toggleTheaterStingyWorkaround() {
    const event = new KeyboardEvent("keydown", {
      key: "t",
      keyCode: 84,
    });
    document.dispatchEvent(event);
    location.reload();
  }
})();
