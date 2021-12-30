# g2it

> A GitHub App built with [Probot](https://github.com/probot/probot) that tweet all git changes on a repo

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t g2it .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> g2it
```

## Contributing

If you have suggestions for how g2it could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Riyadh Uddin <itssend@gmail.com>
