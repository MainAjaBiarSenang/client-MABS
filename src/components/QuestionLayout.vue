<template>
  <div class="questionLayout">
    <div class="container">
      <div class="col s12 m7">
        <h2 class="header">Question {{index + 1}} / 10</h2>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content amber lighten-4">
              <p>{{ questions[index].question }}</p>

            </div>
            <div class="card-action z-depth-3">

              <div class="row">
                <div class="arrayQues" v-for="(eachAnswer, index) in questions[index].answerList.split('[').join('').split(']').join('').split(',')" :key="index">
                <!-- <div class="arrayQues" v-for="(eachAnswer, index) in questions.answerList.split('[').join('').split(']').join('').split(',')" :key="index"> -->
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
      listquestion: {},
      index : 0,
      clickCount: 0,
      answer: '',
      playerAns:''
    }
  },
  computed : {
    ...mapState ([
      'questions'
    ]),
  },
  created() {
    this.getQuestion();
    localStorage.setItem("clicked", "false");
  },
  methods : {
    ...mapActions([
      'getQuestion', 'updateData'
    ]),
    getAnswer : function(data, compare) {
      let idUser = localStorage.getItem('idUser')
      let self = this;
      // if(localStorage.getItem("clicked") === "false"){
        self.playerAns = data;
        if (data == compare[self.index].answer) {
          let dataTrue = {
            idUser,
            value : true
          }
          console.log(dataTrue)
          this.updateData(dataTrue)
          this.clickCount++;
        }
        else {
          let dataFalse = {
            idUser,
            value : false
          }
          console.log(dataFalse)
          this.clickCount++;
          this.updateData(dataFalse)
        }
      // }
      this.answer = compare[self.index].answer;
      console.log("player answer : ",self.playerAns, ", real answer :", compare[self.index].answer)
      this.changeClick();
    },
    changeClick(){
      localStorage.setItem("clicked", "true")
      console.log(this.clickCount);
    }
  },
  watch:{
    clickCount(){
      let self = this;
      if(this.clickCount > 0){
        if(self.clickCount === 2){
          alert("The correct answer is: " + self.answer)
          self.index++;
          self.clickCount = 0;
        }
      }
    }
  }
  
}
</script>

