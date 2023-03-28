<template>
  <div>
    <div class="mt-2"></div>
    <b-button variant="outline-primary" size = 'lg' to="/Teams" exact exact-active-class="exact-active">Teams</b-button>
    <b-button variant="outline-primary" size = 'lg' to="/Players" exact exact-active-class="exact-active">Players</b-button>
    <b-button variant="outline-primary" size = 'lg' to="/Userposts" exact exact-active-class="exact-active">User Discussion Posts</b-button>
    <b-button variant="outline-primary" size = 'lg' to="/User" exact exact-active-class="exact-active">My Profile</b-button>
    <div class="mt-4"></div>
    <b-carousel
      id="carousel-1"
      :interval="6000"
      controls
      indicators
      fade
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src=https://www.insidesport.in/wp-content/uploads/2021/09/zq5ch5o7z1f51.jpg></b-carousel-slide>

      <b-carousel-slide caption="Primer League" img-src="https://a.espncdn.com/photo/2021/0609/r865143_1296x729_16-9.jpg"></b-carousel-slide>

      <b-carousel-slide caption="Primer League" img-src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt69914feaa4b88f63/62ab1c1f40413573aa05cfd3/GHP_22-23FIXTURES_2-1.jpg"></b-carousel-slide>
    
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mt-2 {
     margin-top: 2 !important;
  }
.mt-4 {
   margin-top: 4 !important;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>