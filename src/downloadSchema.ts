import * as fs from "fs";
import {
  introspectionQuery,
  buildClientSchema,
  printSchema,
  parse
} from "graphql";
import axios from "axios";

async function downloadSchema(endpoint: string, outfile: string) {
  const postBody = {
    query: parse(introspectionQuery),
    operationName: "IntrospectionQuery"
  };

  const data = (await axios.post(endpoint, postBody)).data.data;

  const schema = printSchema(buildClientSchema(data));
  fs.writeFileSync(outfile, schema);
}

export { downloadSchema };
