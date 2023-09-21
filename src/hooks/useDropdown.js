import { useEffect, useState } from "react"

export const useDropdown = (ref, dropdownId) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
      // console.log('hola');
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

    const closeDropdown = () => {
      document.getElementById(dropdownId).classList.add('close-list')
      document.getElementById(dropdownId).classList.remove('active-list')
      setOpen(false);
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          if( open && ref.current && !ref.current.contains(e.target) ){
            toggleOpen();
          }
        };
        document.addEventListener("click", checkIfClickedOutside); 
        return () => {
          document.removeEventListener("click", checkIfClickedOutside);
        }
      }, [toggleOpen])

    return{
        open,

        setOpen,
        toggleOpen,
        closeDropdown
    }
}