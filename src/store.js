import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   username :'',
   players : [],
   room : [],
   questions : []
  },
  mutations: {
    players (state, payload) {
      state.players = payload
    },
    questions (state, payload) {
      state.questions = payload
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
    getQuestion ({ commit }) {
      firebase.database().ref('QuestionList').on('value',(snapshot)=> {
        var questions = snapshot.val()
        // console.log(snapshot.val())
        var arrQuestions =[]
        for(var i in questions){
          arrQuestions.push(questions[i])
        }
        let index = Math.floor(Math.random()*arrQuestions.length)
        let randomQuestion = arrQuestions[index]
        
        commit('questions', randomQuestion)
     })
    },
    createRoom(context,room){

      firebase.database().ref('room/').push({

      })
    },
    updateData ({ commit }, payload) {
      console.log('ini di updatedataStore' , payload)
      firebase.database().ref('/users/' + payload.idUser).once('value')
      .then(function(snapshot) {
        console.log(payload.value)
        console.log(snapshot.val().score)
        if (payload.value == true) {
          firebase.database().ref('users/' + payload.idUser).set({
            life : snapshot.val().life,
            score : snapshot.val().score + 10,
            name : snapshot.val().name
          })
          console.log('hasil tambah')
        }
        else {
          firebase.database().ref('users/' + payload.idUser).set({
            name : snapshot.val().name,
            life : snapshot.val().life - 1,
            score : snapshot.val().score,
          })
        }
        console.log(snapshot.val())
      });
    }
  }
})
