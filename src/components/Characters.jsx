import { useFetch } from "../hooks/useFetch";

function Characters() {
    const {data, loading, error} = useFetch(`https://rickandmortyapi.com/api/character`)

    if (loading)return (<p>Loading...</p>)
    if (error)return (<p>Error:{error} </p>)

    return(
        <ul>
            {data?.results.map((character)=> 
            {return <li key ={character.id}>{character.name}</li>}
            )}
        </ul>
    )
}

export {
    Characters
}