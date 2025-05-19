import React from 'react';
import WorkflowDiagram from '../components/WorkflowDiagram';
import FormBuilder from '../components/FormBuilder';
import DatabaseSchema from '../components/DatabaseSchema';
import PowerBIDashboard from '../components/PowerBIDashboard';
import WorkflowSteps from '../components/WorkflowSteps';
import MetricsCard from '../components/MetricsCard';
import { Form, DatabaseTable, WorkflowStep, DashboardMetric } from '../types';

const Dashboard: React.FC = () => {
  // Mock data
  const forms: Form[] = [
    {
      id: '1',
      title: 'Customer Feedback',
      description: 'Collect customer feedback for our services',
      fields: [
        { id: '1', label: 'Name', type: 'text', required: true },
        { id: '2', label: 'Email', type: 'email', required: true },
        { id: '3', label: 'Rating', type: 'select', options: ['1', '2', '3', '4', '5'], required: true },
        { id: '4', label: 'Comments', type: 'text', required: false }
      ],
      responseCount: 85,
      createdAt: '2023-10-15'
    },
    {
      id: '2',
      title: 'Product Registration',
      description: 'Register new products in our database',
      fields: [
        { id: '1', label: 'Product Name', type: 'text', required: true },
        { id: '2', label: 'Serial Number', type: 'text', required: true },
        { id: '3', label: 'Purchase Date', type: 'date', required: true }
      ],
      responseCount: 127,
      createdAt: '2023-09-22'
    },
    {
      id: '3',
      title: 'Event Registration',
      description: 'Sign up for upcoming company events',
      fields: [
        { id: '1', label: 'Full Name', type: 'text', required: true },
        { id: '2', label: 'Email', type: 'email', required: true },
        { id: '3', label: 'Department', type: 'select', options: ['Marketing', 'Sales', 'IT', 'HR'], required: true },
        { id: '4', label: 'Dietary Restrictions', type: 'text', required: false }
      ],
      responseCount: 36,
      createdAt: '2023-11-05'
    }
  ];

  const tables: DatabaseTable[] = [
    {
      name: 'form1_respuestas',
      columns: [
        { name: 'id', type: 'INT', isPrimary: true },
        { name: 'name', type: 'VARCHAR(100)' },
        { name: 'email', type: 'VARCHAR(100)' },
        { name: 'rating', type: 'INT' },
        { name: 'comments', type: 'TEXT' },
        { name: 'submission_date', type: 'DATETIME' }
      ]
    },
    {
      name: 'form2_respuestas',
      columns: [
        { name: 'id', type: 'INT', isPrimary: true },
        { name: 'product_name', type: 'VARCHAR(100)' },
        { name: 'serial_number', type: 'VARCHAR(50)' },
        { name: 'purchase_date', type: 'DATE' },
        { name: 'submission_date', type: 'DATETIME' }
      ]
    }
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      id: '1',
      title: 'Create Digital Forms',
      description: 'Use Microsoft Forms to create forms for data collection',
      icon: 'form',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Configure Power Automate',
      description: 'Set up flows to capture form responses automatically',
      icon: 'automate',
      status: 'inProgress'
    },
    {
      id: '3',
      title: 'Create SQL Database',
      description: 'Set up tables in SQL Server to store form responses',
      icon: 'database',
      status: 'pending'
    },
    {
      id: '4',
      title: 'Configure Excel Input',
      description: 'Set up alternative data entry from Excel',
      icon: 'excel',
      status: 'pending'
    },
    {
      id: '5',
      title: 'Create Power BI Reports',
      description: 'Create interactive reports to visualize the data',
      icon: 'powerbi',
      status: 'pending'
    }
  ];

  const metrics: DashboardMetric[] = [
    { id: '1', title: 'Total Forms', value: 5, change: 25, icon: 'form' },
    { id: '2', title: 'Form Responses', value: 248, change: 12, icon: 'responses' },
    { id: '3', title: 'Excel Entries', value: 124, change: -5, icon: 'excel' },
    { id: '4', title: 'Database Tables', value: 8, change: 0, icon: 'database' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
      
      <MetricsCard metrics={metrics} />
      
      <WorkflowDiagram />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormBuilder forms={forms} />
        <WorkflowSteps steps={workflowSteps} />
      </div>
      
      <DatabaseSchema tables={tables} />
      
      <PowerBIDashboard />
    </div>
  );
};

export default Dashboard;