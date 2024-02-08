<script setup lang="ts">
  // import {Person} from '@/typings/person';
  import type {PropType} from 'vue';
  import type {Person} from "../typings/person"
  
  const props = withDefaults(
    defineProps<{people?: Array<Person>}>(),
    {
      people: () => [
      { "email": "stat@s21", "name": "Stan", "image": ""},
      { "email": "sasd@s21", "name": "Stan 2", "image": ""},
      { "email": "stasdat@s21", "name": "Stan 3", "image": ""},
      ]
    }
  )

  function handleChange(event: Event){
    console.log((event.target as HTMLInputElement).value)
  }
</script>

<template>
  <h1>AAAAAAAAAA</h1>
  <ul class="divide-y divide-gray-200">
    <li
      v-for="person in people"
      :key="person.email"
      class="py-4 flex"
    >
      <img
        class="h-10 w-10 rounded-full"
        :src="person.image"
        alt=""
      >
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          {{ person.name }}
        </p>
        <p class="text-sm text-gray-500">
          {{ person.email }}
        </p>
      </div>
    </li>
  </ul>
</template>
  
  
  