# Site — Felipe Fraga · Arquitetura & Interiores

Site estático (HTML/CSS/JS), pronto para hospedar. Landing + portfólio premium.

## Como ver
Abra `index.html` no navegador (duplo clique). Funciona sem servidor.
Observação: por ser local (`file://`), alguns navegadores podem restringir as fontes/WebP —
em hospedagem (http/https) tudo funciona 100%. Para testar local sem restrição, use um
servidor simples: `python -m http.server` dentro da pasta e abra http://localhost:8000.

## Publicar
Suba a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, cPanel).
Mantenha a estrutura: `css/`, `js/`, `assets/`.

## Contatos (já configurados)
- WhatsApp: +55 71 9611-2541 — botão e formulário abrem a conversa já preenchida.
- E-mail: contato@felipefraga.arq.br
- Instagram: @felipefraga.arq
- Confira se o número do WhatsApp disca certo (transcrito do print).

## Recursos premium incluídos
- Fontes reais da marca embutidas: **Caviar Dreams** (títulos) e **Tonnelier** (corpo) — `assets/fonts/`.
- Imagens em **WebP** + carregamento **blur-up** (placeholder desfocado → nítido).
- **Grão filmico** e grade quente sutil para um visual editorial coeso.
- **Projetos com narrativa**: cada destaque abre um painel (conceito, local, escopo) + galeria.
- **Lightbox** com miniaturas, legenda e swipe no celular.
- **Parallax** sutil e **abertura de marca** (respeitam "reduzir movimento").

## Adicionar imagens à galeria
1. Coloque o arquivo em `assets/img/<pasta>/` nas versões `nome.webp` e `nome-sm.webp`
   (e, se quiser fallback, `nome.jpg`).
2. Acrescente uma entrada na lista `ITEMS` no topo de `js/main.js`.
3. (Opcional) gere o placeholder blur correspondente em `assets/lqip.js`.

## Estrutura
- `index.html` — página única
- `css/styles.css` — estilos, paleta e fontes
- `js/main.js` — galeria, lightbox, painel de projeto, parallax, formulário
- `assets/lqip.js` — placeholders blur (gerado)
- `assets/fonts/` · `assets/logo/` · `assets/img/`
