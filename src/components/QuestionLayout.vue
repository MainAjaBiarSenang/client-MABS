<template>
  <div class="questionLayout">
    <div class="container">
      <div class="col s12 m7">
        <h2 class="header">Question No.</h2>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content amber lighten-4">
              <p>{{ questions.question }}</p>

            </div>
            <div class="card-action z-depth-3">

              <div class="row">
                <div class="arrayQues" v-for="(eachAnswer, index) in questions.answerList.split('[').join('').split(']').join('').split(',')" :key="index">
                  <p class="blue darken-1 waves-effect waves-light btn-large col s8 offset-s2" style="word-wrap : break-word; height:auto" @click="getAnswer(eachAnswer, questions)">{{ eachAnswer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'QuestionLayout',
  props: {
    msg: String
  },
  data () {
    return {
      listquestion: {}
    }
  },
  computed : {
    ...mapState ([
      'questions'
    ]),
  },
  created() {
    this.getQuestion()
  },
  methods : {
    ...mapActions([
      'getQuestion', 'updateData'
    ]),
    getAnswer : function(data, compare) {
      let idUser = localStorage.getItem('idUser')

        console.log(data == compare.answer)
        console.log("---", typeof(data))
        console.log("!!!!", typeof(compare.answer))
      if (data == compare.answer) {
        let dataTrue = {
          idUser,
          value : true
        }

        // console.log(data === compare.answer)
        this.updateData(dataTrue)
      }
      else {
        let dataFalse = {
          idUser,
          value : false
        }
        this.updateData(dataFalse)
      //  console.log(data === compare.answer)
        // console.log(dataFalse)
      }
      console.log("player answer : ",data, ", real answer :", compare.answer)
    }
  }
  
}
</script>

