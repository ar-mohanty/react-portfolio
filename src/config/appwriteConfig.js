import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// const promise = databases.listDocuments(
//   import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
//   import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID
// );

// promise.then(
//   function (response) {
//     console.log(response); // Success
//   },
//   function (error) {
//     console.log(error); // Failure
//   }
// );

async function fetchData() {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID
    );
    const documents = response.documents;

    return documents;
    // console.log(documents);
    // Update your frontend with the fetched data here
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;
