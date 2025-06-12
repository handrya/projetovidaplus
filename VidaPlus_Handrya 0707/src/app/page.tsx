'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="VidaPlus Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/sobre" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                Serviços
              </Link>
              <Link href="/especialidades" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                Especialidades
              </Link>
              <Link href="/contato" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                Contato
              </Link>
              <Link 
                href="/login" 
                className="bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-[#EA580C] transition-colors"
              >
                Área do Paciente
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#EC4899] focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/sobre" className="block px-3 py-2 text-gray-600 hover:text-[#EC4899] transition-colors">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="block px-3 py-2 text-gray-600 hover:text-[#EC4899] transition-colors">
                Serviços
              </Link>
              <Link href="/especialidades" className="block px-3 py-2 text-gray-600 hover:text-[#EC4899] transition-colors">
                Especialidades
              </Link>
              <Link href="/contato" className="block px-3 py-2 text-gray-600 hover:text-[#EC4899] transition-colors">
                Contato
              </Link>
              <Link 
                href="/login" 
                className="block px-3 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] transition-colors"
              >
                Área do Paciente
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#EC4899] to-[#F97316] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cuidando da sua saúde com excelência
              </h1>
              <p className="text-xl mb-8 text-white/90">
                O VidaPlus Hospital oferece atendimento de qualidade com profissionais altamente qualificados e tecnologia de ponta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/agendamento" 
                  className="bg-white text-[#F97316] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center"
                >
                  Agende sua Consulta
                </Link>
                <Link 
                  href="/servicos" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hospital.jpg"
                alt="Hospital VidaPlus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Por que escolher o VidaPlus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Equipe Qualificada',
                description: 'Profissionais altamente capacitados e em constante atualização.',
                icon: '👨‍⚕️'
              },
              {
                title: 'Tecnologia Avançada',
                description: 'Equipamentos modernos para diagnósticos precisos e tratamentos eficazes.',
                icon: '🏥'
              },
              {
                title: 'Atendimento Humanizado',
                description: 'Cuidado integral ao paciente com respeito e empatia.',
                icon: '❤️'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 min-h-[200px] flex flex-col">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Sobre o VidaPlus</h3>
              <p className="text-gray-600 text-sm">
                Hospital de referência em saúde, oferecendo atendimento de qualidade e tecnologia de ponta para cuidar de você e sua família.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sobre" className="text-gray-600 hover:text-[#EC4899] transition-colors">Sobre Nós</Link></li>
                <li><Link href="/servicos" className="text-gray-600 hover:text-[#EC4899] transition-colors">Serviços</Link></li>
                <li><Link href="/especialidades" className="text-gray-600 hover:text-[#EC4899] transition-colors">Especialidades</Link></li>
                <li><Link href="/contato" className="text-gray-600 hover:text-[#EC4899] transition-colors">Contato</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Av. Principal, 1000 - Centro
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contato@vidaplus.com
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (41) 3333-3333
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Horário de Atendimento</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Segunda a Sexta: 7h às 19h</li>
                <li>Sábado: 7h às 13h</li>
                <li>Domingo: Emergência 24h</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2024 VidaPlus Hospital. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#EC4899] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 