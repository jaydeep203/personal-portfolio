import {create} from 'zustand';

interface useConditionStore{
    Menu:boolean;
    Open:()=>void;
    Close:()=>void;
}

const useCondition = create<useConditionStore>((set:any)=>({
    Menu:false,
    Open: () => set({Menu:true}),
    Close: () => set({Menu:false})
}));

export default useCondition;