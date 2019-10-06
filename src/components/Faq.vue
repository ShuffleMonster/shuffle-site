<template>
    <div class="container main margin-mobile">
        <div class="title">
            Frequently asked questions
        </div>
        <br/><br/>
        <div class="description">
            - Who were eligible for the airdrop?
            <br/>
            Any user who already had ETH at block 8113050 was eligible for 150 SHUF tokens for every ETH held at that time.
            <br/><br/>
            - Was there any cost? 
            <br/>
            The only cost of claiming SHUF tokens was the gas of the claim transaction. The tokens were distributed for free.
            <br/><br/>
            - Was there any minimum amount?
            <br/>
            No, you could claim for even one single wei.
            <br/><br/>
            - Was there a maximum amount?
            <br/>
            The maximum amount of tokens that a single address could claim was 1500 SHUF, equivalent to holding 10 ETH at block 8113050.
            <br/><br/>
            - How many SHUF tokens are there?
            <br/>
            The total amount of SHUF was one million and has already decreased. 
            <br/><br/>
            - What happened if too many tried to claim SHUF? 
            <br/>
            After all the 1,000,000 tokens were distributed, the airdrop stopped. 
            <br/><br/>
            - What is the Heap?
            <br/>
            The Heap is the data structure used to track the 512 top holders of the token; you may enter or leave the Heap depending on how much balance you have in relation to others.
            <br/><br/>
            - What happens if I am in the Heap?
            <br/>
            On every transaction made you may win 1% of the amount transferred.
            <br/><br/>
            - What is the SHUF transaction fee?
            <br/>
            Almost all transfers of SHUF tokens have a surcharge of 2%, half of the amount is burned, and the other half is sent to a winner drawn from the Heap.
            <br/><br/>
            - What is the burning of tokens?
            <br/>
            When tokens are burned, they are no longer part of the total emission of SHUF token, this adds to its scarcity and should increase the value of the remaining tokens.
            <br/><br/>
            - How is the random winner selected?
            <br/>
            The address of the sender is used as the seed of a random number generator, and from that unique generator, the index of the winner is obtained.
            <br/><br/>
            In this manner, we limit the ability of a sender to manipulate who is going to become the winner when they make a transfer.
            <br/><br/>
            - What goes to the developer?
            <br/>
            6% of the token emission, and we are subject to the same fees as every other user, also we don't have any means to emit or manipulate the circulating tokens.
            <br/><br/>
            - Is the project open source?
            <br/>
            Yes, you can find all the code in our Github repository.
        </div>
    </div>
</template>

<script>
export default {
  name: 'Faq'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Hot it works? */
.container{
    width: auto;
}
.my-auto{
    margin-top: auto;
    margin-bottom: auto;
}
.title{
    position: static;
    max-width: 731px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 93.19%;
    text-align: left;
    /* or 33px */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    color: #000000;
}

.description{
    position: static;
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    text-align: left;
    /* or 18px */
    align-items: center;
    color: #000000;
}

.main{
    margin-top: 66px;
    margin-bottom: 66px;
}

@media screen and (max-width: 767px) {
    .margin-mobile {
        /* padding: 25px; */
        margin-left: 16px;
        margin-right: 16px;
    }
}
</style>
