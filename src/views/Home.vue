<template>
  <div class="row">
    <div class="col s12 m4 l2"></div>
    <div class="col s12 m4 l8"><User/></div>
    <div class="col s12 m4 l2"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import User from '@/components/User.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    User
  },
}
</script>
