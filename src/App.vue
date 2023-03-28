<template>
  <div id="app">
  <b-container>
    <div>
      <b-navbar toggleable type="dark" variant="primary">
      <b-navbar-brand href="#">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" width="120" height="50"> Primer League Data Analytics and Fan Discussion board
      </b-navbar-brand>

      <b-navbar-toggle target="sidebar-menu">
      </b-navbar-toggle>
      <b-sidebar id="sidebar-menu" title="Primer League Data Analytics" backdrop-variant="dark" backdrop shadow>
        <b-nav vertical align="center">
          <b-img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" fluid thumbnail></b-img>
          <b-nav-item to="/" exact exact-active-class="exact-active">Home</b-nav-item>
          <b-nav-item to="/Players" exact exact-active-class="exact-active">Players</b-nav-item>
          <b-nav-item to="/Teams" exact exact-active-class="exact-active">Teams</b-nav-item>
          <b-nav-item to="/Userposts" exact exact-active-class="exact-active">Userposts</b-nav-item>
          <b-nav-item to="/User" exact exact-active-class="exact-active">My Profile</b-nav-item>
        </b-nav>
      </b-sidebar>
    </b-navbar>
    </div>
    <br />
    <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>