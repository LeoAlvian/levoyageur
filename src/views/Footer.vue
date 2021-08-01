<template>
  <div class="footer">
    <div class="top-footer-container"></div>
    <div class="middle-footer-container">
      <div class="footer-travel">
        <h2>Travel</h2>
        <p>You choose the destination,<br>offer you the experience</p>
      </div>
      <div class="footer-about">
         <h2>About</h2>
        <div class="info"><a href="">About us</a></div>
        <div class="info"><a href="">News & Blog</a></div>
      </div>
      <div class="footer-company">
        <h2>Company</h2>
        <div class="info"><a href="">Team</a></div>
        <div class="info"><a href="">Plan & Pricing</a></div>
      </div>
      <div class="footer-support">
        <h2>Support</h2>
        <div class="info"><a href="">FAQs</a></div>
        <div class="info"><a href="">Contact Us</a></div>
      </div>
    </div>
    <div class="bottom-footer-container">
      <div class="left-bottom-footer">
        <a href="">&#169; 2019 All rights reserved</a>
      </div>
      <div class="right-bottom-footer">
        <a href="">Terms & agreements</a>
        <a href="">Privacy Policy</a>
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
</style>