import { useEffect } from "react"
import { PokemonCard } from "./PokemonCard"
import { useState } from "react"

export const Pokemon=()=>{
    const [pokemon,setPokemon]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const [inputValue,setInputValue]=useState("")
    let myApikey ='https://pokeapi.co/api/v2/pokemon?limit=500'
    const myprojectBased= async()=>{
       try {
        const res=   await fetch(myApikey)
        const data = await res.json()
        // console.log(data);
        let apiDatavalue = data.results.map(async(curEle)=>{
        //  console.log(curEle.url);
        const res = await fetch(curEle.url)
        const data = await res.json()
        // console.log(data);
        return data  
        })
        // console.log(apiDatavalue);
        const detailesResponses = await Promise.all(apiDatavalue);
        console.log(detailesResponses);
        setPokemon(detailesResponses) 
        setLoading(false)

       } catch (error) {
           console.log(error);
        setLoading(false)
        setError(error)
           
       }
    }
    useEffect(()=>{
          myprojectBased()
    },[])

    const SerachEnginBox = pokemon.filter((curPokemon)=>{
      return  curPokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    if (loading) {
        return <h1 style={{fontSize:'4rem'}}>Loading....</h1>
    }
    if (error) {
        return <h1 style={{fontSize:'4rem'}}>{error.message}</h1>
         
    }
    return(
        <>
          
               <header>
               <h1>Lets Catch Pokemon</h1>
               </header>
               <div className="pokemonSearch">
                <input type="text" value={inputValue} onChange={(evn)=>setInputValue(evn.target.value)} />
               </div>
            <div className="mycard">
                {
                    SerachEnginBox.map((curpoke)=>{
                        return(
                            <PokemonCard key={curpoke.id} pokemonData ={curpoke}/>
                        ) 
                        
                    })
                }
                
            </div>
          
        </>
    )
}