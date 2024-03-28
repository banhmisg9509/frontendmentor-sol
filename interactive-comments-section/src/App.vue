<script setup lang="ts">
import Comment from "./components/Comment.vue";
import CommentInput from "./components/CommentInput.vue";
import ConfirmModal from "./components/ConfirmModal.vue";
import { useComments } from "./composibles/useComments";
import { useModal } from "./composibles/useModal";

const { isOpen, closeModal, openModal } = useModal();
const { comments, setSelectedDeleteComment, deleteComment, voteComment } =
  useComments();
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 my-16 mx-4">
    <Comment
      v-for="comment of comments"
      :comment="comment"
      :key="comment.id"
      @vote-comment="(selectedVoteComment) => voteComment(selectedVoteComment)"
      @delete-comment="
        (selectedDeleteComment) => {
          setSelectedDeleteComment(selectedDeleteComment);
          openModal();
        }
      "
    />
    <CommentInput />
  </div>
  <ConfirmModal
    v-if="isOpen"
    @confirm="
      () => {
        deleteComment();
        closeModal();
      }
    "
    @cancel="() => closeModal()"
  />
</template>

<style scoped></style>
