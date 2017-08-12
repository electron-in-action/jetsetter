import path from 'path';
import { remote } from 'electron';
import knex from 'knex';
import 'sqlite3';

const { app } = remote;

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(app.getPath('userData'), 'jetsetter-items.sqlite')
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
