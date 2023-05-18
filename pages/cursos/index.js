import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
  })
  return (
    <>
        <Pagina titulo='Cursos'>
        <Link href={'/cursos/form'} className='btn btn-primary mb-2' >Novo</Link>
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
        {cursos.map((item, i) =>(
          <tr>
          <td><AiOutlineDelete/></td>
          <td>{item.nome}</td>
          <td>{item.duracao}</td>
          <td>{item.modalidade}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index