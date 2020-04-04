import React, { useState, useEffect } from "react";
import axios from "axios";

const useResource = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const respone = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(respone.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResource;
