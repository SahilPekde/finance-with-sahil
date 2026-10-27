FINANCE WITH SAHIL — WEBSITE UPDATE

1. Upload ALL contents of this folder to the root of the GitHub repository, preserving the folder structure.
2. This build assumes the host serves static directories (index.html at /blog/ and /videos/). A Cloudflare Worker serving only one hardcoded HTML response must be updated to serve static assets, or migrated to Cloudflare Workers Static Assets / Pages. Test /blog/ and /videos/ after deployment.
3. Publish new videos by editing content/videos.js. Add youtubeId (the 11-character ID), title, description. Thumbnails load automatically from YouTube.
4. Publish new blogs by creating blog/YOUR-SLUG/index.html, using an existing article page as a template, and adding its metadata to content/blogs.js.
5. COMMENTS: Go to GitHub repository Settings > General > Features > Discussions, enable it; install/configure Giscus at https://giscus.app, then fill in repo, repoId, category, categoryId in content/site-config.js. Giscus requires GitHub sign-in for commenters.
6. LIKES/DISLIKES: The included reaction buttons are local-to-device only; they are NOT public counts. For shared anonymous likes/dislikes or guest comments, a database and moderated backend are required.
7. Calculators: original embedded calculator formulas and interface preserved; fixed iframe heights replaced with resize messages. Check each tab, advanced ratios, CSV download and mobile after deployment.
8. The first double-entry blog is a starter draft based on the agreed topic; review and edit before public release.
