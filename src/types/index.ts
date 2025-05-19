export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date' | 'email';
  options?: string[]; // For select fields
  required: boolean;
}

export interface Form {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  responseCount: number;
  createdAt: string;
}

export interface DatabaseTable {
  name: string;
  columns: {
    name: string;
    type: string;
    isPrimary?: boolean;
  }[];
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change?: number;
  icon: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'completed' | 'inProgress' | 'pending';
}