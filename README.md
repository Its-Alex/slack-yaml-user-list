# Slack-yaml-user-list

Parse all users on a channel to yaml file

## Requirements

You must see two environment variable:

* `SYUL_SLACK_TOKEN` Token from user who made requests
* `SYUL_SLACK_CHANNEL` Token of channel that you want users

## Hack on it

To start project

```
$ npm run start-dev
```

## Docker

There is an image docker that you can use `itsalex/slack-yaml-user-list`

```
$ docker pull itsalex/slack-yaml-user-list
```

You can run container with

```
$ docker run --rm -v $(pwd)/users.yaml:/slack-yaml-user-list/users.yaml -e SYUL_SLACK_TOKEN=<token> -e SYUL_SLACK_CHANNEL=<channel_token> itsalex/slack-yaml-user-list:master
```

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
