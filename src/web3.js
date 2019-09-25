import Web3 from 'web3';
import Env from './env.js';

const reparterAbi = require('./contracts/Reparter.json');
const tokenAbi = require('./contracts/Token.json');

export async function getWeb3(login) {
    if (window.ethereum) {
        const w3 = new Web3(window.ethereum);

        if (login) {
            await window.ethereum.enable();
        }

        return w3;
    } else if (window.web3) {
        return new Web3(window.web3.currentProvider);
    }
}

export function readWeb3() {
    return new Web3(new Web3.providers.HttpProvider(Env.ethNode));
}

export function getReparter(web3) {
    return web3.eth.Contract(reparterAbi, Env.reparter);
}

export function getReparterOld(web3) {
    return web3.eth.Contract(reparterAbi, Env.reparterold);
}

export function getToken(web3) {
    return web3.eth.Contract(tokenAbi, Env.token);
}