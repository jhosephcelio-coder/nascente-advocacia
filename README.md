# Nascente Advocacia — Site Institucional

Landing page institucional para o escritório **Nascente Advocacia**, desenvolvida com React + Vite.

---

## Estrutura do projeto

```
nascente-advocacia/
├── public/
│   ├── favicon.svg          ← Favicon SVG (substitua pelo definitivo)
│   └── robots.txt           ← Configuração para crawlers
├── src/
│   ├── components/
│   │   ├── SEO.jsx          ← Metatags dinâmicas (react-helmet-async)
│   │   ├── Logo.jsx         ← Marca do escritório
│   │   ├── Header.jsx       ← Navegação fixa + menu mobile
│   │   ├── Hero.jsx         ← Seção principal / capa
│   │   ├── Sobre.jsx        ← Sobre o escritório
│   │   ├── Atuacao.jsx      ← Áreas de atuação (cards)
│   │   ├── Advogada.jsx     ← Perfil da advogada
│   │   ├── Conteudo.jsx     ← Artigos / conteúdo jurídico
│   │   ├── Contato.jsx      ← Formulário de contato + dados
│   │   ├── Footer.jsx       ← Rodapé com aviso OAB
│   │   └── WhatsAppFab.jsx  ← Botão flutuante WhatsApp
│   ├── constants/
│   │   └── index.js         ← ⭐ TODOS os textos e dados editáveis aqui
│   ├── hooks/
│   │   ├── useReveal.js     ← IntersectionObserver para animações
│   │   └── useScrolled.js   ← Detecta scroll para o header
│   ├── styles/
│   │   └── global.css       ← Reset, variáveis CSS, animações, utilitários
│   ├── App.jsx              ← Componente raiz
│   └── main.jsx             ← Ponto de entrada React
├── index.html               ← HTML base com metatags e Schema.org
├── vite.config.js
├── vercel.json              ← Config de deploy (headers + rewrites)
└── package.json
```

---

## Instalação e desenvolvimento local

### Pré-requisitos
- Node.js 18+ instalado ([nodejs.org](https://nodejs.org))
- npm 9+ (vem junto com o Node)

### Passos

```bash
# 1. Entrar na pasta do projeto
cd nascente-advocacia

# 2. Instalar dependências
npm install

# 3. Rodar em modo desenvolvimento (hot reload)
npm run dev
```

Acesse **http://localhost:5173** no navegador.

```bash
# Gerar build de produção
npm run build

# Pré-visualizar build localmente antes de publicar
npm run preview
```

---

## ⭐ Como personalizar os textos

**Edite apenas o arquivo `src/constants/index.js`.**  
Todos os textos, dados de contato, áreas de atuação, artigos e links estão centralizados ali.

### Dados essenciais para substituir antes de publicar:

| Constante | Campo | O que alterar |
|-----------|-------|---------------|
| `ESCRITORIO` | `oab` | Número real da OAB |
| `CONTATO` | `whatsapp` | Número com DDI (ex: `5531987654321`) |
| `CONTATO` | `whatsapp_display` | Número formatado para exibição |
| `CONTATO` | `email` | E-mail real do escritório |
| `CONTATO` | `endereco` | Endereço completo |
| `SEO` | `url` | Domínio real (ex: `https://nascenteadvocacia.com.br`) |
| `SEO` | `og_image` | URL da imagem para compartilhamento social |
| `ADVOGADA` | todos os campos | Nome, OAB, formação, bio |
| `ARTIGOS` | todos | Títulos, resumos, datas e links reais |

---

## Como adicionar fotos reais

### Foto da advogada
Em `src/components/Advogada.jsx`, substitua o bloco `<svg>` pelo `<img>`:

```jsx
<img
  src="/images/advogada.jpg"
  alt="Foto da Dra. [Nome], advogada responsável"
  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
/>
```

Coloque o arquivo em `public/images/advogada.jpg`.

### Foto do escritório
Em `src/components/Sobre.jsx`, mesma lógica — substitua o `<svg>` placeholder.

### Imagem OG (compartilhamento social)
Crie uma imagem `1200×630px` e coloque em `public/og-image.jpg`.  
Atualize `SEO.og_image` em `src/constants/index.js`.

---

## Integrar o formulário de contato com um serviço real

O formulário atualmente simula o envio. Para receber mensagens de verdade, escolha uma das opções:

### Opção 1 — Formspree (sem backend, gratuito até 50 msg/mês)

1. Crie conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o endpoint (ex: `https://formspree.io/f/xyzabc`)
3. Em `src/components/Contato.jsx`, substitua o `setTimeout` por:

```js
const res = await fetch('https://formspree.io/f/SEU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setSubmitted(true)
else throw new Error('Erro ao enviar')
```

### Opção 2 — EmailJS (envia e-mail direto do frontend)

1. Crie conta em [emailjs.com](https://www.emailjs.com)
2. Instale: `npm install @emailjs/browser`
3. Use `emailjs.send(serviceId, templateId, form, publicKey)` no lugar do `setTimeout`

### Opção 3 — WhatsApp direto (mais simples)
Altere o botão de submit para montar uma mensagem e abrir o WhatsApp:

```js
const msg = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\nÁrea: ${form.area}\nMensagem: ${form.mensagem}`)
window.open(`https://wa.me/${CONTATO.whatsapp}?text=${msg}`, '_blank')
```

---

## Publicar na Vercel

### Opção A — Via Vercel CLI (recomendada para desenvolvedores)

```bash
# Instalar CLI globalmente (uma vez só)
npm install -g vercel

# Dentro da pasta do projeto
vercel login          # faz login na sua conta
vercel                # faz deploy de preview
vercel --prod         # faz deploy de produção
```

### Opção B — Via GitHub (recomendada para uso contínuo)

1. **Crie um repositório no GitHub** e faça push do projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: site Nascente Advocacia"
   git remote add origin https://github.com/SEU_USUARIO/nascente-advocacia.git
   git push -u origin main
   ```

2. **Acesse [vercel.com](https://vercel.com)** → "Add New Project"

3. **Importe o repositório** do GitHub

4. **Configurações de build** (a Vercel detecta automaticamente, mas confirme):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Clique em **Deploy** ✓

A partir daí, cada `git push` para a branch `main` faz deploy automático.

### Domínio personalizado na Vercel

1. No painel do projeto → **Settings → Domains**
2. Adicione `nascenteadvocacia.com.br`
3. Aponte o DNS no seu registrador:
   - Tipo **A** → `76.76.21.21`
   - Tipo **CNAME** `www` → `cname.vercel-dns.com`
4. Aguarde propagação (até 24h)

---

## Checklist antes de publicar

- [ ] Atualizar todos os dados em `src/constants/index.js`
- [ ] Substituir número de WhatsApp real
- [ ] Substituir e-mail real
- [ ] Adicionar foto da advogada em `public/images/advogada.jpg`
- [ ] Adicionar foto do escritório em `public/images/escritorio.jpg`
- [ ] Criar imagem OG `1200×630px` em `public/og-image.jpg`
- [ ] Atualizar favicon definitivo em `public/favicon.svg`
- [ ] Atualizar URL canônica em `SEO.url` com domínio real
- [ ] Atualizar número OAB em `ESCRITORIO.oab`
- [ ] Conectar formulário ao serviço de envio (Formspree, EmailJS ou WhatsApp)
- [ ] Atualizar links dos artigos em `ARTIGOS`
- [ ] Testar em mobile (Chrome DevTools → modo responsivo)
- [ ] Verificar acessibilidade com leitor de tela (NVDA/VoiceOver)
- [ ] Testar formulário com campos inválidos para ver validações

---

## Tecnologias utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 18 | Interface declarativa |
| Vite | 5 | Bundler e dev server |
| react-helmet-async | 2 | SEO e metatags dinâmicas |
| CSS Modules (global) | — | Estilização com variáveis CSS |

Sem dependências de UI externas — o CSS é inteiramente próprio.

---

## Notas de conformidade OAB

Este site foi desenvolvido em conformidade com:
- **Código de Ética e Disciplina da OAB** (Resolução nº 02/2015)
- **Provimento nº 205/2021** do Conselho Federal da OAB
- **LGPD** (Lei nº 13.709/2018) — formulário com aviso de confidencialidade

**Vedações respeitadas:** sem promessas de resultado, sem depoimentos de clientes, sem linguagem mercantilista, sem comparações com outros profissionais, sem divulgação de honorários.

---

*Desenvolvido para Nascente Advocacia · Belo Horizonte, MG*
