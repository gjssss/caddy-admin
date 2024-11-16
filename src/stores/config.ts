import { get } from 'lodash-es'

export const useCaddyConfig = defineStore('caddy-config', () => {
  const config = ref<any>({})
  const loading = ref(true)

  async function refresh() {
    loading.value = true
    const { data } = await getConfig()
    config.value = data
    loading.value = false
  }

  const httpApp = computed(() => {
    return get<Record<string, any>>(config.value, 'apps.http', {})
  })

  refresh()

  return {
    config,
    loading,
    refresh,
    httpApp,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCaddyConfig as any, import.meta.hot))
