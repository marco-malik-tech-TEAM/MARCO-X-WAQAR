# Downloads setup (.video / .ig / .apk)

- `.video <name|link> [480]` - searches YouTube, sends thumbnail + title + views, then the FULL video (up to 2 GB).
  Default quality 720p; add 360/480/1080 at the end. Files over 100 MB arrive as an .mp4 file (tap to download).
- `.ig <link>` - Instagram reel/post/carousel.
- `.apk <app name | package id>` - real APK file from Aptoide, up to 2000 MB.

yt-dlp is downloaded automatically into `./bin` on first use (needs internet access to github.com).

## If YouTube says "Sign in to confirm you're not a bot" / Instagram says "login required"
Datacenter IPs get blocked. Do not send your cookies to anyone. Export your own cookies
from a browser where you are logged in, in Netscape format, and provide them to Railway
as a private secret. The preferred option is `YT_COOKIES_B64` (base64 contents of the file);
`YT_COOKIES_FILE` is also supported when using a mounted private volume. For Instagram use
`IG_COOKIES_B64` or `IG_COOKIES_FILE`. Never commit `cookies*.txt` to GitHub. `YT_DLP_PROXY`
is intentionally not required and should not be used to bypass provider controls.
