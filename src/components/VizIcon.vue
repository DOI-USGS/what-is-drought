<template>
    <div class="viz-icon" :id="vizId">
        <a :href="vizUrl" target='_blank' :aria-label="linkTitle">
            <img :src="src" :alt="alt" />
        </a>
    </div>
</template>

<script setup>
    defineProps({
        vizId: {
            type: String,
            default: ''
        },
        vizUrl: {
            type: String,
            default: ''
        },
        linkTitle: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ``
        },
        alt: {
            type: String,
            default: ``
        },
    })
</script>

<style scoped lang="scss">
    $card-height: 145px;
	.viz-icon{
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-start;
		position: relative;
		width: $card-height;
		height: $card-height;
        border-radius: 4px;
        box-shadow: 0px 0px 8px rgba(39,44,49,0.4), 1px 4px 4px rgba(39,44,49,0.4);
	}
    .viz-icon img {
        position: absolute;
        width: 100%;
        top: 0;
        background-color: white;
        border-radius: 4px;
    }
    .viz-icon:hover {
        opacity: 1;
        transform: scale(1.1);
    }
    .viz-icon:focus-within {
        outline: 2px solid var(--usgs-blue);
    }
</style>