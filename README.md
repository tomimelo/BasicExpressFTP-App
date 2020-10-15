
<!-- ABOUT THE PROJECT -->
## Basic Node Express App with FTP Integration

Just a basic node express app that connects to a FTP server and send a test file.

## Getting Started


1. Clone the repo
```sh
git clone https://github.com/tomimelo/BasicExpressFTP-App.git
```
3. Install NPM packages
```sh
npm install
```
4. Create a `.env` file on root folder
5. Create the following variables
```sh
PORT={YOUR-PORT-NUMBER}

FTP_HOST={FTP-HOST}
FTP_PORT={FTP-PORT}
FTP_USER_NAME={FTP-USERNAME}
FTP_USER_PWD={FTP-PASSWORD}
```


## Usage

1. Open a terminal on root folder and run node
```sh
node index
```

2. Open your browser and go to `localhost:YOURPORT/send`
3. That's all!