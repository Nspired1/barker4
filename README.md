# Barker

## :zap: Twitter clone using dogs

- Simple full-stack app that shows a list, or an array, of messages ('barks' or 'tweets') from the React client and processed on the backend Express server. Messages are saved in a hosted Mongodb database, MongoDB Atlas.

## :page_facing_up: Table of Contents

- [:zap: Barker](#zap-Barker)
  _[:page_facing_up: Table of Contents](#page_facing_up-table-of-contents)
  _[:books: General Info](#books-general-info)
  _[:signal_strength: Technologies](#signal_strength_technologies)
  _[:cool: Features](#cool-features)
  _[:clap: Inspiration](#clap-inspiration)
  _[:envelope: Contact](#envelope-contact)

## :books: General Info

- A simple Twitter clone using React for the frontend client and Express node.js server for the backend with MongoDB Atlas as the cloud hosted database. Wanted to better understand React hooks and using hooks for authentication with JSON Web Tokens (JWTs), so checked a few tutorials and built a Twitter clone.

## :microscope: Deeper Dive

- App state management is using the React Context API and the useContext hook. Context was used instead of Redux because, as per Dan Abramov, the Context API is much improved, and unless the app needs to manage a large number of asynchronous resources Context works well. Context is not as verbose as Redux, however there are some Redux patterns (reducers, actions, types) that are used with Context to handle user login and logout as well as error messages and alerts.

## :signal_strength: Technologies

- [Node.js ](https://nodejs.org/en/)
- [Express server](https://expressjs.com/)
- [MongoDB Atlas Database](https://www.mongodb.com/cloud/atlas)
- [React UI Library](https://reactjs.org/)
- [JSON Web Tokens for authentication](https://www.npmjs.com/package/jsonwebtoken)
- [Bcryptjs for hashing](https://www.npmjs.com/package/bcryptjs)

## :cool: Features

- User login and logout, user authorization: only the creator of a message ('bark' or 'tweet') can delete their own, messages are displayed by time in ascending order (most recent first).

## :clap_inspiration: Inspiration

- The inspiration for this app was getting practice using React hooks, using context to manage app state, specifically with user login, authorization, and logout; comparing hooks to Redux, and Twitter.

* [Frontend Masters Complete Intro to React V6: hooks, effects, contexts, etc](https://frontendmasters.com/courses/complete-react-v6/)
* [Dan Abramov on Fundamentals of Redux](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)
* [Twitter](https://twitter.com/)

## :envelope: Contact

- repo created by Don Spire [Nspired01](https://github.com/Nspired1/barker4), email: don.spire1@gmail.com
