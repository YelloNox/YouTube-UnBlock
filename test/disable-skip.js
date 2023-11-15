// ==UserScript==
// @name         Block YouTube Next API
// @description  Attempt to block requests on YouTube.
// @match        *://*/*
// @grant        GM_webRequest
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';

    GM_webRequest({
        urls: ["*://www.youtube.com/youtubei/v1/next*"],
        onBeforeRequest: function(details) {
            console.log("Blocking /youtubei/v1/next request");
            return { cancel: true };
        },
        types: ["xmlhttprequest"]
    });
        GM_webRequest({
        urls: ["*://www.youtube.com/api/stats/watchtime*"],
        onBeforeRequest: function(details) {
            console.log("Blocking /api/stats/watchtime request");
            return { cancel: true };
        },
        types: ["xmlhttprequest"]
    });

})();