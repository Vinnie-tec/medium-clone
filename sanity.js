import {
  createCurrentUserHook,
  createClient,
} from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  /**
   * Find your project ID and dataset in sanity.json in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-12-01",

  /**
   * Set useCdn to false if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const useCurrentUser = createCurrentUserHook(config);

























// NEW 

// import createClient from '@sanity/client';
// import createImageUrlBuilder from '@sanity/image-url';


// const config = sanityClient({
//    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
   
//    ...
//   });

// export const  sanityClient = createClient(config);

// export const urlFor = (source) => createImageUrlBuilder(client).image(source); 