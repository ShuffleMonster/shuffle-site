<template>
<div class="background move-area">
  <div class="container">
    <div class="row">
      <div class="my-auto col">
        <h1>Shuffle Token</h1>
        <h2>Shuf token is a very shuffled ERC20 token.</h2>
        <button v-scroll-to="{ el: '#how', offset: -200, }" type="button" class="btn btn-danger join-button">Read more</button>
      </div>
      <div class="col-auto shuff-card mobile-top-margin">
        <transition v-on:appear="animate_glow">
          <div class="card-glow"></div>
        </transition>
        <img alt="Shuffle moster deck card logo" class="my-auto shuff-card-image" src="../assets/cardfulleyeless.svg"/>
        <transition v-on:appear="animate_eye">
          <img alt="Monster spining eye" class="my-auto eye" src="../assets/eye.svg">
        </transition>
        <img/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Velocity from 'velocity-animate';

const animate_times = 120;

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

export default {
  name: 'Head',
  methods: {
    animate_glow: function(el) {
      // const animate_glow = this.animate_glow;
      for (let i = 0; i < animate_times; i++) {
        el.velocity({opacity: random(0.5, 1)}, {
          duration: random(250, 1000),
        });
      }
    },
    animate_eye: function(el) {
      var pos = 'rotateZ(0deg)';
      for (let i = 0; i < animate_times; i++) {
        var new_pos = "rotateZ("+random(0, 360)+"deg)"
        el.velocity({transform: [new_pos, pos]}, {
          delay: random(0, 5000),
          duration: random(250, 3000)
        })
        pos = new_pos;
      }
    }
  }
}

</script>

<style scoped>
.eye{
  position: absolute;
  top: 171px;
  left: 132px;
  z-index: 40;
  width: 50px;
  transform: rotateZ(0deg);
  will-change: transform;
}
.my-auto{
  margin-top: auto;
  margin-bottom: auto;
}
.join-button {
  position: relative;
  text-align: left;
  display: flex;
  background-color: #AF2020;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border-color: #AF2020;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 93.19%;
  padding: 14px;
}
.shuff-card{
  width: 300px;
  height: auto;
  margin: auto;
}
.shuff-card-image{
  width: 100%;
  z-index: 30;
  position: relative;
}
.card-glow{
    position: absolute;
    width: 82%;
    height: 90%;
    box-shadow: 0px 0px 2000px rgba(0, 255, 71, 1);
    left: 9%;
    z-index: 1;
    top: 4%;
    will-change: opacity;

}
.background {
  position: static;
  width: 100%;
  padding: 0;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 24px;
  padding-right: 24px;
  background: linear-gradient(308.23deg, #21540F 44.93%, #0b1b0a 98.22%), #153312;
}
h1{
  position: static;

  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 85px;
  text-align: left;
  line-height: 93.19%;
  /* or 42px */

  display: flex;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
h2{
  position: static;
  max-width: 431px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  text-align: left;
  line-height: 93.19%;
  /* or 23px */

  display: flex;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
@media screen and (max-width: 767px) {
  .mobile-top-margin {margin-top:44px;}
}
</style>
