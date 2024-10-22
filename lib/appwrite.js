import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.roopesh.aora",
  projectId: "6717db91002ca85f1b70",
  databaseId: "6717dc930017bf4c22d4",
  userCollectionId: "6717dcb20029b0e46577",
  videoCollectionId: "6717dcd300285771dded",
  storageId: "6717de500003dd3d869a",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
