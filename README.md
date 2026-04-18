# 🧮 Calculadora HTTP "Raiz" com Node.js

Este projeto foi desenvolvido como parte de um laboratório prático de Backend. O objetivo principal é construir uma API de calculadora utilizando Node.js puro, sem o uso de frameworks como Express, para consolidar conhecimentos fundamentais sobre o protocolo HTTP e módulos nativos.

Originalmente planejado para funcionar via terminal, esta versão foi evoluída para incluir uma interface web (HTML/CSS) que se comunica com o servidor através da Fetch API.

---

## 🚀 Funcionalidades

O servidor processa as seguintes operações matemáticas:

- **Soma:** Adição de dois números.
- **Subtração:** Diferença entre dois números.
- **Multiplicação:** Produto de dois números.
- **Divisão:** Quociente (com validação para evitar divisão por zero).
- **Potência:** Cálculo de base elevada ao expoente (operador `**`).
- **Resto:** Resto da divisão (módulo `%`).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para o backend.
- **Módulo HTTP:** Para criação do servidor e gerenciamento de requisições/respostas.
- **Módulo URL:** Para realizar o parse das query strings enviadas pelo navegador.
- **HTML5 & CSS3:** Para a construção da interface visual.
- **JavaScript (ES6+):** Lógica de cálculo e manipulação do DOM.

---

## 📂 Estrutura do Projeto

```plaintext
calculadora-http/
├── calculator.js   # Módulo com as funções matemáticas
├── server.js       # Servidor HTTP e lógica de rotas
├── index.html      # Interface visual do usuário
```

---

## 🔧 Como Executar

### Pré-requisitos

- Node.js instalado (versão LTS recomendada).

### Passo a Passo

1. Clone o repositório ou baixe os arquivos:

```bash
mkdir calculadora-http
cd calculadora-http
```

2. Inicie o servidor:

```bash
node server.js
```

4. Abra o index.html no navegador:

---

## 🧠 Aprendizados Adquiridos

Neste laboratório, foram explorados conceitos essenciais de desenvolvimento backend:

- **Comunicação Cliente-Servidor:** Entendimento de como requisições HTTP funcionam.
- **Gerenciamento de Rotas Manuais:** Controle de fluxo usando `switch/case` sem auxílio de bibliotecas externas.
- **Query Params:** Extração de dados enviados via URL.
- **CORS:** Configuração de cabeçalhos para permitir acesso do navegador ao servidor.
- **Servidor de Arquivos Estáticos:** Como ler e enviar arquivos `.html` via Node.js puro.
