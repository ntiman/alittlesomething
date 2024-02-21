<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TailwindTestComponent from "./components/TailwindTestComponent.vue";
import Message from "./components/Message.vue";
import { ref } from "vue";

export default {
  components: { TailwindTestComponent, HelloWorld, Message },
  setup() {
    const message = ref<string>("Hello world");
    return {
      message,
    };
  },
  mounted() {},
};
</script>

<template>
  <HelloWorld />
  <TailwindTestComponent />
  <Message :message="message" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!-- <template>
  <div>
  <div>
    <router-view />
  </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})

</script> -->
