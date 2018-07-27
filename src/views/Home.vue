<template>
      <div class="row">
      <div class="input-field col s6">
      <input value="Alvin" id="first_name2" v-model="username" type="text" class="validate">
      <label class="active" for="first_name2">First Name</label>
      {{name}}
    </div>

      <a class="waves-effect waves-light btn" v-on:click="addUser">button</a>

      <br><br>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions,mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      username : null
    }
  },
  created () {
    this.getPlayers()
  },
  methods :{
    ...mapActions([
      "addPlayer", "getPlayers"
    ]),
    addUser () {
      this.addPlayer(this.username)
    }
  },
  computed :{
    ...mapState([
      "username", 'players'
    ])
  }
}
</script>
