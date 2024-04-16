import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("661e44ee940ce254807c"); 
export const account = new Account(client);
export const databases = new Databases(client);
