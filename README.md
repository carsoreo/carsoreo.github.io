# carsoreo.github.io

[![Live site](https://img.shields.io/badge/live-carsoreo.github.io-007190?style=flat-square)](https://carsoreo.github.io)
![No framework](https://img.shields.io/badge/framework-none-0D2B33?style=flat-square)
![Hosted on GitHub Pages](https://img.shields.io/badge/hosted-GitHub_Pages-00978D?style=flat-square&logo=github)

My resume site — designed and built from scratch as a single static page, with no framework and no build step.

**→ [carsoreo.github.io](https://carsoreo.github.io)**

## Highlights

- **A real design system.** Every color, type size and easing curve is a token, documented in [`docs/design-system.md`](docs/design-system.md). The palette comes from Sanzo Wada's *A Dictionary of Color Combinations*.
- **Measured accessibility.** Each text/background pairing has a recorded WCAG contrast ratio and a rule for where it's allowed (for example, Benzol Green is for large text and icons only).
- **Light and dark modes** driven by `prefers-color-scheme`, swapping semantic tokens rather than individual colors.
- **Research-backed layout.** Structure and motion were reverse-engineered from enterprise sites (Tanium, Cisco) at a fixed viewport, with computed styles recorded in [`docs/ui-teardown.md`](docs/ui-teardown.md).
- **Live GitHub section** that lists my current repositories.

## Structure

```
index.html              the whole site: markup, styles and scripts
images/                 project media (DataMatch poster and team photo)
docs/design-system.md   tokens, contrast rules, type scale, motion
docs/ui-teardown.md     layout and motion research the design is based on
```

## Running locally

It's a static page, so any file server works:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Pushing to `main` deploys to GitHub Pages.

## Related

- [photography](https://github.com/carsoreo/photography) — the gallery at [/photography](https://carsoreo.github.io/photography/)
