
# 🚀 Guide d'installation du Portfolio - Aboubacar Diarra

## ⚡ Méthode rapide (recommandée)

### 1. Copier le script `setup.js` dans votre dossier `newportfolio`

### 2. Ouvrir un terminal dans `newportfolio` et exécuter :

```bash
node setup.js
```

### 3. Installer les dépendances :

```bash
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

### 4. Lancer le projet :

```bash
npm run dev
```

### 5. Ouvrir http://localhost:5173 dans votre navigateur 🎉

---

## 📋 Méthode manuelle (si le script ne fonctionne pas)

### Étape 1 : Initialiser le projet

```bash
cd newportfolio
npm create vite@latest . -- --template react-ts
```

### Étape 2 : Installer les dépendances

```bash
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

### Étape 3 : Créer les dossiers

**Windows (PowerShell) :**
```powershell
mkdir src\components
```

**Mac/Linux :**
```bash
mkdir -p src/components
```

### Étape 4 : Copier les fichiers

Copiez les fichiers suivants depuis ce projet vers votre dossier `newportfolio` :

| Fichier source | Destination |
|---|---|
| `index.html` | `newportfolio/index.html` |
| `vite.config.js` | `newportfolio/vite.config.js` |
| `src/index.css` | `newportfolio/src/index.css` |
| `src/main.tsx` | `newportfolio/src/main.tsx` |
| `src/App.tsx` | `newportfolio/src/App.tsx` |
| `src/components/Navbar.tsx` | `newportfolio/src/components/Navbar.tsx` |
| `src/components/Hero.tsx` | `newportfolio/src/components/Hero.tsx` |
| `src/components/About.tsx` | `newportfolio/src/components/About.tsx` |
| `src/components/Skills.tsx` | `newportfolio/src/components/Skills.tsx` |
| `src/components/Experience.tsx` | `newportfolio/src/components/Experience.tsx` |
| `src/components/Projects.tsx` | `newportfolio/src/components/Projects.tsx` |
| `src/components/Education.tsx` | `newportfolio/src/components/Education.tsx` |
| `src/components/Contact.tsx` | `newportfolio/src/components/Contact.tsx` |
| `src/components/Footer.tsx` | `newportfolio/src/components/Footer.tsx` |

### Étape 5 : Modifier `vite.config.js`

Remplacez le contenu par :

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Étape 6 : Lancer

```bash
npm run dev
```

---

## 📁 Structure finale

```
newportfolio/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## ❓ Problèmes courants

### "Cannot find module './components/Navbar'"
→ Les fichiers composants n'existent pas dans `src/components/`. Copiez-les depuis ce projet.

### "Module not found: framer-motion"
→ Exécutez `npm install framer-motion lucide-react`

### Les styles ne s'appliquent pas
→ Vérifiez que `vite.config.js` contient le plugin `tailwindcss()`

### Erreur TypeScript
→ Vérifiez que `tsconfig.json` existe (généré par `npm create vite@latest`)

---

## 🌐 Déploiement

### Vercel (gratuit)
```bash
npm install -g vercel
vercel
```

### Netlify (gratuit)
```bash
npm run build
# Puis glissez-déposez le dossier "dist" sur netlify.com/drop
```


+++ README.md (修改后)
# 🚀 Portfolio - Aboubacar Diarra

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Aboubacar%20Diarra-indigo)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

**Portfolio professionnel responsive et dynamique pour Aboubacar Diarra - Développeur Web & Mobile**

[Demo](#-demo) • [Installation](#-installation) • [Technologies](#-technologies) • [Structure](#-structure) • [Déploiement](#-déploiement)

</div>

---

## 📖 À propos

Ce portfolio présente mon parcours professionnel, mes compétences et mes projets en tant que développeur Web et Mobile spécialisé dans la transformation numérique.

### ✨ Fonctionnalités

- 🎨 Design moderne et élégant avec thème sombre
- 📱 Entièrement responsive (mobile, tablette, desktop)
- ⚡ Animations fluides avec Framer Motion
- 🌊 Effets de glassmorphism et dégradés
- 🎯 Navigation fluide avec ancres
- 📧 Formulaire de contact fonctionnel
- 🚀 Performance optimisée
- 🎭 Loader d'entrée animé

---

## 🖼️ Demo

### Sections du portfolio

1. **Hero** - Présentation avec animations de particules
2. **À propos** - Profil professionnel et statistiques
3. **Compétences** - 6 catégories de compétences techniques
4. **Expérience** - Parcours professionnel chez DCTC
5. **Projets** - 4 projets majeurs réalisés
6. **Formation** - Diplômes et langues
7. **Contact** - Formulaire et coordonnées

---

## 🛠️ Technologies

### Frontend
- **React 18** - Framework JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour un code plus sûr
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS 4** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes et légères

### Outils
- **Node.js** - Environnement d'exécution JavaScript
- **npm** - Gestionnaire de paquets

---

## 📦 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
- **npm** (installé automatiquement avec Node.js)
- **Git** - [Télécharger Git](https://git-scm.com/)

Vérifiez votre installation :

```bash
node --version  # Doit afficher v18.x.x ou supérieur
npm --version   # Doit afficher 9.x.x ou supérieur
git --version   # Doit afficher git version 2.x.x
```

---

## 🚀 Démarrage rapide

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/portfolio-aboubacar-diarra.git
```

### 2. Accéder au dossier du projet

```bash
cd portfolio-aboubacar-diarra
```

### 3. Installer les dépendances

```bash
npm install
```

Cette commande installe toutes les dépendances nécessaires :
- react
- react-dom
- framer-motion
- lucide-react
- tailwindcss
- @tailwindcss/vite

### 4. Lancer le serveur de développement

```bash
npm run dev
```

### 5. Ouvrir dans le navigateur

Ouvrez votre navigateur et accédez à :

```
http://localhost:5173
```

🎉 **Félicitations ! Votre portfolio est maintenant en ligne !**

---

## 📁 Structure du projet

```
portfolio-aboubacar-diarra/
│
├── public/                 # Fichiers statiques (images, etc.)
│
├── src/
│   ├── components/         # Composants React
│   │   ├── Navbar.tsx      # Barre de navigation
│   │   ├── Hero.tsx        # Section d'accueil
│   │   ├── About.tsx       # À propos
│   │   ├── Skills.tsx      # Compétences
│   │   ├── Experience.tsx  # Expérience professionnelle
│   │   ├── Projects.tsx    # Projets réalisés
│   │   ├── Education.tsx   # Formation et langues
│   │   ├── Contact.tsx     # Formulaire de contact
│   │   └── Footer.tsx      # Pied de page
│   │
│   ├── App.tsx             # Composant principal
│   ├── main.tsx            # Point d'entrée React
│   └── index.css           # Styles globaux et Tailwind
│
├── index.html              # Template HTML
├── package.json            # Dépendances et scripts
├── tsconfig.json           # Configuration TypeScript
├── vite.config.js          # Configuration Vite + Tailwind
└── README.md               # Ce fichier
```

---

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `src/index.css` dans la section `@theme` :

```css
@theme {
  --color-primary: #6366f1;      /* Couleur principale (indigo) */
  --color-accent: #06b6d4;       /* Couleur secondaire (cyan) */
  --color-dark: #0f172a;         /* Fond sombre */
  /* ... autres couleurs */
}
```

### Modifier le contenu

Chaque section est dans un composant séparé dans `src/components/` :

- **Informations personnelles** → `Hero.tsx` et `About.tsx`
- **Compétences** → `Skills.tsx`
- **Expérience** → `Experience.tsx`
- **Projets** → `Projects.tsx`
- **Formation** → `Education.tsx`
- **Contact** → `Contact.tsx`

### Ajouter une image de profil

1. Placez votre image dans `public/images/`
2. Référencez-la dans `About.tsx` :

```tsx
<img src="/images/votre-photo.jpg" alt="Photo de profil" className="..." />
```

---

## 📦 Scripts disponibles

```bash
# Développement (avec hot reload)
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview

# Vérification TypeScript
npm run typecheck
```

---

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé - Gratuit)

1. Installez Vercel CLI :

```bash
npm install -g vercel
```

2. Déployez :

```bash
vercel
```

3. Suivez les instructions

### Option 2 : Netlify (Gratuit)

1. Build le projet :

```bash
npm run build
```

2. Glissez-déposez le dossier `dist/` sur [Netlify Drop](https://app.netlify.com/drop)

Ou avec Netlify CLI :

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3 : GitHub Pages

1. Modifiez `vite.config.js` :

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/nom-de-votre-repo/',
})
```

2. Build et déployez :

```bash
npm run build
# Uploadez le contenu de dist/ sur GitHub Pages
```

### Option 4 : Hébergement classique

1. Build le projet :

```bash
npm run build
```

2. Uploadez le contenu du dossier `dist/` sur votre serveur web

---

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine si nécessaire :

```env
VITE_API_URL=https://api.example.com
```

### Configuration TypeScript

Le fichier `tsconfig.json` est déjà configuré pour React + TypeScript.

---

## 📱 Responsive

Le portfolio est optimisé pour :

- 📱 **Mobile** (< 640px)
- 📱 **Tablette** (640px - 1024px)
- 💻 **Desktop** (> 1024px)

---

## 🐛 Résolution de problèmes

### Erreur : "Cannot find module './components/...'"

**Solution :** Vérifiez que tous les fichiers composants existent dans `src/components/`

```bash
ls src/components/
```

### Erreur : "Module not found: framer-motion"

**Solution :** Réinstallez les dépendances

```bash
npm install
```

### Les styles Tailwind ne s'appliquent pas

**Solution :** Vérifiez que `vite.config.js` contient :

```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Le port 5173 est déjà utilisé

**Solution :** Vite utilisera automatiquement le port suivant (5174, 5175, etc.)

Ou spécifiez un port :

```bash
npm run dev -- --port 3000
```

### Erreur TypeScript

**Solution :** Vérifiez que tous les fichiers ont l'extension `.tsx` et que les types sont corrects

```bash
npm run typecheck
```

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👤 Auteur

**Aboubacar Diarra**

- 📧 Email : diarraaboubacar030@gmail.com
- 📱 Téléphone : 05 46 36 33 35 / 01 01 91 05 15
- 📍 Localisation : Abidjan, Côte d'Ivoire
- 💼 LinkedIn : [Votre profil LinkedIn](https://linkedin.com/in/votre-profil)
- 🐙 GitHub : [Votre profil GitHub](https://github.com/votre-username)

---

## 🙏 Remerciements

- [React](https://reactjs.org/) - Framework JavaScript
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icônes

---

## 📞 Support

Si vous avez des questions ou des problèmes :

1. Consultez la section [Résolution de problèmes](#-résolution-de-problèmes)
2. Ouvrez une [issue](https://github.com/votre-username/portfolio-aboubacar-diarra/issues)
3. Contactez-moi par email : diarraaboubacar030@gmail.com

---

## 🚀 Améliorations futures

- [ ] Ajouter un blog
- [ ] Mode clair/sombre
- [ ] Animations plus avancées
- [ ] Intégration CMS pour les projets
- [ ] Multilingue (FR/EN)
- [ ] Section témoignages
- [ ] Analytics

---

<div align="center">

**Fait avec ❤️ en Côte d'Ivoire**

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !

</div>
