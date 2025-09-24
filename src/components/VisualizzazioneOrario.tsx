import { Download, Edit, AlertTriangle, CheckCircle, Eye, Grid } from 'lucide-react';

export default function VisualizzazioneOrario() {
  // Mock structure for demonstration
  const giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];
  const ore = [1, 2, 3, 4, 5, 'M', 6, 7];
  const docenti = ['FELICI', 'PAGLIARI', 'BONAZZOLI', 'MARTINI'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Visualizzazione Orario</h2>
        <p className="text-gray-600 mt-1">Consulta e modifica l'orario generato con controlli qualità</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded px-3 py-2 text-sm bg-white">
            <option>Vista Docenti</option>
            <option>Vista Classi</option>
            <option>Vista Alunni</option>
            <option>Vista Conflitti</option>
          </select>

          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-green-200 rounded"></div>
            <span>Mensa</span>
            <div className="w-3 h-3 bg-red-200 rounded ml-3"></div>
            <span>Compresenze</span>
            <div className="w-3 h-3 bg-gray-200 rounded ml-3"></div>
            <span>Vuoto</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="btn-secondary">
            <Eye className="w-4 h-4 mr-2" />
            Anteprima Stampa
          </button>
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Esporta PDF
          </button>
          <button className="btn-primary">
            <Edit className="w-4 h-4 mr-2" />
            Modifica
          </button>
        </div>
      </div>

      {/* Quality Check Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-green-50 border-green-200">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">Copertura Completa</p>
              <p className="text-sm text-green-700">Tutte le ore sono assegnate</p>
            </div>
          </div>
        </div>

        <div className="card bg-yellow-50 border-yellow-200">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <div>
              <p className="font-semibold text-yellow-900">1 Compresenza</p>
              <p className="text-sm text-yellow-700">Emma 2B - recupero mensa</p>
            </div>
          </div>
        </div>

        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center space-x-3">
            <Grid className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-blue-900">156 Ore Totali</p>
              <p className="text-sm text-blue-700">Distribuite su 31 slot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="card overflow-x-auto">
        <div className="min-w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">
                  Docente/AdP
                </th>
                {giorni.map(giorno => (
                  <th key={giorno} colSpan={giorno === 'Lunedì' || giorno === 'Mercoledì' ? 8 : 5}
                      className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">
                    {giorno}
                  </th>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-3 py-2"></th>
                {giorni.map(giorno =>
                  ore.slice(0, giorno === 'Lunedì' || giorno === 'Mercoledì' ? 8 : 5).map(ora => (
                    <th key={`${giorno}-${ora}`} className="border border-gray-300 px-2 py-1 text-xs text-gray-600">
                      {ora}
                    </th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {docenti.map((docente, i) => (
                <tr key={docente} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-3 py-2 font-medium text-gray-900">
                    {docente}
                  </td>
                  {giorni.map(giorno =>
                    ore.slice(0, giorno === 'Lunedì' || giorno === 'Mercoledì' ? 8 : 5).map(ora => (
                      <td key={`${docente}-${giorno}-${ora}`}
                          className={`border border-gray-300 px-1 py-2 text-xs text-center cursor-pointer hover:bg-blue-50 transition-colors
                            ${ora === 'M' ? 'bg-green-100' : ''}
                            ${Math.random() > 0.7 ? 'bg-gray-100' : ''}
                          `}>
                        {ora === 'M' && Math.random() > 0.5 ? 'Elisa 1A' :
                         ora !== 'M' && Math.random() > 0.6 ? `${Math.random() > 0.5 ? 'Emma' : 'Marco'} ${Math.floor(Math.random() * 5) + 1}${String.fromCharCode(65 + Math.floor(Math.random() * 3))}` : ''}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Edit Panel */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modifica Manuale</h3>
        <p className="text-gray-600 text-sm mb-4">
          Clicca su una cella per modificarla. Le modifiche verranno validate automaticamente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slot Selezionato</label>
            <div className="bg-gray-50 rounded p-3 text-sm">
              <p><strong>Docente:</strong> FELICI</p>
              <p><strong>Giorno:</strong> Lunedì, Ora 1</p>
              <p><strong>Alunno Attuale:</strong> Emma 2B</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nuova Assegnazione</label>
            <div className="space-y-3">
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Seleziona alunno...</option>
                <option>Emma 2B</option>
                <option>Marco 3A</option>
                <option>Giulia 1C</option>
              </select>
              <div className="flex space-x-2">
                <button className="btn-secondary text-sm">Annulla</button>
                <button className="btn-primary text-sm">Applica</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Opzioni di Esportazione</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 hover:border-primary-500 hover:bg-primary-50 rounded-lg transition-colors group text-left">
            <Download className="w-6 h-6 text-gray-400 group-hover:text-primary-600 mb-2" />
            <p className="font-medium text-gray-900 group-hover:text-primary-900">PDF A4 Orizzontale</p>
            <p className="text-sm text-gray-600">Ottimizzato per stampa</p>
          </button>

          <button className="p-4 border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 rounded-lg transition-colors group text-left">
            <Download className="w-6 h-6 text-gray-400 group-hover:text-green-600 mb-2" />
            <p className="font-medium text-gray-900 group-hover:text-green-900">Excel/CSV</p>
            <p className="text-sm text-gray-600">Con formattazione colori</p>
          </button>

          <button className="p-4 border-2 border-dashed border-gray-300 hover:border-purple-500 hover:bg-purple-50 rounded-lg transition-colors group text-left">
            <Download className="w-6 h-6 text-gray-400 group-hover:text-purple-600 mb-2" />
            <p className="font-medium text-gray-900 group-hover:text-purple-900">Report Analisi</p>
            <p className="text-sm text-gray-600">Con controlli qualità</p>
          </button>
        </div>
      </div>
    </div>
  );
}