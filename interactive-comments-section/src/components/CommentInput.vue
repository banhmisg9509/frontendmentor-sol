<script setup lang="ts">
import { useComments } from "@/composibles/useComments";
import { useUser } from "@/composibles/useUser";
import { computed, ref } from "vue";
import type { Comment, ReplyComment } from "./types";

type CommentInputProps = {
  replyToUserName?: string;
  replyToId?: string;
};

type CommentEmit = {
  (e: "comment-submited"): void;
};

const prop = defineProps<CommentInputProps>();
const emit = defineEmits<CommentEmit>();

const { currentUser } = useUser();
const { sendComment } = useComments();

const content = ref(prop.replyToUserName ? `@${prop.replyToUserName} ` : "");
const isReplying = computed(() => Boolean(prop.replyToUserName));

const handleSubmit = (e: Event) => {
  e.preventDefault();

  const formatContent = content.value
    .replace(`@${prop.replyToUserName}`, "")
    .trim();
  if (!formatContent.length) return;

  const commonPropsComment = {
    createdAt: new Date().toLocaleString(),
    content: formatContent,
    id: crypto.randomUUID(),
    user: Object.assign({}, currentUser.value),
    score: 0,
  };

  let replyComment: ReplyComment = {
    ...commonPropsComment,
    replyingTo: prop.replyToUserName || "",
  };

  let newComment: Comment = {
    ...commonPropsComment,
    replies: [],
  };

  sendComment(isReplying.value ? replyComment : newComment, prop.replyToId);
  content.value = "";
  emit("comment-submited");
};
</script>

<template>
  <form class="max-w-[730px] w-full" @submit="handleSubmit">
    <div
      class="grid grid-cols-2 sm:grid-cols-[auto_1fr_auto] sm:grid-rows-1 items-center sm:items-start rounded-lg p-6 gap-4 bg-white"
    >
      <div
        class="w-[30px] h-[30px] sm:w-10 sm:h-10 row-start-2 sm:row-start-auto"
      >
        <img :src="currentUser?.image.webp" alt="user-current-avatar" />
      </div>
      <div class="col-span-full sm:col-span-1">
        <textarea
          v-model="content"
          class="resize-none border rounded-lg px-6 py-3 w-full placeholder:text-grayish-blue border-light-gray focus:outline-none focus:border-moderate-blue"
          placeholder="Add a comment..."
        />
      </div>
      <div
        class="row-start-2 sm:row-start-auto place-self-end sm:place-self-start"
      >
        <button
          type="submit"
          class="w-[90px] py-[10px] rounded-lg bg-moderate-blue hover:bg-light-grayish-blue text-white"
        >
          <span class="uppercase">{{ isReplying ? "reply" : "send" }} </span>
        </button>
      </div>
    </div>
  </form>
</template>
