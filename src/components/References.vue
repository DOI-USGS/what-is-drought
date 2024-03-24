<template>
  <section id="references">       
    <div class="text-content">
      <h2>{{ text.title }}</h2>
      <div>
        <div
          v-for="reference in text.references"
          :key="reference.subTitle"
        >
          <p>
            <span v-html="reference.num" />. <span v-html="reference.authors" /> <a
              :href="reference.link"
              target="_blank"
            ><span v-html="reference.title" /></a><span v-html="reference.ref" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import referencesText from "@/assets/text/referencesText";

export default {
    name: 'References',
    setup() {
        // Use the ref function to make the text reactive
        const text = ref(referencesText.referencesContent);

        // Return the reactive properties to be used in the template
        return { text };
    }
}
</script>

<style scoped lang="scss">
</style>