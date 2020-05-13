<template>
  <div class="editor">
    <b-form-input v-model="text" placeholder="Enter your TEXT"></b-form-input>
    <div id="download" ref="download">
      <div class="d-flex image-and-text">
        <b-img
          thumbnail
          fluid
          :src="imgToEdit"
          left
          :alt="`Image to edit`"
          class="image"
        ></b-img>
        <div class="textonimage" :style="[size, positionX, positionY]">
          {{ text }}
        </div>
      </div>
    </div>
    <label for="range-1">Text size</label>
    <div></div>
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
      max="500"
    ></b-form-input>
    <label for="range-1">Position Y</label>
    <div class="mt-2">Value: {{ textY }}</div>
    <b-form-input
      id="range-1"
      v-model="textY"
      type="range"
      min="0"
      max="500"
    ></b-form-input>
    <b-button @click="download" variant="success">Download</b-button>
  </div>
</template>

<script>
import { saveAsJpeg } from "save-html-as-image";
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
      textSize: 50,
      width: 0,
      height: 0,
      textX: 50,
      textY: 50
    };
  },
  computed: {
    size() {
      return {
        fontSize: this.textSize + "px"
      };
    },
    positionX() {
      return {
        top: this.textX + "px"
      };
    },
    positionY() {
      return {
        left: this.textY + "px"
      };
    }
  },
  methods: {
    download() {
      const node = this.$refs.download;
      saveAsJpeg(node, { filename: "meme", printDate: false });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-and-text {
  position: relative;
  max-width: 450px;
}

.textonimage {
  position: absolute;
  font-weight: 700;
  color: black;
}

.mt-2 {
  font-size: 10px;
}

label {
  font-size: 15px;
  font-weight: 700;
}
</style>
