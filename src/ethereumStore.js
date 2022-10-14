import { atom } from "nanostores";


export const ethereumStore = atom({
    address:'',
    status :''
});


export function setEthereumAddress(addr){
    ethereumStore.set({
        address:addr,
        status:ethereumStore.get().status
    });
    console.log('New Ethereum state:',ethereumStore.get());
}