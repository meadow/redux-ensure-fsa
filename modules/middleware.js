'use strict';

import { isFSA } from 'flux-standard-action';

export default function ensureFSAMiddleware () {
  return next => action => {
    if (!isFSA(action)) {
      console.log(action); // eslint-disable-line
      throw new Error('Flux Standard Action Violation: Actions must only have type, payload, error, and/or meta properties.');
    }

    return next(action);
  };
}
