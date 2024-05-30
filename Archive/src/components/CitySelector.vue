<template>
  <input class="poppins-font input" type="text" ref="city" :placeholder="placeholder" />
</template>
<script>
export default {
  props: { placeholder: String },
  emits: ['departureCity'],
  data() {
    return {
      autocomplete: null,
      selectedCity: null,
      options: {
        types: ['(cities)']
      }
    }
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(this.$refs.city, this.options)

    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace()
      this.selectedCity = place.formatted_address
    })
  },
  watch: {
    selectedCity(newValue) {
      this.$emit('departureCity', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 16.5%;
  height: 60px;
  position: relative;
  padding: 8px 16px;
  border: 2px solid #0c73fe;
  border-left: none;
}
</style>
