<template>
   <div>
      <div class="card small white" v-for="(player, index) in players" :key=index>
         <div class="card-content grey-text text-darken-4">
            <span class="card-title indigo lighten-2" style="font-weight:600">User {{index + 1}}</span>
            <div class="col s12">
               <ul>
                  <li class="collection text-darken-2"><span style="font-weight:600">name</span> : {{player.name}}</li>
                  <li class="collection"><span style="font-weight:600">score</span>: {{player.score}} </li>
                  <li class="collection pink-text"><i class="fas fa-heart"></i> : <span style="font-weight:600"> {{player.lifeCount}}</span></li>
               </ul>
            </div>
            <!-- <div>
               <p > 
                 <a class="btn-floating btn-large pulse light-green accent-2" style="color:black;font-weight:500; width: 130px">
                     {{player.status}}
                  </a>
               </p>
               <p>
                  <span style="color:red; font-weight:500">
                     Don't give up just yet!
                  </span>
               </p>

            </div> -->
         </div>
      </div>   
   </div>
</template>

<script>
export default{
   data () {
      return {
         players:[{
            name: "A",
            score: 0,
            lifeCount: 2,
            status: ""
         },
         {
            name: "B",
            score: 0,
            lifeCount: 2,
            status: ""
         }],
         game : "over",
      }
   },
}
</script>

