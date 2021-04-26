import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "ws";

import endpoints from "./endpoints.js";
const { websocketEndpoint } = endpoints;

const client = new SubscriptionClient(
  websocketEndpoint,
  {
    reconnect: true,
    connectionParams: () => ({
      authorization: process.env.CODEALLY_USER_TOKEN
        ? `Bearer ${process.env.CODEALLY_USER_TOKEN}`
        : "",
    }),
  },
  ws
);

export default new WebSocketLink(client);
