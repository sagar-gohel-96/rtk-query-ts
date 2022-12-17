export interface Post {
  _id: string;
  title: string;
  body: string;
}
export type PostPayload = Omit<Post, "_id">;
