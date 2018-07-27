<template>
   <div class="row">
      <div class="row">
         <div class="card">
            <div class="card-title">
               Please Input Player Name
            </div>
            <div class="card-content">
               <input placeholder="Enter Name Here" id="first_name2" type="text" v-model="username" class="validate">
               <a class="waves-effect waves-light btn" @click="addUser">Enter</a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'


export default {
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
      'addPlayer', 'getPlayers'
    ]),
    addUser () {
      this.addPlayer(this.username)
    }
  },
  // computed :{
  //   ...mapState([
  //     'username', 'players'
  //   ])
  // }
}
</script>
