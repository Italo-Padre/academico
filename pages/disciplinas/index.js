import Pagina from '@/componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  },[])
  function getAll(){
    axios.get('/api/disciplinas').then(resultado=>{
      setDisciplinas(resultado.data)
     })
  }
  function excluir(id){
    if(confirm('Deseja realmente excluir?'))
    axios.delete('/api/disciplinas/'+id)
    getAll()
    
  }

  return (
    <>
        <Pagina titulo='Disciplinas'>
        <Link href={'/disciplinas/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Curso</th>
        </tr>
      </thead>
      <tbody> 
        {disciplinas.map((item) =>(
          <tr key={item.id}>
          <td >
            <Link href={'/disciplinas/'+item.id}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(item.id)}/>
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