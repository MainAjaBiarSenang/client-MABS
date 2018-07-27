import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   username :'',
   players : [],
<<<<<<< HEAD
   rooms: []
=======
   room : []
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
  },
  mutations: {
    players (state, payload) {
      state.players = payload
<<<<<<< HEAD
    },
    room(state,room){
      state.rooms = room
=======
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
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
<<<<<<< HEAD
          router.push('/listroom')
          // console.log(result.key)
=======
          console.log(result.key)
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
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
<<<<<<< HEAD
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
=======
          arrData.push([i])
>>>>>>> 69944c75757a5e583103227942ce50e5def9e436
        }
        commit('players', arrData)
     })
    },
    createRoom(context,room){

      firebase.database().ref('room/').push({

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
              firebase.database().ref('Lobby/Beer Hall Room/PlayerCount').on('value',(snapshots)=>{
                var count =snapshots.val()
                count+=1
                console.log("ini count========",typeof count)
              })
              // console.log(dataRoom)
              router.push('/room')
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
              firebase.database().ref('Lobby/California Room/PlayerCount').on('value',(snapshots)=>{
                var count =snapshots.val()
                count+=1
                console.log("ini count========",typeof count)
              })
                router.push('/room')
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
              // console.log(dataRoom)
              firebase.database().ref('Lobby/Panama Room/PlayerCount').on('value',(snapshots)=>{
                var count =snapshots.val()
                count+=1
                console.log("ini count========",typeof count)
              })
                router.push('/room')
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
              // console.log(dataRoom)
              firebase.database().ref('Lobby/Texas Room/PlayerCount').on('value',(snapshots)=>{
                var count =snapshots.val()
                count+=1
                console.log("ini count========",typeof count)
              })
                router.push('/room')
            })
          }
        }
      })
    },
    getRoomBeer ({ commit }) {
      firebase.database().ref('Lobby').child('Beer Hall Room').on('value',(snapshot)=> {
        var rooms = snapshot.val()
        console.log(snapshot.val())
        var arrRoom =[]
        for(var i in rooms){
          // console.log(data[i].name)
          arrRoom.push([i])
        }
        commit('room', arrRoom)
     })
   },
   getRoomTexas ({ commit }) {
     firebase.database().ref('Lobby').child('Texas Room').on('value',(snapshot)=> {
       var rooms = snapshot.val()
       console.log(snapshot.val())
       var arrRoom =[]
       for(var i in rooms){
         // console.log(data[i].name)
         arrRoom.push([i])
       }
       commit('room', arrRoom)
    })
  }

  }
})
