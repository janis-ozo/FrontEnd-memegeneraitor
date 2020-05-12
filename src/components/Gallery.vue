<template>
  <div class="container">
    <b-row class="mt-5" v-if="!images.length">
      <b-col>
        <b-spinner label="Loading images" variant="primary"></b-spinner>
      </b-col>
    </b-row>
    <div class="gallery">
      <ul>
        <li v-for="image in images" :key="image.id">
          <figure>
            <img
              :src="image.url"
              :key="image.id"
              :alt="`Image of ${image.name} meme`"
              class="meme-thumb"
              v-b-modal.modal-1
              @click="imgToEdit = image.url"
            />
          </figure>
        </li>
      </ul>
    </div>
    <b-modal id="modal-1" title="Editor">
      <Editor :imgToEdit="imgToEdit" />
    </b-modal>
  </div>
</template>
<script>
import Editor from "@/components/Editor.vue";
export default {
  name: "Gallery",
  components: { Editor },
  data() {
    return {
      images: [],
      imgToEdit: ""
    };
  },
  created() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => (this.images = response.data.memes))
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.gallery > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
}

.gallery > ul > li:nth-child(4n) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery > ul > li:nth-child(8n) {
  grid-column: span 3;
  grid-row: span 3;
}

.gallery > ul > li > figure {
  height: 100%;
}

.gallery > ul > li > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
