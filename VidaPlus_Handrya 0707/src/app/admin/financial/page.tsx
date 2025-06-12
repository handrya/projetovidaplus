'use client'

import { useState } from 'react'

const financialData = {
  summary: {
    totalRevenue: 1250000,
    totalExpenses: 850000,
    netIncome: 400000,
    pendingPayments: 150000,
  },
  transactions: [
    {
      id: 1,
      type: 'receita',
      description: 'Consulta Cardiologia',
      amount: 250.00,
      date: '2024-03-20',
      status: 'Pago',
      category: 'Consultas',
    },
    {
      id: 2,
      type: 'despesa',
      description: 'Compra de Medicamentos',
      amount: 15000.00,
      date: '2024-03-19',
      status: 'Pendente',
      category: 'Estoque',
    },
    {
      id: 3,
      type: 'receita',
      description: 'Internação - Enfermaria',
      amount: 1200.00,
      date: '2024-03-18',
      status: 'Pago',
      category: 'Internações',
    },
  ],
}

export default function FinancialPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedType, setSelectedType] = useState('all')

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Gestão Financeira</h1>
        <div className="flex space-x-3">
          <button className="btn-secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Exportar Relatório
          </button>
          <button className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nova Transação
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-hospital-gray-700">
              Período
            </label>
            <select
              id="period"
              name="period"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="week">Última Semana</option>
              <option value="month">Último Mês</option>
              <option value="quarter">Último Trimestre</option>
              <option value="year">Último Ano</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-hospital-gray-700">
              Tipo
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="receita">Receitas</option>
              <option value="despesa">Despesas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium text-hospital-gray-500 truncate">Receita Total</div>
                <div className="mt-1 text-3xl font-semibold text-green-600">
                  {formatCurrency(financialData.summary.totalRevenue)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium text-hospital-gray-500 truncate">Despesas Totais</div>
                <div className="mt-1 text-3xl font-semibold text-red-600">
                  {formatCurrency(financialData.summary.totalExpenses)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium text-hospital-gray-500 truncate">Lucro Líquido</div>
                <div className="mt-1 text-3xl font-semibold text-hospital-blue-600">
                  {formatCurrency(financialData.summary.netIncome)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium text-hospital-gray-500 truncate">Pagamentos Pendentes</div>
                <div className="mt-1 text-3xl font-semibold text-yellow-600">
                  {formatCurrency(financialData.summary.pendingPayments)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-hospital-gray-900 mb-4">Receitas vs Despesas</h3>
          <div className="h-64 bg-hospital-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-hospital-gray-500">Gráfico de receitas vs despesas será implementado aqui</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-hospital-gray-900 mb-4">Fluxo de Caixa</h3>
          <div className="h-64 bg-hospital-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-hospital-gray-500">Gráfico de fluxo de caixa será implementado aqui</p>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-hospital-gray-200">
          <h3 className="text-lg font-medium text-hospital-gray-900">Últimas Transações</h3>
        </div>
        <table className="min-w-full divide-y divide-hospital-gray-200">
          <thead className="bg-hospital-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Valor
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-hospital-gray-200">
            {financialData.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-hospital-gray-900">{transaction.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{transaction.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${
                    transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatCurrency(transaction.amount)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{transaction.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === 'Pago'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-4">
                    Editar
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 