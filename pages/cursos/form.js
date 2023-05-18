import Pagina from '@/componentes/Pagina'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit} = useForm ()
  function salvar(dados){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }
  return (
    <>
      <Pagina titulo='Curso'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração:</Form.Label>
            <Form.Control {...register('duracao')}  type="text" />
            <Form.Group className="mb-3" controlId="modalidade">
              <Form.Label>Modalidade:</Form.Label>
              <Form.Control {...register('modalidade')}  type="text" />
            </Form.Group>
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            Salvar
          </Button>
        </Form>
      </Pagina>
    </>
  )
}

export default form