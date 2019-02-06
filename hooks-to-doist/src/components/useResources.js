import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(res.data)
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  return resources;
}

export default useResources;
