import { introspectionQuery, buildClientSchema, printSchema, parse } from 'graphql'
import axios from 'axios'

const endpoint process.argv[process.argv.length -2]
const outfile = 'schema.graphql'] = process.argv

console.log(process.argv)

if (!endpoint) {
  console.log('Missing path to your schema')
  console.log('Useage')
  console.log('$> download-graphql-schema http://path_to_your_schema out_file.schema')
}

console.log(`Downloading schema from ${endpoint}`)
const postBody = {
  query: parse(introspectionQuery),
  operationName: 'IntrospectionQuery'
}
;(async () => {
  const data = (await axios.post(endpoint, postBody)).data.data

  const schema = printSchema(buildClientSchema(data))
  fs.writeFileSync(outfile, schema)

  console.log(`Wrote schema to ${outfile}!`)
})()
