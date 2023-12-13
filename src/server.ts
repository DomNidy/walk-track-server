import WebSocket from "ws";
import {
  GeolocationServerLocationSyncResponse,
  GeolocationServerResponseStatusCode,
} from "../definitions/socket-server";
const wss = new WebSocket.Server({ port: 8080 });
wss.once("listening", () => {
  console.log("Server started on port", wss.options.port);
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("received: %s", message);
    ws.send(
      JSON.stringify({
        status: GeolocationServerResponseStatusCode.SUCCESS,
        message: "Got it!",
        timestamp: Date.now(),
        locationHash: Buffer.from(message.toString()).toString("base64"),
      } as GeolocationServerLocationSyncResponse)
    );
  });

});
