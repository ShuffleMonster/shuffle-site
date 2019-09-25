<template>
<div class="background">
    <footer class="page-footer font-small text-light">
    <div class="container">
        <div class="col-md-12">
            <div class="flex-center">
                <a target="_blank" aria-label="Twitter" href="https://twitter.com/ShuffleToken" class="icon fa fa-twitter"></a>
                <a target="_blank" aria-label="Telegram chat group" href="https://t.me/shuftoken" class="icon fa fa-telegram"></a>
                <a target="_blank" aria-label="Github repository" href="https://github.com/Agusx1211/shuffle" class="icon fa fa-github"></a>
                <a target="_blank" aria-label="Reddit page" href="https://www.reddit.com/r/ShuffleMonster/" class="icon fa fa-reddit"></a>
                <a target="_blank" aria-label="Smart contract code" href="https://etherscan.io/address/0x3a9fff453d50d4ac52a6890647b823379ba36b9e#code" class="icon fa fa-code"></a>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">2019 - GPL v3.0 - by 
        <a target="_blank" href="https://www.linkedin.com/in/agusx1211/">Agusx1211</a>
    </div>
    <!-- Copyright -->

    </footer>
    <!-- Footer -->
</div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.icon{
    font-size: 33px;
    color: black;
    background-color: white;
    padding: 16px;
    margin: 16px;
}
.icon:hover {
  padding: 18px;
  margin: 14px;
  text-decoration: none;
}
.background {
    position: static;
    width: 100%;
    padding: 0;
    padding: 60px;
    background: linear-gradient(181.07deg, #21540F 9.11%, #153413 83.74%), #153312;
}
.prof {
    width: 256px;
    height: 256px;
}
.me {
    margin-left: 30px;
}
.title{
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
.profile{
    position: static;

    font-family: Poppins;
    font-style: normal;
    font-size: 16px;
    text-align: left;
    /* or 23px */
    color: #FFFFFF;
}
.lk{
    text-align: left;
}
@media screen and (max-width: 767px) {
  .mobile-top-margin {
      padding-top:44px;
      margin-left: 0px;
    }
}
</style>
