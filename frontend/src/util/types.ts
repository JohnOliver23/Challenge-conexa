export interface Action {
  payload: any;
  type: string;
  [key: string]: any;
}

export interface Patient {
  id: number;
  email: string;
  first_name: string;
  last_name: String;
}

export interface Consultation {
  id: number;
  patient: Patient;
  patientId: number;
  date: string;
}
