import { X, Shield, Lock, Eye, Server, HardDrive } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Informativa Privacy e Sicurezza Dati</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Garanzia principale */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-green-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">🔒 Garanzia di Privacy Totale</h3>
                <p className="text-green-800">
                  <strong>Nessun dato sensibile viene mai trasmesso, memorizzato o elaborato su server esterni.</strong>
                  Tutti i dati rimangono esclusivamente sul tuo dispositivo.
                </p>
              </div>
            </div>
          </div>

          {/* Come funziona */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🛡️ Come Proteggiamo i Tuoi Dati</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <HardDrive className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900">Archiviazione Locale</h4>
                  <p className="text-sm text-blue-800">
                    Tutti i dati (nomi alunni, docenti, orari) vengono salvati esclusivamente nel browser
                    del tuo dispositivo utilizzando tecnologie sicure come IndexedDB e localStorage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <Server className="w-6 h-6 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900">Nessun Server Esterno</h4>
                  <p className="text-sm text-purple-800">
                    L'applicazione funziona completamente offline. Non invia mai dati a server di terze parti,
                    cloud o sistemi di analisi. Zero trasmissione dati sensibili.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                <Eye className="w-6 h-6 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900">Controllo Totale</h4>
                  <p className="text-sm text-orange-800">
                    Puoi cancellare tutti i dati in qualsiasi momento usando il pulsante "Reset".
                    Puoi anche esportare i dati per backup personali senza condivisioni esterne.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cosa NON facciamo */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ Cosa NON Facciamo Mai</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Non raccogliamo dati personali di alunni o docenti</span>
                </li>
                <li className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Non trasmettiamo informazioni a terze parti</span>
                </li>
                <li className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Non utilizziamo cookie di tracciamento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Non archiviamo dati su cloud o server remoti</span>
                </li>
                <li className="flex items-center space-x-2">
                  <X className="w-4 h-4 text-red-600" />
                  <span>Non eseguiamo profilazione o analisi comportamentali</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conformità normativa */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📜 Conformità Normativa</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span><strong>GDPR Compliant:</strong> Rispetta il Regolamento Generale sulla Protezione dei Dati</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span><strong>Codice Privacy IT:</strong> Conforme alla normativa italiana sulla privacy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span><strong>Dati Sensibili:</strong> Gestione sicura di informazioni scolastiche</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Raccomandazioni */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Raccomandazioni di Sicurezza</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• Usa dispositivi sicuri e aggiornati per accedere all'applicazione</li>
                <li>• Effettua backup locali dei dati importanti prima di reset del sistema</li>
                <li>• Non condividere screenshot contenenti dati sensibili sui social media</li>
                <li>• Logout da account condivisi dopo l'utilizzo dell'applicazione</li>
              </ul>
            </div>
          </div>

          {/* Contatti */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">📧 Contatti per Privacy</h4>
            <p className="text-sm text-gray-600">
              Per domande sulla privacy o sicurezza dei dati, contatta il team EduTechLab:
            </p>
            <div className="mt-2 text-sm">
              <p>🌐 <strong>Website:</strong> <a href="https://edutechlab-ita.github.io" className="text-blue-600 hover:underline">edutechlab-ita.github.io</a></p>
              <p>📧 <strong>Email:</strong> <span className="text-gray-700">edutechlab.ita@gmail.com</span></p>
              <p>📁 <strong>GitHub:</strong> <a href="https://github.com/EduTechLab-ita" className="text-blue-600 hover:underline">EduTechLab-ita</a></p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              Ultimo aggiornamento: Settembre 2025 - EduTechLab
            </div>
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Ho Compreso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}