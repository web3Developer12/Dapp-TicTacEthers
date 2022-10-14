import { atom } from "nanostores";

export const pickerStore = atom(false);

export function switchPicker(){
    pickerStore.set(!pickerStore.get());
    console.log('New state:',pickerStore.get());
}