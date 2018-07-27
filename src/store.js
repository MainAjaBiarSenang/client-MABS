import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   username :'',
   players : [],
   room : []
  },
  mutations: {
    players (state, payload) {
      state.players = payload
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
          console.log(result.key)
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
          arrData.push([i])
        }
        commit('players', arrData)
     })
    },
    createRoom(context,room){

      firebase.database().ref('room/').push({

      })
    }
  }
})
