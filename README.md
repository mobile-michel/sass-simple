# Basic template with Eleventy, LiquidJS & Sass processing

## Folder structure

- pages in /src
- Sass files in /sass
- layouts in /_layouts
- includes in /_components
- Json files in /_data
- images & JavaScripts in /assets

## Page layout

- _layouts/base.liquid
- _components/header.liquid
- _components/nav.liquid
- _components/footer.liquid

## Responsive navbar

- responsive mobile menu with CSS without JavaScript from [LogRocket](https://blog.logrocket.com/create-responsive-mobile-menu-with-css-no-javascript/), without classes
- add tags: primary in frontmatter

## Package.json scripts

- "watch:eleventy": "npx @11ty/eleventy --serve",
- "watch:sass": "npx sass src/sass:_site/assets/css --watch",
- "start": "npm run watch:eleventy & npm run watch:sass",
- "build": "sass src/sass:_site/assets/css --style=compressed && eleventy",
- "debug": "DEBUG=* eleventy"

## Dependencies

- "@11ty/eleventy": "^2.0.1",
- "sass": "^1.69.0"
- ready for [Decap CMS](https://decapcms.org/) integration.