<template>
  <div class="hello">
    <h2> Teams </h2>
    <b-table striped hover responsive :items="Team" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Team',
  data () {
    return {
      Team: null,
      fields: [
      {key: 'team', label: 'Team', sortable: true},
      {key: 'nofPl', label: 'NofPl', sortable: true},
      {key: 'age', label: 'Age', sortable: true},
      {key: 'poss', label: 'Poss', sortable: true},
      {key: 'mp', label: 'MP', sortable: true},
      {key: 'starts', label: 'Starts', sortable: true},
      {key: 'nmin', label: 'nMin', sortable: true},
      {key: 'gls', label: 'Gls', sortable: true},
      {key: 'ast', label: 'Ast', sortable: true},
      {key: 'g_PK', label: 'G_PK', sortable: true},
      {key: 'pk', label: 'PK', sortable: true},
      {key: 'pkatt', label: 'PKatt', sortable: true},
      {key: 'crdY', label: 'CrdY', sortable: true},
      {key: 'crdR', label: 'CrdR', sortable: true}],
      form: {
          Team: '',
          NofPl: '',
          Age: '',
          Poss: '',
          MP: '',
          Starts: '',
          nMin: '',
          Gls: '',
          Ast: '',
          G_PK: '',
          PK: '',
          PKatt: '',
          CrdY: '',
          CrdR: '',
        },
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      axios
        .get('http://localhost:8085/team')
        .then(response => (this.Team = response.data))
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