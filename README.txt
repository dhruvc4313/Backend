BACKEND WEB DEVELOPMENT ASSIGNMENT WEBSITE

Static website built with HTML, CSS and browser-side JavaScript.

FILES
- index.html: home page and topic search
- unit.html: reusable unit listing page (?unit=01 through ?unit=04)
- topic.html: reusable topic detail page (?topic=slug)
- css/style.css: responsive dark documentation-style design
- js/content.js: converted content from the supplied content.php
- js/data.js: unit metadata and data helpers
- js/components.js: shared header/footer, tables and code blocks
- js/main.js: home page interactions and search
- js/unit.js: unit page renderer
- js/topic.js: topic page renderer, table of contents and previous/next links

DEPLOY TO NETLIFY
1. Open Netlify and choose Add new site / Deploy manually (wording may vary).
2. Upload the entire backend-assignment folder or a ZIP of its contents as supported by the upload screen.
3. Make sure index.html is at the published root, not inside an extra nested folder.

NO SERVER RUNTIME, DATABASE, PHP OR BUILD STEP IS REQUIRED. Internet access is only used for optional Google Fonts; the site layout and content work without the font request.
