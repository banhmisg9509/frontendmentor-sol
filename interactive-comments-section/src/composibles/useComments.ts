import {
  Comment,
  ReplyComment,
  SelectedComment,
  VoteComment,
} from "@/components/types";
import data from "@/data.json";
import { onMounted, ref } from "vue";

const COMMENTS = "COMMENTS";
const initSelectedDeleteComment: SelectedComment = {
  id: "",
  parentId: undefined,
};

const comments = ref<Comment[]>([]);
const selectedDeleteComment = ref<SelectedComment>(initSelectedDeleteComment);

export const useComments = () => {
  onMounted(() => {
    loadComments();
  });

  const loadComments = () => {
    const items = window.localStorage.getItem(COMMENTS);
    if (items) {
      comments.value = JSON.parse(items);
    } else {
      comments.value = [...data.comments];
      syncLocalStore();
    }
  };

  const syncLocalStore = () => {
    window.localStorage.setItem(COMMENTS, JSON.stringify(comments.value));
  };

  const sendComment = (
    newComment: ReplyComment | Comment,
    replyToId?: string
  ) => {
    if (replyToId) {
      comments.value.map((_comment) => {
        if (_comment.id === replyToId) {
          _comment.replies?.push(newComment as ReplyComment);
        }

        return _comment;
      });
    } else {
      comments.value.push(newComment);
    }
    syncLocalStore();
  };

  const setSelectedDeleteComment = (value: SelectedComment) => {
    selectedDeleteComment.value = value;
  };

  const deleteComment = () => {
    if (!selectedDeleteComment.value.parentId) {
      // delete current user's comment
      comments.value = comments.value.filter(
        (comment) => comment.id !== selectedDeleteComment.value.id
      );
    } else {
      // delete current user's reply comment
      comments.value = comments.value.map((comment) => {
        if (comment.id === selectedDeleteComment.value.parentId) {
          comment.replies = comment.replies?.filter(
            (replyComment) => replyComment.id !== selectedDeleteComment.value.id
          );
        }

        return comment;
      });
    }

    setSelectedDeleteComment(initSelectedDeleteComment);
    syncLocalStore();
  };

  const voteComment = (value: VoteComment) => {
    if (!value.parentId) {
      comments.value = comments.value.map((comment) => {
        if (comment.id === value.id) {
          comment.score += value.score;
        }

        return comment;
      });
    } else {
      comments.value = comments.value.map((comment) => {
        if (comment.id === value.parentId) {
          comment.replies = comment.replies?.map((replyComment) => {
            if (replyComment.id === value.id) {
              replyComment.score += value.score;
            }

            return replyComment;
          });
        }

        return comment;
      });
    }
    syncLocalStore();
  };

  const updateComment = (value: Comment, replyToId?: string) => {
    if (replyToId) {
      comments.value = comments.value.map((comment) => {
        if (comment.id === replyToId) {
          comment.replies = comment.replies?.map((repComment) => {
            if (repComment.id === value.id) {
              repComment.content = value.content;
            }
            return repComment;
          });
        }

        return comment;
      });
    } else {
      comments.value = comments.value.map((comment) => {
        if (comment.id === replyToId) {
          comment.content = value.content;
        }

        return comment;
      });
    }
  };

  return {
    comments,
    sendComment,
    deleteComment,
    updateComment,
    voteComment,
    setSelectedDeleteComment,
    syncLocalStore
  };
};
