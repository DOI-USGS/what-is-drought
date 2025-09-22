<template>
  <div id="visualization">
    <DroughtThresholds />
    <div
      class="text-container"
    >
      <h2
        class="section-title"
      >
        <span>
          {{ references.title }}
        </span>
      </h2>
    </div>
    <ReferencesSection
      :references="references"
      :include-title="false"
    />
    <div
      class="text-container"
    >
      <h2
        class="section-title"
      >
        <span>
          {{ authors.title }}
        </span>
      </h2>
    </div>
    <AuthorshipSection 
      :authors="authors"
      :include-title="false"
    />
  </div>
</template>

<script setup>
import references from "@/assets/text/references";
import authors from "@/assets/text/authors"
import DroughtThresholds from '@/components/DroughtThresholds.vue';
import ReferencesSection from '@/components/ReferencesSection.vue';
import AuthorshipSection from '@/components/AuthorshipSection.vue';
</script>

<style lang="scss">
#visualization {
  //height: calc(100vh);
  margin: 2.5%;
  position: relative;

}

</style>
