import { setEthereumAddress } from "./ethereumStore";

export const RequestWallet = async()=>{
    try{
        const {ethereum} = window;
        if(ethereum){
            const accounts = await ethereum.request({
                method:'eth_requestAccounts'
            })
            if(accounts.length !=0){
                let account = accounts[0];
                setEthereumAddress(account);
            }
        }
    }catch(e){
        console.log(e);
    }
}