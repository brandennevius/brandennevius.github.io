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

## PowerStrongAI product walkthrough

`powerstrong.html`, `powerstrong.css`, and `powerstrong.js` implement the product page. The homepage links to it and uses the same real application captures.

Run `python3 -m http.server 4173` and open `/powerstrong.html`. No build step is required. The page includes a five-step product tour and a four-example prompt-to-result agent tour with keyboard-accessible tabs, a native screenshot dialog, and responsive layouts.

The captures in `assets/powerstrong/` come from the Northstar Coaching workspace and contain no customer data. Copilot shows a verified live model response. External messaging providers are disconnected. The program assignment was created through the local API. Capabilities described beyond the captures are grounded in repository implementation, not claimed as live provider validation.

Source review baseline: PowerStrongAI `4e96233019f4a749e6fc134806b62543b9e73a99`, plus local theme refinements. For the Copilot capture only, development debug output was disabled in the isolated preview copy to match its existing production display behavior. The model response was not rewritten. Inline bold formatting is rendered by the shared Copilot component.

Checks: JavaScript syntax; local asset/link targets; desktop, 768px, and 390px overflow checks; all tour tabs; arrow-key navigation; screenshot open/close and Escape; browser console review. Publication uses the existing GitHub Pages workflow on main.

The agent-action walkthrough demonstrates draftOutreach preparing an actual reviewable message and createTaskDraft preparing a proposed task. The coach edits the proposed task title and description before approval; the action creates a persisted contact task. No outreach is sent. Tab groups operate independently.

The offer example verifies createOfferDraft, coach approval, a persisted Billing package, actual Stripe test product and recurring price, and a hosted subscription checkout at $199/month. Checkout-link generation is performed in Billing after the agent creates the package. No payment was submitted, and webhook purchase reconciliation was not exercised. This capture uses an explicitly authorized programmatically configured Custom test account; the app’s normal Express hosted onboarding was not completed. The package persists after reload. The transient Copilot completion message does not reappear in reloaded chat history; no history-persistence claim is made. Secrets remain outside Git.

The workflow example uses manual enrollment and two immediate configured steps: check that email exists, create Sam’s consultation task, then change the contact stage to Consultation. Both execution records and the enrollment are COMPLETED; the task and stage were verified through the API and reloaded UI. Scheduled processing and external event triggers are not demonstrated.

The agent section now displays exact prompt/reply transcript excerpts and uncollapsed conversation/result captures for each example. Task editing and offer checkout-link generation are explicitly attributed to the coach. The workflow panel pairs an actual model explanation of coach-supplied completed-run facts with the separately verified execution; no AI workflow creation or enrollment is claimed.

The four agent examples are now sequential image walkthroughs with labeled connectors and jump links. Every primary image is an uncropped 1280×720 app capture, displayed with contain sizing. Exact transcripts remain available under the first frame; the prompt and reply are also visible inside each conversation screenshot.
