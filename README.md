# YouTube UnBlock

**Status:** This project is fully functional as of 10/27/2023. (bugs bugs bugs. Can't catch-em-all)

## Is this blocker getting in the way? 
![a rat](/img/YouTube-ad-blocker-not-experiment-dark.png)

## 🩹 Look no further, as here is a bandied
The script [DeBlock](/YouTube-DeBlock.user.js) finds and removes the roadblock and embeds your choice of an [other Source](#custom-sources) in place of [YouTube](https://youtube.com) videos. You are still on the official YouTube webpage with full access to comments, likes, playlists, and recommendations.

>Note: I did not create any of the [Custom Sources](#custom-sources) nor do I have any affiliations with them. I only redirect all links on "youtube.com".

## 🚫 Ad-Blocker Recommendation  
This script does not block ads, it only removes the block. I recommend [uBlock Origin](https://github.com/gorhill/uBlock) and [Decentraleyes](https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj). 

>If you have the resources, I highly recommend [AdGuard](https://www.adguard.com/en/)!

## 📂 GitHub Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other user script manager.
2. Open the script: "[YouTube-DeBlock.user.js](/YouTube-DeBlock.user.js)"
3. Click the "Raw" button at the top right of the page, this should prompt the user script install page.

## 🍴 Greasy Fork Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other user script manager.
2. Click install on the Greasy Fork webpage: [YouTube DeBlock](https://greasyfork.org/en/scripts/477098-youtube-deblock)


✅ Pros
---
- No Blockers
- No Ads
- Access to:
  - Comments
  - Likes
  - Recommendations
- Stays on YouTube
- Full-Screen (YouTube Embed Only)
- Track Watch History (YouTube Embed Only)

❌ Cons
---
- Some Bugs
- Playlists are broken (currently)
- Timestamps do not work. The video reverts to the beginning.

## 🥫 Exceptions
This script will not run if a block is not detected. Meaning, if the script does not find a block, none of the script functions will do anything.

## 🏠 Custom Sources
- [yout-ube.com](https://yout-ube.com) - Should be fixed
- [nsfwyoutube.com](https://nsfwyoutube.com) - Fix coming soon (whenever soon is)
- Recommend Some More to [Issues](https://github.com/YelloNolo/YouTube-UnBlock/issues/3)

## ✈️ Plans?
- [ ] Add multi-language support (aka, translations with google translate)
- [ ] Fix Bug: Frame loads multiple times! Add the check to each runtime. 
- [ ] So... Playlists are broken :O. Youtube thinks the videos fail to load, then skips them, repeatedly, forever...
- [ ] Setting saved to local storage (for language implementation mostly)

## 🎦 Theater Mode?
There is no official implementation yet, but you can press `t` and reload the page. This will swap between regular and cinematic mode.

## 💔 Issues?
If there are any issues, or you have a suggestion, please feel free to [open an issue](https://github.com/YelloNolo/YouTube-UnBlock/issues). I appreciate the feedback!

## Other Locations
You can currently find the script in:
- [GitHub Repository](https://github.com/YelloNolo/YouTube-UnBlock/)
- [Greasy Fork](https://greasyfork.org/en/scripts/477098-youtube-deblock)

---

Making YouTube Great Again<sup>TIM</sup>
