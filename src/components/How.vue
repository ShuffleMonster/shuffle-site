<template>
    <div class="container main" id="how">
        <div class="row">
            <div class="last order-last order-md-first auto mobile-top-margin wns">
                <div v-for="item in winners" v-bind:key="item.tx" class="winner">
                    <button v-on:click="click_winner(item)" class="btn btn-outline-warning winner-button">
                        <b>{{ item.address_short }}</b>
                        <br/>
                        wins <b>{{ item.amount }}</b> SHUF
                    </button>
                </div>
            </div>
            <div class="col my-auto main-text margin-mobile">
                <div class="title">
                    How it works?
                </div>
                <br/>
                <div class="description">
                    <p>On every token transaction, a transaction fee of 2% of the transferred amount is charged.</p>
                    <br/>
                    <p>- 1% is burned, reducing the total amount of circulating Shuf tokens. </p>
                    <p>- 1% is drawn randomly to one of the 512 top token holders.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { readWeb3, getToken } from '../web3.js';

function shortAddress(addr) {
    return `${addr.slice(0, 5)}...${addr.slice(-5)}`;
}

function formatAmount(amount, maxDigits = 6)  {
    if (amount.toString().length <= maxDigits) {
        return amount.toString();
    }

    const intDigits = amount.toFixed(0).toString().length;
    const decDigits = maxDigits - intDigits;

    const decimals = (decDigits > 0) ? decDigits : 0;

    return Number(amount.toFixed(decimals)).toString();
}

export default {
  name: 'How',
  data: function() {
    return {
        winners: this.winners
    }
  },
  methods:{
      click_winner: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
        redirectWindow.location;
      },
  },
  created: async function() {
    this.winners = [];
    const reparter = getToken(readWeb3());
    reparter.events.Winner({
            fromBlock: 8617285
        }, (error, event) => {
            if (this.winners.length > 5) {
                this.winners.pop();
            }
            if (event) {
                this.winners.unshift({
                    address: event.returnValues._addr,
                    address_short: shortAddress(event.returnValues._addr),
                    amount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
                    tx: event.transactionHash
                });
            }
        }
    );
  }
}
</script>

<style scoped>
.wns {
    min-height: 430px;
}
.last {
    min-width: 320px;
}
.winner {
    margin: 20px;
}
.winner-button {
    color: #dba80d;
    border-color: #dba80d;
    width: 250px;
}
.winner-button:hover { 
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.auto{
    margin: auto;
}
.main-text {
    margin-left: 60px;
}
.heap {
    padding: 0;
}
.heap-wrapper {
    width: 130px;
    padding: 0;
}
.title{
    position: static;
    height: 63px;

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
    font-weight: normal;
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
    .hide-mobile {
        display: none;
    }
    .margin-mobile {
        margin: 16px;
    }
    .mobile-top-margin {
        margin-top:44px;
    }
}

</style>
