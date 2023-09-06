import { useState } from "react"

export const useDropdown = (dropdownId) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        if(open){
            document.getElementById(dropdownId).classList.add('close-list')
            document.getElementById(dropdownId).classList.remove('active-list')
            setOpen(false);
        }else{
            document.getElementById(dropdownId).classList.remove('close-list')
            document.getElementById(dropdownId).classList.add('active-list')
            setOpen(true);
        }
    }

    return{
        open,

        setOpen,
        toggleOpen,
    }
}