# YouTube UnBlock

**Status:** This project is fully(ish) functional as of 11/14/2023. (bugs bugs bugs. Can't catch-em-all)

## Is this blocker getting in the way? 
![a rat](/img/YouTube-ad-blocker-not-experiment-dark.png)

## 🩹 Look no further, as here is a bandied
The script [DeBlock](/YouTube-DeBlock.user.js) finds and removes the roadblock and embeds a [better frame](#custom-sources) in place of YouTube videos. You are still on the official YouTube™️ webpage with full access to comments, likes, (borked playlists), and recommendations.

>Note: I did not create any of the [Sources](#custom-sources) nor do I have any affiliations with them. I only embed them into "youtube.com".

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
- No Ads (Up to your uBlock)
- Access to:
  - Likes
  - Comments
  - Recommendations
- Stay on YouTube
- Full-Screen (YouTube Embed Only)
- Track Watch History (YouTube Embed Only)

❌ Cons
---
- Some Bugs
- Playlists are broken (I am unable to fix currently☹️)
- Timestamps do not work.

## 🥫 Exceptions
This script will not run if a block is not detected. Meaning, if the script does not find a block, none of the script functions will do anything.

## 🏠 Custom Sources
- [yout-ube.com](https://yout-ube.com) - Should be fixed
- Bugs, oh-no! ~~[nsfwyoutube.com](https://nsfwyoutube.com) - Fix might be coming soon (or)~~
- Recommend Some More to [Issues](https://github.com/YelloNolo/YouTube-UnBlock/issues/3)

## 📐 User Settings
There is a `User Customization` section at the start of the script. Features:
- Toggle Theater Button Visibility: `disableTheaterToggle`
- Toggle Reload Button Visibility: `disableReloadToggle`
- Toggle Optons Menu Visibility: `disableOptionsMenu`

## ✈️ Plans?
- [x] Theater Mode Toggle
- [ ] Add multi-language support (aka, translations with google translate)
- [ ] Fix Bug: Frame loads multiple times! Add the check to each runtime. 
- [ ] So... Playlists are broken :O. Youtube thinks the videos fail to load, then skips them, repeatedly, forever...
- [ ] Setting saved to local storage (for language implementation mostly)

## 💔 Issues?
If there are any issues, or you have a suggestion, please feel free to [open an issue](https://github.com/YelloNolo/YouTube-UnBlock/issues). I appreciate the feedback!

## Other Locations
You can currently find the script in:
- [GitHub Repository](https://github.com/YelloNolo/YouTube-UnBlock/)
- [Greasy Fork](https://greasyfork.org/en/scripts/477098-youtube-deblock)

---

Making YouTube Great Again<sup>TIM</sup>
