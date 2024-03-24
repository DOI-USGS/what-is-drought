<template>
  <div id="visualization">
    <DroughtThresholds />
    <References />
    <Authorship />
  </div>
</template>

<script setup>
import DroughtThresholds from '@/components/DroughtThresholds.vue';
import References from '@/components/References.vue';
import Authorship from '@/components/Authorship.vue';

</script>

<style lang="scss">
#visualization {
  //height: calc(100vh);
  margin: 2.5%;
  position: relative;

}

</style>
