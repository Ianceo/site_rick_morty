# Rick and Morty — Portal de Personagens

Landing page em português dedicada à série *Rick and Morty*. O site apresenta uma introdução à história, cards de personagens principais e filtros por categoria. As imagens dos personagens são carregadas da [Rick and Morty API](https://rickandmortyapi.com/).

## Tecnologias

- HTML
- CSS
- JavaScript (ES modules)
- [Vite](https://vite.dev/) para desenvolvimento e build
- [Gulp](https://gulpjs.com/) como alternativa para executar tarefas do projeto

## Requisitos

- Node.js e npm instalados

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Build de produção

Gere os arquivos otimizados na pasta `dist/`:

```bash
npm run build
```

Para visualizar localmente o build:

```bash
npm run preview
```

## Tarefas Gulp opcionais

O `gulpfile.js` também oferece estes comandos:

```bash
npx gulp          # inicia o servidor Vite
npx gulp build    # gera o build de produção
npx gulp preview  # visualiza o build
npx gulp watch    # reconstrói ao detectar alterações
npx gulp check    # verifica arquivos essenciais
```

## Estrutura do projeto

```text
├── index.html          # estrutura da página
├── src/
│   ├── css/style.css   # estilos
│   └── js/
│       ├── data.js     # dados dos personagens e capítulos
│       └── main.js     # renderização e interações
├── gulpfile.js         # tarefas opcionais do Gulp
└── vite.config.ts      # configuração do Vite
```

## Créditos

Projeto para fins de estudo, sem fins comerciais. Os dados e as imagens dos personagens são da [Rick and Morty API](https://rickandmortyapi.com/). *Rick and Morty* é propriedade de seus respectivos detentores de direitos.
