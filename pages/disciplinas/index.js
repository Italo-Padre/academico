import Pagina from '@/componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
   axios.get('/api/disciplinas').then(resultado=>{
    setDisciplinas(resultado.data)
   })
  },[])

  return (
    <>
        <Pagina titulo='Disciplinas'>
        <Link href={'/disciplinas/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Duração</th>
          <th>Modalidade</th>
        </tr>
      </thead>
      <tbody> 
        {disciplinas.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/disciplinas/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.curso}</td>
          
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index