export const useCaddyConfig = defineStore('caddy-config', () => {
  const config = ref({})
  const loading = ref(true)

  getConfig().then(({ data }) => {
    config.value = data
    loading.value = false
  })

  return {
    config,
    loading,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCaddyConfig as any, import.meta.hot))
