<template>
  <div class="hello">
    <h2> Players </h2>
    <b-table striped hover responsive :items="Player" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Player',
  data () {
    return {
      Player: null,
      fields: [
      {key: 'team.team', label: 'Team', sortable: true},
      {key: 'player', label: 'Player', sortable: true},
      {key: 'nation', label: 'Nation', sortable: true},
      {key: 'pos', label: 'Pos', sortable: true},
      {key: 'age', label: 'Age', sortable: true},
      {key:'mp',label:'MP',sortable:true},
      {key: 'starts', label: 'Starts'},
      {key: 'nmin', label: 'nMin'},
      {key: 'gls', label: 'Gls'},
      {key: 'ast', label: 'Ast'},
      {key: 'g_PK', label: 'G_PK'},
      {key: 'pk', label: 'PK'},
      {key: 'pkatt', label: 'PKatt'},
      {key: 'crdY', label: 'CrdY'},
      {key: 'crdR', label: 'CrdR'}],
      form: {
          Team: '',
          Player: '',
          Nation: '',
          Pos: '',
          Age: '',
          MP:'',
          Starts: '',
          nMin: '',
          Gls: '',
          Ast: '',
          G_PK: '',
          PK: '',
          PKatt: '',
          CrdY: '',
          CrdR: ''
        },
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      axios
        .get('http://localhost:8085/player')
        .then(response => (this.Player = response.data))
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