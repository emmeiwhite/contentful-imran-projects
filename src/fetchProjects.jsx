import { createClient } from "contentful";

var client = createClient({
  space: "w4myl3benv6g",
  accessToken: "-j22q7FGqopwnpAoHf6AEvqVnpRRGt4Cr5dJhVYTUyo",
  environment: "master",
});

client
  .getEntries({
    content_type: "projects",
  })
  .then((response) => {
    console.log(response);
  });
