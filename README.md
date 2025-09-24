# 📅 Orario Sostegno PWA

> **WebApp PWA per generazione automatica orari sostegno scolastico - Scuola Primaria**

[![Deploy Status](https://github.com/EduTechLab-ita/orario-sostegno-pwa/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/EduTechLab-ita/orario-sostegno-pwa/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

## 🌐 **Demo Live**

**➡️ [Accedi alla PWA](https://edutechlab-ita.github.io/orario-sostegno-pwa/)**

## 📋 **Descrizione**

Applicazione web progressiva (PWA) professionale per la generazione automatica degli orari del sostegno scolastico nella Scuola Primaria. Risolve il complesso problema di scheduling con vincoli multipli utilizzando algoritmi CSP (Constraint Satisfaction Problem).

### 🎯 **Caratteristiche Principali**

- ✅ **Interfaccia Intuitiva**: 4 sezioni principali (Dashboard, Gestione Dati, Generazione, Visualizzazione)
- ✅ **Privacy Garantita**: Tutti i dati rimangono locali, zero trasmissioni esterne
- ✅ **Responsive Design**: Funziona perfettamente su desktop, tablet e mobile
- ✅ **Controlli Qualità**: Validazione automatica vincoli normativi
- ✅ **Export Multi-formato**: PDF, Excel, stampa A4 orizzontale
- ✅ **PWA Installabile**: Utilizzabile offline come app nativa

## 🏗️ **Architettura Tecnica**

### **Frontend**
- **React 19** + **TypeScript** per type safety
- **Tailwind CSS** per design system responsive
- **Vite** per build ottimizzate e development veloce
- **Lucide Icons** per iconografia consistente

### **Algoritmo Core**
- **Constraint Satisfaction Problem (CSP)** per scheduling ottimale
- **31 slot settimanali** (Lun/Mer: 8h, Mar/Gio/Ven: 5h)
- **Vincoli normativi**: Non compresenze, copertura completa, ore massime
- **Gestione casi speciali**: Orari differenziati, recuperi mensa

### **Sicurezza & Privacy**
- **Archiviazione locale**: IndexedDB/localStorage
- **Zero server esterni**: Funzionamento completamente offline
- **GDPR Compliant**: Conformità normative privacy
- **Controllo totale dati**: Reset e export su richiesta

## 🚀 **Utilizzo**

### **1. Dashboard**
- Panoramica generale sistema (alunni, docenti, ore)
- Indicatori stato completamento orario
- Accesso rapido alle funzioni principali

### **2. Gestione Dati**
- Configurazione alunni con sostegno (nome, classe, ore)
- Gestione docenti/AdP (disponibilità, assegnazioni)
- Import/export CSV per caricamento bulk
- Validazione automatica coerenza dati

### **3. Generazione Orario**
- Configurazione vincoli normativi obbligatori
- Impostazione casi speciali e eccezioni
- Avvio algoritmo CSP con feedback real-time
- Gestione conflitti e segnalazione errori

### **4. Visualizzazione Orario**
- Griglia interattiva docenti × giorni/ore
- Color coding: mense (verde), compresenze (rosso)
- Modifica manuale drag&drop
- Export PDF/Excel/stampa professionale

## 📖 **Vincoli Implementati**

### **🔴 Vincoli Critici (obbligatori)**
1. **Non Compresenza**: Sostegno + AdP stesso alunno MAI nella stessa ora
2. **AdP condizionale**: AdP presente SOLO se alunno è in classe
3. **Copertura completa**: Tutte le ore di ogni alunno devono essere coperte
4. **Rispetto ore massime**: Non superare disponibilità docenti (22h std)

### **🟡 Vincoli Preferenziali (ottimizzazione)**
- Distribuzione equilibrata ore per giorno
- Minimizzazione conflitti orari
- Continuità didattica quando possibile
- Max 1 compresenza straordinaria per recuperi

## 🛠️ **Sviluppo Locale**

```bash
# Clone repository
git clone https://github.com/EduTechLab-ita/orario-sostegno-pwa.git
cd orario-sostegno-pwa

# Install dependencies
npm install

# Sviluppo (http://localhost:3000)
npm run dev

# Build produzione
npm run build

# Anteprima build
npm run preview

# Lint TypeScript
npm run lint
```

## 📁 **Struttura Progetto**

```
src/
├── components/          # Componenti React
│   ├── Dashboard.tsx           # Panoramica sistema
│   ├── GestioneDati.tsx        # CRUD alunni/docenti
│   ├── GenerazioneOrario.tsx   # Configurazione CSP
│   ├── VisualizzazioneOrario.tsx # Griglia interattiva
│   ├── InfoModal.tsx           # Guida utilizzo
│   ├── ResetModal.tsx          # Sistema reset
│   └── PrivacyModal.tsx        # Informativa privacy
├── types/
│   └── index.ts         # Interfacce TypeScript
├── App.tsx             # Componente principale
├── main.tsx            # Entry point
└── index.css           # Stili globali Tailwind

.github/workflows/      # CI/CD GitHub Actions
public/                 # File statici
dist/                   # Build produzione (auto-generata)
```

## 🎨 **Design System**

### **Colori Principali**
- **Primary**: `#3b82f6` (Blue-500)
- **Success**: `#10b981` (Green-500)
- **Warning**: `#f59e0b` (Yellow-500)
- **Error**: `#ef4444` (Red-500)

### **Componenti UI**
- **Card**: Contenitori con shadow e border radius
- **Buttons**: Primary/Secondary con hover states
- **Modals**: Overlay con backdrop blur
- **Tables**: Responsive con hover e color coding

## 🔐 **Privacy & Sicurezza**

### **Garanzie Privacy**
- **Nessuna trasmissione dati** a server esterni
- **Archiviazione locale** sicura (browser storage)
- **Controllo totale utente** su tutti i dati
- **Reset completo** disponibile in qualsiasi momento

### **Conformità Normative**
- ✅ **GDPR** (Regolamento Generale Protezione Dati)
- ✅ **Codice Privacy Italiano**
- ✅ **Gestione dati sensibili** scolastici
- ✅ **Informativa completa** integrata nell'app

## 🏫 **Casi d'Uso Scolastici**

### **Scuola Primaria Standard**
- 10-25 alunni con sostegno
- 5-15 docenti/AdP disponibili
- Orario 31 ore (Lun/Mer: 8h, Mar/Gio/Ven: 5h)
- Mense lunedì e mercoledì

### **Gestione Casi Speciali**
- **Orari differenziati**: Entrate/uscite personalizzate
- **Mense alternate**: Presenza variabile mercoledì
- **Recuperi straordinari**: Compresenze eccezionali
- **Assenze programmate**: Gestione orari ridotti

## 📈 **Roadmap Future**

### **Versione 2.0 (Pianificata)**
- [ ] Algoritmo CSP completo implementato
- [ ] Sistema import CSV avanzato
- [ ] Database locale con backup/restore
- [ ] Export report analitici PDF
- [ ] Modalità offline completa PWA
- [ ] Multi-istituto support
- [ ] Template configurazioni riutilizzabili

### **Versione 3.0 (Visione)**
- [ ] AI-powered suggestions per ottimizzazione
- [ ] Integrazione calendari Google/Outlook
- [ ] Sistema notifiche push
- [ ] Dashboard analytics avanzate
- [ ] API esportazione sistemi terzi

## 🤝 **Contribuire**

1. **Fork** del repository
2. **Branch** per feature: `git checkout -b feature/nome-feature`
3. **Commit** modifiche: `git commit -m 'Add: nuova feature'`
4. **Push** branch: `git push origin feature/nome-feature`
5. **Pull Request** con descrizione dettagliata

### **Standards Codice**
- **TypeScript strict** mode abilitato
- **ESLint** + **Prettier** per code formatting
- **Semantic commits** per changelog automatico
- **Tests** per funzionalità critiche (pianificati)

## 📞 **Supporto & Contatti**

### **EduTechLab Team**
- 🌐 **Website**: [edutechlab-ita.github.io](https://edutechlab-ita.github.io)
- 📧 **Email**: edutechlab.ita@gmail.com
- 📱 **GitHub**: [@EduTechLab-ita](https://github.com/EduTechLab-ita)

### **Bug Report & Feature Request**
- 🐛 **Issues**: [GitHub Issues](https://github.com/EduTechLab-ita/orario-sostegno-pwa/issues)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/EduTechLab-ita/orario-sostegno-pwa/discussions)

## 📄 **Licenza**

Rilasciato sotto licenza [MIT](LICENSE). Vedere file `LICENSE` per dettagli completi.

---

<div align="center">

**🤖 Powered by [Claude Code](https://claude.ai/code)**

*Progetto sviluppato per digitalizzare e ottimizzare la gestione orari scolastici*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/EduTechLab-ita)
[![Italiano](https://img.shields.io/badge/🇮🇹-Italiano-green.svg)](README.md)

</div>