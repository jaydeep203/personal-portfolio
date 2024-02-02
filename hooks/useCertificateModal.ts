import {create} from 'zustand';

interface useConditionStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useCertificateModal = create<useConditionStore>((set:any)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default useCertificateModal;