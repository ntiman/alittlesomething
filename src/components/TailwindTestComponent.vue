<script lang="ts">
import { ref, type PropType, useSSRContext } from "vue";
import type { Person } from "../typings/person";
import User from "./User.vue";

export default {
  components: { User },
  setup() {
    const users = ref<Person[]>([]);

    function addUser(): void {
      users.value?.push({
        name: "John Salivan" + Math.random(),
        email: "email@gmail.com",
      });
      console.log(users);
    }
    return {
      users,
      addUser,
    };
  },
};
</script>

<template>
  <div>
    <button @click="addUser">Add user</button>
    <div v-for="user in users" :key="user.name">
      <User :user="user" />
    </div>
  </div>
</template>
