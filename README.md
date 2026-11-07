# carsoreo.github.io

[![tests](https://github.com/carsoreo/carsoreo.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/carsoreo/carsoreo.github.io/actions/workflows/test.yml)
[![Live site](https://img.shields.io/badge/live-carsoreo.github.io-007190?style=flat-square)](https://carsoreo.github.io)
![No framework](https://img.shields.io/badge/framework-none-0D2B33?style=flat-square)
![Hosted on GitHub Pages](https://img.shields.io/badge/hosted-GitHub_Pages-00978D?style=flat-square&logo=github)

My resume site: a single static page with no framework and no build step.

**→ [carsoreo.github.io](https://carsoreo.github.io)**

## What's in it

- **Design tokens.** Every color, type size and easing curve is a CSS custom property, documented in [`docs/design-system.md`](docs/design-system.md). The palette comes from Sanzo Wada's *A Dictionary of Color Combinations*.
- **Contrast rules.** Each text and background pair has a measured WCAG contrast ratio and a rule for where it may be used. Benzol Green, for example, is only for large text and icons.
- **Light and dark themes** follow `prefers-color-scheme` by swapping semantic tokens, not individual colors.
- **Layout and motion** are based on measurements of enterprise sites (Tanium, Cisco) at a fixed viewport. The computed styles are recorded in [`docs/ui-teardown.md`](docs/ui-teardown.md).
- **GitHub section.** The page asks the GitHub API for my most recently updated repositories when it loads.

## Structure

```
index.html              the whole site: markup, styles and scripts
images/                 DataMatch poster and team photo, and the link-preview image (og.jpg)
docs/design-system.md   tokens, contrast rules, type scale, motion
docs/ui-teardown.md     layout and motion research the design is based on
test/site.test.mjs      static checks on index.html
```

## Running locally

It's a static page, so any file server works:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Pushing to `main` deploys to GitHub Pages.

## Tests

```sh
node --test
```

The tests check that every local file and in-page link resolves, ids are unique, images have alt text and the right dimensions, and the link-preview image matches its meta tags. They run on every push.

## Related

- [photography](https://github.com/carsoreo/photography): the gallery at [/photography](https://carsoreo.github.io/photography/)
