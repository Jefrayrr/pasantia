import React from 'react';
import { DatabaseTable } from '../types';
import Card from './ui/Card';
import { Database } from 'lucide-react';

interface DatabaseSchemaProps {
  tables: DatabaseTable[];
}

const DatabaseSchema: React.FC<DatabaseSchemaProps> = ({ tables }) => {
  return (
    <Card 
      title="SQL Server Database" 
      icon={<Database size={18} />}
      className="col-span-full lg:col-span-2"
    >
      <div className="space-y-4">
        {tables.map((table) => (
          <div key={table.name} className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
              <h4 className="font-medium text-gray-800">{table.name}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Column
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Key
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.columns.map((column, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {column.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-600">
                        {column.type}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm">
                        {column.isPrimary && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Primary
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DatabaseSchema;