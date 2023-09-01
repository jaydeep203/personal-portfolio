import { create } from "zustand";
interface useProjectModalStore{
    isOpen:boolean;
    onClose:() => void;
    onOpen: () => void;
}

const useProjectModal = create<useProjectModalStore>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default useProjectModal;
