import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   username :'',
   players : [],
   rooms: []
  },
  mutations: {
    players (state, payload) {
      state.players = payload
    },
    room(state,room){
      state.rooms = room
    }
  },
  actions: {
    addPlayer(context, payload){
      console.log("ini di add player",payload)
      firebase.database().ref('users/').push({
        name : payload,
        life : 2,
        score : 0,
      })
        .then(result => {
          localStorage.setItem('idUser',result.key)
          // console.log(result.key)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPlayers ({ commit }) {
      firebase.database().ref('users').on('value',(snapshot)=> {
        var data = snapshot.val()
        console.log(snapshot.val())
        var arrData =[]
        for(var i in data){
          // console.log(data[i].name)
          arrData.push([i])
        }
        commit('players', arrData)
     })
    },
    createRoom(context,room){
      var user = localStorage.getItem('idUser')
      firebase.database().ref('users/').on('value',(snapshot)=>{
        var data = snapshot.val()

        for(var i in data){
          // console.log(data[i])
          if(i === user){
            console.log(user)
            firebase.database().ref('room/').push({
              player :data[i].name,
              roomName : room
            })
            .then((dataPlayer)=>{
              console.log(dataPlayer)
            })
            .catch((err)=>{
              console.log(err)
            })
          }else{
            console.log('no player')
          }
        }
      })
    },
    joinRoomBeer(context){
      var user = localStorage.getItem('idUser')
      firebase.database().ref('users/').on('value',(snapshot)=>{
        var data =snapshot.val()
        for(var i in data){
          if(i == user){
            firebase.database().ref('Lobby/').child('Beer Hall Room').push({
              player : data[i].name,
              score : data[i].score,
              life : data[i].life
            })
            .then((dataRoom)=>{
              // firebase.database().ref('Lobby/').child('Beer Hall Room').update()
              console.log(dataRoom)
            })
          }
        }
      })
    },
    joinRoomCalifornia(context){
      var user = localStorage.getItem('idUser')
      firebase.database().ref('users/').on('value',(snapshot)=>{
        var data =snapshot.val()
        for(var i in data){
          if(i == user){
            firebase.database().ref('Lobby/').child('California Room').push({
              player : data[i].name,
              score : data[i].score,
              life : data[i].life
            })
            .then((dataRoom)=>{
              console.log(dataRoom)
            })
          }
        }
      })
    },
    joinRoomPanama(context){
      var user = localStorage.getItem('idUser')
      firebase.database().ref('users/').on('value',(snapshot)=>{
        var data =snapshot.val()
        for(var i in data){
          if(i == user){
            firebase.database().ref('Lobby/').child('Panama Room').push({
              player : data[i].name,
              score : data[i].score,
              life : data[i].life
            })
            .then((dataRoom)=>{
              console.log(dataRoom)
            })
          }
        }
      })
    },
    joinRoomTexas(context){
      var user = localStorage.getItem('idUser')
      firebase.database().ref('users/').on('value',(snapshot)=>{
        var data =snapshot.val()
        for(var i in data){
          if(i == user){
            firebase.database().ref('Lobby/').child('Texas Room').push({
              player : data[i].name,
              score : data[i].score,
              life : data[i].life
            })
            .then((dataRoom)=>{
              console.log(dataRoom)
            })
          }
        }
      })
    }
  }
})
