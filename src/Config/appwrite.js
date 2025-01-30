// import { Client, Account, Databases } from 'appwrite';
//
// const client = new Client();
//
// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
//     .setProject("679b6ac1000a175273d7"); // Replace with your project ID
//
// export const account = new Account(client);
// export const databases = new Databases(client);
//
// export { client };

// src/config/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

// Your Appwrite endpoint and project ID
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("679b6ac1000a175273d7"); // Replace with your project ID

// Database and Collection IDs
export const DATABASE_ID = '679b7a05001fd43be279'; // Replace with your database ID
export const COLLECTION_ID = '679b7a21003d07f89bb2'; // Replace with your collection ID

export const account = new Account(client);
export const databases = new Databases(client);
export { client };