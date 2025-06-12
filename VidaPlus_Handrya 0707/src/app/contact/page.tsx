'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter no mínimo 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      // Aqui você implementará a lógica de envio do formulário
      console.log(data)
      setIsSuccess(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-hospital-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Vida Plus Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-extrabold text-hospital-gray-900 mb-4">
              Mensagem Enviada!
            </h2>
            <p className="text-hospital-gray-600 mb-8">
              Obrigado pelo seu contato. Retornaremos em breve.
            </p>
            <Link href="/" className="btn-primary">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hospital-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Vida Plus Logo"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-hospital-gray-900">
          Fale Conosco
        </h2>
        <p className="mt-2 text-center text-sm text-hospital-gray-600">
          Estamos aqui para ajudar
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-hospital-gray-700">
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="input-field"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hospital-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="input-field"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-hospital-gray-700">
                Assunto
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="input-field"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-hospital-gray-700">
                Mensagem
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="input-field"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex justify-center py-2 px-4"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-hospital-gray-200 pt-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-hospital-gray-900">Outras formas de contato</h3>
              <div className="mt-4 space-y-4">
                <p className="text-hospital-gray-600">
                  <strong>Email:</strong> contato@vidaplus.com.br
                </p>
                <p className="text-hospital-gray-600">
                  <strong>Telefone:</strong> (11) 9999-9999
                </p>
                <p className="text-hospital-gray-600">
                  <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 