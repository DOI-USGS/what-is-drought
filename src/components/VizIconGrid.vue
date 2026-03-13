<template>
    <div
      id="viz-grid-container"
    >
        <div id="viz-icon-grid">
            <VizIcon v-for="item, index in vizContent" :key="index"
                :viz-id="item.id"
                :viz-url="item.url"
                :link-title="item.title"
                :src="getThumb(item.img_src)"
                :alt="item.alt"
            />
        </div>
    </div>
</template>

<script setup>
    import VizIcon from '@/components/VizIcon.vue';
    import VizGridContent from '@/assets/content/VizGrid.js';
    
    // global variables
    const vizContent = VizGridContent.vizGridItems;

    function getThumb(pic) {
        return `${import.meta.env.VITE_APP_S3_PROD_URL}thumbnails/${pic}`
    }

</script>

<style>
#viz-grid-container {
    display: block;
    margin: 6rem auto 6rem auto;
}
#viz-icon-grid{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 65px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 70rem;
    @media screen and (max-width: 600px) {
        gap: 25px;
        max-width: 95%;
    }
}
</style>