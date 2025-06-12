'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

// Credenciais padrão para teste
const DEFAULT_CREDENTIALS = {
  email: 'admin@vidaplus.com',
  password: 'admin123'
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError('')
    
    try {
      // Simulação de autenticação
      if (data.email === DEFAULT_CREDENTIALS.email && data.password === DEFAULT_CREDENTIALS.password) {
        // Login bem sucedido
        router.push('/admin')
      } else {
        setError('Email ou senha incorretos')
      }
    } catch (error) {
      setError('Ocorreu um erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
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
          Entre na sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-hospital-gray-600">
          Use as credenciais de teste:
          <br />
          Email: admin@vidaplus.com
          <br />
          Senha: admin123
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="admin@vidaplus.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-hospital-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="input-field"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-hospital-blue-500 focus:ring-hospital-blue-500 border-hospital-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-hospital-gray-900">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-hospital-blue-500 hover:text-hospital-blue-600">
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex justify-center py-2 px-4"
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-hospital-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-hospital-gray-500">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-hospital-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-hospital-gray-500 hover:bg-hospital-gray-50"
              >
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-hospital-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-hospital-gray-500 hover:bg-hospital-gray-50"
              >
                Microsoft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 