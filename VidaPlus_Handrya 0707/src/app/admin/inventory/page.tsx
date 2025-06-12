'use client'

import { useState } from 'react'

const inventoryItems = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    category: 'Medicamentos',
    quantity: 1500,
    unit: 'comprimidos',
    minQuantity: 500,
    location: 'Estoque A - Prateleira 1',
    lastUpdated: '2024-03-20 10:30',
  },
  {
    id: 2,
    name: 'Seringa 10ml',
    category: 'Material Hospitalar',
    quantity: 800,
    unit: 'unidades',
    minQuantity: 200,
    location: 'Estoque B - Prateleira 3',
    lastUpdated: '2024-03-20 11:15',
  },
  {
    id: 3,
    name: 'Luvas Cirúrgicas M',
    category: 'EPI',
    quantity: 2500,
    unit: 'pares',
    minQuantity: 1000,
    location: 'Estoque C - Prateleira 2',
    lastUpdated: '2024-03-20 09:45',
  },
]

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showLowStock, setShowLowStock] = useState(false)

  const inventoryStats = [
    {
      name: 'Total de Itens',
      value: '1.245',
      change: '+8%',
      changeType: 'increase',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      name: 'Itens em Baixa',
      value: '23',
      change: '-5%',
      changeType: 'decrease',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      bgColor: 'bg-red-100',
      color: 'text-red-600'
    },
    {
      name: 'Categorias',
      value: '12',
      change: '+2',
      changeType: 'increase',
      icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      name: 'Valor Total',
      value: 'R$ 2.5M',
      change: '+12%',
      changeType: 'increase',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    }
  ]

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory
    const matchesStock = !showLowStock || item.quantity <= item.minQuantity
    return matchesSearch && matchesCategory && matchesStock
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Estoque</h1>
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
            Novo Item
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <svg className={`w-6 h-6 ${stat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-hospital-gray-700">
              Buscar
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-hospital-blue-500 focus:border-hospital-blue-500 block w-full pl-4 pr-12 sm:text-sm border-hospital-gray-300 rounded-md"
                placeholder="Nome do item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-hospital-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-hospital-gray-700">
              Categoria
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas as categorias</option>
              <option value="Medicamentos">Medicamentos</option>
              <option value="Material Hospitalar">Material Hospitalar</option>
              <option value="EPI">EPI</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-hospital-blue-600"
                checked={showLowStock}
                onChange={(e) => setShowLowStock(e.target.checked)}
              />
              <span className="ml-2 text-sm text-hospital-gray-700">Mostrar apenas estoque baixo</span>
            </label>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-hospital-gray-200">
          <thead className="bg-hospital-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Categoria
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Quantidade
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Mínimo
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Localização
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Última Atualização
              </th>
              <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-hospital-gray-200">
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-hospital-gray-900">{item.name}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{item.category}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">
                    {item.quantity} {item.unit}
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">
                    {item.minQuantity} {item.unit}
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{item.location}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-hospital-gray-500">
                  {item.lastUpdated}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Editar
                  </button>
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Movimentar
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