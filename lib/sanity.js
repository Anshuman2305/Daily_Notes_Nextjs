import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'z2zrs008',
  dataset: 'production',
  useCdn: true
});