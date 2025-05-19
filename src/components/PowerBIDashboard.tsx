import React from 'react';
import Card from './ui/Card';
import { BarChart, PieChart } from 'lucide-react';

const PowerBIDashboard: React.FC = () => {
  return (
    <Card 
      title="Power BI Dashboard" 
      icon={<BarChart size={18} />}
      className="col-span-full"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-medium text-gray-800 mb-2">Response Analytics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Chart Placeholder 1 */}
            <div className="bg-white p-4 rounded-md border border-gray-200 h-48 flex flex-col items-center justify-center">
              <BarChart className="h-16 w-16 text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Response Count by Form</p>
            </div>
            
            {/* Chart Placeholder 2 */}
            <div className="bg-white p-4 rounded-md border border-gray-200 h-48 flex flex-col items-center justify-center">
              <PieChart className="h-16 w-16 text-green-600 mb-2" />
              <p className="text-sm text-gray-600">Input Source Distribution</p>
            </div>
            
            {/* Chart Placeholder 3 */}
            <div className="bg-white p-4 rounded-md border border-gray-200 h-48 flex flex-col items-center justify-center">
              <BarChart className="h-16 w-16 text-purple-600 mb-2" />
              <p className="text-sm text-gray-600">Response Trends (Weekly)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-medium text-gray-800 mb-2">KPI Dashboard</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* KPI Placeholder 1 */}
            <div className="bg-white p-4 rounded-md border border-gray-200 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Forms Created</p>
                <p className="text-2xl font-semibold">5</p>
              </div>
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">+3</span>
              </div>
            </div>
            
            {/* KPI Placeholder 2 */}
            <div className="bg-white p-4 rounded-md border border-gray-200 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Responses</p>
                <p className="text-2xl font-semibold">248</p>
              </div>
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">+31%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PowerBIDashboard;