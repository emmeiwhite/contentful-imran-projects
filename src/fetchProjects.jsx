import { useState, useEffect } from "react";

import { createClient } from "contentful";

var client = createClient({
  space: "w4myl3benv6g",
  accessToken: "-j22q7FGqopwnpAoHf6AEvqVnpRRGt4Cr5dJhVYTUyo",
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
          imageURL: item.fields.image.fields.file.url,
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
