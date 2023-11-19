# Custom Logger

Simplify logging with the power of the factory design pattern

**Overview:**

The Custom Logger is a logging application designed to serve as a comprehensive guide on implementing the factory design within your software projects. It leverages on the [winston](https://github.com/winstonjs/winston) logging library capable of seamlessly directing logs to various destinations, including the terminal, files, or even messaging platforms such as Slack.

**Key Features:**

- **Factory Design Pattern:** Learn how to apply the factory pattern to dynamically create different types of transports, providing flexibility and scalability to adapt to your specific logging requirements.
- **Winston Integration:** Harness the capabilities of the winston logging library, ensuring robust and efficient log management.

## Getting Started

These instructions will help you get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Git: [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node JS runtime: [Installation](https://nodejs.org/en/)
- Yarn package manager: [Installation](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Step 1: Clone project

1. In your terminal run the following command to clone the project:

```
git clone https://github.com/law12th/logger.git

cd logger
```

2. Install project dependencies using yarn:

```
yarn install
```

3. Rename `.env.example` to `.env`

```
mv .env.example .env
```

4. Edit the `.env` file and add your slack webhook url and node environment

### Step 2: Run project

1. Run the following command to run the project:

```
yarn start
```

**Learn More:**

For an in-depth understanding of the concepts and insights behind this project, check out the accompanying Medium article [here](https://www.medium.com)
