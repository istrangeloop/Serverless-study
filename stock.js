/*import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.orderTable,
  };

  try {
    await dynamoDb.scan(params);

    },
    KeyConditionExpression: "inStock = :inStock",
    ExpressionAttributeValues: {
      ":inStock": "true",
    }
    return params.Item;
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
});
*/
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.stockTable,
  };

  const result = await dynamoDb.scan(params);
  if (!result.Items) {
    console.log(result);
    throw new Error("Items not found.");
  }

  // Return the retrieved item
  return result.Items;
});
