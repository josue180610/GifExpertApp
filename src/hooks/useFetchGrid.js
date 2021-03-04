import { useEffect, useState } from "react"
import { getGift } from "../Services/GridGifService"


// En el custom hooks podemos definir:
/*
1. useEffect
2. setTimeout
3. useState
4. funciones.
5. etc
*/
export const useFetchGrid = ( category )  => { 
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        setTimeout(() => {
            getGift(category).then(img => {
                setstate({ 
                    data:img,
                    loading:false
                })
            }) 
        }, 3000);
        setstate({
            data:[],
            loading:true
        })
    }, [category])
    return state;
}