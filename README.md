# Built with Tachyons

A showcase of websites built using [Tachyons](http://tachyons.io/).

## Add a website

The list of websites is storied in the `data.js` file, but you'll also need a
screenshot of the page (in `public/img`). Everything is done automatically if
you use the `npm run add` script:

```
npm run add -- https://mysite.xyz/ "MySite" "MySite is for doing something."
```

Provide the domain first, the name of the website second (in quote marks), then
a quick description of the site (also in quote marks).

Know that this repository follows [JavaScript Standard Style](http://standardjs.com).

## `npm` commands

Command | Function
------- | --------
`add` | Add a website to the list in `data.js` with `add.js`. Required args listed above.
`capture` | Takes a screenshot of a domain with `capture.js`. Pass URL as the argument.
`build` | Bundle up and render the site for deployment. `nwb build-react-app`
`clean` | `nwb clean-app`
`start` | `nwb serve-react-app`
`test` | Runs tests. `nwb test`
`test:watch` | Continuously runs tests. `nwb test --server`

## Built with

Built with React, [nwb](https://github.com/insin/nwb), and
[Tachyons](http://tachyons.io) (of course).

## License

MIT

