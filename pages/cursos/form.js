import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import cursoValidator from '@/validators/cursoValidator'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm ()
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
            <Form.Control isInvalid={errors.nome} {...register('nome',cursoValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração:</Form.Label>
            <Form.Control isInvalid={errors.duracao} {...register('duracao',cursoValidator.duracao)}  type="text" />
              {
              errors.duracao &&
              <small>{errors.duracao.message}</small>
            }
            <Form.Group className="mb-3" controlId="modalidade">
              <Form.Label>Modalidade:</Form.Label>
              <Form.Control isInvalid={errors.modalidade} {...register('modalidade',cursoValidator.modalidade)}  type="text" />
                {
              errors.modalidade &&
              <small>{errors.modalidade.message}</small>
            }
            </Form.Group>
          </Form.Group>
          <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/cursos'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form