'use client'

import { useState } from 'react'

const employees = [
  {
    id: 1,
    name: 'Dr. João Santos',
    role: 'Médico',
    department: 'Cardiologia',
    email: 'joao.santos@vidaplus.com',
    phone: '(11) 98765-4321',
    status: 'Ativo',
    schedule: 'Segunda a Sexta, 8h às 18h',
  },
  {
    id: 2,
    name: 'Ana Oliveira',
    role: 'Enfermeira',
    department: 'Enfermaria',
    email: 'ana.oliveira@vidaplus.com',
    phone: '(11) 98765-4322',
    status: 'Ativo',
    schedule: 'Plantão 12x36',
  },
  {
    id: 3,
    name: 'Carlos Lima',
    role: 'Técnico de Enfermagem',
    department: 'UTI',
    email: 'carlos.lima@vidaplus.com',
    phone: '(11) 98765-4323',
    status: 'Ativo',
    schedule: 'Plantão 12x36',
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

  const employeeStats = [
    {
      name: 'Total de Funcionários',
      value: '156',
      change: '+12%',
      changeType: 'increase',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      bgColor: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      name: 'Médicos',
      value: '45',
      change: '+5%',
      changeType: 'increase',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      bgColor: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      name: 'Enfermeiros',
      value: '68',
      change: '+8%',
      changeType: 'increase',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      bgColor: 'bg-purple-100',
      color: 'text-purple-600'
    },
    {
      name: 'Técnicos',
      value: '43',
      change: '+3%',
      changeType: 'increase',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      bgColor: 'bg-yellow-100',
      color: 'text-yellow-600'
    }
  ]

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === '' || employee.department === selectedDepartment
    const matchesRole = selectedRole === '' || employee.role === selectedRole
    return matchesSearch && matchesDepartment && matchesRole
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Funcionários</h1>
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
            Novo Funcionário
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employeeStats.map((stat) => (
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
            <label htmlFor="department" className="block text-sm font-medium text-hospital-gray-700">
              Departamento
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">Todos os departamentos</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Enfermaria">Enfermaria</option>
              <option value="UTI">UTI</option>
            </select>
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
              <option value="Enfermeira">Enfermeira</option>
              <option value="Técnico de Enfermagem">Técnico de Enfermagem</option>
            </select>
          </div>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-hospital-gray-200">
          <thead className="bg-hospital-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Função
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Departamento
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Contato
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Horário
              </th>
              <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-hospital-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-hospital-gray-200">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-hospital-gray-900">{employee.name}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{employee.role}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{employee.department}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{employee.email}</div>
                  <div className="text-sm text-hospital-gray-500">{employee.phone}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="text-sm text-hospital-gray-900">{employee.schedule}</div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {employee.status}
                  </span>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Editar
                  </button>
                  <button className="text-hospital-blue-600 hover:text-hospital-blue-900 mr-2">
                    Escala
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