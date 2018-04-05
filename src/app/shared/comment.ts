export interface Comment {
  id: number;
  text: string;
  postId: number;
  parentId: number;
  children: Comment[];
  depth: number;
  votes: number;
}