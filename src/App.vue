<template>
  <div class="app" ref="root" id="app"> 
    <div class="nav">
        <div class="logo" ref="logo">logo</div>
        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list" ref="ul">
            <!-- <li><router-link to="/about">About</router-link></li> -->
            <li class="nav-link">
              <a data-page="home" href="#">Home</a>
              </li>
            <li class="nav-link">
              <a data-page="about" href="#about">About</a>
              </li>
            <li class="nav-link">
              <a data-page="journey" href="#journey">Journey</a>
              </li>
            <li class="nav-link">
              <a data-page="explore" href="#explore">Explore</a>
              </li>
            <li class="nav-link">
              <a data-page="contact" href="#contact" @click="handleClick">Contact</a>
              </li>
            <div ref="bubble" class="bubble"></div>
          </ul>
           <span class="material-icons nav__close" id="nav-close">close</span>
        </div>
        <div class="nav__toggle" id="nav-toggle">
          <span class="material-icons">menu</span>
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

    
    // const handleClick = () => {
    //   console.log(ul, ul.value.children[5].classList)
    // }

    onMounted(() => {
      // console.log(ul.value)
      // console.log(home.value.$el.lastChild.children)
      // ul.value.style.background = 'red'
      // console.log(home.value.$el.lastChild.children[0])


      // HOME
      const nav = document.querySelector('.navbar')
      const position = document.querySelector('.nav')
      const homeSection = home.value.$el.lastChild.children[0]
      const aboutSection = home.value.$el.lastChild.children[1]



      // NAV
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


      // ============== TOGGLE MENU =============== 
      const navMenu = document.getElementById('nav-menu')
      const navToggle = document.getElementById('nav-toggle')
      const navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      }


      // ============== HIDE MENU =============== 
      if(navClose){
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
      }

      // ============== HIDE MENU ON MENU CLICK===============
      const navLink = document.querySelectorAll('.nav-link')

      function linkAction(){
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))

    })
    

    return { ul, home, navCheck, bubble }
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


.nav
{
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 10vh;
  visibility: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  transition: opacity 300ms ease;
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
  background: blue;
}

.logo
{
  margin-left: 35px;
  color: white;
}

.nav-menu
{
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-right: 7%;
  margin-top: 1.1rem;
  margin-bottom: 1.1rem;
}

ul
{
  display: flex;
  justify-content: space-around;
  width: 100%;
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

.nav__toggle
{
  color: white;
  cursor: pointer;
  margin: 0 1.9rem;
}


// ============================ MEDIA QUERY ================================ 

// small devices 
@media screen and(max-width: 425px){
  .logo 
  {
    margin-left: 1rem;
  }

  .nav-menu
  {
    position: fixed;
    background-color: #0e2a2f;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100%;
    margin-top: 0;
    margin-right: 0;
    box-shadow: -1px 0 4px rgb(36, 36, 36);
    padding: 3rem;
    transition: 400ms;
  }

  .nav-list
  {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }

  .nav__close
  {
    color: white;
  }

  .show-menu 
  {
    right: 0;
  }
}


// medium devices 
@media screen and(min-width: 768px){
  .nav__close 
  {
    display: none;
  }

  .nav__toggle
  {
    display: none;
  }

  .nav-menu
  {
    width: 60%;
  }
} 

@media screen and(min-width: 1024px){
  .nav-menu
  {
    width: 40%;
  }
}
</style>
