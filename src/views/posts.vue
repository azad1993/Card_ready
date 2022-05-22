<template>
  <div>
    <div class="row m-3">
      <div class="col-2">
        <h3>Filter the posts</h3>
        <div>
          <div>
            <label for="title-filter">Title</label>
            <b-form-input
              v-model="filter.title"
              id="title-filter"
              placeholder="Enter title"
            >
            </b-form-input>
          </div>
          <div>
            <label for="body-filter">Body</label>
            <b-form-input
              v-model="filter.body"
              id="body-filter"
              placeholder="Enter body text"
            >
            </b-form-input>
          </div>
        </div>
      </div>
      <div class="col-10">
        <h3>Posts</h3>
        <div class="row">
          <!--<div v-for="post in posts" :key="post" class="col-2">-->
            <div v-for="post in filteredPosts" :key="post">
            <Post
              :post="post"
              v-model="openedPostId"
              @clicked="getPostId"
            />
          </div>
          <PostDetailModal :postId="openedPostId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import PostDetailModal from "../components/modals/PostDetailModal.vue";
import axios from "../plugins/axios";

export default {
  name: "posts",
  components: {
    Post,
    PostDetailModal,
  },
  data() {
    return {
      posts: [],
      filter: {
        title: "",
        body: "",
      },
      openedPostId: null,
    };
  },
  async mounted() {
    await axios
      .get("posts/")
      .then((resp) => {
        console.log(resp);
        this.posts = resp.data;
      })
      .catch((error) => Promise.reject(error));
  },
  computed: {
    //filteredPosts() {
    //  return this.posts.filter((el) => {
    //    el.title == this.filter.title;
    //  });
    //},
    filteredPosts() {
      if (this.filter.title) {
        return this.posts.filter(item => {
          return this.filter.title
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else if(this.filter.body) {
        return this.posts.filter(item => {
          return this.filter.body
            .toLowerCase()
            .split(" ")
            .every(v => item.body.toLowerCase().includes(v));
        })
        } else {
        return this.posts;
      }
    }
  
  },
  methods: {
    getPostId(value) {
      this.openedPostId = value;
    },
  },
};
</script>

<style scoped>
</style>