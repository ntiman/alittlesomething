<script setup lang="ts">
import { Person } from '@/typings/person'

defineProps<{ user?: Person }>()
</script>
<template>
    <div class="flex items-center bg-orange-800">
        <strong>{{ user?.name }} </strong>
        <span>{{ user?.email }}</span>
    </div>
</template>
<style></style>
