import Axios from "axios";
import { useEffect, useState } from "react";

const CatFact = () => {
    const [ catFact, setCatFact ] = useState("")
    const url = "https://catfact.ninja/fact"

    useEffect(() => {   
        Axios.get(url).then((res) => setCatFact(res.data.fact))
    }, [])

    return (
        <div>
            { catFact }
        </div>        
    )
}

export default CatFact;