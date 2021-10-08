<template>
  
  <div class="content">
    <h1>Список квартир</h1>
    <div class="flats-list">
      <flat-card
        v-for="flat in $store.state.flats"
        :key="flat.id"
        :flat="flat"
        @addLike="addLike"
        @removeLike="removeLike"
      />
    </div>
  </div>
</template>

<script>
import FlatCard from './components/FlatCard.vue'

export default {
  name: 'App',
  components: {
    FlatCard
  },
  methods: {
    addLike(flat) {
      this.$store.commit('addLike', flat)
    },
    removeLike(flat) {
      this.$store.commit('removeLike', flat)
    }
  },
  mounted() {
    this.$store.dispatch('fetchFlats')
  }
}
</script>

<style>

 .content {
   max-width: 600px;
   margin: auto;
 }

</style>
