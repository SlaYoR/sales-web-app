# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Getting started

Install dependencies:

```shell
yarn
```

Run the server:

```shell
yarn dev
```

Develop your feature. 👩‍💻👨‍💻

Test it!

```shell
yarn test
```

Commit changes:

```shell
yarn commit
```

Enjoy! 🎇

## Design

### Homepage

![sales-homepage](./docs/sales-homepage.drawio.svg)

### Product slug

![sales-product](./docs/sales-product.drawio.svg)

### Favorites

![sales-favorites](./docs/sales-favorites.drawio.svg)

## Folder Structure

Designers talk about screen, developpers tend to use router. We will use a naming nomenclature as follow:

```
/src
    /HomePage
    /ContactPage
    /CountersPage

/src
    /pages
        /HomePage
        /ContactPage
        /CountersPage

/src
    /contact
        /ContactPage
        /ContactsPage
    /counters
        /CountersPage
    /home
        /HomePage
    /hooks
        index.js        # Should only be used as an indexation file
        /useCounter
```
