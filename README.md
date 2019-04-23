# Thanosify
An API that decimates strings.

## How to Run this project

### requirements
```
git version 2.16.3+
node version 8.1.4+ // v10.15.3 is recommended
```
from the command line
```
git clone https://github.com/EthanEFung/thanosify.git
npm install
npm start
```
The project is now running locally on port 8080.
From the command line, the following request can be run.
### Example Requests
```
curl \
  -d "string_to_cut=thanosIsFair"  \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -X POST http://localhost:8080/test

curl \
  -d '{"string_to_cut": "thanosIsGood"}' \
  -H "Content-Type: application/json" \
  -X POST http://localhost:8080/test

curl \
  -d "string_to_cut=thanosIsPleasedWithYourSacrifice" \
  -X POST http://localhost:8080/test

```

Enjoy, and don't forget to see the Avengers End Game!
