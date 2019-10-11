<template>
  <div class="grid">
    <LpNavigationBar :title="config.navigation.title" :subtitle="config.navigation.subtitle">
      <button class="lp button is-info" @click.prevent="$emit('add')">
        Dodaj kafel
      </button>
      <button class="lp button is-success" @click.prevent="$emit('save')">
        Zapisz zmiany
      </button>
    </LpNavigationBar>
    <GridLayout
      :layout="tiles"
      :max-rows="$lapress.grid.height"
      :col-num="$lapress.grid.width"
      :row-height="$lapress.grid.rowHeight"
      :is-draggable="$lapress.grid.draggable"
      :is-resizable="$lapress.grid.resizable"
      :vertical-compact="$lapress.grid.verticalCompact"
      :margin="$lapress.grid.margin"
      :use-css-transforms="$lapress.grid.cssTransforms"
    >
      <Tile v-for="(tile, index) in tiles" :key="index"  :tile="tile" />
    </GridLayout>

    <b-aside :is-show="show" placement="right" >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum, delectus dolor ea est excepturi inventore
      neque nostrum numquam odio quae quam repellendus similique vel, voluptates? Et necessitatibus perferendis
      recusandae.
    </b-aside>
  </div>
</template>

<script>
import { GridLayout } from 'vue-grid-layout';

import { KEY } from "../../index";
const Tile = () => import(/* webpackChunkName: "lapress-grid-tile" */ './Tile')

export default {
  name: 'Grid',
  components: { GridLayout, Tile },
  props: {
    value: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      tiles: [],
      show: false
    };
  },
  computed: {
    config() {
      return this.$lapress[KEY];
    }
  },
  mounted() {
    setTimeout(() => {
      // this.show = true
    }, 1000);
  },
  methods: {
    add() {
      this.$emit('add');
    },
    save() {
      this.$emit('save');
    },
  },
};
</script>

<style lang="scss">
$family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
$blue: #0073aa;

@import "~vue-blu/src/scss/blu";

.lp.button {
  box-shadow: none;
  border: none;
}

</style>

