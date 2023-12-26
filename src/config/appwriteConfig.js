import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);


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

async function fetchProject(pid) {
  console.log("this is project id", pid);
  try {
    const response = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROJECT_COLLECTION_ID,
      pid
    );
    const documents = response.documents;

    console.log(documents);
    return documents;
    // Update your frontend with the fetched data here
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export {fetchData, fetchProject}