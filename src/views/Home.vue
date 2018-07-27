<template>
      <div class="row">
      <div class="input-field col s6">
      <input value="Alvin" id="first_name2" v-model="username" type="text" class="validate">
      <label class="active" for="first_name2">First Name</label>

    </div>
      <div class="input-field col s6">
      <input value="" id="first_name1" v-model="roomname" type="text" class="validate">
         <label class="active" for="first_name1">Room Name</label>
      </div>
      <a class="waves-effect waves-light btn" v-on:click="addUser">add User</a>
      <a class="waves-effect waves-light btn" v-on:click="addRoom">add room</a>

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
      username : null,
      roomname : null
    }
  },
  created () {
    this.getPlayers()
  },
  methods :{
    ...mapActions([
      "addPlayer", "getPlayers","createRoom"
    ]),
    addUser () {
      this.addPlayer(this.username)
    },
    addRoom(){
      this.createRoom(this.roomname)
      console.log(this.roomname)
    }
  },
  computed :{
    ...mapState([
      "username", 'players','room'
    ])
  }
}
</script>
