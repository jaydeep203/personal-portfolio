import { create } from "zustand";
interface useEditProjectModalStore{
    isOpen:boolean;
    projectId: string;
    onClose:() => void;
    onOpen: () => void;
    onSet: (id: string) => void;
}

const useEditProjectModal = create<useEditProjectModalStore>((set)=>({
    isOpen:false,
    projectId:"",
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
    onSet: (id) => set({projectId:id})
}));

export default useEditProjectModal;
