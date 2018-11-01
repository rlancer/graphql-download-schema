import { Command, flags } from "@oclif/command";
import { downloadSchema } from "./downloadSchema";

class Mynewcli extends Command {
  static description =
    "Download a GraphQL schema by providing an endpoint and an optional out file.";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    out: flags.string({
      char: "o",
      description: "File name of downloaded schema",
      default: "schema.graphql"
    })
  };

  static args = [
    {
      name: "endpoint",
      description:
        "URI to your GraphQL endpoint, ex: https://api.example.com/graphql "
    }
  ];

  async run() {
    const { args, flags } = this.parse(Mynewcli);

    if (args.endpoint) {
      await downloadSchema(args.endpoint, flags.out || "schema.graphql");
      this.log(`Successfully download your GraphQL schema!`);
    } else {
      this.warn("Invalid ENDPOINT");
      this._help();
    }
  }
}

export = Mynewcli;
