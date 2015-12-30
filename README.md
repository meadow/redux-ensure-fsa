# Redux Ensure Flux Standard Action Middleware

`redux-ensure-fsa` provides a middleware function to use as part of the `redux` dispatch chain. It is intended for use in development only to check that all actions at the end of the chain follow the [Flux Standard Action](https://github.com/acdlite/flux-standard-action) protocol.

## Installation

`npm install @meadow/redux-ensure-fsa`

## Usage

```javascript
import { createStore, applyMiddleware } from 'redux';
import ensureFSAMiddleware from '@meadow/redux-ensure-fsa';
import thunkMiddleware from 'redux-thunk';

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, ensureFSAMiddleware];
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
```

- - - 

[![ghit.me](https://ghit.me/badge.svg?repo=meadow/redux-ensure-fsa)](https://ghit.me/repo/meadow/redux-ensure-fsa)
