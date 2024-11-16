<script setup lang="ts">
const caddyConfig = useCaddyConfig()
</script>

<template>
  <div v-if="caddyConfig.httpApp.servers" class="grid grid-cols-3 gap-20px">
    <HttpServerCard v-for="value, key in caddyConfig.httpApp.servers" :key :data="value" :title="key" />
  </div>
</template>

<style></style>
