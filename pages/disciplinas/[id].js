import Pagina from '@/componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      axios.get('/api/disciplinas/' + query.id).then(resultado=>{
        const disciplina = resultado.data

        for(let atributo in disciplina){
          setValue(atributo,disciplina[atributo])
        }
       })

    }
  }, [query.id])

  function salvar(dados){
    axios.put('/api/disciplinas/' + dados.id, dados)
    push('/disciplinas')
  }
  return (
    <>
      <Pagina titulo='Disciplinas'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Curso:</Form.Label>
            <Form.Control {...register('curso')}  type="text" />
           
          </Form.Group>
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/disciplinas'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form