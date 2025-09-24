import { useState } from 'react';
import { Calendar, Users, Settings, BarChart3, Download, Upload, CheckCircle } from 'lucide-react';
import Dashboard from './components/Dashboard';
import GestioneDati from './components/GestioneDati';
import GenerazioneOrario from './components/GenerazioneOrario';
import VisualizzazioneOrario from './components/VisualizzazioneOrario';

type ActiveTab = 'dashboard' | 'dati' | 'generazione' | 'orario';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, description: 'Panoramica generale' },
    { id: 'dati', label: 'Gestione Dati', icon: Users, description: 'Alunni, Docenti, Configurazioni' },
    { id: 'generazione', label: 'Genera Orario', icon: Settings, description: 'Vincoli e Generazione' },
    { id: 'orario', label: 'Visualizza Orario', icon: Calendar, description: 'Griglia e Controlli' }
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'dati':
        return <GestioneDati />;
      case 'generazione':
        return <GenerazioneOrario />;
      case 'orario':
        return <VisualizzazioneOrario />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Orario Sostegno PWA</h1>
                <p className="text-sm text-gray-500">Generazione automatica orari sostegno scolastico</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Upload className="w-5 h-5" />
                <span className="text-sm font-medium">Importa</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">Esporta</span>
              </button>
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Sistema Pronto</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as ActiveTab)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              © 2025 EduTechLab - Orario Sostegno PWA v1.0.0
            </div>
            <div className="flex space-x-4">
              <a href="https://edutechlab-ita.github.io" className="hover:text-primary-600 transition-colors">
                EduTechLab
              </a>
              <a href="https://github.com/edutechlab-ita/orario-sostegno-pwa" className="hover:text-primary-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;