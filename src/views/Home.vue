<template>
  <div class="page">
    <!-- left side  -->
    <div class="left">
      <div class="left-top"></div>
      <div class="left-bottom">
        <transition-group 
        appear 
        tag='ul'
        @before-enter='sideBeforeEnter'
        @enter='sideEnter'
        >
          <li v-for="(social, index) in socials" :key="social.name" :data-index='index'>
            <a href="">{{ social.text }}</a>
          </li>
        </transition-group>
      </div>
    </div>
    <div>


      <!-- HOME  -->


      <section class="home">
        <img class="hero-img" :src="`./img/home.jpg`">
        <div class="float">
          <div class="left-content"></div>
          <div class="middle">
            <h1 class="font-gr home-header">Explore</h1>
            
            <span class="with">With</span>
            
            <h1 class="font-gr le" data-index='1'>Le Voyageur</h1>
            
            <div class="button__position">
              <button class="button button-scale button1" data-index='2'>Start Traveling</button>
            </div>

            <h1 class="travel">travel</h1>
          </div>
        </div>
      </section>


      <!-- ABOUT  -->


      <section class="about" id="about">
        <div class="left-content"></div>
        <div class="about-container">
          
          <img class="img a-left" :src="`./img/about1.jpg`">
          
          <img class="img a-right" :src="`./img/about2.jpg`">
          
          <div class="about-content">
            <h2>Le Voyageur</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero placeat, repudiandae facere reprehenderit maxime at commodi quo cum laboriosam? Soluta!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero placeat, repudiandae facere reprehenderit maxime at commodi quo cum laboriosam? Soluta!</p>
            <h1>about</h1>
          </div>
        </div>
      </section>


      <!-- JOURNEY -->


      <section class="journey" id="journey">
        <!-- first page  -->
        <div class="j-first-container">
          <h1>Our Experiences</h1>
          <div class="j-middle-container">
            <img class="img j-left-img" :src="`./img/experience1.jpg`">
            <img class="img j-right-img" :src="`./img/experience2.jpg`">
          </div>
          <div class="j-bottom-container">
            <div class="j-bottom-left-container">
              <h2>5</h2>
              <h5>Years of Experience</h5>
            </div>
            <div class="j-bottom-right-container">
              <h2>20+</h2>
              <h5>Tourist Destinations</h5>
            </div>
          </div>
        </div>
        <!-- second page  -->
        <div class="j-second-container">
          <div class="j-second-left-container">
            <h1>Discover Our Journey</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quam nam magnam praesentium, explicabo adipisci.</p>
            <button class="button button-scale button-journey">View More</button>
          </div>
          <div class="j-second-right-container">
            <div class="blue-square">
              <img class="img journey__img" :src="`./img/journey.jpg`" alt="">
            </div>
          </div>
        </div>
      </section>


      <!-- EXPLORE  -->


      <section class="explore" id="explore">
        <div class="first-explore-content">
          <div class="header-explore">
            <h1>Choose Your Places</h1>
          </div>
          <div class="content-explore">
            <div class="content-explore-flex">
              <div v-for="(place, index) in places" :key="index" :class="isOdd(index) ? 'rectangle bottom' : 'rectangle'">
                <img class="explore-img" :src="`${place.img}`">
                
                <span class="star">
                  <span class="material-icons star-size">star</span>
                  {{ place.star }}
                  </span>
                <div class="bottom-rectangle-area">
                  <h2 class="location">{{ place.location }}</h2>
                  <h6 class="area">{{ place.area }}</h6>
                  <div class="bottom-area">
                    <div class="bottom-area-left">
                      <h6>
                        <span class="material-icons header">attach_money</span>
                      </h6>
                      <h6>Rp. {{ place.price }} jt</h6>
                    </div>
                    <div class="bottom-area-right">
                      <h6>
                        <span class="material-icons header">today</span>
                      </h6>
                      <h6>{{ place.day }} days</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- PART TWO  -->
        <div class="second-explore-content">
          <h1>Our Awesome Tours</h1>
          <div class="calendar">
            <div class="tour-card" v-for="(act, index) in calendar" :key="index">
              <h2 class="date">{{ act.date }}</h2>
              <h3 class="month">{{ act.month }} <br> {{ act.year }}</h3>
              <button class="button button-scale btn-explore">{{ act.activity }}</button><br>
              <span class="span-detail">{{ act.detail }}</span>
            </div>
          </div>
        </div>
      </section>


      <!-- CONTACT  -->

      <section class="contact" id="contact">
        <div class="contact-container">
          <h1 class="contact-title">Subscribe Our</h1>
          <h1 class="contact-title">Newsletter</h1>
          <p class="contact-subheading">Fing out our newest event and get a special discount.</p>
          <div>
            <input type="text" class="email" placeholder="Enter Email...">
            <button class="button button-scale btn-subscribe">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>



<script>
import gsap from 'gsap'
import { ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'Home',
  setup(){

    const socials = ref([
      {name: 'linkedin', text: 'In', link: '/'},
      {name: 'facebook', text: 'Fb', link: '/'},
      {name: 'youtube', text: 'Yt', link: '/'},
    ])

    const calendar = ref([
      {date: 31, month: 'January', year: 2020, activity: 'Camping', detail: 'Camping on Mount Putri'},
      {date: 1, month: 'February', year: 2020, activity: 'Camping', detail: 'Camping on Mount Putri'},
      {date: 4, month: 'February', year: 2020, activity: 'Hiking', detail: 'Hiking on Bukit Bintang'},
      {date: 15, month: 'February', year: 2020, activity: 'Hiking', detail: 'Hiking on Papandaian'},
      {date: 25, month: 'February', year: 2020, activity: 'Diving', detail: 'Diving in Bali'},
      {date: 26, month: 'February', year: 2020, activity: 'Snorkeling', detail: 'Snorkeling in Legian'},
      {date: 27, month: 'February', year: 2020, activity: 'Surfing', detail: 'Surfing in Canggu'},
      {date: 28, month: 'February', year: 2020, activity: 'Body Rafting', detail: 'Body Rafting'},
      {date: 10, month: 'March', year: 2020, activity: 'Swimming', detail: 'Masigit Waterfall'},
      {date: 19, month: 'March', year: 2020, activity: 'Hiking', detail: 'Hiking in Lembang'},
    ])

    const places = ref([
      {img: './img/uluwatu.jpg', star: 5.0, location:'Bali', area:'Uluwatu', price:3.5, day:3},
      {img: './img/ulun-danu.jpg', star: 4.5, location:'Bali', area:'Ulun Danu Temple', price:4, day:4},
      {img: './img/kelingking-beach.jpg', star: 5.0, location:'Bali', area:'Kelingking Beach', price:5.5, day:3},
      {img: './img/sadim.jpg', star: 5.0, location:'Bandung', area:'Curug Sadim', price:2, day:2},
      {img: './img/bromo.jpg', star: 4.5, location:'Tengger Semeru', area:'Gunung Bromo', price:3, day:2},
    ])

    function isOdd(index){
      return (index+1) % 2 == 0 ? true:false
    }

    // TRANSITION!!! 

    // EXPLORE 
    const sideBeforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(-80px)'
    }
    const sideEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
    }

  
    return { 
      socials, calendar, places,
      isOdd,
      sideBeforeEnter, sideEnter
     }
  },
}
</script>



<style lang="scss" scoped>
.gr {
  font-family: gr;
}

section {
  height: 100vh;
  width: 100%;
  background: #091e21;
}

// ----------------------------- LEFT SIDE ------------------------------------- 
.left {
  position: fixed;
  width: 8.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 2;
}

.left-top
{
  flex: 2;
}

.left-bottom
{
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}

.left-bottom ul {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
}

.left-bottom li 
{
  list-style: none;
  margin: 0 auto;
}

.left-bottom a
{
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}

// HOME ------------------------------------------------------------------
.hero-img
{
  height: 100vh;
  width: 100%;
  object-fit: cover;
}

.home {
  position: relative;
}

.float
{
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  letter-spacing: 2px;
}

.left-content
{
  flex: 1;
  top: 0;
  width: 100%;
  flex-direction: column;
}

.middle
{
  flex: 11;
  position: relative;
}

.font-gr
{
  font-family: gr;
  color: white;
  position: absolute;
}

.with
  {
    color: white;
    position: absolute;
    letter-spacing: 1px;
  }


.button
{
  font-family: 'Nunito';
  letter-spacing: 1px;
  font-size: .9rem;
  font-weight: 700;
  background: transparent;
  border: 3px solid #ffd400 ;
  color: white;
  padding: .5rem 1rem; 
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.button::after
{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#ffd400;
  z-index: -1;
  transition: transform 400ms ease;
}

.button-scale::after
{
  transform: scaleX(0);
  transform-origin: right;
}

.button-scale:hover::after
{
  transform: scaleX(1);
  transform-origin: left;
}



// ABOUT ------------------------------------------------------------------
.about
{
  width: 100%;
  display: flex;
}

.img
{
  transition: transform .4s ease;
}

.img:hover
{
  transform: scale(1.03);
}

.about-content
  {
    color: white;
  }

.about-content h2 
{
  position: relative;
}

.about-content h2::after 
{
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  width: 30%;
  height: 3px;
  background-color: #ffd400;
}

.about-content p {
  text-align: left;
  letter-spacing: .8px;
}



// JOURNEY ------------------------------------------------------------------
.journey 
{
  display: flex;
  align-items: center;
  flex-direction: column;
  // background-color: blue;
  height: 200vh;
}

.j-first-container h1 
{
  flex: 1;
  color: white;
  position: relative;
}

.j-first-container h1::after 
{
  content: '';
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 25%;
  background-color: #ffd400;
}

.j-middle-container
{
  flex: 6;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.j-left-img
{
  position: absolute;
  z-index: 2;
}

.j-bottom-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; 
}

.j-bottom-container h2, h5
{
  text-align: left;
}

.j-bottom-container h5 
{
  letter-spacing: .8px;
}

.j-bottom-left-container,
.j-bottom-right-container
{
  width: 40%;
}

// second 
.j-second-container
{
  flex: 1;
  width: 80%;
  display: flex;
}

.j-second-left-container
{
  flex: 5;
  padding-right: 2rem;
}

.j-second-left-container h1 
{
  color: white;
  position: relative;
}

.j-second-left-container h1::after 
{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 15%;
  background-color: #ffd400;
}

.j-second-left-container p 
{
  color: white;
  letter-spacing: .8px; 
}

.button-journey
{
  margin-top: 20px;
}

.j-second-right-container
{
  flex: 6;
  display: flex;
  align-items: center;
}

.blue-square
{
  background: #0e2a2f; 
  position: relative;
}

.journey__img
{
  position: absolute;
  left: 1.2rem;
  top: 1.2rem;
}


// EXPLORE ----------------------------------------------------------------------------------

.header-explore h1 
  {
    color: white;
    position: relative;
  }

.rectangle
{
  position: relative;
  cursor: pointer;
}

.bottom 
{
  align-self: flex-end;
}

.explore-img
{
  transition: all 400ms ease;
}

.float-img 
{
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.star 
{
  position: absolute;
  top: .6rem;
  right: .6rem;
  color: white;
  display: flex;
  align-items: center;
  gap: .2rem;
}


.bottom-rectangle-area
{
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: auto;
  padding: 1.5rem;
  background: linear-gradient(
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, .6) 10%,
    hsla(0, 0%, 0%, 1)
  );
  color: white;
  transition: all 400ms ease;
}


.area 
{
  font-size: .9rem;
  font-weight: 400;
  letter-spacing: .5px;
}

.bottom-area 
{
  display: flex;
  justify-content: space-between;
  margin-top: .6rem;
}


.bottom-area .header
{
  font-size: 1.4rem;
  font-weight: 400;
}

.bottom-area h6
{
  font-size: .9rem;
  font-weight: 400;
}


// EXPLORE PART TWO ------------------



// CONTACT ----------------------------------------------

.contact
{
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container 
{
  background: #0e2a2f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.email 
{
  height: 2.5rem;
  width: 16rem;
  background: #1c353a;
  color: white;
  border: none;
  padding: .7rem;
}

.email:focus
{
  outline: none;
}








@media only screen and(max-width: 375px){
  .left
  {
    width: 18%;
  }

  // =========================== HOME ========================= 
  .home-header
  {
    font-size: 6rem;
    top: 28%;
    left: 10%;
  }

  .with
  {
    top: 60%;
    left: 45%;
  }

  .le
  {
    font-size: 4rem;
    top: 64%;
    left: 10%;
  }

  .button__position
  {
    position: absolute;
    margin-top: 25px;
    top: 76%;
    left: 50%;
  }

  .button1
  {
    transform: translateX(-50%);
  }

  // ======================== ABOUT =========================== 
  .about-container
  {
    flex: 5;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "detail detail"
      "img-left img-right";
    padding-top: 4rem;
  }

  .a-left {
    grid-area: img-left;
    height: 16rem;
    width: 9rem;
  }

  .a-right {
    grid-area: img-right;
    height: 14rem;
    width: 8rem;
    margin-top: 1.1rem;
  }

  .about-content {
    grid-area: detail;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding-right: 10px;
  }

  .about-content h2 
  {
    font-size: 1.8rem;
    font-weight: 800;
  }

  .about-content h1 
  {
    display: none;
  }

  // ======================== JOURNEY ============================== 
  .journey
  {
    align-items: flex-end;
  }
  
  .j-first-container
  {
    width: 82%;
    padding-top: 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
      "jHeader jHeader"
      "jDetail jDetail"
      "imgContainer imgContainer";
  }

  .j-first-container h1
  {
    grid-area: jHeader;
    font-size: 1.8rem;
    font-weight: 800;
    width: fit-content;
  }

  .j-first-container h1::after
  {
    right: 0;
  }

  .j-middle-container
  {
    grid-area: imgContainer;
    margin-bottom: 14rem;
    padding-right: 2rem;
  }

  .j-left-img
  {
    left: 0;
    bottom: -5rem;
    height: 10rem;
    width: 8rem;
    z-index: 2;
  }

  .j-right-img
  {
    height: 10rem;
    width: 15rem;
  }

  .j-bottom-container
  {
    grid-area: jDetail;
    height: 8rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }

  .j-bottom-container h2 
  {
    font-size: 1.4rem;
  }

  .j-bottom-container h5 
  {
    font-weight: 400;
  }

  .j-bottom-left-container,
  .j-bottom-right-container
  {
    width: 30%;
  }


  // ============ PART TWO ============
  .j-second-container
  {
    width: 82%;
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
      "jDiscover jDiscover"
      "jImg jImg"
  }

  .j-second-left-container
  {
    grid-area: jDiscover;
  }

  .j-second-left-container h1
  {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 800;
  }

  .j-second-right-container
  {
    grid-area: jImg;
  }

  .blue-square
  {
    height: 17rem;
    width: 16rem;
  }

  .journey__img
  {
    height: 14.8rem;
    width: 17.5rem;
  }



  // ======================= EXPLORE ===================== 
  .first-explore-content
  {
    padding: 5rem 0 0 4.8rem;
    display: flex;
    flex-direction: column;
  }

  .header-explore
  {
    margin-bottom: 1.5rem;
  }

  .header-explore h1 
  {
    font-size: 1.8rem;
    width: fit-content;
  }

  .header-explore h1::after 
  {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 3px;
    width: 20%;
    background-color: #ffd400;
  }

  .content-explore-flex
  {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .rectangle
  {
    height: 14rem;
    width: 8rem;
  }

  .bottom 
  {
    align-self: flex-start;
  }

  .bottom-rectangle-area
  {
    padding: .5rem;
  }

  .explore-img
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 20%;
  }

  .location
  {
    font-size: 1.4rem;
  }

  .bottom-area .header
  {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .bottom-area h6
  {
    font-size: .8rem;
    font-weight: 400;
  }

  // ============= PART TWO =========== 
  .second-explore-content
  {
    visibility: hidden;
  }


  // ===================== CONTACT ====================
  .contact-container 
  {
    margin-top: 15rem;
    width: 100%;
    height: 40%;
  }

  .contact-title
  {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .contact-subheading 
  {
    margin: 1.5rem 3rem 1.5rem 5rem;
    font-size: .9rem;
  }

  .email 
  {
    width: 10rem;
    padding: .7rem;
    margin-left: 1rem;
  }

  .btn-subscribe 
  {
    font-weight: 400;
    padding: .4rem .5rem; 
    margin: 20px 0;
  }
}









@media only screen and(min-width: 425px){
  .left
  {
    width: 18%;
  }

  // =========================== HOME ========================= 
  .home-header
  {
    font-size: 6rem;
    top: 28%;
    left: 10%;
  }

  .with
  {
    top: 60%;
    left: 45%;
  }

  .le
  {
    font-size: 4rem;
    top: 64%;
    left: 10%;
  }

  .button__position
  {
    position: absolute;
    margin-top: 25px;
    top: 76%;
    left: 50%;
  }

  .button1
  {
    transform: translateX(-50%);
  }

  // ======================== ABOUT =========================== 
  .about-container
  {
    flex: 5;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "detail detail"
      "img-left img-right";
    padding-top: 4rem;
  }

  .a-left {
    grid-area: img-left;
    height: 17rem;
    width: 10rem;
  }

  .a-right {
    grid-area: img-right;
    height: 15rem;
    width: 8rem;
    margin-top: 1.1rem;
  }

  .about-content {
    grid-area: detail;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding-right: 10px;
  }

  .about-content h2 
  {
    font-size: 2rem;
    font-weight: 800;
  }

  .about-content h1 
  {
    display: none;
  }

  // ======================== JOURNEY ============================== 
  .journey
  {
    align-items: flex-end;
  }
  
  .j-first-container
  {
    width: 82%;
    padding-top: 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
      "jHeader jHeader"
      "jDetail jDetail"
      "imgContainer imgContainer";
  }

  .j-first-container h1
  {
    grid-area: jHeader;
    font-size: 2rem;
    font-weight: 800;
    width: fit-content;
  }

  .j-first-container h1::after
  {
    right: 0;
  }

  .j-middle-container
  {
    grid-area: imgContainer;
    margin-bottom: 14rem;
    padding-right: 2rem;
  }

  .j-left-img
  {
    left: 0;
    bottom: -5rem;
    height: 10rem;
    width: 8rem;
    z-index: 2;
  }

  .j-right-img
  {
    height: 12rem;
    width: 18rem;
  }

  .j-bottom-container
  {
    grid-area: jDetail;
    height: 8rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }

  .j-bottom-container h5 
  {
    font-weight: 400;
  }

  .j-bottom-left-container,
  .j-bottom-right-container
  {
    width: 30%;
  }


  // ============ PART TWO ============
  .j-second-container
  {
    width: 82%;
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
      "jDiscover jDiscover"
      "jImg jImg"
  }

  .j-second-left-container
  {
    grid-area: jDiscover;
  }

  .j-second-left-container h1
  {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 800;
  }

  .j-second-right-container
  {
    grid-area: jImg;
  }

  .blue-square
  {
    height: 18rem;
    width: 18rem;
  }

  .journey__img
  {
    height: 15.8rem;
    width: 19.5rem;
  }



  // ======================= EXPLORE ===================== 
  .first-explore-content
  {
    padding: 5rem 0 0 4.8rem;
    display: flex;
    flex-direction: column;
  }

  .header-explore
  {
    margin-bottom: 1.5rem;
  }

  .header-explore h1 
  {
    font-size: 2rem;
    width: fit-content;
  }

  .header-explore h1::after 
  {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 3px;
    width: 20%;
    background-color: #ffd400;
  }

  .content-explore-flex
  {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .rectangle
  {
    height: 16rem;
    width: 10rem;
  }

  .bottom 
  {
    align-self: flex-start;
  }

  .bottom-rectangle-area
  {
    padding: 1rem;
  }

  .explore-img
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 20%;
  }

  .location
  {
    font-size: 1.4rem;
  }

  .bottom-area .header
  {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .bottom-area h6
  {
    font-size: .8rem;
    font-weight: 400;
  }

  // ============= PART TWO =========== 
  .second-explore-content
  {
    visibility: hidden;
  }


  // ===================== CONTACT ====================
  .contact-container 
  {
    margin-top: 15rem;
    width: 100%;
    height: 40%;
  }

  .contact-title
  {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .contact-subheading 
  {
    margin: 1.5rem 3rem 1.5rem 5rem;
    font-size: .9rem;
  }

  .email 
  {
    width: 12rem;
    padding: .7rem;
    margin-left: 1rem;
  }

  .btn-subscribe 
  {
    font-weight: 400;
    padding: .4rem 1rem; 
    margin: 20px 0;
  }
  
}










@media screen and(min-width: 768px){
  .left
  {
    width: 8.3%;
  }

  // ====================== HOME ========================= 
  .home-header
  {
    font-size: 9rem;
    top: 25%;
    left: 20%;
  }

  .with
  {
    top: 61%;
    left: 49%;
  }

  .le
  {
    font-size: 5.7rem;
    top: 66%;
    left: 30%;
  }

  .button__position
  {
    position: absolute;
    top: 82%;
    left: 50%;
  }

  .travel
  {
    position: absolute;
    bottom: -4%;
    right: 80;
    color: transparent;
    font-size: 6rem;
    font-weight: 900;
    -webkit-text-stroke-width: .7px;
    -webkit-text-stroke-color: white;
    opacity: 4%;
    text-transform: uppercase;
    cursor: default;
  }


  // ====================== ABOUT ========================= 

   .about-container
  {
    flex: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    position: relative;
  }

  .a-left {
    height: 22rem;
    width: 14rem;
  }
  
  .a-right {
    height: 17rem;
    width: 9rem;
  }

  .about-content
  {
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  .about-content h2 
  {
    font-size: 2rem;
    font-weight: 800;
  }

  .about-content h1
  {
    display: none;
  }


  // ====================== JOURNEY ========================= 

  .j-first-container
  {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .j-first-container h1 
  {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .j-first-container h1::after
  {
    left: 40%;
  }

  .j-middle-container 
  {
    margin-bottom: 4rem;
    padding-right: 2rem;
  }

  .j-left-img
  {
    left: 0;
    bottom: -3rem;
    height: 20rem;
    width: 16rem;
    z-index: 2;
  }

  .j-right-img
  {
    height: 21rem;
    width: 35rem;
  }

  .j-bottom-container h2 
  {
    margin: .7rem 0;
  }

  // ====== JOURNEY PART TWO ====== 
  .j-second-container
  {
    width: 90%;
    padding-top: 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
      "jDiscover jDiscover"
      "jImg jImg"
  }

  .j-second-left-container
  {
    grid-area: jDiscover;
  }

  .j-second-left-container h1
  {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 800;
  }

  .j-second-right-container
  {
    grid-area: jImg;
  }

  .blue-square
  {
    height: 25rem;
    width: 30rem;
  }

  .journey__img
  {
    height: calc(25rem - 2.4rem);
    width: 38rem;
  }

  // ================= EXPLORE ========================= 
  .first-explore-content
  {
    padding: 5rem 2rem 0 4.8rem;
    display: flex;
    flex-direction: column;
  }

  .header-explore
  {
    margin-bottom: 1.5rem;
  }

  .header-explore h1 
  {
    font-size: 2rem;
    width: fit-content;
  }

  .header-explore h1::after 
  {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 3px;
    width: 20%;
    background-color: #ffd400;
  }

  .content-explore-flex
  {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .rectangle
  {
    height: 18rem;
    width: 13rem;
  }

  .bottom 
  {
    align-self: flex-start;
  }

  .explore-img
  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 20%;
  }

  .location
  {
    font-size: 1.6rem;
  }

  .area 
  {
    font-size: 1rem;
  }

  .bottom-area .header
  {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .bottom-area h6
  {
    font-size: 1rem;
    font-weight: 400;
  }


  // ============= PART TWO =========== 
  .second-explore-content
  {
    visibility: hidden;
  }


  // ================== CONTACT ==================
  .contact-container 
  {
    margin-top: 2rem;
    width: 100%;
    height: 40%;
  }

  .contact-title
  {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .contact-subheading 
  {
    margin: 1.5rem 3rem 1.5rem 5rem;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  .email 
  {
    width: 27rem;
    padding: .7rem;
    margin-left: 1rem;
  }

  .btn-subscribe 
  {
    padding: .4rem 2rem;
  }
}












@media screen and(min-width: 1024px){

  // ==================== HOME =========================== 
  .home-header
  {
    font-size: 9rem;
    top: 25%;
    left: 28.5%;
  }

  .with
  {
    top: 60%;
    left: 45%;
  }

  .le
  {
    font-size: 7rem;
    top: 64%;
    left: 48.5%;
  }

  .button__position
  {
    position: absolute;
    top: 84%;
    left: 66%;
  }

  .travel
  {
    position: absolute;
    bottom: -5.5%;
    right: 80;
    color: transparent;
    font-size: 8rem;
    font-weight: 900;
    -webkit-text-stroke-width: .7px;
    -webkit-text-stroke-color: white;
    opacity: 4%;
    text-transform: uppercase;
    cursor: default;
  }


  // =========================== ABOUT ============================= 
  .about-container
  {
    flex: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    position: relative;
  }

  .about-content
  {
    margin-right: 10rem;
    margin-left: 2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: .8rem;
  }

  .about-content h2 
  {
    font-size: 2.4rem;
    font-weight: 800;
  }

  .about-content h1
  {
    position: absolute;
    bottom: -37px;
    left: 42%;
    color: transparent;
    font-size: 8rem;
    font-weight: 900;
    -webkit-text-stroke-width: .7px;
    -webkit-text-stroke-color: white;
    opacity: 5%;
    text-transform: uppercase;
    cursor: default;
  }


  // =========================== JOURNEY ============================= 
  .j-first-container
  {
    width: 92%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
  }

  .j-first-container h1 
  {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  .j-first-container h1::after
  {
    left: 40%;
  }

  .j-middle-container
  {
    margin-bottom: 2rem;
    padding-right: 2rem;
  }

  .j-left-img
  {
    left: 0;
    bottom: -4rem;
    height: 24rem;
    width: 20rem;
    z-index: 2;
  }

  .j-right-img
  {
    height: 26rem;
    width: 49rem;
  }

  .j-bottom-container
  {
    flex: 2;
    margin-top: 2.5rem;
  }

  .j-bottom-container h2 
  {
    margin: .7rem 0;
  }


  // ====== JOURNEY PART TWO ====== 
  .j-second-container
  {
    display: flex;
    align-items: center;
  }

  .j-second-left-container h1 
  {
    font-size: 2.4rem;
    margin-top: 3.5rem;
    margin-bottom: 1rem;
  }

  .blue-square
  {
    height: 30rem;
    width: 27rem;
  }

  .journey__img
  {
    height: calc(30rem - 2.4rem);
    width: 28rem;
  }


  // ================= EXPLORE ================================ 
  .explore 
  {
    height: 200vh;
  }

  .first-explore-content
  {
    display: flex;
    flex-direction: column;
    height: 50%;
  }

  .header-explore
  {
    margin: 3.5rem auto 1.8rem;
  }

  .header-explore h1 
  {
    font-size: 2.4rem;
  }

  .header-explore h1::after 
  {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 3px;
    width: 20%;
    background-color: #ffd400;
  }

  .content-explore
  {
    align-self: center;
    width: 100%;
  }

  .content-explore-flex
  {
    display: flex;
    flex-direction: row;
    height: 78vh;
    gap: 25px;
  }

  .rectangle
  {
    height: 29rem;
    width: 10rem;
  }

  .rectangle:hover > .explore-img,
  .rectangle:hover > .bottom-rectangle-area,
  .rectangle:hover > .star 
  {
    transform: scale(1.03)
  }

  .rectangle:hover > .bottom-rectangle-area,
  .rectangle:hover > .star
  {
    opacity: 1;
  }

  .explore-img
  {
    width: 100%;
    height: 29rem;
  }

  .star
  {
    opacity: 0
  }

  .bottom-rectangle-area
  {
    opacity: 0;
  }

  .star-size
  {
    font-size: .9rem;
    font-weight: 400;
  }

  .location 
  {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
  }

  .bottom-area h6
  {
    font-size: .9rem;
  }

  // ===== EXPLORE PART TWO ====== 
  .second-explore-content
  {
    height: 50%;
    padding-top: 7rem;
    margin: 0 7rem;
    display: flex;
    flex-direction: column;
    color: white;
    visibility: visible;
  }

  .second-explore-content h1 
  {
    flex: 1;
    color: white;
    font-size: 2.4rem;
    position: relative;
    margin: .5rem 0;
    align-self: flex-start;
  }

  .second-explore-content h1::after 
  {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 18%;
    background-color: #ffd400;
  }

  .calendar
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: row;
    flex-grow: 1;
  }

  .tour-card
  {
    height: 100%;
    width: 100%;
    padding: 2rem 3rem 1rem 1rem;
    border: .5px solid #1c353a;
  }

  .date 
  {
    font-size: 1.1rem;
    font-weight: 800;
  }

  .month 
  {
    font-size: .9rem;
    font-weight: 700;
  }

  .btn-explore
  {
    font-size: 1rem;
    font-weight: 700; 
    margin: 20px 0;
    transform: translateX(-1rem);
  }

  .span-detail
  {
    font-size: .8rem;
    letter-spacing: .5px;
    font-weight: 400;
  }


  // =========================== CONTACT =========================== 

  .contact-container 
  {
    height: 40vh;
    width: 80%;
  }

  .contact-title
  {
    font-size: 2rem;
    font-weight: 400;
  }

  .contact-subheading 
  {
    margin: 1.5rem 0;
    font-size: .9rem;
  }

  .btn-subscribe 
  {
    font-weight: 600;
    padding: .4rem 1rem; 
    margin: 20px 0;
  }
}




@media screen and(min-width: 1200px ){
  // ===================== ABOUT =================== 
  .a-left
  {
    height: 32rem;
    width: 17rem;
  }

  .a-right
  {
    height: 25rem;
    width: 14rem;
  }

  // ==================== JOURNEY ================ 
  .j-middle-container 
  {
    width: 70%;
  }

  .j-left-img
  {
    height: 20rem;
    width: 16rem;
  }

  .j-right-img
  {
    height: 23rem;
    width: 40rem;
  }

  .j-bottom-container
  {
    margin-top: 1rem;
  }


  // ================== PART TWO ================ 
  .j-second-left-container
  {
    padding-right: 0;
  }
  
  .blue-square
  {
    height: 25rem;
    width: 30rem;
  }

  .journey__img
  {
    height: calc(25rem - 2.4rem);
    width: 36rem;
  }


  // =============== EXPLORE ============================== 
  .first-explore-content
  {
    padding: 0;
  }
  
  .content-explore
  {
    width: 82%;
  }

  .content-explore-flex
  {
    justify-content: center;
  }

  .bottom 
  {
    align-self: flex-end;
  }

  .rectangle
  {
    height: 29rem;
    width: 12.5rem;
  }


   // ======================= CONTACT ======================= 
   .contact-container 
  {
    width: 70%;
  }
}





  @media screen and(min-width: 1350px ){
    // ==================== JOURNEY ================ 
  .j-middle-container 
  {
    width: 60%;
  }
}



</style>