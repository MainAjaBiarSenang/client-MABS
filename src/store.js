import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room : {

    }
  },
  mutations: {

  },
  actions: {
    addPlayer(context,id){
      firebase.database().ref('users/',id).set({
        task : this.task,
        status : this.status
      },function(err){
        if(err){
          console.log(err)
        }else{
          console.log('berhasil')
        }
      })
    }
  }
})
