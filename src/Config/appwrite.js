//
// import { Client, Account, Databases } from 'appwrite';
//
// const client = new Client();
//
// const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
// const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
//
// // Your Appwrite endpoint and project ID
// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject("679b6ac1000a175273d7"); // Replace with your project ID
//
// // Database and Collection IDs
// export const DATABASE_ID = '679b7a05001fd43be279'; // Replace with your database ID
// export const COLLECTION_ID = '679b7a21003d07f89bb2'; // Replace with your collection ID
//
// export const account = new Account(client);
// export const databases = new Databases(client);
// export { client };

import { Client, Account, Databases } from 'appwrite';

const client = new Client();

const ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '679b6ac1000a175273d7'; // Replace with your Project ID

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

// Add error handling
client.subscribe('error', (error) => {
    console.error('Appwrite error:', error);
});

export const DATABASE_ID = '679b7a05001fd43be279';     // Replace with your Database ID
export const COLLECTION_ID = '679b7a21003d07f89bb2'; // Replace with your Collection ID

export const account = new Account(client);
export const databases = new Databases(client);
export { client };