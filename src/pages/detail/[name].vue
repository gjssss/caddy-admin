<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'

const name = useRouteParams<string>('name')
// const caddyConfig = useCaddyConfig()
const { state: data } = useAsyncState(getConfig(`/apps/http/servers/${name.value}`).then(({ data }) => data), {
  listen: [],
  routes: [],
})

function generateRouteHandleBrief(handles: any[]) {
  return handles.map(item => item.handler).join(' → ')
}
</script>

<template>
  <div>
    <div class="text-dashed text-8">
      {{ name }}
    </div>
    <PvDivider />
    <div class="text-5">
      Listen Ports
    </div>
    <div v-for="port in data.listen" :key="port">
      {{ port }}
    </div>
    <PvDivider />
    <div class="text-5">
      Route Rules
    </div>
    <div v-for="rule, index in data.routes" :key="index">
      <div>
        Handles: {{ generateRouteHandleBrief(rule.handle) }}
      </div>
    </div>
  </div>
</template>

<style></style>
