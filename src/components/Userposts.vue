<template>
    <div class="hello">
      <h2> Userposts </h2> 
      <b-button class ="add-button2" v-b-modal.create-modal><b-icon-plus-square></b-icon-plus-square></b-button> 
      <b-button class = "add-button" v-b-modal.delete-modal><b-icon-trash-fill></b-icon-trash-fill></b-button>   
    
      <b-table stacked hover :items="Userpost" :fields="fields"></b-table>

      <b-modal id="create-modal" ref ="create-modal" title = "Create Posts" @hide = "resetEditModal" hide-footer>
        <b-form id="create_form" ref="create_form">

            <label class = "sr-only" for = "username">username</label>
            <b-form-input
              username = 'username'
              v-model = "form.username"
              placeholder = "username"
              required
            ></b-form-input>

            <label class = "sr-only" for = "team">team</label>
            <b-form-input
              team = 'team'
              v-model = "form.team"
              placeholder = "team"
              required
            ></b-form-input>
            
            <label class = "sr-only" for = "player">player</label>
            <b-form-input
              player = 'player'
              v-model = "form.player"
              placeholder = "player"
              required
            ></b-form-input>
            
            <label class = "sr-only" for = "post">post</label>
            <b-form-input
              post = 'post'
              v-model = "form.post"
              placeholder = "post"
              required
            ></b-form-input>
          <br />
          
          <b-button type = "button" @click = "createPost" variant = "primary">Create</b-button>
        </b-form>
      </b-modal>
      


      <b-modal id="delete-modal" ref ="delete-modal" title = "Delete Posts" hide-footer>
        <b-form id="delete_form" ref="delete_form">

            <label class = "sr-only" for = "username">Username</label>
              <b-form-input
                id = 'username'
                v-model = "form.username"
                placeholder = "Username"
                required
              ></b-form-input>

            <label class = "sr-only" for = "team">Team</label>
              <b-form-input
                id = 'team'
                v-model = "form.team"
                placeholder = "Team"
                required
              ></b-form-input>
         

              <label class = "sr-only" for = "player">Player</label>
              <b-form-input
                id = 'player'
                v-model = "form.player"
                placeholder = "Player"
                required
              ></b-form-input>
            <br />

          <b-button type = "button" @click = "deletePost" variant = "danger">Delete</b-button>
        </b-form>
      </b-modal>


    </div>
  </template> 
  


  <script>
  import axios from 'axios';

  export default {
    name: 'Userpost',
    data () {
      return {
        Userpost: null,
        fields: [
        {key: 'username.username', label: 'username', sortable: true},
        {key: 'team.team', label: 'Team', sortable: true},
        {key: 'player.player', label: 'Player', sortable: true},
        {key: 'post', label: 'Post', sortable: true}],
        form: {
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
          .get('http://localhost:8085/userpost')
          .then(response => (this.Userpost = response.data))
      },

      resetEditModal() {
        this.form.username = ''
        this.form.team = ''
        this.form.player = ''
        this.form.post = ''
        this.form.postId = ''
      },
      
      createPost(){
        axios
          .post('http://localhost:8085/userpost',{
            "username":this.form.username,
            "team": this.form.team,
            "player": this.form.player,
            "post":this.form.post,
          })
          .then(() => {this.init();this.$refs['create-modal'].hide()})
          .catch(function(error){
            console.log(error);
          });
      },

      deletePost(){
        var inputName;
        var inputTeam;
        var inputPlayer;
        inputName = this.form.username;
        inputTeam = this.form.team;
        inputPlayer = this.form.player;
        axios.resetEditModal;
        axios
          .delete('http://localhost:8085/userpost/' + inputName +'/'+ inputTeam + '/' + inputPlayer,{
          })

          .then(() => {this.init();this.$refs['delete-modal'].hide()})
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
    color: #d62234;
  }
  .add-button{
    background-color: transparent;
    color:#e61131;
    border-color: #c82121;
  }
  .add-button:hover {
    background-color: #de1010;
    color: white;
  }

  .add-button2{
    background-color: transparent;
    color:#11ade6;
    border-color: #11ade6;
  }
  .add-button2:hover {
    background-color: #11ade6;
    color: white;
  }

  




  </style>



  