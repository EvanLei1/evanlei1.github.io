import { onMounted, onUnmounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export function useFancybox(delegate = '[data-fancybox]') {
  onMounted(() => {
    Fancybox.bind(delegate, {})
  })

  onUnmounted(() => {
    Fancybox.destroy()
  })
}
