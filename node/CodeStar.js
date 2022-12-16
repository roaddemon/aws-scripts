import { CodeStarConnectionsClient, ListConnectionsCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
// const { CodeStarConnectionsClient, ListConnectionsCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
const client = new CodeStarConnectionsClient(config);
const command = new ListConnectionsCommand(input);
const response = await client.send(command);


// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
