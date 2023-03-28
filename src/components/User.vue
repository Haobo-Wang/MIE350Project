<template>
  <div class="hello">
    <h2> My Profile </h2>
      <b-input-group>
        <b-form-input type="text" placeholder="Enter Username" v-model="query"/>
        <template #append>
          <b-button class="search-button" @click="search(query)">
            <b-icon-check></b-icon-check>
          </b-button>
        </template>
      </b-input-group>


    <b-table striped hover :items="User" :fields="fields1"></b-table>
    <b-button class="add-button" v-b-modal.edit-modal>edit</b-button>

    <b-modal id="edit-modal" ref ="edit-modal" title = "Edit Favorate Player and Team" @hide = "resetEditModal" hide-fotter>
        <b-form>
          <label class = "sr-only" for = "username">username</label>
          <b-form-input
            id = 'username'
            v-model = "form1.username"
            placeholder = "username"
            required
          ></b-form-input>

          <label class = "sr-only" for = "team">team</label>
          <b-form-input
            id = 'team'
            v-model = "form1.Team"
            placeholder = "Favorate team"
            required
          ></b-form-input>

          <label class = "sr-only" for = "player">player</label>
          <b-form-input
            id = 'player'
            v-model = "form1.Player"
            placeholder = "Favorate player"
            required
          ></b-form-input>

          <br />
          <b-button type = "button" @click = "onSave" variant = "primary">Save</b-button>
        </b-form>
      </b-modal>

    <h2> My Posts </h2>
    <b-table striped hover :items="Userpost" :fields="fields2"></b-table>

  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'User',
  data () {
  return {
    User: null,
    query:'',
    fields1: [
    {key: 'username', label: 'Username', sortable: false},
    {key: 'player.player', label: 'Favorate Player', sortable: false},
    {key: 'team.team', label: 'Favorate Team', sortable: false}],
    form1: {
      username: '',
      Player: '',
      Team: ''
      },
    name: 'Userpost',
    Userpost: null,
    fields2: [
    {key: 'team.team', label: 'Team', sortable: false},
    {key: 'player.player', label: 'Player', sortable: false},
    {key: 'post', label: 'Post', sortable: false}],
    form2: {
        username:'',
        Team: '',
        Player: '',
        Post: '',
      },
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      axios
        .get('http://localhost:8085/user')
        .then(response => (this.User = response.data))
      axios
        .get('http://localhost:8085/userpost')
        .then(response => (this.Userpost = response.data))
    },

    search(searchTerm){
      if(searchTerm){
        axios
        .get('http://localhost:8085/user/'+searchTerm)
        .then(response => (this.User = response.data))
        .catch(function (error){
          if(error.response){
            console.log(error.response.data);
          }
        })
        axios
        .get('http://localhost:8085/userpost/search/user/'+searchTerm)
        .then(response => (this.Userpost = response.data))
        .catch(function (error){
          if(error.response){
            console.log(error.response.data);
          }
        })
      }
    },

    resetEditModal(){
      this.form1.username=''
      this.form1.Player=''
      this.form1.Team=''
    },


    onSave(){
        var usname;
        usname = this.form1.username
        axios
          .put('http://localhost:8085/user/'+ usname,
          {
            "username":this.form1.username,
            "team": this.form1.Team,
            "player": this.form1.Player,
          })
          .then(() => {this.init();this.$refs['edit-modal'].hide()})
          .catch(function(error){
            console.log(error);
          });
      }
  }
}
</script>

<style scoped>
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