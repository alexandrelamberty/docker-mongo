# Docker Mongo

Template to create a containerized MongoDB service with configuration,
initialization, migrations and backup.

## Configuration

Create an `.env` file at the root of the project to declare environment
variable used by the `docker-compose.yaml` to pass to the mongo server.

```bash
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=root
MONGO_INITDB_DATABASE=tasks
```

Use the `mongod.conf` file with the flag `--config`

## Initialization

When a container is started for the first time it will execute `.sh` or `.js`
file found in `/docker-entrypoint-inidb.d`

## Connection

### Local

Connect to the container mongo instance

```sh
docker exec -it mongodb mongo -u task -p task --authenticationDatabase tasks
```

### Remote

```bash
mongo -u task -p task -authenticationDatabase tasks -host localhost
```

```bash
MongoDB shell version v4.4.8
connecting to: mongodb://127.0.0.1:27017/?authSource=tasks&compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("fe88539c-1cdf-45fe-a529-ae50f4e0e3f0") }
MongoDB server version: 4.4.8
```

### Retrive data

In the mongo shell execute

```bash
use tasks
db.tasks.find()
```

And you will get something like this:

```bash
{ "_id" : ObjectId("627d0bca23313bc100fce46a"), "name" : "My task" }
```

## Migration

> Section need to be improved

## Backup

> Section need to be improved

## Security

> Section need to be improved

## References

- <https://hub.docker.com/_/mongo>
- <https://www.mongodb.com/docs/manual/>
- <https://www.mongodb.com/docs/manual/reference/configuration-options/>
