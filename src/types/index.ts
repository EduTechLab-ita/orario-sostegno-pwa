// Interfacce TypeScript basate sulle regole del file JSON

export interface Alunno {
  id: string;
  nome: string;
  classe: string;
  oreADP: number;
  oreSostegno: number;
  oreTotali: number;
  orariSpeciali?: OrarioSpeciale[];
  docentiAssegnati: string[];
  adpAssegnati: string[];
  note?: string;
}

export interface Docente {
  id: string;
  nome: string;
  tipo: 'sostegno' | 'adp';
  oreDisponibili: number;
  oreUtilizzate: number;
  classiAssegnate: string[];
  alunniAssegnati: string[];
}

export interface OrarioSpeciale {
  giorno: 'lunedi' | 'martedi' | 'mercoledi' | 'giovedi' | 'venerdi';
  ora: number | 'M'; // M per mensa
  stato: 'assente' | 'presente' | 'assente_alternato' | 'presente_alternato';
  motivo?: string;
  copertura: 'solo_sostegno' | 'sempre_sostegno' | string; // nome specifico docente
  recupero?: string;
}

export interface SlotOrario {
  id: string;
  giorno: 'lunedi' | 'martedi' | 'mercoledi' | 'giovedi' | 'venerdi';
  ora: number | 'M';
  docente?: string;
  tipo: 'sostegno' | 'adp';
  alunno: string;
  classe: string;
  note?: string;
  isEccezione?: boolean; // per compresenze straordinarie
}

export interface StrutturaOraria {
  giorni: string[];
  orePerGiorno: {
    [key: string]: {
      mattino: number[];
      mensa?: string[];
      pomeriggio?: number[];
      totaleOre: number;
    };
  };
  totaleOreSettimanali: number;
}

export interface Vincolo {
  id: string;
  descrizione: string;
  priorita: 'CRITICA' | 'ALTA' | 'MEDIA';
  attivo: boolean;
  dettaglio?: string;
  eccezione?: string;
}

export interface ConfigurazioneOrario {
  id: string;
  nome: string;
  annoScolastico: string;
  struttura: StrutturaOraria;
  vincoli: Vincolo[];
  dataCreazione: Date;
  dataModifica: Date;
}

export interface ReportQualita {
  orarioCompleto: boolean;
  conflitti: string[];
  coperturaMancante: string[];
  oreEccedenti: string[];
  compresenzeStraordinarie: string[];
  punteggio: number; // 0-100
}

export type StatoGenerazione = 'idle' | 'running' | 'completed' | 'error';

export interface ProgressoGenerazione {
  stato: StatoGenerazione;
  passaggio: string;
  percentuale: number;
  messaggio: string;
  errori?: string[];
}