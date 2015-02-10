# MongoDB notes

I had problems getting MongoDB working. It wouldn't see the /data/db directory. I had to run

```
sudo mkdir -p /data/db/

sudo chown `id -u` /data/db
```

I followed this stackOverFlow resource: [MongoDB not working. “ERROR: dbpath (/data/db) does not exist.”](http://stackoverflow.com/questions/24599119/mongodb-not-working-error-dbpath-data-db-does-not-exist). This create `/data/db/` at the system root. This does not go in your app's/project's directory.

## Notes

```
//START MONGO
mongo

// List all DBs
show databases

// Show current DB
db

// Select a DB
use db_name

// CREATE
// save one user
db.users.save({name: 'Chris'});

//READ
// show all users
db.users.find();
db.users.find({name: 'Holly'});

//UPDATE
db.users.update({name: 'Holly'}, {name: 'Holly Smith'});

// DELETE
// remove all
db.users.remove({});
// remove one
db.users({name: 'Holly'});

```
