<template>
  <div class="editor">
    <p class="my-4">Hello from editor! {{ imgToEdit }}</p>
    <b-form-input v-model="text" placeholder="Enter your TEXT"></b-form-input>
    <div id="download" ref="download">
      <div class="image-and-text">
        <b-img
          thumbnail
          fluid
          :src="imgToEdit"
          left
          :alt="`Image to edit`"
          class="image"
        ></b-img>
        <div class="textonimage">{{ text }}</div>
      </div>
    </div>
    <label for="range-1">Text size</label>
    <div class="mt-2">Value: {{ textSize }}</div>
    <b-form-input
      id="range-1"
      v-model="textSize"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
    <label for="range-1">Position X</label>
    <div class="mt-2">Value: {{ textX }}</div>
    <b-form-input
      id="range-1"
      v-model="textX"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
    <label for="range-1">Position Y</label>
    <div class="mt-2">Value: {{ textY }}</div>
    <b-form-input
      id="range-1"
      v-model="textY"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
    <b-button @click="download" variant="success">Download</b-button>
  </div>
</template>

<script>
import { saveAsPng } from 'save-html-as-image';
export default {
  name: "Gallery",
  props: {
    imgToEdit: {
      type: String
    }
  },
  data() {
    return {
      text: "",
      textSize: 100,
      width: 0,
      height: 0,
      textX: 50,
      textY: 50
    };
  },
  methods: {
    download() {
      const node = this.$refs.download
      saveAsPng(node, {filename:'meme', printDate:false})
    },
    resizeText: function() {
      return {
        fontSize: this.textSize + 'px'
      }
    }
    // onDrag: function(x, y) {
    //   this.x = x;
    //   this.y = y;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-and-text {
  position: relative;

}

.textonimage {
  position: absolute;
  font-size: 50px;
}
</style>
