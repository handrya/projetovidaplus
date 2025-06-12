# VidaPlus - Sistema de Gestão Hospitalar

Sistema moderno de gestão hospitalar e serviços de saúde desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 📋 Visão Geral

O VidaPlus é uma solução completa para gestão hospitalar, oferecendo uma interface moderna e intuitiva para gerenciamento de pacientes, médicos, enfermeiros e administradores.

## 🚀 Funcionalidades Principais

### 👥 Gestão de Usuários
- Autenticação e controle de acesso
- Perfis personalizados para pacientes, médicos, enfermeiros e administradores
- Gerenciamento de permissões

### 🏥 Gestão Hospitalar
- Agendamento de consultas
- Prontuários eletrônicos
- Emissão de receitas médicas
- Controle de estoque
- Dashboard com métricas importantes

### 📊 Relatórios e Analytics
- Relatórios gerenciais
- Métricas de atendimento
- Indicadores de desempenho

## 🛠️ Requisitos Técnicos

- Node.js 18.x ou superior
- npm ou yarn
- PostgreSQL 14 ou superior
- Redis (para cache e sessões)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/vida-plus.git
cd vida-plus
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Execute as migrações do banco de dados:
```bash
npm run prisma:migrate
# ou
yarn prisma:migrate
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

6. Acesse http://localhost:3000

## 🏗️ Arquitetura

O projeto segue uma arquitetura moderna baseada em:

- Next.js 14 (App Router)
- TypeScript para tipagem estática
- Tailwind CSS para estilização
- Prisma como ORM
- NextAuth.js para autenticação
- Socket.io para comunicação em tempo real
- Chart.js para visualizações

## 📁 Estrutura do Projeto

```
src/
  ├── app/              # Páginas e layouts
  ├── components/       # Componentes reutilizáveis
  ├── lib/             # Utilitários e configurações
  ├── styles/          # Estilos globais
  ├── types/           # Definições de tipos
  └── prisma/          # Schema e migrações do banco de dados
```

## 📊 Diagramas

O projeto inclui diagramas detalhados na pasta `docs/diagrams`:
- Diagrama de Casos de Uso
- Diagrama de Classes
- Diagrama de Sequência
- Diagrama de Componentes

## 🧪 Testes

Para executar os testes:

```bash
npm run test
# ou
yarn test
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
