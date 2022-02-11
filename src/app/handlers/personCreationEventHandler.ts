
import { SQSEvent } from 'aws-lambda/trigger/sqs';


export const queueHandler = async (event: SQSEvent) => {
    console.log(`Processing data from queue with records : \n \n`)

    event.Records.forEach(record => console.log(`${JSON.stringify(record.body, null, 4)}`))
}
