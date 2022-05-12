# Docker Mongo

Template to create a containerized MongoDB service with configuration,
initialization, migrations and backup.

## Configuration

Environment

```env
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=root
MONGO_INITDB_DATABASE=tasks
```

Mongo

Use a `mongod.conf` file with the flag `--config`

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

## Migration

## Backup

## Security

## References

- <https://hub.docker.com/_/mongo>
- <https://www.mongodb.com/docs/manual/>
