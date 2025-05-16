/**
 * Pattern metadata for Cloudscape components
 */

interface CustomizationOption {
  name: string;
  type: string;
  description: string;
  defaultValue: any;
}

interface Pattern {
  id: string;
  name: string;
  description: string;
  components: string[];
  code: string;
  customizationOptions: Record<string, CustomizationOption>;
}

const patterns: Record<string, Pattern> = {
  "data-table": {
    id: "data-table",
    name: "Data Table",
    description: "A table with sorting, filtering, and pagination.",
    components: ["table", "pagination", "collection-preferences", "text-filter"],
    code: `import Table from "@cloudscape-design/components/table";
import Pagination from "@cloudscape-design/components/pagination";
import TextFilter from "@cloudscape-design/components/text-filter";
import { useState } from "react";

function DataTable({ items, columnDefinitions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  
  // Filter items based on filter text
  const filteredItems = items.filter(item => 
    Object.values(item).some(value => 
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );
  
  // Paginate items
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);
  
  return (
    <>
      <TextFilter
        filteringText={filterText}
        onChange={({ detail }) => setFilterText(detail.filteringText)}
      />
      <Table
        columnDefinitions={columnDefinitions}
        items={paginatedItems}
        variant="full-page"
      />
      <Pagination
        currentPageIndex={currentPage}
        pagesCount={Math.ceil(filteredItems.length / pageSize)}
        onNextPageClick={() => setCurrentPage(currentPage + 1)}
        onPreviousPageClick={() => setCurrentPage(currentPage - 1)}
      />
    </>
  );
}`,
    customizationOptions: {
      columnDefinitions: {
        name: "columnDefinitions",
        type: "array",
        description: "Defines the columns of the table.",
        defaultValue: []
      },
      items: {
        name: "items",
        type: "array",
        description: "The items to display in the table.",
        defaultValue: []
      }
    }
  },
  
  "form-layout": {
    id: "form-layout",
    name: "Form Layout",
    description: "A form with validation and error handling.",
    components: ["form", "form-field", "input", "button", "space-between"],
    code: `import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useState } from "react";

function FormLayout({ fields, onSubmit }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    
    // Clear error when field is modified
    if (errors[fieldName]) {
      const newErrors = { ...errors };
      delete newErrors[fieldName];
      setErrors(newErrors);
    }
  };
  
  const handleSubmit = () => {
    // Validate form
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = 'This field is required';
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    onSubmit(formData);
  };
  
  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link">Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        {fields.map(field => (
          <FormField
            key={field.name}
            label={field.label}
            errorText={errors[field.name]}
          >
            <Input
              value={formData[field.name] || ''}
              onChange={({ detail }) => handleChange(field.name, detail.value)}
            />
          </FormField>
        ))}
      </SpaceBetween>
    </Form>
  );
}`,
    customizationOptions: {
      fields: {
        name: "fields",
        type: "array",
        description: "The fields to display in the form.",
        defaultValue: []
      },
      onSubmit: {
        name: "onSubmit",
        type: "function",
        description: "Function called when the form is submitted.",
        defaultValue: "data => console.error(data)"
      }
    }
  }
};

export default patterns;