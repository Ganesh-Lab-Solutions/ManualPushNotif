var client = new Paho.MQTT.Client("localhost", Number(9001), "header");

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: onConnect,
    userName : "renzcybermedia",
    password : "8cadb11f56"
});

function onConnect() {
    console.log("onConnect");
    client.subscribe("tan");
    message = new Paho.MQTT.Message("{\"title\":\"Notifikasi\",\"content\":\"Hello, connected\"}");
    message.destinationName = "tan";
    client.send(message);
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    console.log(message.payloadString);
}