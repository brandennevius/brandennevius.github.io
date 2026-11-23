# Branden Nevius Portfolio

Static portfolio site built for GitHub Pages.

## Layout / Wireframe

1. Hero
   Employer-facing summary, current role, degree, and primary CTA buttons.
2. Selected Work
   Three featured projects with short summaries and quick status tags.
3. Case Studies
   One section per project using `Problem -> Approach -> Impact`.
4. About
   Short section on systems thinking, automation, and cross-functional work.
5. Contact
   Email, resume download, LinkedIn, phone, and location.

## Files

- `index.html` contains all page content.
- `styles.css` contains the visual system and responsive layout.
- `script.js` handles the footer year.
- `assets/` contains the resume PDF and project screenshots.

## Update Points

- Replace the LinkedIn URL in `index.html` if the current handle is different.
- Add a calendar link in the contact buttons if you want a direct booking CTA.
- Swap the trading dashboard section copy once the repo is pushed.

## GitHub Pages

If this repository is named `brandennevius.github.io`, pushing `main` will publish it as the user site.

## PowerStrongAI visual case study

`powerstrong.html` is the standalone product and engineering case study, linked from the homepage featured build, navigation, and project card. `powerstrong.css` and `powerstrong.js` are self-contained; no build or package installation is required.

Run locally with `python -m http.server 4173` from this directory. The feature tour supports mouse, Left/Right arrows, Home, and End. Product illustrations use explicitly fictional sample data; the development screenshot is separately labeled. Keep those distinctions when refreshing visuals.

Before publishing, check desktop and mobile layouts, all four tour tabs, local links and assets, and browser errors. Deployment follows the existing GitHub Pages workflow on main.
