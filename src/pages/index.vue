<script setup lang="ts">
const caddyConfig = useCaddyConfig()
</script>

<template>
  <PvButton @click="caddyConfig.refresh">
    刷新
  </PvButton>
  <div v-if="caddyConfig.httpApp.servers" class="grid grid-cols-3 mt-20px gap-20px">
    <HttpServerCard v-for="value, key in caddyConfig.httpApp.servers" :key :data="value" :title="key" />
  </div>
</template>

<style></style>
