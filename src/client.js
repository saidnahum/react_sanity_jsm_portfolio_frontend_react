import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
   projectId: 'ndm05rk4',
   dataset: 'production',
   apiVersion: '2022-02-01',
   useCdn: true,
   token: 'skTDxn7DCzKg40uNy0EkBzF4KkSQCerGSUIZygayD7TS1YRjExp7qV4z7fZcUi2GXrkOejoQ1P4BYu8aJ2OVqjeeaqciVIcV5ACIic9of7dXRbtnFS1HN9viDnjGhkDp6CSTwLKFd4NkCSomkTH8LygMcfluBaLJm3PhZMIDk0b0RkJUDOyv'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);