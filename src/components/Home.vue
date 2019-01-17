<template>
  <div class="home">
        {{ $store.getters.getNum }}
  </div>
</template>

<script>
export default {
  name: 'home',
  created(){
      console.log('home组件');
  }
}
</script>
