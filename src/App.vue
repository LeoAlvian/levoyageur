<template>
  <div class="app" ref="root"> 
    <div class="pos">
      <div class="navbar" ref="nav">
        <div class="logo" ref="logo">logo</div>
        <ul ref="ul">
          <!-- <li><router-link to="/about">About</router-link></li> -->
          <li><a data-page="home" href="#">Home</a></li>
          <li><a data-page="about" href="#about">About</a></li>
          <li><a data-page="journey" href="#journey">Journey</a></li>
          <li><a data-page="explore" href="#explore">Explore</a></li>
          <li><a data-page="contact" href="#contact" @click="handleClick">Contact</a></li>
          <div ref="bubble" class="bubble"></div>
        </ul>
        <!-- <div class="nav__toggle" id="nav">

        </div> -->
      </div>
    </div>
    <Home ref="home" />
    <Footer />
    <a href="#" class="scrollUp" id="scroll-up">
      <span class="material-icons">expand_less</span>
    </a>
  </div>
</template>

<script>
import Home from '@/views/Home'
import Footer from '@/views/Footer' 
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'App',
  components: { Home, Footer },
  setup() {
    const ul = ref(null)
    const home = ref(null)
    const options = ref({threshold: 0.45})
    const navObserver = ref(null)
    const navObserver2 = ref(null)
    const barObserver = ref(null)
    const navCheck = ref(function(){})
    const bubble = ref(null)

    const handleClick = () => {
      console.log(ul, ul.value.children[5].classList)
    }

    onMounted(() => {
      // console.log(ul.value)
      // console.log(home.value.$el.lastChild.children)
      // ul.value.style.background = 'red'
      // console.log(home.value.$el.lastChild.children[0])


      // HOME
      const nav = document.querySelector('.navbar')
      const position = document.querySelector('.pos')
      const homeSection = home.value.$el.lastChild.children[0]
      const aboutSection = home.value.$el.lastChild.children[1]



      // HOME FOR BAR BACKGROUND AND ABOUT
      navObserver2.value = new IntersectionObserver(function(entries){
        entries.forEach(entry => {
          if(entry.isIntersecting){      
            position.classList.remove('add-background-nav')
          }
          else 
          {
            position.classList.add('add-background-nav')
          }
        })
      },{threshold:0.5, rootMargin:'-100px'})

      navObserver2.value.observe(homeSection)




      // BAR
      barObserver.value = new IntersectionObserver(navCheck, options.value)
      home.value.$el.lastChild.children.forEach(sec => {
        barObserver.value.observe(sec)
      })

      function navCheck(entries) {
        entries.forEach(entry => {
          const className = entry.target.className
          const activeAnchor = document.querySelector(`[data-page=${className}]`)
          const coords = activeAnchor.getBoundingClientRect()
          const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
            bottom: coords.bottom,
          }
          if(entry.isIntersecting){
            bubble.value.style.setProperty('left', `${directions.left}px`)
            bubble.value.style.setProperty('bottom', `calc(-${directions.bottom}px + 50px)`)
            bubble.value.style.setProperty('height', `3px`)
            bubble.value.style.setProperty('width', `calc(${directions.width}px - calc(${directions.width}px / 4))`)
            bubble.value.style.background = '#ffd400'
          }
        })
      }

        // ======================= SCROLL UP ======================== 
        function scrollUp(){
          const scrollUp = document.getElementById('scroll-up')
          if(this.scrollY >= 200){
            scrollUp.classList.add('show-scroll')
          } else {
            scrollUp.classList.remove('show-scroll')
          }
        }
        window.addEventListener('scroll', scrollUp)

    })

    return { handleClick, ul, home, navCheck, bubble }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');


@font-face {
    font-family: "gr";
    src: url(./fonts/Graceland.otf) format("opentype");
    font-weight: 900;
    font-style: normal;
 }


// color palette
$base-color: #091e21;
$second-color: #0e2a2f;
$third-color: #1c353a;
$accent-color: #ffd400;


#app {
  font-family: 'Nunito', sans-serif;
  color: #2c3e50;
}

.app 
{
  overflow-x: hidden;
}


.pos
{
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 10vh;
  visibility: visible;
}

.add-background-nav
{
  background: #091e21;
  transition: background 300ms ease;
}

.navbar
{
  display: flex;
  justify-content: space-between;
  margin-right: 7%;
  margin-top: 1.1rem;
  margin-bottom: 1.1rem;
  transition: opacity 300ms ease;
}

.logo
{
  margin-left: 35px;
  color: white;
}

ul
{
  display: flex;
  justify-content: space-around;
  width: 40%;
}

ul li 
{
  list-style: none;

}

ul li a 
{
  text-decoration: none;
  color: white;
}

.bubble
{
  position: absolute;
  z-index: 12;
  transition: left 0.5s ease;
}

.scrollUp
{
  position: fixed;
  right: 2rem;
  bottom: -20%;
  background-color: #1f3041;
  padding: .5rem;
  display: flex;
  opacity: .9;
  z-index: 20;
  transition: 400ms ease;
  color: white;
  text-decoration: none;
}

.scrollUp:hover
{
  background-color: #0e2a2f;
  opacity: 1;
}

.show-scroll
{
  bottom: 3rem;
}


// ============================ MEDIA QUERY ================================ 

// small devices 
// @media screen and(max-width: 760px){

// }
</style>
