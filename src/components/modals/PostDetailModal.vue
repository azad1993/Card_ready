<template>
  <div class="hello">
    <b-modal id="modal-xl" size="xl" :title="post.title">
      <div>
        {{ post.body }}
        {{ post.id }}

        <hr>
        <h3>Comments</h3>
        <div v-for="comment in comments" :key="comment">
            <div>ID: {{ comment.id }}</div>
            
            <div>EMAIL: {{ comment.email }}</div>
            
            <div>NAME: {{ comment.name }}</div>
            
            <div>BODY: {{ comment.body }}</div>

            <hr>
            
        </div>
        <hr>

      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "../../plugins/axios";

export default {
  name: "PostDetailModal",
  props: {
    postId: null,
  },
  data() {
    return {
      post: {},
      comments: []
    };
  },
  watch: {
    postId: function () {
      this.getPostDetail()
      this.getPostComments()
    },
  },
  
  methods: {
    async getPostDetail() {
        console.log('---adad');
      await axios
        .get(`posts/${this.postId}`)
        .then((resp) => {
          this.post = resp.data;
        })
        .catch((error) => Promise.reject(error));
    },
    async getPostComments() {
      await axios
        .get(`posts/${this.postId}/comments`)
        .then((resp) => {
          this.comments = resp.data;
        })
        .catch((error) => Promise.reject(error));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
