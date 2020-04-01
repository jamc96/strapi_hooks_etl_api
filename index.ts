import { DatabaseFactory } from './Database/factory';
  
// setting database configs
var dbFactory = new DatabaseFactory();
var dbCouchbase = dbFactory.set('couchbase','127.0.0.1','myDB');
var dbMysql = dbFactory.set('mysql','127.0.0.1','myDB');
// accesing public couchbase methods(connect, save)
dbCouchbase.connect();
dbCouchbase.save();
// accesing public mysql methods(connect, save, find)
dbMysql.connect();
dbMysql.save();
dbMysql.find();







