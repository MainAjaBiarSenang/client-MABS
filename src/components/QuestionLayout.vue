<template>
  <div class="questionLayout">
    <div class="container">
      <div class="col s12 m7">
        <h2 class="header">Question No. 1</h2>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content cyan accent-4" style="font-size: 20px">
              <p>Question 1</p>
            </div>
            <div class="card-action z-depth-3">
              <div class="row">
                <p class="blue darken-1 waves-effect waves-light btn-large col s4 offset-s1">Jawaban A</p>
                <p class="blue darken-1 waves-effect waves-light btn-large col s4 offset-s2">Jawaban C</p>
              </div>
              <div class="row">
                <div class="blue darken-1 waves-effect waves-light btn-large col s4 offset-s1">Jawaban B</div>
                <div class="blue darken-1 waves-effect waves-light btn-large col s4 offset-s2">Jawaban D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionLayout',
  props: {
    msg: String
  }
}
</script>

