import React from 'react';
import { WorkflowStep } from '../types';
import Card from './ui/Card';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ steps }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'inProgress':
        return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />;
      case 'pending':
        return <Circle className="h-5 w-5 text-gray-400" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'inProgress':
        return 'border-blue-500';
      case 'pending':
        return 'border-gray-300';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <Card title="Implementation Steps" className="col-span-full md:col-span-1">
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {index < steps.length - 1 && (
              <div 
                className={`absolute top-7 left-3.5 h-full w-0.5 ${
                  step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
            <div className="flex gap-4">
              <div className={`rounded-full border-2 p-0.5 ${getStatusClass(step.status)}`}>
                {getStatusIcon(step.status)}
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkflowSteps;