import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAplication } from '../../hooks'

export const Create = () => {
  const { startSavingEncuesta } = useAplication()

    const [encuesta, setEncuesta] = useState({
        descripcion: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setEncuesta({
          ...encuesta,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        //si existe en la url
        await startSavingEncuesta({...encuesta})
      }



  return (
    <form onSubmit={handleSubmit}>
      <label>encuesta:</label>

      <label>
        Description:
        <textarea 
        name="descripcion" 
        placeholder="descripcion" 
        onChange={handleChange}                                                                                             
        value={encuesta.descripcion}
        >
        </textarea>
      </label>

      <button>Save</button>
      
    </form>
  )
}
