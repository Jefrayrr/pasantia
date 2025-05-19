import React from 'react';
import { Form } from '../types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { FileText, Plus, Edit, Trash2 } from 'lucide-react';

interface FormBuilderProps {
  forms: Form[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ forms }) => {
  return (
    <Card 
      title="Digital Forms" 
      icon={<FileText size={18} />} 
      className="col-span-full md:col-span-1"
    >
      <div className="mb-4">
        <Button icon={<Plus size={16} />}>Create New Form</Button>
      </div>
      <div className="space-y-3">
        {forms.map((form) => (
          <div key={form.id} className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-800">{form.title}</h4>
              <div className="flex gap-2">
                <button className="p-1 text-gray-500 hover:text-blue-600">
                  <Edit size={16} />
                </button>
                <button className="p-1 text-gray-500 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{form.description}</p>
            <div className="flex justify-between items-center mt-2">
              <Badge variant="info">{form.fields.length} fields</Badge>
              <span className="text-sm text-gray-500">{form.responseCount} responses</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FormBuilder;