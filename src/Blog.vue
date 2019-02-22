<template>
  <div>
    <input
      class="form-control"
      type="text"
      v-model="searchQuery"
      placeholder="Search"
    />
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
      :show-step-links="true"
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
    }
  }
};
</script>

<style></style>
