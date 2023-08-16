<template>
  <v-container>
    <photo-form @addPhoto="addPhotoToPage"></photo-form>
    <v-row>
      <Photo
        v-for="photo in photos"
        :key="photo"
        :photo="photo"
        @openPhoto="openPhoto"
      ></Photo>
    </v-row>
    <photo-dialog
      photo="currentPhoto"
      :v-model="dialogVisible"
    ></photo-dialog>
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
export default {
  components: { Photo, PhotoForm, PhotoDialog },
  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false,
  }),
  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => (this.photos = response.data)); //Получаем и присваиваем данные
    },
    addPhotoToPage(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
};
</script>
