<template>
  <div class="footer">
    <div class="top-footer-container"></div>
    <div class="middle-footer-container">
      <div v-scrollanimation="'footer'" class="footer-travel">
        <h2>Travel</h2>
        <p>You choose the destination,<br>we offer you the experience</p>
      </div>
      <div v-scrollanimation="'footer'" class="footer-about" >
         <h2>About</h2>
        <div class="info"><a href="">About us</a></div>
        <div class="info"><a href="">News & Blog</a></div>
      </div>
      <div v-scrollanimation="'footer'" class="footer-company">
        <h2>Company</h2>
        <div class="info"><a href="">Team</a></div>
        <div class="info"><a href="">Plan & Pricing</a></div>
      </div>
      <div v-scrollanimation="'footer'" class="footer-support">
        <h2>Support</h2>
        <div class="info"><a href="">FAQs</a></div>
        <div class="info"><a href="">Contact Us</a></div>
      </div>
    </div>
    <div class="bottom-footer-container">
      <div v-scrollanimation="'footer'" class="left-bottom-footer">
        <a href="">&#169; 2019 All rights reserved</a>
      </div>
      <div class="right-bottom-footer">
        <a v-scrollanimation="'footer'" class="term" href="">Terms & agreements</a>
        <a v-scrollanimation="'footer'" class="privacy" href="">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.footer 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #091e21;
  color: white;
  overflow: hidden;
}
.top-footer-container
{
  height: 40vh;
  width: 80%;
}

.middle-footer-container
{
  height: 30vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.middle-footer-container h2 
{
  font-size: 1.2rem;
}

.middle-footer-container p 
{
  font-size: .95rem;
  letter-spacing: .5px;
  margin: .6rem 0;
}

.middle-footer-container a 
{
  font-size: .95rem;
  letter-spacing: .5px;
  text-decoration: none;
  color: white;
}

.info 
{
  margin: .6rem 0;
}

.bottom-footer-container
{
  height: 5vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #455c61;
}

.bottom-footer-container p
{
  font-size: .8rem;
  font-weight: 700;
}

.bottom-footer-container a
{
  font-size: .8rem;
  font-weight: 700;
  text-decoration: none;
  color: #455c61;
}

.right-bottom-footer
{
  width: 35%;
  display: flex;
  justify-content: space-between;
}


// =========== MEDIA QUERY ============ 
@media only screen and(max-width: 425px){
  .middle-footer-container
  {
    height: auto;
    margin-left: 3rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }


  .bottom-footer-container
  {
    height: auto;
    width: 100%;
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #455c61;
  }

  .left-bottom-footer 
  {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .right-bottom-footer
  {
    width: 100%;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
}



.before-enter-footer
{
  opacity: 0;
  transform: translateY(-80px);
  transition: all 1.2s ease-out;
}

.enter-footer
{
  opacity: 1;
  transform: translateY(0px);
}


.footer-about
{
  transition-delay: .1s;
}

.footer-company 
{
  transition-delay: .3s;
}

.footer-support 
{
  transition-delay: .5s;
}

.left-bottom-footer 
{
  transition-delay: .6s;
}

.term
{
  transition-delay: .8s;
}

.privacy
{
  transition-delay: 1s;
}
</style>