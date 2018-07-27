<template >
<div class="listroom">
  <div class="row room">
    <div class="col s12 m6 l3">
      <div class="card light">
        <div class="card-image">
          <img src="../assets/room1.jpg">
          <span class="card-title">California Room</span>

          <a class="btn-floating halfway-fab waves-effect waves-light red" v-on:click="joinCalifornia"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>From the casual player to the seasoned pro, this action-packed MABS room is perfect for everyone. Featuring 2 tables and weekly tournaments, The Saloon provides the best in live action MABS.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m6 l3">
      <div class="card light">
        <div class="card-image">
          <img src="../assets/room2.jpg">
          <span class="card-title">Texas Room</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red" v-on:click="joinTexas"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>From the casual player to the seasoned pro, this action-packed MABS room is perfect for everyone. Featuring 2 tables and weekly tournaments, The Saloon provides the best in live action MABS.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m6 l3">
      <div class="card light">
        <div class="card-image">
          <img src="../assets/room3.jpg">
          <span class="card-title">Beerhall Room</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red" v-on:click="joinBeer"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>From the casual player to the seasoned pro, this action-packed MABS room is perfect for everyone. Featuring 2 tables and weekly tournaments, The Saloon provides the best in live action MABS.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m6 l3">
      <div class="card light">
        <div class="card-image">
          <img src="../assets/room4.jpg">
          <span class="card-title">Panama Room</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red" v-on:click="joinPanama"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>From the casual player to the seasoned pro, this action-packed MABS room is perfect for everyone. Featuring 2 tables and weekly tournaments, The Saloon provides the best in live action MABS.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-copyright">
            <div class="container teal">
            Maen Aja Biar Seneng © 2018 Copyright
            </div>
          </div>
        </footer>

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
      "addPlayer", "getPlayers","createRoom" ,"joinRoomBeer","joinRoomPanama","joinRoomTexas","joinRoomCalifornia"
    ]),
    addUser () {
      this.addPlayer(this.username)
    },
    addRoom(){
      this.createRoom(this.roomname)
      console.log(this.roomname)
    },
    joinBeer(){
        this.joinRoomBeer()
    },
    joinPanama(){
      this.joinRoomPanama()
    },
    joinTexas(){
      this.joinRoomTexas()
    },
    joinCalifornia(){
      this.joinRoomCalifornia()
    }
  },
  computed :{
    ...mapState([
      "username", 'players','room'
    ])
  }
}
</script>

<style lang="css">
.room {
  display: block;
  background-color: lightgrey;
  min-height: 100%;
  padding-bottom: 180px;
}
</style>
