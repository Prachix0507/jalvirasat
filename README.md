# Jal Virasat

A static, source-led digital archive of traditional Indian water-management systems. The site is a single `index.html` with inline CSS, JavaScript and embedded record data; there is no application backend or database.

## Open or serve

- Open `index.html` directly in a browser. The hero artwork, archive data, brand mark, fallback illustrations, and any verified documentary photographs are included locally; photographs live under `public/assets/images/` and work without Manus. The interactive Leaflet map, map tiles and clickable external source links need an internet connection.
- Or run `node server.js` from this folder to serve the local preview at `http://localhost:3000` (or the port in `PORT`).
- Run `node build.js` to create the deployable static output under `dist/`. The WebDev static build publishes that directory and includes `/manus-routes.json`.

Record-level sources and image credits are shown in the field-note view; photo credits link to their original source and license. If a site photograph cannot be confidently verified and licensed, the honest illustration fallback is labeled “Illustration — photograph unavailable.” Illustrations are not documentary photographs.

## Photograph audit

Nine records use visually verified, freely reusable, locally bundled photographs. Six retain the original illustration because the exact site identity or reuse rights could not be established confidently. The [photo audit report](photo-audit-report.md) lists all 15 records, image sources, creators, licenses/attributions, fallback reasons, and individual Preview-test results. Optimized WebP derivatives preserve the complete uncropped frame; the detail credit identifies this change.

## Submission summary

- Jal Virasat documents 15 Indian water systems, from monumental stepwells and community johads to eris, keres, kunds, zing and surangam traditions.
- Each field note connects local names and places to cited history, water-capture mechanics, and source-qualified condition information.
- The archive is a static, self-contained HTML page with inline CSS and JavaScript; it needs no backend or database.
- Leaflet.js connects the interactive India map to a searchable, type- and state-filtered field catalogue.
- A comparison table and About section relate regional engineering knowledge to present-day water and climate challenges.
- Sources include UNESCO, ASI, government agencies and gazetteers, the British Museum's EMKP, research publications and reputable reporting; reusable photos are credited and other views are clearly labeled illustrations.
