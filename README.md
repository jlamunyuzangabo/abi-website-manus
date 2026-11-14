# Age Bridge Initiative website

This is the static Age Bridge Initiative (ABI) website. It uses plain HTML5, CSS and vanilla JavaScript, so it can be published on GitHub Pages without a build step.

## Preview locally

Open `index.html` directly in a browser, or run a small local server from this folder:

```
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Publish on GitHub Pages

1. Create a repository on github.com.
2. Upload the contents of the `abi-website` folder to the repository root so `index.html` is at the top level.
3. Open **Settings > Pages**.
4. Choose **Deploy from a branch**, select **main**, choose **/ (root)**, and click **Save**.
5. Wait 1 to 2 minutes. The address will be `https://username.github.io/repo-name/`.

## Edit text, colors and images

Edit page text in the corresponding `.html` file. Edit the six brand colors and font variables at the top of `assets/css/styles.css`. Keep the supplied logo and bridge files unchanged. Replace the clearly labeled photo slots only with client-supplied images.

## Swap the hero video

Replace `assets/img/hero-animation.mp4` with another MP4 using the same filename. Replace `assets/img/hero-animation-poster.png` with its poster image. Keep the video section background as `#f4f1eb`; the video is set to autoplay, muted, playsinline and does not loop.

## Connect the contact form

The form currently uses a pre-filled `mailto:` link. To connect a free form service later, edit `ABI_CONFIG.endpoint` at the top of `assets/js/main.js` and replace the submit handler with the service's documented POST request. Keep the no-JavaScript fallback email note.

## Preview changes with a second branch

Create a branch before editing: `git switch -c preview/my-change`. Preview the branch locally, make and review your changes, then merge it into `main` when ready.
