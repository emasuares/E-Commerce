import { useEffect,useState } from "react"


export const useAsync=(functionasync,dependencies=[])=>{
    const [data, setData] = useState([])
    const [error,setError]=useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        functionasync().then(response=>{
            setData(response)
        }).catch(error=>{
            setError(error)
        }).finally(()=>{
            setIsLoading(false)
        })

    },dependencies)
    return{
        data,
        isLoading,
        error,
    }

}   