<template>
  <div id="element">
    <input
      class="form-control"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
    />
    <small>Total number of posts: {{ resultCount }}</small>
      <paginate v-if="!filteredResources.length">No results.</paginate> 

        <paginate v-else="filteredResources" name="filteredResources" :list="filteredResources" :per="10">
     
     
          <div class="post-preview"   v-bind:key="blog.id"  v-for="blog in paginated('filteredResources')" >
          <a href="post.html">
            <h2 class="post-title">
             {{ blog.title }}
            </h2>
            
          </a>
          <p class="post-meta">
          
           <router-link :to="'/post/' + blog.id" class="btn btn-primary" >read more</router-link>
           </p>
        </div>
        <hr>
      
    </paginate>
    <paginate-links
      for="filteredResources"
      :async="true"
      :hide-single-page="true"
      :show-step-links="true"
      v-scroll-to="'#element'"
      :step-links="{
        next: 'Next',
        prev: 'Previous'
      }"
      :classes="{
        ul: 'pagination',
        'ul > li': 'page-item',
        'ul > li > a': 'page-link'
      }"
    >
    </paginate-links>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      paginate: ["filteredResources"],
      searchQuery: "",
    
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => (this.posts = json), error => console.log(error));
  },
computed: {
    filteredResources() {
      if (this.searchQuery) {
        return this.posts.filter((post) => {
          return post.title.startsWith(this.searchQuery);
        })
      } else {
        return this.posts;
      }
    },
    resultCount () {
      return this.posts && this.posts.length
  }
  },
  
  methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }

};
</script>

<style></style>
