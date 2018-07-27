<template>
<<<<<<< HEAD
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

=======
  <div class="row">
    <div class="col s12 m4 l2"></div>
    <div class="col s12 m4 l8"><User/></div>
    <div class="col s12 m4 l2"></div>
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
<<<<<<< HEAD
=======
import User from '@/components/User.vue'
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
import {mapActions,mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    User
  },
  data(){
    return {
<<<<<<< HEAD
      username : null,
      roomname : null
=======
      username : null
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
    }
  },
  created () {
    this.getPlayers()
  },
  methods :{
    ...mapActions([
<<<<<<< HEAD
      "addPlayer", "getPlayers","createRoom"
    ]),
    addUser () {
      this.addPlayer(this.username)
    },
    addRoom(){
      this.createRoom(this.roomname)
      console.log(this.roomname)
=======
      "addPlayer", "getPlayers"
    ]),
    addUser () {
      this.addPlayer(this.username)
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
    }
  },
  computed :{
    ...mapState([
<<<<<<< HEAD
      "username", 'players','room'
=======
      "username", 'players'
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
    ])
  }
}
</script>
