import { X, Calendar, Users, Settings, Eye, Upload, Download } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Guida all'Utilizzo - Orario Sostegno PWA</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Introduzione */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Benvenuto nella WebApp Orario Sostegno</h3>
            <p className="text-blue-800">
              Questa applicazione ti aiuta a generare automaticamente gli orari del sostegno scolastico
              rispettando tutti i vincoli normativi e organizzativi della tua scuola.
            </p>
          </div>

          {/* Sezioni */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">1. Dashboard</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Panoramica generale del sistema</li>
                  <li>• Statistiche alunni e docenti</li>
                  <li>• Stato completamento orario</li>
                  <li>• Accesso rapido alle funzioni</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">2. Gestione Dati</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inserimento alunni con sostegno</li>
                  <li>• Configurazione docenti/AdP</li>
                  <li>• Import/export file CSV</li>
                  <li>• Validazione automatica dati</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">3. Genera Orario</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Configurazione vincoli normativi</li>
                  <li>• Algoritmo CSP intelligente</li>
                  <li>• Generazione automatica ottimizzata</li>
                  <li>• Gestione casi speciali</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">4. Visualizza Orario</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Griglia orario interattiva</li>
                  <li>• Controlli qualità automatici</li>
                  <li>• Modifica manuale drag&drop</li>
                  <li>• Export PDF/Excel/stampa</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workflow consigliato */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Workflow Consigliato</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                <p className="text-sm font-medium">Configura Dati</p>
                <p className="text-xs text-gray-600">Inserisci alunni e docenti</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                <p className="text-sm font-medium">Imposta Vincoli</p>
                <p className="text-xs text-gray-600">Configura regole orario</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                <p className="text-sm font-medium">Genera Orario</p>
                <p className="text-xs text-gray-600">Avvia algoritmo automatico</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                <p className="text-sm font-medium">Verifica & Esporta</p>
                <p className="text-xs text-gray-600">Controlla e stampa</p>
              </div>
            </div>
          </div>

          {/* Funzioni avanzate */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">⚡ Funzioni Avanzate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Upload className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Import CSV</p>
                  <p className="text-sm text-gray-600">Carica dati da file esterni con validazione automatica</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Download className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Export Multi-formato</p>
                  <p className="text-sm text-gray-600">PDF, Excel, stampa A4 con formattazione professionale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note importanti */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">📌 Note Importanti</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• L'applicazione funziona completamente nel browser, nessun dato viene inviato a server esterni</li>
              <li>• I dati vengono salvati localmente nel tuo dispositivo per la privacy</li>
              <li>• Puoi usare il pulsante "Reset" per pulire tutti i dati e ricominciare</li>
              <li>• Per supporto tecnico consulta la documentazione su GitHub</li>
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              EduTechLab - Orario Sostegno PWA v1.0.0
            </div>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Ho Capito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}