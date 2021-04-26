const environment = process.env.CODEALLY_ENVIRONMENT;

let endpoint;
let websocketEndpoint;

if (environment === "local" || !environment) {
  endpoint = "http://localhost:4040";
  websocketEndpoint = "ws://localhost:4040/graphql";
} else if (environment === "development") {
  endpoint = "https://graphql.codeally.io";
  websocketEndpoint = "wss://graphql.codeally.io/graphql";
} else {
  endpoint = "https://api.codeally.io/graphql";
  websocketEndpoint = "wss://api.codeally.io/graphql";
}

const graphqlEndpoint = `${endpoint}/graphql`;

export default {
  graphqlEndpoint,
  websocketEndpoint,
};
