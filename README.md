
# 🚀 Guide d'installation du Portfolio - Aboubacar Diarra


## 🚀 Démarrage rapide

### 1. Cloner le repository

```bash
git clone https://github.com/diarra030/newportfolio.git
```

### 2. Accéder au dossier du projet

```bash
cd newportfolio
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
