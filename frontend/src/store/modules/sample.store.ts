// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSampleStore = defineStore('sample', {
  state: () => ({}),
  getters: {},
  actions: {
    init () : void {
      console.log("Initializing sample store")
    },
  }
})

// make sure to pass the right store definition, `useSampleStore` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSampleStore, import.meta.hot))
}