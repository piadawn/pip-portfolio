# PIP — Sofia Dawn Estrada

A static portfolio based on the original PIP design. No paid builder, build step, package install, or backend is required. The layout, copy, three interactive category tabs, keyboard navigation, responsive grid, and email contact are included.

## Publish free on GitHub Pages

1. Create a **public** GitHub repository named `pip-portfolio`, using `main` as the default branch.
2. Upload the **contents** of this folder to the repository root. `index.html` must be at the root, not inside an extra folder. GitHub does not unzip archives: extract the ZIP first.
3. For the simplest setup, go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose **main** and **/(root)**, then Save.
4. Wait for the deployment to finish. GitHub displays the published URL in Settings → Pages. The project URL follows `https://YOUR-USERNAME.github.io/pip-portfolio/`.

### Optional automatic workflow

The included `.github/workflows/pages.yml` is an alternative. If using it, choose **GitHub Actions** as the Pages source instead of deploying from a branch. Trigger the workflow from the Actions tab or push a change to `main`. Use one publishing method. If using branch deployment, you can delete the optional workflow folder before upload.

## Add your project images

1. Upload each image under `assets/images/` in your repository. Use lowercase file names without spaces, such as `brand-marketing.jpg`.
2. Edit `projects.js`, find its project key, and change `src: ""` to `src: "./assets/images/brand-marketing.jpg"`.
3. Change `alt` to describe your actual image. Set `fit` to `"contain"` to show the entire graphic, or `"cover"` to fill and crop the slot.
4. Commit the changes. Pages publishes them automatically.

| Project key | Suggested file |
| --- | --- |
| `brand-marketing` | `assets/images/brand-marketing.jpg` |
| `video-motion` | `assets/videos/video-motion.mp4` |
| `pup-gradient` | `assets/images/pup-gradient.jpg` |
| `scam-dynamics` | `assets/images/scam-dynamics.jpg` |
| `consumer-research` | `assets/images/consumer-research.jpg` |
| `applied-mathematics` | `assets/images/applied-mathematics.jpg` |
| `ai-automation` | `assets/images/ai-automation.jpg` |

No images are required initially: each empty slot shows a styled typographic placeholder. Missing or invalid image paths fall back to that placeholder. The AI category is marked as a future project space.

## Add a video

Upload a small web-ready MP4 into `assets/videos/`, set the corresponding `src`, and use `type: "video"`. Videos have playback controls and do not autoplay. For large videos, host them on your preferred video platform and add a link in `index.html` instead of storing a large file in GitHub.

## Edit text or styling

- `index.html`: biography, experience, project titles and descriptions, contact email.
- `styles.css`: colors, typography, spacing, responsive layout.
- `projects.js`: image/video paths and accessible descriptions.
- `script.js`: tabs, arrow-key navigation, and media loading.

The DM Sans font loads from Google Fonts, with an Arial fallback when offline. All other functionality runs locally, without a service account or API key.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

Before publishing, review the personal copy and replace the project media when ready. This package has not been deployed to GitHub until repository access and Pages setup are completed.
