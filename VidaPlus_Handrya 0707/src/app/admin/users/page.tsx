'use client'

import { useState } from 'react'

const users = [
  {
    id: 1,
    name: 'Maria Silva',
    email: 'maria.silva@vidaplus.com',
    role: 'Médico',
    status: 'Ativo',
    lastAccess: '2024-03-20 14:30',
  },
  {
    id: 2,
    name: 'João Santos',
    email: 'joao.santos@vidaplus.com',
    role: 'Enfermeiro',
    status: 'Ativo',
    lastAccess: '2024-03-20 15:45',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    email: 'ana.oliveira@vidaplus.com',
    role: 'Administrador',
    status: 'Ativo',
    lastAccess: '2024-03-20 16:20',
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

  const userStats = [
    {
      name: 'Total de Usuários',
      value: '245',
      change: '+15%',
      changeType: 'increase',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      name: 'Usuários Ativos',
      value: '228',
      change: '+12%',
      changeType: 'increase',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      name: 'Novos Usuários',
      value: '32',
      change: '+8%',
      changeType: 'increase',
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      name: 'Usuários Inativos',
      value: '17',
      change: '-3%',
      changeType: 'decrease',
      icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-red-100',
      color: 'text-red-600'
    }
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === '' || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Usuários</h1>
        <button className="btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Novo Usuário
        </button>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat) => (
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                placeholder="Nome ou email"
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
            <label htmlFor="role" className="block text-sm font-medium text-hospital-gray-700">
              Função
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Todas as funções</option>
              <option value="Médico">Médico</option>
              <option value="Enfermeiro">Enfermeiro</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-hospital-gray-200">
          <thead className="bg-hospital-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Função
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Último Acesso
              </th>
              <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-hospital-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-hospital-gray-900">{user.name}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{user.email}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{user.role}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-hospital-gray-500">
                  {user.lastAccess}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Editar
                  </button>
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Permissões
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