# Customer showcase design QA

Source: C:/Users/jacky/.codex/generated_images/01a19301-914d-7a81-a3ae-cb404381b6eb/exec-1ac23977-296a-46ed-8cba-84ba04130e1b.png
Implementation: C:/Users/jacky/Documents/ChatGPT/Ripen/outputs/customer-showcase-desktop.png
Mobile: C:/Users/jacky/Documents/ChatGPT/Ripen/outputs/customer-showcase-mobile.png

Scope: selected second concept, with user-requested headline "Built with ambitious operators." User explicitly requested no further image generation; existing local industry photos were reused.

Viewport: desktop 1440 x 900 CSS px; mobile 390 x 844 CSS px. Source 1586 x 992 raster px, implementation 1440 x 900 raster px. Full screenshots have different scroll crops; compare the customer section as a region, normalized by width, rather than the surrounding hero crop. No device chrome included.

Comparison: source and desktop implementation opened together in the same review input. Editorial left/right split, stacked photography, five placeholder slots plus confirmation cell, ruled grid, warm paper background, restrained type and generous spacing retained. Larger three-line headline is the requested copy variation; its extra vertical height is intentional. Focused comparison checked heading wrap, logo labels, grid dividers, image strip and pending-confirmation text. Mobile section inspected through heading, photos, and grid.

Required surfaces:
- Typography: existing Arial family retained, generous display headline; deliberate placeholder text remains live text because user explicitly requested logo placeholders. No actual customer identity implied.
- Spacing/layout: 46/54 split on desktop, responsive stack and two-column logo grid on mobile. Document fits mobile width (375 content px within390 viewport, scrollbar excluded). No horizontal overflow.
- Colors: existing paper, forest green, charcoal, muted gray and border tokens retained.
- Imagery: existing downloaded local images reused and all three load. Photo subjects differ from generated reference intentionally; no new image generation per user. Manufacturing alt text corrected to describe facility exterior.
- Copy: headline updated per user; only the three agreed industries named. Extra mock industries removed. All five slots show Awaiting approval; sixth states customer logos pending confirmation.

Checks: Next.js production build and TypeScript compilation passed. Browser console checked: no errors or warnings observed. No new controls introduced in this static section. Existing workflow remains present and operating during browser inspection. No booking submitted.

Findings: no actionable P0/P1/P2 findings in the scoped section.
History: initial implemented section reviewed on desktop and mobile; image alt-text corrected after image inspection. No layout correction needed in this iteration.
Follow-up: replace placeholder labels with approved customer logos and stories when supplied. Compact eyebrow labels follow the selected reference; final brand review may choose larger sizing.

final result: passed
