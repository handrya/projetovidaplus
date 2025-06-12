'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Dados dos cards principais
const cards = [
  {
    titulo: 'Receita Total',
    valor: 'R$ 1.250.000,00',
    variacao: '+12.5%',
    cor: 'bg-gradient-to-br from-green-50 to-green-100',
    texto: 'text-green-800',
    icone: '💰',
    descricao: 'Crescimento sustentável'
  },
  {
    titulo: 'Despesas Totais',
    valor: 'R$ 850.000,00',
    variacao: '+8.2%',
    cor: 'bg-gradient-to-br from-red-50 to-red-100',
    texto: 'text-red-800',
    icone: '💸',
    descricao: 'Controle efetivo'
  },
  {
    titulo: 'Lucro Líquido',
    valor: 'R$ 400.000,00',
    variacao: '+15.3%',
    cor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    texto: 'text-blue-800',
    icone: '📈',
    descricao: 'Resultado positivo'
  },
  {
    titulo: 'Pagamentos Pendentes',
    valor: 'R$ 150.000,00',
    variacao: '-5.1%',
    cor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    texto: 'text-yellow-800',
    icone: '⏳',
    descricao: 'Em redução'
  }
]

// Dados para o gráfico de barras
const dadosBarras = [
  { mes: 'Jan', receita: 1250000, despesa: 850000, lucro: 400000 },
  { mes: 'Fev', receita: 1300000, despesa: 880000, lucro: 420000 },
  { mes: 'Mar', receita: 1280000, despesa: 870000, lucro: 410000 },
  { mes: 'Abr', receita: 1320000, despesa: 890000, lucro: 430000 },
  { mes: 'Mai', receita: 1350000, despesa: 900000, lucro: 450000 },
  { mes: 'Jun', receita: 1380000, despesa: 920000, lucro: 460000 }
]

// Dados para o gráfico de linhas
const dadosLinhas = [
  { mes: 'Jan', entrada: 1250000, saida: 850000, pendente: 150000 },
  { mes: 'Fev', entrada: 1300000, saida: 880000, pendente: 145000 },
  { mes: 'Mar', entrada: 1280000, saida: 870000, pendente: 140000 },
  { mes: 'Abr', entrada: 1320000, saida: 890000, pendente: 135000 },
  { mes: 'Mai', entrada: 1350000, saida: 900000, pendente: 130000 },
  { mes: 'Jun', entrada: 1380000, saida: 920000, pendente: 125000 }
]

// Dados para o gráfico de pizza
const dadosPizza = [
  { name: 'Pessoal', value: 3500000, percent: 45 },
  { name: 'Equipamentos', value: 1500000, percent: 19 },
  { name: 'Medicamentos', value: 2000000, percent: 26 },
  { name: 'Infraestrutura', value: 1000000, percent: 13 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

// Dados das transações recentes
const transacoesRecentes = [
  {
    id: 1,
    descricao: 'Pagamento de Salários',
    valor: '-R$ 850.000',
    data: '01/07/2024',
    tipo: 'despesa',
    categoria: 'Pessoal',
    status: 'Concluído'
  },
  {
    id: 2,
    descricao: 'Recebimento de Convênios',
    valor: '+R$ 1.200.000',
    data: '30/06/2024',
    tipo: 'receita',
    categoria: 'Convênios',
    status: 'Concluído'
  },
  {
    id: 3,
    descricao: 'Compra de Equipamentos',
    valor: '-R$ 250.000',
    data: '28/06/2024',
    tipo: 'despesa',
    categoria: 'Equipamentos',
    status: 'Pendente'
  },
  {
    id: 4,
    descricao: 'Recebimento de Consultas',
    valor: '+R$ 450.000',
    data: '27/06/2024',
    tipo: 'receita',
    categoria: 'Consultas',
    status: 'Concluído'
  }
]

// Função para formatar valores em reais
const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

// Função para formatar percentuais
const formatarPercentual = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(valor / 100)
}

export default function FinanceiroPage() {
  const [periodo, setPeriodo] = useState('6meses')
  const [tipo, setTipo] = useState('todos')

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Cabeçalho com filtros */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Financeiro</h1>
          <p className="text-gray-600">Acompanhe o desempenho financeiro do hospital</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            <option value="7dias">Últimos 7 dias</option>
            <option value="30dias">Últimos 30 dias</option>
            <option value="3meses">Últimos 3 meses</option>
            <option value="6meses">Últimos 6 meses</option>
            <option value="12meses">Últimos 12 meses</option>
          </select>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          >
            <option value="todos">Todos</option>
            <option value="receitas">Receitas</option>
            <option value="despesas">Despesas</option>
          </select>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2">
            <span>Nova Transação</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, index) => (
          <div key={index} className={`${card.cor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{card.icone}</span>
                  <h3 className="text-base font-semibold text-gray-700">{card.titulo}</h3>
                </div>
                <p className={`text-3xl font-bold ${card.texto}`}>{card.valor}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${card.variacao.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {card.variacao}
                  </span>
                  <span className="text-sm text-gray-500">vs mês anterior</span>
                </div>
                <p className="text-sm text-gray-600">{card.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de barras - Receitas vs Despesas */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Receitas vs Despesas</h2>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <BarChart data={dadosBarras}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" stroke="#666" />
                <YAxis tickFormatter={formatarMoeda} stroke="#666" />
                <Tooltip 
                  formatter={formatarMoeda}
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar dataKey="receita" fill="#10B981" name="Receitas" radius={[4, 4, 0, 0]} />
                <Bar dataKey="despesa" fill="#EF4444" name="Despesas" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lucro" fill="#3B82F6" name="Lucro" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de linhas - Fluxo de Caixa */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Fluxo de Caixa</h2>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <LineChart data={dadosLinhas}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" stroke="#666" />
                <YAxis tickFormatter={formatarMoeda} stroke="#666" />
                <Tooltip 
                  formatter={formatarMoeda}
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="entrada" 
                  stroke="#10B981" 
                  name="Entradas"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="saida" 
                  stroke="#EF4444" 
                  name="Saídas"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="pendente" 
                  stroke="#F59E0B" 
                  name="Pendente"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de pizza - Distribuição de Despesas */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Distribuição de Despesas</h2>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={dadosPizza}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${formatarPercentual(percent * 100)}`}
                >
                  {dadosPizza.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={formatarMoeda}
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend 
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de linhas - Tendência de Lucro */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Tendência de Lucro</h2>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <LineChart data={dadosBarras}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="mes" stroke="#666" />
                <YAxis tickFormatter={formatarMoeda} stroke="#666" />
                <Tooltip 
                  formatter={formatarMoeda}
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="lucro" 
                  stroke="#3B82F6" 
                  name="Lucro"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Transações Recentes */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Transações Recentes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transacoesRecentes.map((transacao) => (
                <tr key={transacao.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${
                        transacao.tipo === 'receita' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transacao.tipo === 'receita' ? '↑' : '↓'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{transacao.descricao}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transacao.categoria}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transacao.data}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      transacao.tipo === 'receita' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transacao.valor}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      transacao.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transacao.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sobre o Financeiro</h3>
            <p className="text-gray-600 text-sm">
              Sistema de gestão financeira do VidaPlus Hospital, desenvolvido para acompanhar e otimizar os recursos financeiros da instituição.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Política Financeira</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Relatórios Mensais</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contratos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                financeiro@vidaplus.com
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 VidaPlus Hospital. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 