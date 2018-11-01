import * as fs from 'fs'
import { introspectionQuery, buildClientSchema, printSchema, parse } from 'graphql'
import axios from 'axios'

async function downloadSchema(endpoint: string, outfile: string) {
  const postBody = {
    query: introspectionQuery,
    operationName: 'IntrospectionQuery'
  }

  const axiosResponse = await axios.post(endpoint.trim(), postBody)
  const { data } = axiosResponse.data

  const schema = printSchema(buildClientSchema(data))
  fs.writeFileSync(outfile, schema)
}

export { downloadSchema }
