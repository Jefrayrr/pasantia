import React from 'react';
import { DashboardMetric } from '../types';
import Card from './ui/Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricsCardProps {
  metrics: DashboardMetric[];
}

const MetricsCard: React.FC<MetricsCardProps> = ({ metrics }) => {
  return (
    <Card title="Dashboard Metrics" className="col-span-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <p className="text-2xl font-semibold mt-1">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-full ${metric.change && metric.change > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                {metric.change && metric.change > 0 ? (
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-5 w-5 text-red-600" />
                )}
              </div>
            </div>
            {metric.change && (
              <div className="mt-2">
                <span className={`text-sm ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MetricsCard;