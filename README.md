# Being Tea Co.

Being Tea Co. is an independent tea-culture education project established in
2015. It follows tea from seed, harvest, and processing through storage,
brewing, teaware, service, and the sensory experience of a well-prepared cup.

The project draws on firsthand practice at Deer Park Monastery in Escondido,
California, in the Plum Village tradition. Being Tea Co. is independent and is
not an official project of, or endorsed by, Deer Park Monastery, Plum Village,
or the estate of Thích Nhất Hạnh.

## What is included

- A tea library spanning white, green, yellow, oolong, black, dark, and
  Pu-erh tea.
- Practical Western, gongfu, grandpa-style, cold-brew, matcha, and simmered-tea
  preparation guides.
- A twelve-article editorial collection with date-based release controls and
  additional cultural- and health-language review holds where required.
- About, contact, privacy, terms, and commercial-disclosure pages.
- A public projects page for possible tea, tools, reading, and merchandise
  studies. It contains no vendor applications or paid product links.

The owner-only editorial studio, unpublished social captions, and their image
bank are intentionally excluded from this public repository.

## Editorial position

Personal experience is labeled as personal experience. Historical, scientific,
health, provenance, and commercial claims are sourced and reviewed according to
the site's published standards. Affiliate approval will not determine a review
conclusion, and any future paid relationship must be disclosed beside the
relevant recommendation.

## Local development

Requirements:

- Node.js 22.13 or newer

Install and run with the repository lockfile:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Validate the complete rendered site:

```bash
pnpm test
```

## Main project areas

- `app/` — pages, structured search metadata, and editorial content.
- `public/images/` — the visual library used across the public site.
- `tests/` — rendered-route, search, disclosure, and unique-image checks.
- `image-manifests/` — generation notes and asset provenance records.

## Release status

GitHub is the source and history for this replacement candidate. The project is
configured for OpenAI Sites, but a local build, hosting configuration, or
staging URL is not proof that the candidate has replaced the public WordPress
site at `beingteaco.com`. Deployment, domain routing, rollback ownership, and
verified-live checks are recorded separately from local completion.

Preview builds default to `noindex, nofollow` and a reserved non-public
canonical origin. An approved public build must set both
`NEXT_PUBLIC_SITE_URL` to the exact reviewed origin and
`NEXT_PUBLIC_SITE_RELEASED=true`, plus `NEXT_PUBLIC_SITE_RELEASE_HOST` to the
exact approved hostname. Release mode rejects non-HTTPS, localhost, reserved
test hosts, and a URL/hostname mismatch. Setting these values is a release
action, not an ordinary local-development step.

Journal routes require an explicit approval entry and their Alaska release
date. B10 and B11 remain held for cultural/source review, and B12 remains held
for health-language/source review, even after approval and date gates pass.

GitHub Pages is intentionally not enabled because GitHub states that Pages is
not intended or allowed as free hosting for an online business, e-commerce
site, or a site primarily facilitating commercial transactions.

See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Rights

Unless a file says otherwise, the Being Tea Co. name, logo, original site copy,
photography, generated visual assets, and editorial collections are
copyright-protected and are not offered under an open-source or Creative Commons
license. Third-party libraries remain subject to their respective licenses.

Contact: [beingteaco@gmail.com](mailto:beingteaco@gmail.com)
