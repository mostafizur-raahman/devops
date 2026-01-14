const { kafka } = require("./client");

async function main() {
    const consumer = kafka.consumer({ groupId: "1" });
    await consumer.connect();

    await consumer.subscribe({
        topics: ["update-rider-locations"],
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({
            topic,
            partition,
            message,
            heartbeat,
            pause,
        }) => {
            console.log(
                `[${topic}] : partition:[${partition}]: msg:[${message.value.toString()}]`
            );
        },
    });
}

main();
