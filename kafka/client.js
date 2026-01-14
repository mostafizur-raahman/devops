const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "learing-kafka",
    brokers: ["192.168.31.143:9092"],
});
