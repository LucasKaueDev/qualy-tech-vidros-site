# Qualy Tech Vidros e Esquadrias

Site institucional estatico da Qualy Tech Vidros e Esquadrias, desenvolvido em HTML5, CSS3 e JavaScript Vanilla para apresentar servicos, diferenciais, galeria, depoimentos e canais de contato.

## Tecnologias

- HTML5 semantico
- CSS3 com custom properties
- JavaScript Vanilla
- Font Awesome via CDN
- Deploy recomendado na Vercel

## Estrutura de pastas

```text
.
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── .gitignore
└── README.md
```

## Arquitetura

O projeto e uma landing page estatica. O `index.html` concentra a estrutura semantica, `css/style.css` define identidade visual, responsividade e animacoes, e `js/script.js` controla menu mobile, galeria, depoimentos, contadores animados e links de WhatsApp.

## Como executar localmente

Abra o arquivo `index.html` diretamente no navegador ou use um servidor estatico simples:

```bash
npx serve .
```

## Como publicar na Vercel

1. Suba o projeto para um repositorio Git.
2. Importe o repositorio na Vercel.
3. Use as configuracoes padrao de projeto estatico.
4. Aponte o dominio final para `qualytechvidros.com.br`.

## Como fazer deploy

Ao alterar arquivos, revise o site localmente, confira responsividade e publique pela Vercel. Para projetos estaticos, nao e necessario configurar build command.

## Como alterar imagens

Substitua os arquivos em `assets/images/` mantendo os nomes atuais ou atualize os caminhos em `index.html` e `js/script.js`. Prefira imagens comprimidas em WebP, PNG otimizado ou JPG progressivo.

## Como alterar textos

Edite os textos diretamente no `index.html`. Depoimentos e itens da galeria ficam no array correspondente em `js/script.js`.

## Como alterar cores

Atualize as variaveis CSS no bloco `:root` em `css/style.css`, especialmente `--navy`, `--blue`, `--blue-2`, `--sky`, `--text` e `--muted`.

## Como alterar WhatsApp

Atualize a constante `WHATSAPP_URL` em `js/script.js`. O script aplica esse link a todos os anchors que usam `wa.me`.

## Como alterar redes sociais

Inclua os links desejados no footer ou em nova area de contato, sempre com `aria-label` descritivo e `rel="noopener noreferrer"` para links com `target="_blank"`.

## Como adicionar servicos

Adicione um novo `article.service-card` em `index.html`, usando imagem otimizada, `alt` descritivo e link para `#contato`.

## Como adicionar depoimentos

Inclua um novo objeto no array `testimonials` em `js/script.js` com `name`, `city`, `photo` e `text`.

## Como adicionar imagens na galeria

Inclua um novo objeto no array `galleryImages` em `js/script.js` com `category`, `title` e `src`. Categorias novas aparecem automaticamente nos filtros.

## Boas praticas

- Manter apenas uma fonte de verdade para numeros, links e imagens dinamicas.
- Otimizar imagens antes de enviar para producao.
- Verificar contraste e foco de teclado em toda mudanca visual.
- Testar em mobile real ou em emuladores de 320px a 430px.
- Evitar bibliotecas extras para preservar performance.

## Checklist antes do deploy

- Validar HTML, CSS e JavaScript.
- Conferir se todas as imagens carregam.
- Testar menu mobile, galeria, depoimentos e contadores.
- Verificar links de WhatsApp, telefone e email.
- Conferir meta description, canonical, Open Graph e JSON-LD.
- Testar responsividade em 320px, 390px, 768px, 1024px, 1440px e 1920px.

## Checklist apos deploy

- Rodar Lighthouse em mobile e desktop.
- Conferir indexacao e preview social.
- Validar dominio, HTTPS e canonical.
- Testar formulario ou canais de contato em producao.
- Confirmar que imagens e assets estao sendo servidos corretamente.

## Licenca

Todos os direitos reservados a Qualy Tech Vidros e Esquadrias.

## Autor

LK Solucoes.
