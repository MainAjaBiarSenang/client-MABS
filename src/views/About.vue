<template>
    <div>
        <navbarR/>
        
     <div class="row">
      <div class="col s3 ">
        <!-- Grey navigation panel -->
        <div class="card small white">
        <div class="card-content grey-text text-darken-4">
        <span class="card-title  grey lighten-1 ">User A</span>
        <div class="col s12">
        <ul>
          <li class="collection text-darken-2">name :</li>
          <li class="collection">score :</li>
          <li class="collection pink-text"><i class="fas fa-heart"></i> :</li>
      </ul>
      </div>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>

        <!-- Grey navigation panel -->
         <div class="card small white">
        <div class="card-content grey-text text-darken-4">
        <span class="card-title  grey lighten-1 ">User A</span>
        <div class="col s12">
        <ul>
          <li class="collection text-darken-2">name :</li>
          <li class="collection">score :</li>
          <li class="collection pink-text"><i class="fas fa-heart"></i> :</li>
      </ul>
      </div>
        </div>
       
      </div>
      </div>
      <div class="col s9 " >
        <question/>
      </div>
    </div>

    <footerR/>


   </div>
</template>

<script>
// @ is an alias to /src
import navbarR from '@/components/navbarRoom.vue'
import footerR from '@/components/footerRoom.vue'
import question from '@/components/QuestionLayout.vue'

export default {
  name: 'room',
  components: {
    navbarR,footerR,question
  }
}
</script>