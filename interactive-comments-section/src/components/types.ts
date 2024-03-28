export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type ReplyComment = Omit<Comment, "replies"> & { replyingTo: string };

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: ReplyComment[];
};

export type SelectedComment = {
  id: string;
  parentId?: string;
};

export type VoteComment = SelectedComment & {
  score: number;
};
