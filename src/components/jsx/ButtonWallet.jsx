import { RequestWallet } from "../../ethereumRequest";
import { useStore } from "@nanostores/react";
import { ethereumStore } from "../../ethereumStore";

export default function buttonWallet(){

    const $ethereumState = useStore(ethereumStore);

    return <button className="buttonWallet fadeIn" onClick={RequestWallet}>
        {$ethereumState.address == ''?'CONNET ETHEREUM WALLET':$ethereumState.address}
    </button>;
    
}
