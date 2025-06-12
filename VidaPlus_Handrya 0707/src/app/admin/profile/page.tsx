'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  UserCircleIcon,
  BellIcon,
  KeyIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Dr. João Silva',
    role: 'Administrador',
    department: 'Administração',
    email: 'joao.silva@vidaplus.com',
    phone: '(11) 99999-9999',
    bio: 'Administrador do sistema VidaPlus com mais de 10 anos de experiência em gestão hospitalar.',
    location: 'São Paulo, SP',
    notifications: {
      email: true,
      system: true,
      appointments: true,
      updates: true
    },
    security: {
      twoFactor: false,
      lastPasswordChange: '2024-03-01',
      activeSessions: 2
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNotificationChange = (key: string) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-hospital-gray-900">Meu Perfil</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn-primary"
        >
          {isEditing ? 'Salvar Alterações' : 'Editar Perfil'}
        </button>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-20 w-20 rounded-full bg-hospital-primary-100 flex items-center justify-center">
                <UserCircleIcon className="h-12 w-12 text-hospital-primary-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-hospital-gray-900">{profile.name}</h2>
                <p className="text-hospital-gray-600">{profile.role}</p>
                <p className="text-hospital-gray-500">{profile.department}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-hospital-primary-500" />
                <span className="text-hospital-gray-600">{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-hospital-primary-500" />
                <span className="text-hospital-gray-600">{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-hospital-primary-500" />
                <span className="text-hospital-gray-600">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Bio Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-hospital-gray-900 mb-4">Biografia</h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="input-field"
                rows={4}
              />
            ) : (
              <p className="text-hospital-gray-600">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          {/* Notifications Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-hospital-gray-900 mb-4">Notificações</h3>
            <div className="space-y-4">
              {Object.entries(profile.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-hospital-gray-600 capitalize">{key}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                    />
                    <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-primary-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-hospital-gray-900 mb-4">Segurança</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-hospital-gray-900">Autenticação em Duas Etapas</h4>
                  <p className="text-sm text-hospital-gray-500">Adicione uma camada extra de segurança</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={profile.security.twoFactor}
                    onChange={() => setProfile(prev => ({
                      ...prev,
                      security: {
                        ...prev.security,
                        twoFactor: !prev.security.twoFactor
                      }
                    }))}
                  />
                  <div className="w-11 h-6 bg-hospital-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-hospital-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-hospital-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hospital-primary-600"></div>
                </label>
              </div>
              <div className="pt-4 border-t border-hospital-gray-200">
                <p className="text-sm text-hospital-gray-500">
                  Última alteração de senha: {profile.security.lastPasswordChange}
                </p>
                <p className="text-sm text-hospital-gray-500">
                  Sessões ativas: {profile.security.activeSessions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 