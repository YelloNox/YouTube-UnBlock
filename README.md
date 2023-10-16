# YouTube UnBlock
**Status:** This project is fully functional as of 10/14/2023.

## Is this blocker getting in the way?
![indeed an image](/img/YouTube-ad-blocker-experiment.png)

## 🩹 Look no further, as here is a bandied
The script [DeBlock](/YouTube-DeBlock.user.js) finds and removes the roadblock and embeds your choice of an [Outside Source](#custom-sources) in place of [YouTube](https://youtube.com) videos. You are still on the official YouTube webpage with full access to comments, likes, playlists, and recommendations. There are only a few cons [Found Here](#cons)

>Note: I did not create any of the [Custom Sources](https://github.com/YelloNolo/YouTube-UnBlock/tree/main#custom-sources) nor do I have any affiliations with them, I only redirect all links on "youtube.com".

>This script does not block ads, it only removes the block. I reccommend [uBlock Origin](https://github.com/gorhill/uBlock) and [Decentraleyes](https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj). I also reccommend [AdGuard](https://www.adguard.com/en/) if you have the resources.

<br>

## Github Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other userscript manager.
2. Open the script: "[YouTube-DeBlock.user.js](/YouTube-DeBlock.user.js)"
3. Click the "Raw" button at the top right of the page, this should prompt the userscript install page.

## Greasy Fork Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other userscript manager.
2. Click install on the Greasy Fork webpage: [YouTube DeBlock](https://greasyfork.org/en/scripts/477098-youtube-deblock)


Pros
---
- No Blockers
- Access to:
  - Comments
  - Likes
  - Playlists
  - Recommendations
- Stays on YouTube

Cons
---
- Only unblocked videos will be added to YouTube history, with an [exception](#exceptions).
- Full-Screen Broken
- The current version has some bugs

## Exceptions
This script will not run if a block is not detected. Meaning, videos without blocks will be added to history.

# Custom Sources - Fix for NSFW coming soon
- [yout-ube.com](https://yout-ube.com)
- [nsfwyoutube.com](https://nsfwyoutube.com)
- Reccommend Some More to [Issues](/issues/3)

## Issues?
If there are any issues or you have a suggestion, please feel free to [open an issue](https://github.com/YelloNolo/YouTube-UnBlock/issues). I appreciate the feedback!

## Other Locations
You can currently find the script in:
- [GitHub repository](https://github.com/YelloNolo/YouTube-UnBlock/)
- [Greasy Fork](https://greasyfork.org/en/scripts/477098-youtube-deblock)