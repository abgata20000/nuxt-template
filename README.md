# nuxt template

> nuxt template with typescript

## Build Setup

``` bash
# create env.development.js and setting your local settings
$ cp ./env.sample.js ./env.development.js

# build
$ docker-compose build

# run containers
$ docker-compose up -d

# show logs
$ docker-compose logs -f web

# you can access localhost:3333
```

## Docker commands
```bash
# stop containers
$ docker-compose down

# restat containers
$ docker-compose restart

# destroy containers
$ docker-compose down --volumes --remove-orphans

# destroy all without running container
$ sudo docker rm $(sudo docker ps -a -q)

# destroy all image with stop container
$ sudo docker rmi $(sudo docker images | awk '/^<none>/ { print $3 }')
```

## information
if you don't want to use docker, you can use local node and yarn packages.
```
$ yarn install
$ yarn dev
# you can access localhost:3333
```
