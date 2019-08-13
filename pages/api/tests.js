import methods from '@appgeist/restful-next-api';

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
    beforeRequest: ({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`Preparing to handle PATCH request to ${url}`);
    },
    onRequest: () => {}
  },

  delete: () => {},

  onError: ({ err: { message }, res }) => {
    res.status(500).send({ message });
  }
});
