import { Command, flags } from "@oclif/command";

class Mynewcli extends Command {
  static description = "describe the command here";

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
    { name: "endpoint", description: "Path to your GraphQL endpoint" }
  ];

  async run() {
    const { args, flags } = this.parse(Mynewcli);

    // const name = flags.name || "world";
    this.log(`hello ${args} + ${flags} from ./src/index.ts`);
  }
}

export = Mynewcli;
