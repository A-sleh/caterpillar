import { useEffect, useRef, useState } from "react"


export const useElementOnScreen = (option) => {
    const headerOneRef = useRef(null)
    const [isVisibale,setIsVisibale] = useState(false)

    const callBackFucntion = (entries) => {
        const [entry] = entries 
        setIsVisibale(entry.isIntersecting)
    }
    
    useEffect( () => {

        const observer = new IntersectionObserver(callBackFucntion,option)
        if(headerOneRef.current)observer.observe(headerOneRef.current)

        return () => {
            if(headerOneRef.current) observer.unobserve(headerOneRef.current)
        }

    } , [option,headerOneRef])

    return [headerOneRef,isVisibale]
}


