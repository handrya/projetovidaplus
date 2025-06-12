'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const demoSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  company: z.string().min(2, 'Nome da empresa deve ter no mínimo 2 caracteres'),
  role: z.string().min(2, 'Cargo deve ter no mínimo 2 caracteres'),
  message: z.string().optional(),
})

type DemoFormData = z.infer<typeof demoSchema>

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema)
  })

  const onSubmit = async (data: DemoFormData) => {
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
              Solicitação Enviada!
            </h2>
            <p className="text-hospital-gray-600 mb-8">
              Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
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
          Solicite uma Demo
        </h2>
        <p className="mt-2 text-center text-sm text-hospital-gray-600">
          Conheça todas as funcionalidades do nosso sistema
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
                Email corporativo
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
              <label htmlFor="phone" className="block text-sm font-medium text-hospital-gray-700">
                Telefone
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="input-field"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-hospital-gray-700">
                Nome da empresa
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  type="text"
                  {...register('company')}
                  className="input-field"
                />
                {errors.company && (
                  <p className="mt-2 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-hospital-gray-700">
                Cargo
              </label>
              <div className="mt-1">
                <input
                  id="role"
                  type="text"
                  {...register('role')}
                  className="input-field"
                />
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-hospital-gray-700">
                Mensagem (opcional)
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
                {isLoading ? 'Enviando...' : 'Solicitar Demo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 