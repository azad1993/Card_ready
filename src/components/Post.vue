<template>
  <div>
    <b-card
      :title="post.title | truncate(20)"
      tag="article"
      style="max-width: 20rem; min-width: 10rem; height: 20rem"
      footer-tag="footer"
      class="mb-2"
    >
      <b-card-text>
        {{ post.body | truncate(100) }}
      </b-card-text>

      <template #footer>
        <b-button v-b-modal.modal-xl variant="primary" @click="onClickButton" href="#">Show comments</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
   methods: {
     onClickButton () {
         this.$emit('clicked', this.post.id)
     }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
