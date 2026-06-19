import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function load() {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch(url)
                if (!response.ok) throw new Error("fetch error")
                    setData(await response.json())
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        load()
    },[url])
    return {data, loading, error}
}

export{
    useFetch
}