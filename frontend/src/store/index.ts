// @ts-check
import { useSampleStore } from "./modules/sample.store"

const sampleStore = useSampleStore()

sampleStore.init()

export default {
  sample: sampleStore
}