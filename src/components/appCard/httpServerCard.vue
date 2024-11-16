<script setup lang="ts">
defineProps<{
  data: any
  title: any
}>()
const router = useRouter()

function toCardDetail(name: string) {
  router.push({
    path: `/detail/${name}`,
  })
}
</script>

<template>
  <PvCard>
    <template #header />
    <template #title>
      {{ title }}
    </template>
    <template v-if="data.listen" #subtitle>
      <PvTag v-for="item in data.listen" :key="item">
        {{ item }}
      </PvTag>
    </template>
    <template #content>
      with {{ data.routes.length }} routes
    </template>
    <template #footer>
      <div class="mt-1 flex gap-4">
        <PvButton label="Delete" severity="danger" outlined class="flex-1" />
        <PvButton label="View" class="flex-1" @click="toCardDetail(title)" />
      </div>
    </template>
  </PvCard>
</template>

<style></style>
