import { useState, useEffect } from "react";

import { createClient } from "contentful";

var client = createClient({
  space: "w4myl3benv6g",
  accessToken: import.meta.env.VITE_API_KEY,
  environment: "master",
});

// Let's create our custom hook
const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      //   console.log(response.items);

      const updatedArray = response.items.map((item) => {
        return {
          id: item.sys.id,
          imageURL: item.fields.image?.fields?.file?.url,
          title: item.fields.title,
          url: item.fields.url,
        };
      });

      console.log(updatedArray);
      setProjects(updatedArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // Need data after component mounts on the initial render
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

/* ---
client
  .getEntries({
    content_type: "projects",
  })
  .then((response) => {
    console.log(response);
  });
--- */

export default useFetchProjects;
