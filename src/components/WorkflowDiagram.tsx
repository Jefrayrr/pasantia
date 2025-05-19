import React from 'react';
import { ArrowRight, FormInput, Table, BarChart3, FileSpreadsheet } from 'lucide-react';
import Card from './ui/Card';

const WorkflowDiagram: React.FC = () => {
  return (
    <Card title="Workflow Visualization" className="col-span-full">
      <div className="py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Microsoft Forms */}
          <div className="workflow-node flex flex-col items-center p-4 border border-blue-200 rounded-lg bg-blue-50 min-w-[150px]">
            <FormInput className="h-10 w-10 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-800 text-center">Microsoft Forms</h3>
            <p className="text-xs text-gray-600 text-center mt-1">Data Collection</p>
          </div>

          {/* Arrow */}
          <div className="flex-grow flex items-center justify-center">
            <div className="workflow-arrow w-16 md:w-24 flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-gray-400 animate-pulse" />
            </div>
          </div>

          {/* Power Automate */}
          <div className="workflow-node flex flex-col items-center p-4 border border-purple-200 rounded-lg bg-purple-50 min-w-[150px]">
            <svg className="h-10 w-10 text-purple-600 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="font-medium text-gray-800 text-center">Power Automate</h3>
            <p className="text-xs text-gray-600 text-center mt-1">Workflow Automation</p>
          </div>

          {/* Arrow */}
          <div className="flex-grow flex items-center justify-center">
            <div className="workflow-arrow w-16 md:w-24 flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-gray-400 animate-pulse" />
            </div>
          </div>

          {/* SQL Server */}
          <div className="workflow-node flex flex-col items-center p-4 border border-red-200 rounded-lg bg-red-50 min-w-[150px]">
            <Table className="h-10 w-10 text-red-600 mb-2" />
            <h3 className="font-medium text-gray-800 text-center">SQL Server</h3>
            <p className="text-xs text-gray-600 text-center mt-1">Data Storage</p>
          </div>

          {/* Arrow */}
          <div className="flex-grow flex items-center justify-center">
            <div className="workflow-arrow w-16 md:w-24 flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-gray-400 animate-pulse" />
            </div>
          </div>

          {/* Power BI */}
          <div className="workflow-node flex flex-col items-center p-4 border border-green-200 rounded-lg bg-green-50 min-w-[150px]">
            <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
            <h3 className="font-medium text-gray-800 text-center">Power BI</h3>
            <p className="text-xs text-gray-600 text-center mt-1">Data Visualization</p>
          </div>
        </div>

        {/* Excel Alternative Path */}
        <div className="mt-8 flex flex-col items-center">
          <div className="workflow-node flex flex-col items-center p-4 border border-yellow-200 rounded-lg bg-yellow-50 min-w-[150px]">
            <FileSpreadsheet className="h-10 w-10 text-yellow-600 mb-2" />
            <h3 className="font-medium text-gray-800 text-center">Excel</h3>
            <p className="text-xs text-gray-600 text-center mt-1">Alternative Input</p>
          </div>
          <div className="h-12 w-0.5 bg-gray-300 my-2"></div>
          <ArrowRight className="h-6 w-6 text-gray-400 animate-pulse" />
          <div className="h-12 w-0.5 bg-gray-300 my-2"></div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WorkflowDiagram;