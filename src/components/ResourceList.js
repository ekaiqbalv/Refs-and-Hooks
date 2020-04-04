import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const respone = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(respone.data);
  };

  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
