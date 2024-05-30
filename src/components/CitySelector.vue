<template>
  <input class="poppins-font input" type="text" ref="city" :placeholder="placeholder" />
</template>
<script>
export default {
  props: { placeholder: String },
  emits: ['departureCity', 'arrivalCity'],
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
      this.$emit('arrivalCity', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/main.scss';

.input {
  color: #000;
  width: 20%;
  height: 64px;
  position: relative;
  padding: 8px 16px;
  border: 2px solid $blue;
  border-left: none;
  &::placeholder {
    color: $grey;
  }
}

@media screen and (max-width: 1024px) {
  .input {
    width: 50%;
  }
}
@media screen and (max-width: 568px) {
  .input {
    width: 100%;
    border-top: 0;
  }
}
</style>
