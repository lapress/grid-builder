<template>
  <GridItem
    :x="tile.x"
    :y="tile.y"
    :w="tile.w"
    :h="tile.h"
    :i="tile.i"
    :max-h="$lapress.grid.height"
    :max-w="$lapress.grid.width"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut autem deleniti dignissimos distinctio earum, eius enim eos facere impedit ipsa maiores maxime quasi quidem repellat sed tempora voluptatem voluptatum.
  </GridItem>
</template>

<script>
import { GridItem } from 'vue-grid-layout';
export default {
  name: 'Tile',
  components: { GridItem },
  props: {
    tile: {
      type: Object,
      required: true
    },
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
