<script setup lang="ts">
import { codeToHtml } from 'shiki'

const visible = ref(false)
const caddyConfig = useCaddyConfig()
const html = ref('')

watchEffect(async () => {
  html.value = await codeToHtml(
    JSON.stringify(caddyConfig.config, undefined, 2),
    {
      lang: 'json',
      theme: 'vitesse-dark',
    },
  )
})
</script>

<template>
  <Teleport to="body">
    <div class="i-carbon-book absolute bottom-20px left-20px">
      <div class="i-carbon-book" @click="visible = true" />
    </div>
    <PvDrawer v-model:visible="visible" :show-close-icon="false" class="w-50rem!">
      <div class="h-full of-auto">
        <div v-html="html" />
      </div>
    </PvDrawer>
  </Teleport>
</template>

<style></style>
