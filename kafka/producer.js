const { kafka } = require("./client");

async function main() {
    const producer = kafka.producer();

    console.log("producer is connecting ....");
    await producer.connect();
    console.log("producer is connected...");

    console.log("sending message..");

    await producer.send({
        topic: "update-rider-locations",
        messages: [
            {
                partition: 0,
                key: "location-update",
                value: JSON.stringify({
                    name: "Mostafizur Rahman",
                    lat: 31.909191,
                    lng: 32.7898,
                }),
            },
        ],
    });

    await producer.disconnect();
}

main();
