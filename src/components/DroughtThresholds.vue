<template>
  <div class="another-container">
    <div class="grid-container">
      <h2 class="title-text">
        What is <span class="emph">streamflow</span> drought?
      </h2>
      <div
        class="chevron"
        aria-hidden="true"
        role="img"
      />
      <div
        class="chevron"
        aria-hidden="true"
        role="img"
      />
      <div
        class="chevron"
        aria-hidden="true"
        role="img"
      />
      <div
        id="hydro-chart-container"
        aria-hidden="true"
        aria-labelledby="chartTitle chartDesc"
      >
        <DroughtCharts />
      </div>
      <p
        v-for="frame in frames" 
        :id="`step-${frame.id}`"
        :key="frame.id"
        class="textBox hidden"
        aria-hidden="true"
        v-html="frame.text"
      />
      <div class="navigationContainer">
        <button
          id="prev"
          class="circleForm navCircle hidden"
          aria-label="Previous section"
          @click="prevFxn"
        >
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'arrow-left' }" />
        </button>
        <button
          v-for="frame in frames"
          :id="`button-${frame.id}`"
          :key="frame.id"
          :aria-label="`Section ${frame.id}: ${frame.text}`"
          class="circleForm quietCircle visible"
          @click="scrollFxn"
        />
        <button
          id="next"
          class="circleForm navCircle hidden"
          aria-label="Next section"
          @click="nextFxn"
        >
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'arrow-right' }" />
        </button>
      </div>
    </div>
    <!-- create a scrolling div for each frame -->
    <div
      id="scroll-container"
      aria-hidden="true"
    >
      <div
        v-for="frame in frames" 
        :id="`scroll-to-${frame.id}`"
        :key="frame.id"
        :class="`scrolly scroll-step-${frame.id}`"
      />
    </div>

    <div id="spacer" />
  </div>
</template>
<script>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; // animated scroll events
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import scrollyText from "@/assets/text/scrollyText";  // step text
import DroughtCharts from "@/components/DroughtCharts.vue";
import { useWindowSizeStore } from '../stores/WindowSizeStore.js'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  components: {
    DroughtCharts
  },
  setup() {
    const windowSizeStore = useWindowSizeStore();
    const frames = scrollyText.frames;
    const w = windowSizeStore.windowWidth;
    const h = windowSizeStore.windowHeight;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const marker_on = false;

    onMounted(() => {
      // create the scrolling timeline
      let tl = gsap.timeline(); 
      // things that go before containers
            // use class to set trigger
            tl.to('.scroll-step-a', {
          scrollTrigger: {  
            markers: marker_on,
            trigger: '.scroll-step-a',
            start: "top 65%",
            end: 99999,
            toggleClass: {targets: `.title-text`, className:"title-text--scrolled"}, // adds class to target when triggered
            toggleActions: "restart none none none" // onEnter onLeave ... ... restart none none none
            /*
            onEnter - scrolling down, start meets scroller-start
            onLeave - scrolling down, end meets scroller-end
            onEnterBack - scrolling up, end meets scroller-end
            onLeaveBack - scrolling up, start meets scroller-start
            */
          }
        }) 


      // find all scrolly divs
      const containers = gsap.utils.toArray(".scrolly");

      //  add scroll trigger to timeline for each step
      containers.forEach((container, i) => {
        // get unique ID and class for frame. Scroll frame classes follow the pattern `scrolly scroll-step-${frame.id}`
        let classList = container.className
        let scrollClass = classList.split(' ')[1]
        let scrollID = scrollClass.split('-')[2] // ending of class is unique ID from scrollyText.js
        
        // use class to set trigger
        tl.to(`.${scrollClass}`, {
          scrollTrigger: {
            markers: marker_on,
            trigger: `.${scrollClass}`,
            start: "top 41%",
            end: "bottom 41%",
            toggleClass: {targets: `#step-${scrollID}`, className:"visible"}, // adds class to target when triggered
            toggleActions: "restart reverse none reverse" 
            /*
            onEnter - scrolling down, start meets scroller-start
            onLeave - scrolling down, end meets scroller-end
            onEnterBack - scrolling up, end meets scroller-end
            onLeaveBack - scrolling up, start meets scroller-start
            */
          },
        }) 
        tl.to(`.${scrollClass}`, {
          scrollTrigger: {
            markers: marker_on,
            trigger: `.${scrollClass}`,
            start: "top 41%",
            end: "bottom 41%",
            toggleClass: {targets: `#button-${scrollID}`, className:"activeCircle"}, // adds class to target when triggered
            toggleActions: "restart reverse none reverse" 
            /*
            onEnter - scrolling down, start meets scroller-start
            onLeave - scrolling down, end meets scroller-end
            onEnterBack - scrolling up, end meets scroller-end
            onLeaveBack - scrolling up, start meets scroller-start
            */
          },
        }) 
        if (i == 0) {
          tl.to(`.${scrollClass}`, {
            scrollTrigger: {
              markers: marker_on,
              trigger: `.${scrollClass}`,
              start: "top 41%",
              end: 99999,
              toggleClass: {targets: [".quietCircle, #next"], className:"visible"}, // adds class to target when triggered
              toggleActions: "restart none none reverse" 
              /*
              onEnter - scrolling down, start meets scroller-start
              onLeave - scrolling down, end meets scroller-end
              onEnterBack - scrolling up, end meets scroller-end
              onLeaveBack - scrolling up, start meets scroller-start
              */
            },
          })
        }
        if (i == 1) {
          tl.to(`.${scrollClass}`, {
            scrollTrigger: {
              markers: marker_on,
              trigger: `.${scrollClass}`,
              start: "top 41%",
              end: 99999,
              toggleClass: {targets: "#prev", className:"visible"}, // adds class to target when triggered
              toggleActions: "restart none none reverse" 
              /*
              onEnter - scrolling down, start meets scroller-start
              onLeave - scrolling down, end meets scroller-end
              onEnterBack - scrolling up, end meets scroller-end
              onLeaveBack - scrolling up, start meets scroller-start
              */
            },
          })
        }
        if (i == (containers.length-1)) {
          tl.to(`.${scrollClass}`, {
            scrollTrigger: {
              markers: marker_on,
              trigger: `.${scrollClass}`,
              start: "top 41%",
              end: "top 41%",
              onEnter: () => {
                document.querySelector("#next").classList.remove("visible");
              },
              onLeaveBack: () => {
                document.querySelector("#next").classList.add("visible");
              }
            },
          })
        }
      })

    });

    function scrollFxn(e) {
        const scrollButton = e.target; // define target
        const scrollID = scrollButton.id; // extract id as "button-x"
        const scrollFrame = scrollID.split('-')[1]; // extract frame number "x"
        console.log(scrollID)
      // scroll to position of specified frame
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-"+scrollFrame});
      }

    function prevFxn(e) {
        const currentFrame = document.querySelector('#svg .visible'); // get svg element that is visible
        const currentFrameName = currentFrame.id; // full id name in format "step-x"
        const currentFrameLetter = currentFrameName.split('-')[1]

        const prevFrameLetter = String.fromCharCode(currentFrameLetter.charCodeAt(0) - 1); // prev letter

        //scroll to previous
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-" + prevFrameLetter})
      }

      function nextFxn(e) {
        const currentFrame = document.querySelector('#svg .visible'); // get svg element that is visible
        const currentFrameName = currentFrame.id; // full id name in format "step-x"
        const currentFrameLetter = currentFrameName.split('-')[1]

        const nextFrameLetter = String.fromCharCode(currentFrameLetter.charCodeAt(0) + 1); // next letter
        //scroll to next
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-"+nextFrameLetter})
      }

    return {
      windowSizeStore,
      marker_on,
      frames,
      w,h,margin,
      scrollFxn,
      prevFxn,
      nextFxn,
      DroughtCharts

    };
  },


  
    methods:{
      scrollFxn(e) {
        const scrollButton = e.target; // define target
        const scrollID = scrollButton.id; // extract id as "button-x"
        const scrollFrame = scrollID.split('-')[1]; // extract frame number "x"
        console.log(scrollID)
      // scroll to position of specified frame
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-"+scrollFrame});
      },
      prevFxn(e) {
        const currentFrame = document.querySelector('#svg .visible'); // get svg element that is visible
        const currentFrameName = currentFrame.id; // full id name in format "step-x"
        const currentFrameLetter = currentFrameName.split('-')[1]

        const prevFrameLetter = String.fromCharCode(currentFrameLetter.charCodeAt(0) - 1); // prev letter

        //scroll to previous
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-" + prevFrameLetter})
      },
      nextFxn(e) {
        const currentFrame = document.querySelector('#svg .visible'); // get svg element that is visible
        const currentFrameName = currentFrame.id; // full id name in format "step-x"
        const currentFrameLetter = currentFrameName.split('-')[1]

        const nextFrameLetter = String.fromCharCode(currentFrameLetter.charCodeAt(0) + 1); // next letter
        //scroll to next
        gsap.to(window, {duration: 0, scrollTo:"#scroll-to-"+nextFrameLetter})
      },
      isMobile() {
              if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  return true
              } else {
                  return false
              }
          }
    }
}
</script>
<style scoped lang="scss">
// sans serif font
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;500;600;700;800&display=swap');
$SourceSans: 'Source Sans Pro', sans-serif;
$base: 0.6rem; //for chevron scroll animation
// frames are stacked and class is added on an off w/ scroll trigger to bring to front
$usgsBlue: #032a56;

.grid-container{
  display: grid;
  grid-template-columns: 3fr 0.5fr;
  grid-template-rows: auto 10em auto 3em;
  grid-template-areas:
    "title chevron"
    "textbox textbox"
    "chart chart"
    "navigation navigation";
  justify-content: center;
  margin: auto;
  width:95vw;
  position: sticky;
  left: 10px;
  top: 81px;
  height: 86vh;
  @media (min-width: 950px){
    width: 70vw;
    max-width: 1400px;
    grid-template-columns: minmax(100px, 400px) auto 1fr;
    grid-template-rows: 0.5fr 3fr 0.2fr;
    grid-template-areas:
      "title title chevron"
      "textbox chart chart"
      "navigation navigation navigation";
      height: 88vh;
  }
}
.title-text {
  grid-area: title;
  align-self: center;
  font-size: 2em;
  padding: 40vh 0 40vh 0;
  color: $usgsBlue;
  @media (min-width: 950px){
    font-size:3.0em;
  }
  transition: ease 1s;
  &--scrolled {
    padding: 5px 0 5px 0;
  }
}
#hydro-chart-container {
  font-size: 1.2rem;
  grid-area: chart; // names the grid child component
  align-self: center;
  justify-self: center;
  height: 95%;
  width: 95%;
  max-height: 40vh;
  display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  @media (min-width: 950px){
    height: 60vh;
    max-height: 60vh;
  }
}
.textBox {
  grid-area: textbox;
  align-self: center;
  justify-self: center;
  color: $usgsBlue;
  position: absolute;
  padding: 0 0 0 0;
  @media (min-width: 950px){
    align-self: center;
    justify-self: end;
    min-height: 220px;
  }
}
// currently empty scroll-by divs used to trigger animation
.scrolly{
  height:85vh;
  @media (min-width: 950px){
    height:55vh;
  }
}
.hydro-chart {
  padding:0;
  margin:0;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
}

#spacer {
  height: 30vh;
}

.chevron {
  grid-area: chevron;
  align-self: center;
  justify-self: start;
  position: absolute;
  margin-left: 10px;
  margin-bottom: 80px;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out 1s infinite;
  @media (min-width: 950px){
    margin-left: 40px;
    margin-bottom: 60px;
  }
}
.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}
.chevron:nth-child(3) {
  animation: move-chevron 3s ease-out infinite;
}
.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #032a56;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}
.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}

.hidden {
  visibility: hidden;
  display: none;
  opacity: 0;
  transition: visibility 0s 0.5s, opacity 0.5s linear;
}
.navigationContainer { // grid container for the navigation indicating circles
  grid-area: navigation;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  top: 1em;
  margin: 0 auto;
  width: 95vw;
  align-self: center;
  text-align: center;
  @media (min-width: 950px){
    top: auto;
    width: auto;
  }
} 
.circleForm { // circle shape and sizing
  color: white;
  width: 13px;
  height: 13px;
  max-width: 13px;
  max-height: 13px;
  //display: inline-block;
  border-radius: 50%;
  margin:0 2px 0 2px;
}

.quietCircle { // color when inactive
  background-color: #ccc;
  border: none;
  border-style: solid;
  border-width: 2px;
  border-color: #ccc;
}
.activeCircle { // color when active
  background-color: #507282;
  border-style: solid;
  border-width: 2px;
  border-color: #507282;
}
.navCircle {
  background-color: transparent;
  color: black;
  border-width: 0;
  width: 13px;
  height: 15px;
  display: inline-block;
  font-size: 12px;
  font-family: $SourceSans;
}
.visible {
  visibility: visible;
  display: inline;
  position: static;
  opacity: 1;
  transition: fade 0.5s linear;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.emph {
  font-weight: 700;
}
</style>