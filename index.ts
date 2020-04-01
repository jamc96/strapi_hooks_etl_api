import { DatabaseFactory } from './Database/factory';
  

var dbFactory = new DatabaseFactory();

// couchabase db
var dbCouchbase = dbFactory.set('mysql','127.0.0.1','myDB');







