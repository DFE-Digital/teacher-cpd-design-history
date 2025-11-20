# Design history for Teacher CPD service

A history of the designs for the Get teacher CPD services

This repository makes it easy to:

- screenshot your designs
- create pages of screenshots to document designs
- document designs using the [GOV.UK Design System](https://design-system.service.gov.uk/)
- print pages of designs
- make designs shareable and linkable

## Getting setup

1. Install [GitHub Desktop](https://github.com/apps/desktop)
2. [Clone] this repository
3. Open Terminal
4. Install [node.js](https://nodejs.org/en/download)
5. In Terminal, `cd /path/to/repository` to navigate to the repository folder
6. Type and run `npm install` to install dependencies
7. Type and run `npm start`
8. Open a browser and go to `http://localhost:8080`

[clone]: https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop#cloning-a-repository

## Working locally

Most of the time you'll be adding new posts. If you're just doing this then:

- Open Terminal
- Type `npm start`

This will automatically restart the application with any changes to your posts an any images applied.

If you want to make changes to CSS and JavaScript, and watch for those changes, run `npm run dev`.

## Technical notes

Uses the [Design History](https://design-history.herokuapp.com/) as a template ([Github](https://github.com/dfe-digital/govuk-design-history))

The design history uses the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.dev) static site generator.
