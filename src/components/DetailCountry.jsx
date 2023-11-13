import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailCountry() {

    const { name } = useParams()
    const [pays, setPays] = useState()

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            return res.data
        }
        getData().then(p => setPays(p[0]));
    }, [name])

    return (
        <div >
            {pays && <div className='details'>

                <img src={pays.flags.png} alt="" />
                <div>
                    <h1>Nom du pays : {pays.name.official}</h1>
                    <h4>Nom du pays : {pays.population}</h4>
                    <h4>Continent : {pays.continents[0]}</h4>
                </div>
            </div>
            }

            <Link to='/'>Liste des pays</Link>
        </div>
    )
}
