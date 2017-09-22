# VICE Front-end Coding Exercise

## Caveats:

If I were to spend more time on this and move toward making it production-ready, there are a few things I would do:

- Add Enzyme tests for the components, and make the logic for mapping the shows more testable, and test that as well.
- Serve everything using HTTP2 and enable compression, to make the site speedier.
- Add sass-lint and eslint to clean up some of the sloppy formatting.
- Add server-side rendering.
- Prune the dependencies in package.json.

If this app were more complex and included more interactivity or write functions, I would have added Redux to manage the state shape. But as it stands, the only state management and mapping only takes up 5 lines in Root.jsx. So I figure implementing Redux would be overkill.

## To Run:

```
git clone https://github.com/cameronprattedwards/vice-assignment.git
cd vice-assignment
npm install
node_modules/.bin/webpack
node_modules/.bin/babel-node webServer
```

Then visit http://localhost:7000 and start clicking!
