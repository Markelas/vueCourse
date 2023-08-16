<template>
  <v-dialog v-model="value" max-width="600">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img :src="photo.url"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  created(){
    this.dialogVisible = this.value
  },
  data: () => ({
    dialogVisible: false,
  }),
  watch: {
    value(newWalue) {
      console.log(newWalue)
    }
  }
};
</script>
