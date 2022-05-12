/**
 * Initialize the database with the necessary data to run the application.
 * https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
 */

// Create a user and add some date for the specified database with MONGO_INITDB_DATABASE
db.createUser({
  user: 'task',
  pwd: 'task',
  roles: [
    {
      role: 'readWrite',
      db: 'tasks',
    },
  ],
})

db.tasks.drop()
db.tasks.insertMany([{ name: 'My task' }])
