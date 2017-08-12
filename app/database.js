import 'sqlite3';

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  },
  useNullAsDefault: true
});

database.schema.hasTable('items').then(exists => {
  if (!exists) {
    return database.schema.createTable('items', t => {
      t.increments('id').primary();
      t.string('value', 100);
      t.boolean('packed');
    });
  }
});

export default database;
