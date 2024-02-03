import {create} from 'zustand';

interface useConditionStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useEducationModal = create<useConditionStore>((set:any)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default useEducationModal;