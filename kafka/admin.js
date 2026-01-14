const { kafka } = require("./client");

async function main() {
    const kafkaAdmin = kafka.admin();
    kafkaAdmin.connect();
    console.log("kafka connected successfully.....");

    // create topic
    console.log("creating topic started [update-rider-locations]");
    await kafkaAdmin.createTopics({
        topics: [
            {
                topic: "update-rider-locations",
                numPartitions: 2,
            },
        ],
    });
    console.log("[update-rider-locations] topic is created....");

    await kafkaAdmin.disconnect();
}

main();
