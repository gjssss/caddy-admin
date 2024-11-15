<script setup lang="ts">
const caddyConfig = useCaddyConfig()
</script>

<template>
  <div class="flex gap-20px">
    <!-- <PvCard>
      <template #header />
      <template #title>
        Advanced Card
      </template>
      <template #subtitle>
        Card subtitle
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template>
      <template #footer>
        <div class="mt-1 flex gap-4">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </PvCard> -->
    {{ caddyConfig.config }}
  </div>
</template>

<style></style>
