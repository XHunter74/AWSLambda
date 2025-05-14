# simple-lambda-ts

A simple AWS Lambda function written in TypeScript.

## Project Structure

```
AWSLambda/
├── build-deploy.cmd         # Script for building and deploying
├── event.json               # Sample event for local testing
├── function.zip             # Packaged Lambda function (output)
├── package.json             # Project metadata and scripts
├── template.yaml            # AWS SAM/CloudFormation template
├── test-local.js            # Local test runner
├── tsconfig.json            # TypeScript configuration
└── src/
    ├── main.ts
    ├── models/
    │   ├── payment-result.dto.ts
    │   └── payment.dto.ts
    └── validators/
        ├── body.validator.ts
        ├── error-responder.ts
        └── headers.validator.ts
```

## Scripts

- `npm run build`   – Compile TypeScript to JavaScript (output in `dist/`)
- `npm run package` – Build and package the Lambda function as `function.zip`

## Development

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Build the project:**
   ```sh
   npm run build
   ```
3. **Package for deployment:**
   ```sh
   npm run package
   ```

## Testing Locally

- Use `test-local.js` to invoke the Lambda handler locally with `event.json` as input.

## Deployment

- Use `build-deploy.cmd` or your preferred AWS deployment method (e.g., AWS SAM, AWS CLI) with `template.yaml`.

## Requirements

- Node.js
- TypeScript
- 7-Zip (for packaging, required by the `package` script)

## License

MIT License
