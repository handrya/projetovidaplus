import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vida Plus - Sistema de Gestão Hospitalar',
  description: 'Sistema de Gestão Hospitalar e de Serviços de Saúde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-hospital-primary-50 to-hospital-secondary-50">
          {children}
        </main>
      </body>
    </html>
  )
} 