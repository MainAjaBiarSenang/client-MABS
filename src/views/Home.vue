<template>
  <div class="row">
    <div class="col s12 m4 l2"></div>
    <div class="col s12 m4 l8"><User/></div>
    <div class="col s12 m4 l2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import User from '@/components/User.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    User
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
