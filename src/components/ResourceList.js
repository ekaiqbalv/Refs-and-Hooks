import React from "react";
import useResource from "../hooks/useResource";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);

  return (
    <ul>
      {resources.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
