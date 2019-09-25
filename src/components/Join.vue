<template>
<div class="background" id="join">
  <div class="container">
    <div class="row">
      <div class="my-auto col">
            <h1>Join the heap</h1>
            <h2>the last address has {{ top_pos }} SHUF</h2>
      </div>
      <div class="col-auto shuff-card mobile-top-margin">
    <div class="row mobile-top-margin">
      <div class="my-auto col">
          <!--  -->
        <button v-on:click="open_uniswap" class="action-button join-button btn btn-uniswap">Trade on Uniswap</button>
        <br/><br/>
        <button v-on:click="open_bamboo" class="action-button join-button btn btn-bamboo">Trade on Bamboo DEX</button>
        <br/><br/>
        <button v-on:click="open_telegram" class="action-button join-button btn btn-telegram">Join our Telegram</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getToken, readWeb3 } from '../web3.js';

export default {
  name: 'Join',
  data: function(){
      return {
          airdrop_restarted: this.airdrop_restarted,
          top_pos: this.top_pos
        };
  },
  created: async function() {
        this.top_pos = "...";
        const token = getToken(readWeb3());
        const result = await token.methods.heapTop().call();
        this.top_pos = (result[1] / 10 ** 18).toFixed(0);
  },
  methods: {
    open_uniswap: function() {
        var redirectWindow = window.open(`https://uniswap.exchange/swap/0x3a9fff453d50d4ac52a6890647b823379ba36b9e`, '_blank');
        redirectWindow.location;
    },
    open_bamboo: function() {
        var redirectWindow = window.open(`https://bamboorelay.com/trade/SHUF2-WETH`, '_blank');
        redirectWindow.location;
    },
    open_telegram: function() {
        var redirectWindow = window.open(`https://t.me/shuftoken`, '_blank');
        redirectWindow.location;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-uniswap{
    background-color: #B55ADD;
    border-color: #ac45d9;
    color: #fff;
}
.btn-bamboo{
    background-color: #40b281;
    border-color: #399f73;
    color: #fff;
}
.btn-telegram{
    background-color: #0088cc;
    border-color: #0077b3;
    color: #fff;
}
.btn {
    width: 250px;
    text-align: center;
    display: inline;
}
.btn:hover {
    color: white;
    font-weight: 900;
}
.form-control{
    min-width: 220px;
    margin-bottom: 16px;
}
.form{
    max-width: 600px;
    margin: auto;
}
.message{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: auto;
}
.my-auto{
    margin-top: auto;
    margin-bottom: auto;
}
.join-button {
    margin-right: auto;
    margin-left: auto;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 93.19%;
    padding: 10px;
}
.red-red {
    border-color: #AF2020;
    background-color: #AF2020;
}
.background {
    position: static;
    width: 100%;
    padding: 0;
    padding: 60px;
    background: linear-gradient(181.07deg, #21540F 9.11%, #153413 83.74%), #153312;
}
h3{
  position: static;
  width: 431px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  text-align: left;
  line-height: 93.19%;
  /* or 23px */

  display: flex;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
h2{
  position: static;

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
h1{
  position: static;

  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  text-align: left;
  line-height: 93.19%;
  /* or 23px */

  display: flex;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
@media screen and (max-width: 767px) {
  .mobile-top-margin {margin-top:22px;}
}
</style>
