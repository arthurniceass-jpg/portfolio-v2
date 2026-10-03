# Portfólio — Arthur Niceas (v2)

Landing em **React + TypeScript + Tailwind 3 + Framer Motion** (Vite), adaptada do template "Jack — 3D Creator":
mesma estrutura visual (título gigante, marquee que anda com o scroll, texto que se revela letra a letra, seções
brancas/escuras com cantos arredondados, cards de projeto que empilham), com o conteúdo do portfólio atual em PT-BR.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # checa os tipos (tsc) e gera ./dist
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, links, serviços, experiência, contato, projetos | `src/content.ts` |
| Stack do marquee (segunda fileira) | `src/data/tech.ts` (ícones do pacote `devicon`) |
| Imagens | `public/img/` — `work/` prints dos projetos, `3d/` ícones do Sobre, `arthur.*` foto do hero |

### Adicionar um projeto
Em `src/content.ts`, acrescente um item em `projects.items` com `number`, `category`, `name`, `description`, `stack`,
`href` (opcional — sem ele o botão "Ver projeto" não aparece) e as 3 `images` (esquerda-cima, esquerda-baixo, direita).
Os cards empilham sozinhos; a escala de cada um é calculada pela quantidade de projetos.

## Notas
- **Super · Doc Robô** está sem `href`: o serviço no Railway respondia `Application not found` em 2026-10-03.
  Quando voltar ao ar, basta preencher `href` em `content.ts`.
- Os prints do Doc Robô vêm de uma cópia isolada do app com **clientes fictícios** (nenhum dado real, nomes de empresas removidos).
- `og:image` em `index.html` é relativo; após o deploy, troque por uma URL absoluta para a prévia em redes sociais.
- Os 4 ícones 3D do Sobre são do template original; troque em `public/img/3d/` se preferir ativos próprios.
