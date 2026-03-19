# 🌟 Portfólio Pessoal - Carlos Alberto

Um portfólio web moderno, minimalista e totalmente responsivo desenvolvido em **HTML5, CSS3 e JavaScript vanilla**.

---

## 📋 Descrição

Portfólio pessoal apresentando projetos, habilidades e informações de contato de Carlos Alberto, estudante de **Sistemas para Internet**. O site possui um design **dark mode** nativo com elementos interativos e efeitos visuais modernos.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessibilidade
- **CSS3** - Estilização responsiva com variáveis CSS, Flexbox e Grid
- **JavaScript (Vanilla)** - Interatividade e efeitos dinamicamente renderizados com Canvas

### Bibliotecas Externas
- **Font Awesome 6** - Ícones para habilidades e links de contato
- **Canvas API** - Renderização de efeitos de partículas neon

### Recursos de Design
- **Dark Mode Nativo** - Paleta de cores otimizada para tema escuro (#121212, #1e1e1e)
- **Responsividade Total** - Adaptação automática para dispositivos móveis, tablets e desktops
- **Smooth Scroll** - Navegação suave entre seções

---

## ✨ Recursos Principais

### 1. **Seção Hero (Apresentação)**
- Foto de perfil circular com borda neon azul
- Efeito de digitação (typewriter) no nome e cargo
- **Efeito de fumaça neon azul** ao mover o mouse
- Gradiente de fundo moderno

### 2. **Seção Sobre Mim**
- Texto descritivo sobre o desenvolvedor
- Informações sobre o curso de Sistemas para Internet
- Design limpo e centrado

### 3. **Seção Habilidades**
- Grid responsivo com 3 cards (HTML, CSS, JavaScript)
- Ícones do Font Awesome
- Efeito de elevação (lift) ao passar o mouse
- Descrição de cada tecnologia

### 4. **Seção Projetos**
- Grid dinâmico de projetos com imagens
- Links clicáveis que abrem em nova aba
- Hover com sombra neon
- Placeholder SVG para projetos futuros

### 5. **Rodapé de Contato**
- Links para LinkedIn, GitHub e E-mail
- Ícones Font Awesome
- Design responsivo e acessível

### 6. **Navegação (Navbar)**
- Menu fixo no topo com links internos para todas as seções
- **Indicador dinâmico animado** que segue o link ativo
- **Auto-detecção de seção** ao fazer scroll (link ativo muda automaticamente)
- Efeito underline animado nos links ao passar o mouse
- **Efeito glow neon** nos links hover e active
- Smooth scroll integrado com transições suaves
- Design responsivo com ajustes para dispositivos móveis

---

## 📁 Estrutura de Arquivos

```
Portfolio/
│
├── index.html           # Estrutura HTML do portfólio
├── styles.css           # Estilização completa (dark mode + responsivo)
├── script.js            # JavaScript para interatividade e efeitos
├── profile.svg          # Ícone de perfil placeholder
├── placeholder.svg      # Imagem placeholder para projetos
│
├── foto perfil.png      # Foto de perfil do usuário (deve ser adicionada)
├── SiteInterativo-ModoEscuro.png  # Imagem do Projeto 1
├── calculadora.png      # Imagem do Projeto 2
│
└── README.md            # Este arquivo
```

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Fundo Escuro | `#121212` | Fundo principal |
| Fundo Secundário | `#1e1e1e` | Cards e seções |
| Texto Claro | `#ffffff` | Texto principal |
| Destaque Neon | `#00d4ff` | Botões, links, efeitos |

---

## 🚀 Como Usar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação ou servidor necessário

### Passos
1. Clone ou baixe a pasta do projeto
2. Abra `index.html` em seu navegador (duplo clique ou arraste para o navegador)
3. Navegue pelas seções usando o menu superior
4. Mova o mouse sobre a seção Hero para ver o efeito de fumaça neon

### Personalização
- Substitua `foto perfil.png` pela sua foto de perfil real
- Atualize os links dos projetos em `index.html` (atributo `href`)
- Modifique as cores em `styles.css` alterando as variáveis CSS (`:root`)
- Customize o texto em `index.html` com suas próprias informações
- Ajuste a velocidade do typewriter nos parâmetros da função `typeWriter()`
- Configure a sensibilidade do efeito de fumaça alterando a quantidade de partículas em `initNeonSmokeEffect()`

---

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints para:
- **Desktop** (1200px+) - Layout grid com 3 colunas
- **Tablet** (768px - 1199px) - Layout ajustado
- **Mobile** (<768px) - Navegação em coluna única, imagens otimizadas

---

## ⚡ Efeitos JavaScript Implementados

### 1. **Animação do Navbar**
```javascript
- Indicador dinâmico que segue o mouse e o link ativo
- Posicionamento smooth com cubic-bezier (0.34, 1.56, 0.64, 1)
- Auto-detecção de seção ao fazer scroll (offset de -200px)
- Classe "active" aplicada ao link correspondente da seção visível
- Efeitos de glow neon ao hover e quando ativo
- Redimensionamento automático ao mudar tamanho da janela
- Transições de 0.3-0.4 segundos para fluidez
```

### 2. Typewriter (Máquina de Escrever)
```javascript
- Nome "Carlos Alberto" aparece letra por letra
- Cargo "Desenvolvedor Front-end" começa após 2 segundos
- Velocidade: 100ms por caractere
```

### 2. Smooth Scroll
```javascript
- Navegação suave ao clicar nos links do menu
- Scroll automático para a seção correspondente
- Transição suave integrada na function initNavbarAnimation()
```

### 3. Efeito de Fumaça Neon
```javascript
- Partículas azul neon (#00d4ff) seguem o cursor
- Ativo apenas na seção Hero
- Efeito de fade-out gradual (decay)
- Shadow blur para brilho neon realista
- Renderizado via Canvas API
```

---

## 🎨 Animações CSS Principais

### Navbar Links
```css
/* Underline animado ao hover */
.navbar a::before {
    width: 0;
    transition: width 0.3s ease;
}

.navbar a:hover::before {
    width: 100%;
    background: linear-gradient(90deg, var(--accent-color), rgba(0, 212, 255, 0.5));
}
```

### Indicador Dinâmico
```css
/* Segue suavemente o link ativo */
.indicator {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
}
```

### Efeito Glow nos Links
```css
.navbar a:hover {
    color: var(--accent-color);
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}
```

---

## 📊 Recursos CSS Avançados

- **Variáveis CSS** - Fácil customização de cores e valores
- **Flexbox & Grid** - Layouts responsivos e modernos
- **Transitions & Transforms** - Animações suaves
- **Box-shadow** - Efeitos de profundidade e glow
- **Media Queries** - Adaptação para diferentes telas
- **Gradient** - Fundos degradê modernos
- **Pseudo-elementos (::before)** - Efeitos visuais sem DOM extra
- **Backdrop-filter** - Blur effects (compatível com navegadores modernos)

---

## � Versão do Projeto

**Versão Atual:** 2.0.0

### Changelog

#### v2.0.0 (19/03/2026)
- ✨ **Navbar completamente redesenhado** com animações suaves
- ✨ Indicador dinâmico que segue os links ativos
- ✨ Auto-detecção de seção ao fazer scroll
- ✨ Efeito underline animado nos links
- ✨ Efeito glow neon ao hover e quando ativo
- 🐛 Melhorias na responsividade do navbar

#### v1.0.0 (Data anterior)
- 🎉 Lançamento inicial do portfólio
- Seções hero, about, skills, projects, contact
- Efeito de fumaça neon
- Smooth scroll integrado

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Este é um projeto em constante evolução.

---

## ⚙️ Requisitos Técnicos

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Performance
- ⚡ Carregamento rápido (sem dependências externas pesadas)
- ⚡ Animações suaves (60fps) com requestAnimationFrame
- ⚡ Otimização de CSS com variáveis para performance
- ⚡ Zero dependências de frameworks (apenas Font Awesome para ícones)

### Acessibilidade
- ♿ Estrutura semântica HTML5
- ♿ Contraste adequado de cores
- ♿ Navegação por teclado funcional
- ♿ Links com ARIA labels apropriados

---

## 🔗 Links do Projeto

- **LinkedIn**: [carlos-alberto-br](https://www.linkedin.com/in/carlos-alberto-br/)
- **GitHub**: [carlos-albertoo](https://github.com/carlos-albertoo)
- **E-mail**: carliinhos1994@gmail.com

---

## 🎯 Funcionalidades Implementadas

- ✅ **Navbar com indicador dinâmico** - Animação suave que segue os links
- ✅ **Auto-detecção de seção** - Link ativo muda automaticamente ao fazer scroll
- ✅ **Efeito typewriter** - Nome e cargo aparecem letra por letra
- ✅ **Efeito de fumaça neon** - Partículas seguem o cursor na seção hero
- ✅ **Smooth scroll** - Navegação suave entre seções
- ✅ **Design responsivo** - Adaptação completa para mobile, tablet e desktop
- ✅ **Dark mode nativo** - Paleta otimizada com tema neon azul
- ✅ **Canvas API** - Renderização de efeitos em tempo real

---

## 🎯 Funcionalidades Futuras

- [ ] Adicionar modo light (alternância de tema)
- [ ] Integração com API de projetos do GitHub
- [ ] Seção de blog ou artigos
- [ ] Formulário de contato funcional
- [ ] Mais animações de scroll trigger
- [ ] Dark/Light mode com localStorage

---

## 📝 Notas

- O portfólio utiliza **apenas HTML, CSS e JavaScript vanilla** - sem frameworks ou bibliotecas externas (exceto Font Awesome para ícones)
- O efeito de fumaça neon é renderizado em tempo real com Canvas API
- Todas as imagens de projeto devem ser colocadas na mesma pasta que `index.html`
- Os links do menu navegam usando scroll suave (sem recarregar a página)
- O navbar possui animações smooth com transições de 0.3-0.4 segundos
- O indicador do navbar usa cubic-bezier para uma animação mais natural e fluida
- A detecção de seção ao fazer scroll ocorre 200px antes da seção entrar na viewport

---

## 👨‍💻 Desenvolvedor

**Carlos Alberto**
- Estudante de Sistemas para Internet
- Apaixonado por desenvolvimento web
- Criando soluções inovadoras com HTML, CSS e JavaScript

---

## 📄 Licença

Este projeto é de código aberto e livre para uso pessoal e educacional.

---

**Última atualização**: 16 de Março de 2026