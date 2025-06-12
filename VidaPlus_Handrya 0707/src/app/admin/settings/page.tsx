'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    system: true,
    lowStock: true,
    appointments: true,
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30',
    passwordExpiration: '90',
  })

  const [hospitalInfo, setHospitalInfo] = useState({
    name: 'Vida Plus Hospital',
    address: 'Av. Principal, 123',
    phone: '(11) 1234-5678',
    email: 'contato@vidaplus.com',
    cnpj: '12.345.678/0001-90',
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Configurações</h1>
        <button className="btn-primary">
          Salvar Alterações
        </button>
      </div>

      {/* Hospital Information */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-hospital-gray-200">
          <h3 className="text-lg font-medium text-hospital-gray-900">Informações do Hospital</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium text-hospital-gray-700">
                Nome do Hospital
              </label>
              <input
                type="text"
                id="hospitalName"
                className="mt-1 block w-full border-hospital-gray-300 rounded-md shadow-sm focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm"
                value={hospitalInfo.name}
                onChange={(e) => setHospitalInfo({ ...hospitalInfo, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-hospital-gray-700">
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                className="mt-1 block w-full border-hospital-gray-300 rounded-md shadow-sm focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm"
                value={hospitalInfo.cnpj}
                onChange={(e) => setHospitalInfo({ ...hospitalInfo, cnpj: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-hospital-gray-700">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full border-hospital-gray-300 rounded-md shadow-sm focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm"
                value={hospitalInfo.address}
                onChange={(e) => setHospitalInfo({ ...hospitalInfo, address: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-hospital-gray-700">
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full border-hospital-gray-300 rounded-md shadow-sm focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm"
                value={hospitalInfo.phone}
                onChange={(e) => setHospitalInfo({ ...hospitalInfo, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hospital-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-hospital-gray-300 rounded-md shadow-sm focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm"
                value={hospitalInfo.email}
                onChange={(e) => setHospitalInfo({ ...hospitalInfo, email: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-hospital-gray-200">
          <h3 className="text-lg font-medium text-hospital-gray-900">Notificações</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-hospital-gray-900">Notificações por Email</h4>
                <p className="text-sm text-hospital-gray-500">Receba atualizações importantes por email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                />
                <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-hospital-gray-900">Notificações do Sistema</h4>
                <p className="text-sm text-hospital-gray-500">Receba alertas e mensagens do sistema</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.system}
                  onChange={(e) => setNotifications({ ...notifications, system: e.target.checked })}
                />
                <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-hospital-gray-900">Alerta de Estoque Baixo</h4>
                <p className="text-sm text-hospital-gray-500">Seja notificado quando o estoque estiver baixo</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.lowStock}
                  onChange={(e) => setNotifications({ ...notifications, lowStock: e.target.checked })}
                />
                <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-hospital-gray-900">Lembretes de Consultas</h4>
                <p className="text-sm text-hospital-gray-500">Receba lembretes de consultas agendadas</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifications.appointments}
                  onChange={(e) => setNotifications({ ...notifications, appointments: e.target.checked })}
                />
                <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-hospital-gray-200">
          <h3 className="text-lg font-medium text-hospital-gray-900">Segurança</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-hospital-gray-900">Autenticação em Duas Etapas</h4>
                <p className="text-sm text-hospital-gray-500">Adicione uma camada extra de segurança à sua conta</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={security.twoFactor}
                  onChange={(e) => setSecurity({ ...security, twoFactor: e.target.checked })}
                />
                <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-blue-600"></div>
              </label>
            </div>
            <div>
              <label htmlFor="sessionTimeout" className="block text-sm font-medium text-hospital-gray-700">
                Tempo Limite da Sessão (minutos)
              </label>
              <select
                id="sessionTimeout"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
                value={security.sessionTimeout}
                onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
              >
                <option value="15">15 minutos</option>
                <option value="30">30 minutos</option>
                <option value="60">1 hora</option>
                <option value="120">2 horas</option>
              </select>
            </div>
            <div>
              <label htmlFor="passwordExpiration" className="block text-sm font-medium text-hospital-gray-700">
                Expiração de Senha (dias)
              </label>
              <select
                id="passwordExpiration"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-hospital-gray-300 focus:outline-none focus:ring-hospital-blue-500 focus:border-hospital-blue-500 sm:text-sm rounded-md"
                value={security.passwordExpiration}
                onChange={(e) => setSecurity({ ...security, passwordExpiration: e.target.value })}
              >
                <option value="30">30 dias</option>
                <option value="60">60 dias</option>
                <option value="90">90 dias</option>
                <option value="180">180 dias</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 