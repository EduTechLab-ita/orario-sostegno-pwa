import { Calendar, Users, AlertTriangle, CheckCircle, Clock, BookOpen } from 'lucide-react';

interface DashboardProps {
  onNavigate: (tab: 'dashboard' | 'dati' | 'generazione' | 'orario') => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  // Mock data per la demo
  const stats = {
    alunni: 12,
    docenti: 8,
    oreTotali: 156,
    oreCompletas: 0,
    conflitti: 0,
    ultimaGenerazione: null as Date | null
  };

  const StatCard = ({ title, value, subtitle, icon: Icon, color, onClick }: any) => (
    <div
      className={`card hover:shadow-md transition-shadow cursor-pointer ${onClick ? 'hover:bg-gray-50' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <Icon className={`w-8 h-8 ${color.replace('text-', 'text-').replace('-600', '-500')}`} />
      </div>
    </div>
  );

  const QuickAction = ({ title, description, icon: Icon, onClick, color }: any) => (
    <button
      onClick={onClick}
      className="card text-left hover:shadow-md hover:bg-gray-50 transition-all group w-full"
    >
      <div className="flex items-start space-x-3">
        <Icon className={`w-6 h-6 ${color} group-hover:scale-110 transition-transform`} />
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Panoramica generale del sistema di generazione orari</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Alunni con Sostegno"
          value={stats.alunni}
          subtitle="configurati nel sistema"
          icon={Users}
          color="text-blue-600"
          onClick={() => onNavigate('dati')}
        />

        <StatCard
          title="Docenti/AdP"
          value={stats.docenti}
          subtitle="disponibili per assegnazione"
          icon={BookOpen}
          color="text-green-600"
          onClick={() => onNavigate('dati')}
        />

        <StatCard
          title="Ore Totali"
          value={stats.oreTotali}
          subtitle="da coprire nella settimana"
          icon={Clock}
          color="text-purple-600"
        />

        <StatCard
          title="Stato Orario"
          value={stats.oreCompletas > 0 ? "Completo" : "Da Generare"}
          subtitle={stats.conflitti > 0 ? `${stats.conflitti} conflitti` : "Nessun conflitto"}
          icon={stats.oreCompletas > 0 ? CheckCircle : AlertTriangle}
          color={stats.oreCompletas > 0 ? "text-green-600" : "text-yellow-600"}
          onClick={() => onNavigate('orario')}
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Azioni Rapide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickAction
            title="Configura Dati"
            description="Gestisci alunni, docenti e impostazioni base del sistema"
            icon={Users}
            color="text-blue-600"
            onClick={() => onNavigate('dati')}
          />

          <QuickAction
            title="Genera Orario"
            description="Imposta vincoli e avvia la generazione automatica dell'orario"
            icon={Calendar}
            color="text-green-600"
            onClick={() => onNavigate('generazione')}
          />

          <QuickAction
            title="Visualizza Orario"
            description="Consulta e modifica l'orario generato con controlli qualità"
            icon={CheckCircle}
            color="text-purple-600"
            onClick={() => onNavigate('orario')}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Attività Recente</h3>
        <div className="card">
          <div className="text-center py-8 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-lg font-medium">Nessuna attività recente</p>
            <p className="text-sm">Inizia configurando i dati o generando un nuovo orario</p>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-900">Sistema Pronto</h4>
            <p className="text-blue-700 text-sm mt-1">
              La WebApp è configurata correttamente. Tutti i moduli sono operativi e pronti per l'uso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}