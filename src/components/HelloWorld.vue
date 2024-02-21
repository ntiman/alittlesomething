<script lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

export default {
  props: {
    message: String,
  },
  setup() {
    const date = ref<string | number | Date>(0);

    const count = ref<number>(0);
    const object = { id: ref<number>(25), name: ref<string>("Hello") };
    const { id, name } = object;

    return {
      count,
      object,
      id,
      name,
    };
  },
};
</script>

<template>
  <h2>Count is: {{ count + 1 }}</h2>
  <h2>Object.id is : {{ id + 1 }}</h2>
  <h2>Object.name is : {{ name + 1 }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
