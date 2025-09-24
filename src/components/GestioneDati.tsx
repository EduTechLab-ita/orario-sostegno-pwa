import { Users, Plus, Upload, Download } from 'lucide-react';

export default function GestioneDati() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Gestione Dati</h2>
        <p className="text-gray-600 mt-1">Configura alunni, docenti e impostazioni del sistema</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button className="border-b-2 border-primary-500 py-2 px-1 text-sm font-medium text-primary-600">
            Alunni
          </button>
          <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
            Docenti/AdP
          </button>
          <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
            Configurazioni
          </button>
        </nav>
      </div>

      {/* Actions Bar */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Aggiungi Alunno
          </button>
          <button className="btn-secondary">
            <Upload className="w-4 h-4 mr-2" />
            Importa CSV
          </button>
        </div>
        <button className="btn-secondary">
          <Download className="w-4 h-4 mr-2" />
          Esporta
        </button>
      </div>

      {/* Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome Alunno
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Classe
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ore AdP
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ore Sostegno
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Docenti Assegnati
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Azioni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Placeholder row */}
              <tr className="text-center">
                <td colSpan={6} className="px-6 py-12 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-lg font-medium">Nessun alunno configurato</p>
                  <p className="text-sm">Aggiungi il primo alunno per iniziare</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Importazione Dati</h3>
          <p className="text-gray-600 text-sm mb-4">
            Carica i dati degli alunni e docenti tramite file CSV o inserimento manuale.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Formato CSV supportato</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Validazione automatica dei dati</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Backup automatico prima dell'importazione</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Controlli Qualità</h3>
          <p className="text-gray-600 text-sm mb-4">
            Il sistema verifica automaticamente la coerenza dei dati inseriti.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Verifica ore vs disponibilità docenti</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Controllo assegnazioni multiple</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Validazione classi e orari speciali</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}