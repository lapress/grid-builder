import { createModule } from "lapress-frontend-core/src/utils/helpers"

export const KEY = 'grid'
export default createModule({
  key: KEY,
  config: {
    width: 8,
    height: 4,
    resizable: true,
    draggable: true,
    margin: [15, 15],
    rowHeight: 150,
    verticalCompact: false,
    cssTransforms: true,
    navigation: {
      title: 'Grid',
      subtitle: null,
    },
    tile: {
      post: null,
      color: null,
      x: 6,
      y: 4,
      w: 2,
      h: 2
    }
  },

  register(Vue, options = {}) {
    Vue.component('GridBuilder', () => import(/* webpackChunkName: "lapress-grid-builder"  */'./src/components/Grid'))
  },
})
