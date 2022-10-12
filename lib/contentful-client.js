import { createClient } from 'contentful';

const isProd = process.env.NODE_ENV === 'production';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
  host: isProd ? 'contentful.com ' : 'preview.contentful.com',
});

export default client;
