import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Acceuil() {

    const [pays, setPays] = useState([])
    const navigate = useNavigate()

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
                    <img src={p.flags.png} alt={p.name.official} onClick={() => navigate('/details/' + p.name.common) }/>
                    <h3>{p.name.official}</h3>
                </div>
                )
            }
        </div>
    )
}
