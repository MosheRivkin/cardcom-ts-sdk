# cardcom-ts-sdk 

Unofficial TypeScript wrapper for the Cardcom REST API, providing type safety, documentation (TS + JSDoc), schema validation (Zod), and convenient fetching (Axios).

## 🚀 Features 

*   **Type Safety:** Leverages TypeScript to provide strong typing for all API requests and responses.
*   **Documentation:** Includes comprehensive documentation generated from JSDoc comments.
*   **Schema Validation:** Uses Zod to validate request and response schemas, ensuring data integrity.
*   **Convenient Fetching:** Utilizes Axios for making HTTP requests, simplifying API interactions.

## ⚙️ Installation 

```bash
npm install cardcom-ts-sdk
# or
bun install cardcom-ts-sdk
```

## 💻 Usage 

To use the `cardcom-ts-sdk`, you need to import the `createCardComClient` function and initialize it with your API username and terminal number.

```typescript
import { createCardComClient } from 'cardcom-ts-sdk';

const cardcom = createCardComClient({
  apiUserName: 'YOUR_API_NAME',
  terminalNumber: 1234,
});

// Example API call (replace with actual API endpoint and parameters)
const response = await cardcom.transactions.listTransactions({ pageSize: 10 });
console.log(response);
```

## 🧰 Technologies Used 

*   TypeScript
*   JSDoc
*   Zod
*   Axios

## 👋 Contributing 

Contributions are welcome! Please submit a pull request with your changes.


## Cardcom API Documentation 

[Cardcom API Documentation](https://example.com/cardcom-api-docs)
