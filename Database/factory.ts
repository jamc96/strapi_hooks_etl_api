import { Couchbase } from './couchbase';
import { Mysql } from './mysql';

export class DatabaseFactory {
    
    set(type: 'couchbase', server: string, target: string): Couchbase;
    set(type: 'mysql', server: string, target: string): Mysql;

    set(type: string, server: string, target: string): Couchbase | Mysql {
        switch (type) {
            case 'couchbase':
                return new Couchbase(server, target); 
            case 'mysql':
                return new Mysql(server,target);
            default:
                throw new Error('select a valid database');
        }
    }
}