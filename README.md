# Brewstr Beer Rating app

This is a sample app built using Okta, React, and Firebase. It builds a star-rating component to rate beers.

## Getting Started

```sh
git clone https://github.com/oktadeveloper/okta-react-rating-example.git
```

Set up an Okta SPA app that uses `localhost:3000`.

Set up a Firebase Real-Time Database with a `ratings` collection and read and write set to `true`.

Create an `.env.local` file with properties for:

- REACT_APP_OKTA_CLIENT_ID
- REACT_APP_OKTA_ORG_URL
- REACT_APP_FIREBASE_APIKEY
- REACT_APP_FIREBASE_AUTH_DOMAIN
- REACT_APP_FIREBASE_DB_URL
- REACT_APP_FIREBASE_PROJECT_ID
- REACT_APP_FIREBASE_STORAGE_BUCKET
- REACT_APP_FIREBASE_MESSAGE_SENDER_ID
- REACT_APP_FIREBASE_APP_ID

```sh
yarn start
```

## Getting Help

If you have questions or find bugs, post them on the [Okta Developer Forum](https://devforum.okta.com/).

## License

[Apache 2.0](LICENSE)