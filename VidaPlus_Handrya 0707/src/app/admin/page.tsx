'use client'

import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts'
import {
  UserGroupIcon,
  CalendarIcon,
  HomeIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BuildingOfficeIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total de Pacientes',
    value: '2,543',
    change: '+12%',
    changeType: 'increase',
    icon: UserGroupIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Consultas Hoje',
    value: '156',
    change: '+8%',
    changeType: 'increase',
    icon: CalendarIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Leitos Ocupados',
    value: '85%',
    change: '-2%',
    changeType: 'decrease',
    icon: HomeIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Receita Mensal',
    value: 'R$ 1.2M',
    change: '+15%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
]

const occupancyData = [
  {
    name: 'Leitos Totais',
    value: '120',
    icon: BuildingOfficeIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Leitos Ocupados',
    value: '102',
    icon: UserIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Leitos Disponíveis',
    value: '18',
    icon: CheckCircleIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Tempo Médio de Ocupação',
    value: '4.5 dias',
    icon: ClockIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  }
]

const revenueData = [
  { name: 'Jan', receita: 1200000, despesa: 800000 },
  { name: 'Fev', receita: 1300000, despesa: 850000 },
  { name: 'Mar', receita: 1250000, despesa: 820000 },
  { name: 'Abr', receita: 1400000, despesa: 900000 },
  { name: 'Mai', receita: 1500000, despesa: 950000 },
  { name: 'Jun', receita: 1450000, despesa: 920000 },
]

const recentActivities = [
  {
    id: 1,
    description: 'Nova consulta agendada',
    time: '5 minutos atrás',
    type: 'appointment'
  },
  {
    id: 2,
    description: 'Paciente internado',
    time: '1 hora atrás',
    type: 'hospitalization'
  },
  {
    id: 3,
    description: 'Alta médica registrada',
    time: '2 horas atrás',
    type: 'discharge'
  },
  {
    id: 4,
    description: 'Resultado de exame disponível',
    time: '3 horas atrás',
    type: 'exam'
  }
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Exportar Relatório
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Nova Consulta
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
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

      {/* Cards de Ocupação */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Ocupação de Leitos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occupancyData.map((item) => (
            <div key={item.name} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${item.bgColor}`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-900">{item.value}</h3>
                <p className="text-sm text-gray-500">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gráfico de Receita */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Receita vs Despesa</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="receita" fill="#10B981" name="Receita" />
              <Bar dataKey="despesa" fill="#EF4444" name="Despesa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Atividades Recentes */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Atividades Recentes</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  activity.type === 'appointment' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'hospitalization' ? 'bg-purple-100 text-purple-800' :
                  activity.type === 'discharge' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.type === 'appointment' ? 'Consulta' :
                   activity.type === 'hospitalization' ? 'Internação' :
                   activity.type === 'discharge' ? 'Alta' :
                   'Exame'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 