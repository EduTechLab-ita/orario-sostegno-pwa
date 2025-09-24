import { X, AlertTriangle, RotateCcw } from 'lucide-react';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResetModal({ isOpen, onClose }: ResetModalProps) {
  if (!isOpen) return null;

  const handleReset = () => {
    // Qui implementeremo la logica di reset
    // Per ora mostriamo solo un alert
    alert('Funzione Reset sarà implementata nella prossima versione!\n\nQuesto resetterà:\n• Tutti i dati alunni e docenti\n• Configurazioni orario\n• Orari generati\n• Impostazioni personalizzate');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Reset Sistema</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900">Attenzione!</h3>
              <p className="text-sm text-red-800">
                Questa azione cancellerà tutti i dati inseriti e non può essere annullata.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Verrà cancellato:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Tutti i dati degli alunni con sostegno</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Informazioni docenti e AdP</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Orari generati e configurazioni</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Impostazioni personalizzate</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <p className="text-sm text-blue-800">
              💡 <strong>Suggerimento:</strong> Prima del reset, considera di esportare i dati
              importanti tramite il pulsante "Esporta" nell'header.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex space-x-3 justify-end">
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            Annulla
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Conferma Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}