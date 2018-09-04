# gamecollection-api
REST API for [gamecollection-webapp](https://github.com/ShawonAshraf/gamecollection-webapp)

## One click deploy to heroku
**Make sure to build the project locally first!** You can also yous travis if you want.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Runs on
`express` and `mongo`. Also needs some `babel` transpile magic to convert `es6` code. 

## Build & Run
Before running make sure you've your MongoDB instance running. You can set the URL for DB instance in [config/config.json]("./config/config.json) file.

```bash
# install dependencies
npm install

# watch
npm run watch

# transpile es6 code and run
npm run build 
npm start
```

## Routes

### /games/all
Fetches all the games in database as a JSON array.

### /games/:platform
Fetches games by platform name **as defined in your database**. e.g. PS4/PS3 etc.

Example - for `/games/xboxone`
```json
{
    "games":[
        {
            "_id":"5b8e4e76ece19b04ae342822",
            "name":"Halo Wars 2",
            "platform":"XBOXONE",
            "publisher":"Microsoft Studios"
        },
        {
            "_id":"5b8e4e76ece19b04ae342824",
            "name":"Rise of The Tomb Raider",
            "platform":"XBOXONE",
            "publisher":"Square Enix"
        },
        {
            "_id":"5b8e4e77ece19b04ae342842",
            "name":"Forza Horizon 3",
            "platform":"XBOXONE",
            "publisher":"Microsoft Studios"
        }
    ]
}
```

### /games/total/all
Fetches the total number of games in the database.

### /games/total/:platform
Fetches the number of games by platform

Example - for `/games/ps4`
```json
{
    "total":178
}
```
## Code style
[Airbnb JS Style Guide](https://github.com/airbnb/javascript)

## LICENSE
MIT
