# Finex Outsourcing Website

The source for the Finex Outsourcing staging website. It presents Finex's finance and accounting services, Global Business Services model, regional propositions, industries, insights and contact journey.

## Website sections

- Global Business Services and finance outsourcing
- Accounting, AP, AR, payroll, management accounting and FP&A
- Dedicated finance teams and finance operations
- Regional pages for the UK, USA, Saudi Arabia and Canada
- Industry pages, insights, company information and contact

## Project structure

```text
dist/
  assets/                    Shared styles, scripts and images
  services/                  Finance service pages
  industries/                Industry-specific pages
  insights/                  Blogs, guides, news and case studies
  global-business-services/  GBS landing page
  saudi-arabia/              Saudi Arabia regional landing page
  index.html                 Homepage
serve-local.js               Lightweight local preview server
```

The website is a static build. Files inside `dist/` are the deployable site.

## Local preview

Install [Node.js](https://nodejs.org/), then run:

```bash
node serve-local.js
```

Open [http://localhost:4173](http://localhost:4173) in a browser.

## Deployment

The staging website is deployed on Vercel from the `dist/` directory:

[staging-finexoutsourcing-test.vercel.app](https://staging-finexoutsourcing-test.vercel.app/)

When updating the site:

1. Make and review the changes locally.
2. Check desktop, tablet and mobile layouts.
3. Verify navigation, CTAs and internal links.
4. Deploy the contents of `dist/` to Vercel.

## Development notes

- Shared navigation and dynamic page content are managed in `dist/assets/site.js`.
- Shared site styling is in `dist/assets/styles.css`.
- Page-specific assets use descriptive names such as `saudi-regional.css` and `payroll.js`.
- Keep service claims, certifications and statistics aligned with approved Finex content.

## Ownership

Copyright Finex Outsourcing. All rights reserved.
