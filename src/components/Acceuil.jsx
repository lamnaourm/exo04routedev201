import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Acceuil() {

    const [pays, setPays] = useState([])

    useEffect(() => {

        const getData = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            return res.data
        }
        getData().then(p => setPays(p));

    }, [])
    return (
        <div className='list'>
            {pays.length === 0 ? <h1>Liste des pays vide</h1>
                : pays.map(p => <div className='pays'>
                    <img src={p.flags.png} alt={p.name.official} />
                    <h3>{p.name.official}</h3>
                </div>
                )
            }
        </div>
    )
}
