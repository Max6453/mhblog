import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable in .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // Reuse the connection across HMR reloads in dev so we don't open a new
  // connection on every file save.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export const MONGODB_DB = process.env.MONGODB_DB ?? "mhblog";
export const ARTICLES_COLLECTION = "blog_posts";
