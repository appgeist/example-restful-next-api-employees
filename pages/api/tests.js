import methods from '@appgeist/restful-next-api';
import delay from 'delay';

export default methods({
  beforeRequest: ({ method, url }) => {
    // eslint-disable-next-line no-console
    console.log(`Preparing to handle ${method} request to ${url}`);
  },

  get: {
    onRequest: () => {
      throw new Error('GET Error');
    },
    onError: ({ err: { message }, res }) => {
      res.status(500).send({ message });
    }
  },

  post: () => {
    throw new Error('POST Error');
  },

  patch: {
    beforeRequest: async ({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`Waiting 500ms before handling PATCH request to ${url}`);
      await delay(500);
    },
    onRequest: () => {}
  },

  delete: () => {},

  onError: ({ err: { message }, res }) => {
    res.status(500).send({ message });
  }
});
