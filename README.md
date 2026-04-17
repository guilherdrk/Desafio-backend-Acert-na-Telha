
## Tecnologias utilizadas

### Backend
- NestJS
- GraphQL
- Prisma
- MongoDB Atlas
- TypeScript

---

## Operações GraphQL

### Mutation `createIncident`

```graphql
mutation {
  createIncident(
    data: {
      description: "Máquina apresentou superaquecimento no motor"
      machineName: "Torno CNC 01"
      severity: ALTA
      typeOfOccurrence: FALHA_MECANICA
      status: ABERTO
    }
  ) {
    id
    description
    machineName
    severity
    createdAt
    status
    typeOfOccurrence
  }
}


query {
  lastIncidents(limit: 5) {
    id
    machineName
    severity
    status
    typeOfOccurrence
    description
    createdAt
  }
}

```

## Rodar o projeto Localmente

---

### Clonar o repositório 

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

## BackEnd

### Instalar dependências 

```bash
cd backend
npm install
```

### Configurar variáveis de ambiente

Crie um arquivo .env na pasta backend com:

```env

DATABASE_URL="string de conexao mongodb"

```
### Gerar o client do Prisma

```bash

npx prisma generate

```

### Sincronizar schema com o banco

```bash

npx prisma db push

```

### Rodar o backend

```bash

npm run start:dev

```

O backend ficará disponível em:

```bash

http://localhost:3000/graphql

```

---

Deploy
Produção: https://desafio-backend-acert-na-telha-production.up.railway.app/graphql
