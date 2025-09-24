import { Settings, Play, AlertTriangle, CheckCircle, Zap, Clock } from 'lucide-react';

export default function GenerazioneOrario() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Generazione Orario</h2>
        <p className="text-gray-600 mt-1">Configura vincoli e genera l'orario automaticamente</p>
      </div>

      {/* Status */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-center space-x-3">
          <Settings className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Sistema Pronto per Generazione</h3>
            <p className="text-blue-700">Configura i vincoli e avvia il processo di generazione automatica</p>
          </div>
        </div>
      </div>

      {/* Vincoli Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Vincoli Fondamentali</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-900">NON Compresenza</p>
                  <p className="text-sm text-red-700">Sostegno + AdP stesso alunno MAI insieme</p>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">AdP solo se alunno presente</p>
                  <p className="text-sm text-orange-700">AdP presente SOLO quando alunno è in classe</p>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-900">Copertura Completa</p>
                  <p className="text-sm text-green-700">Tutte le ore di ogni alunno devono essere coperte</p>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Rispetto Ore Massime</p>
                  <p className="text-sm text-blue-700">Non superare ore disponibili per docente</p>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Casi Speciali</h3>

          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                <p className="font-medium text-yellow-900">Eccezioni Compresenze</p>
              </div>
              <p className="text-sm text-yellow-700 mb-3">
                Permetti massimo 1 compresenza straordinaria per recuperi mensa
              </p>
              <select className="w-full border border-yellow-300 rounded px-3 py-2 bg-white text-sm">
                <option value="0">Nessuna eccezione</option>
                <option value="1">Massimo 1 per alunno</option>
                <option value="2">Massimo 2 per alunno</option>
              </select>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Settings className="w-5 h-5 text-purple-600" />
                <p className="font-medium text-purple-900">Priorità Ottimizzazione</p>
              </div>
              <p className="text-sm text-purple-700 mb-3">
                Criterio principale per la distribuzione delle ore
              </p>
              <select className="w-full border border-purple-300 rounded px-3 py-2 bg-white text-sm">
                <option value="equilibrata">Distribuzione equilibrata</option>
                <option value="continuita">Continuità didattica</option>
                <option value="conflitti">Minimizzazione conflitti</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Generation Controls */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Avvia Generazione</h3>
            <p className="text-gray-600">Il processo può richiedere alcuni minuti per orari complessi</p>
          </div>

          <div className="flex space-x-3">
            <button className="btn-secondary">
              <Settings className="w-4 h-4 mr-2" />
              Anteprima
            </button>
            <button className="btn-primary">
              <Play className="w-4 h-4 mr-2" />
              Genera Orario
            </button>
          </div>
        </div>

        {/* Progress placeholder (hidden by default) */}
        <div className="mt-6 hidden">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700">Generazione in corso...</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary-600 h-2 rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            <p>Passo: Inizializzazione griglia oraria (31 slot)</p>
          </div>
        </div>
      </div>

      {/* Algorithm Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Algoritmo CSP</h3>
          <p className="text-gray-600 text-sm mb-4">
            Utilizza un approccio Constraint Satisfaction Problem per trovare la soluzione ottimale.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <div>📋 Carica dati alunni e assegnazioni</div>
            <div>🎯 Crea griglia oraria vuota (31 slot)</div>
            <div>🔄 Assegna ore rispettando vincoli</div>
            <div>✅ Verifica soluzioni e segnala conflitti</div>
            <div>📊 Genera output tabellare finale</div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
          <p className="text-gray-600 text-sm mb-4">
            Tempi di generazione stimati in base alla complessità.
          </p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">≤ 10 alunni</span>
              <span className="text-sm font-medium text-green-600">&lt; 30 secondi</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">10-25 alunni</span>
              <span className="text-sm font-medium text-yellow-600">1-3 minuti</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">25+ alunni</span>
              <span className="text-sm font-medium text-red-600">3-10 minuti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}