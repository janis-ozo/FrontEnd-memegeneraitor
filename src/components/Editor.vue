<template>
  <div class="editor">
    <p class="my-4">Hello from editor! {{ imgToEdit }}</p>
    <b-form-input v-model="text" placeholder="Enter your TEXT"></b-form-input>
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
    <label for="range-1">Text size</label>
    <div class="mt-2">Value: {{ textSize }}</div>
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
    <label for="range-1">Position X</label>
    <div class="mt-2">Value: {{ x }}</div>
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
    <label for="range-1">Position Y</label>
    <div class="mt-2">Value: {{ y }}</div>
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="0"
      max="100"
    ></b-form-input>
  </div>
</template>

<script>
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
      textSize: 10,
      width: 0,
      height: 0,
      textX: 50,
      textY: 50
    };
  },
  methods: {
    // onResize: function(x, y, width, height) {
    //   this.x = x;
    //   this.y = y;
    //   this.width = width;
    //   this.height = height;
    // },
    resizeTextX: function(textX) {
      this.textX = textX;
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
}
</style>
