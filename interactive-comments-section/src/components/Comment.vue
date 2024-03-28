<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { useComments } from "@/composibles/useComments";
import {
  Comment as CommentType,
  ReplyComment,
  SelectedComment,
  VoteComment,
} from "@/components/types.ts";
import { useUser } from "@/composibles/useUser";
import { computed, ref } from "vue";
import CommentInput from "./CommentInput.vue";

type CommentProps = {
  comment: CommentType | ReplyComment;
  parentId?: string;
};

type CommentEmit = {
  (e: "delete-comment", selectedDeleteId: SelectedComment): void;
  (e: "vote-comment", voteComment: VoteComment): void;
};

const prop = defineProps<CommentProps>();
const emit = defineEmits<CommentEmit>();

const { currentUser } = useUser();
const { syncLocalStore } = useComments();

const showComment = ref(false);
const editComment = ref(false);

const showReplies = computed(
  () => (prop.comment as CommentType)?.replies?.length !== 0
);

const isYours = computed(
  () => prop.comment.user.username === currentUser.value?.username
);
</script>
<template>
  <div class="max-w-[730px] w-full">
    <div class="flex rounded-lg p-6 gap-6 bg-white">
      <div class="hidden sm:block">
        <div
          class="flex flex-col items-center justify-between flex-shrink-0 bg-very-light-gray p-[10px] pb-3 w-9 rounded-lg"
        >
          <Icon
            @click="
              () =>
                emit('vote-comment', {
                  id: prop.comment.id,
                  parentId: prop.parentId,
                  score: 1,
                })
            "
            name="icon-plus"
            class="cursor-pointer text-light-grayish-blue hover:text-moderate-blue"
          />
          <p class="mt-4 mb-5 leading-none font-medium text-moderate-blue">
            {{ prop.comment.score }}
          </p>
          <Icon
            @click="
              () =>
                emit('vote-comment', {
                  id: prop.comment.id,
                  parentId: prop.parentId,
                  score: -1,
                })
            "
            name="icon-minus"
            class="cursor-pointer text-light-grayish-blue hover:text-moderate-blue"
          />
        </div>
      </div>
      <div class="flex flex-col gap-3 grow">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-[30px] h-[30px]">
              <img :src="prop.comment.user.image.webp" alt="user-avatar" />
            </div>
            <span class="font-medium text-dark-blue">
              {{ prop.comment.user.username }}
            </span>
            <span
              v-if="isYours"
              class="-ml-2 bg-moderate-blue text-white w-9 h-5 inline-flex items-center justify-center rounded text-sm"
            >
              you
            </span>
            <span class="text-grayish-blue">{{ prop.comment.createdAt }}</span>
          </div>
          <div class="hidden sm:block">
            <div class="flex gap-6">
              <button
                v-if="!isYours"
                @click="() => (showComment = !showComment)"
                class="inline-flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue"
              >
                <Icon name="icon-reply" />
                <span>Reply</span>
              </button>
              <button
                @click="
                  emit('delete-comment', {
                    id: prop.comment.id,
                    parentId: prop.parentId,
                  })
                "
                v-if="isYours"
                class="inline-flex items-center gap-2 font-medium text-soft-red hover:text-pale-red"
              >
                <Icon name="icon-delete" />
                <span>Delete</span>
              </button>
              <button
                v-if="isYours"
                @click="() => (editComment = !editComment)"
                class="inline-flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue"
              >
                <Icon name="icon-edit" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>
        <div v-if="editComment" class="w-full min-h-[100px]">
          <textarea
            v-model="prop.comment.content"
            class="w-full h-full resize-none border rounded-lg px-6 py-3 placeholder:text-grayish-blue border-light-gray focus:outline-none focus:border-moderate-blue"
          />
        </div>
        <p v-else class="text-grayish-blue whitespace-pre-line">
          <span
            v-if="(prop.comment as ReplyComment).replyingTo"
            class="text-moderate-blue font-medium"
          >
            @{{ (prop.comment as ReplyComment).replyingTo }}&nbsp;
          </span>
          {{ prop.comment.content }}
        </p>
        <div class="self-end" v-if="isYours && editComment">
          <button
            @click="
              () => {
                syncLocalStore();
                editComment = !editComment;
              }
            "
            class="w-[90px] py-[10px] rounded-lg bg-moderate-blue hover:bg-light-grayish-blue text-white"
          >
            <span class="uppercase">Update</span>
          </button>
        </div>
        <div class="flex justify-between sm:hidden">
          <div
            class="flex flex-row items-center justify-between flex-shrink-0 bg-very-light-gray p-[10px] w-[90px] rounded-lg"
          >
            <Icon
              name="icon-plus"
              class="shrink-0 cursor-pointer text-light-grayish-blue hover:text-moderate-blue"
            />
            <p class="leading-none font-medium text-moderate-blue">
              {{ prop.comment.score }}
            </p>
            <Icon
              name="icon-minus"
              class="shrink-0 cursor-pointer text-light-grayish-blue hover:text-moderate-blue"
            />
          </div>
          <div class="flex gap-4">
            <button
              v-if="!isYours"
              @click="() => (showComment = !showComment)"
              class="inline-flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue"
            >
              <Icon name="icon-reply" />
              <span>Reply</span>
            </button>
            <button
              v-if="isYours"
              class="inline-flex items-center gap-2 font-medium text-soft-red hover:text-pale-red"
            >
              <Icon name="icon-delete" />
              <span>Delete</span>
            </button>
            <button
              v-if="isYours"
              @click="() => (editComment = !editComment)"
              class="inline-flex items-center gap-2 font-medium text-moderate-blue hover:text-light-grayish-blue"
            >
              <Icon name="icon-edit" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5" v-if="showComment">
      <CommentInput
        :reply-to-user-name="comment.user.username"
        :reply-to-id="(comment as CommentType).replies ? comment.id : prop.parentId"
        @comment-submited="showComment = !showComment"
      />
    </div>
    <div v-if="showReplies" class="mt-5 flex">
      <div class="mr-4 sm:mx-10 border-l-2 border-light-gray relative shrink-0">
        <div
          class="w-1 h-3 bg-very-light-gray absolute bottom-0 left-0 -translate-x-1/2"
        />
      </div>
      <div class="flex flex-col gap-5 grow w-full">
        <Comment
          v-for="replyComment in (prop.comment as CommentType).replies"
          :comment="replyComment"
          :parentId="prop.comment.id"
          :key="replyComment.id"
          @delete-comment="
            (selectedDeleteComment) =>
              emit('delete-comment', selectedDeleteComment)
          "
          @vote-comment="(voteComment) => emit('vote-comment', voteComment)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
