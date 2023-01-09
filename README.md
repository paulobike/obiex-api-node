# obiex-api-node

> An API wrapper for the [Obiex](https://obiex.com) API.

### Installation

    yarn add obiex-api-node

### Getting started

Import the module and create a new client. Passing sandbox mode is optional and it's fault by default.

```js
import { ObiexClient } from 'obiex-api-node'

// Authenticated client, can make signed calls
const client = new ObiexClient({
  apiKey: 'xxx',
  apiSecret: 'xxx',
  sandboxMode: xxx,
})

```

Every REST method returns a Promise, making this library [async await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) ready.
Following examples will use the `await` form.

### Table of Contents
- [Initialization](#Initialization)
- [Public REST Endpoints](#public-rest-endpoints)
  - [Get trade history](#getTradeHistory)
- [ServerErrors](#ServerErrors)

### Initialization

| Param       | Type     | Required | Info                                         |
| ----------- | -------- | -------- | -------------------------------------------- |
| apiKey      | String   | false    | Required when making private calls           |
| apiSecret   | String   | false    | Required when making private calls           |
| sandboxMode   | Function | false    | Required to be true when going live        |

### Public REST Endpoints

#### getTradeHistory

```js
console.log(await client.getTradePairs())
```

<details>
<summary>Output</summary>

```js
{
    id: 'be3854e1-b675-4ace-877e-32caeb582dc5',
    isSellable: true;
    isBuyable: true;
    source: {
        id: 'de3854e1-b675-5ace-977e-32caeb582dc5',
        name: 'string';
        code: 'BTC';
        receivable: true;
        withdrawable: true;
        transferrable: boolean;
        minimumDeposit: 10;
        maximumDeposit: 10000;
        maximumDailyDepositLimit: 100;
        maximumDecimalPlaces: 8;
    },
    target: {
        id: 'ae3854e1-b675-4dee-977e-62caeb582dd2',
        name: 'string';
        code: 'NGNX';
        receivable: true;
        withdrawable: true;
        transferrable: boolean;
        minimumDeposit: 100;
        maximumDeposit: 100000;
        maximumDailyDepositLimit: 1000;
        maximumDecimalPlaces: 2;
    },;
}
```

</details>

### ServerErrors

A server error is also being exported by the package in order for you to make readable
conditionals upon specific errors that could occur while using the API.

```js
import { ServerError } from 'obiex-api-node'

console.log(ServerError) // { message: string, data: object, statusCode: number }
```
