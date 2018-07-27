<template>
    <div>
        <navbarR/>
        
     <div class="row">
      <div class="col s3 ">
        <PlayerProfile></PlayerProfile>
      </div>
      <div class="col s9">
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
import PlayerProfile from '@/components/PlayerProfile.vue'
export default {
  name: 'room',
  components: {
    navbarR,
    footerR,
    question,
    PlayerProfile
  }
}
</script>