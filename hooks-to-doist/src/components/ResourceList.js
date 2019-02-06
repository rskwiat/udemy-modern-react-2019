import React from 'react';
import useResources from './useResources';


const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record}>{record.title}</li>
      ))}
    </ul>
  );
  
}

export default ResourceList;