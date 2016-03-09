/**
 * Created by dbuarque on 3/6/16.
 */
var PouchDB = require('pouchdb');
var os = require('os');
var microtime = require('microtime');
var gcdb = new PouchDB(os.homedir()+'/.node-agent/gcdb');
var memdb = new PouchDB(os.homedir()+'/.node-agent/memdb');
var cpudb = new PouchDB(os.homedir()+'/.node-agent/cpudb');

class NodeAgent {

    constructor(options){
        this.options = options
    }

    start(){

        var gc = (require('gc-stats'))();
        gc.on('stats', function (data) {
            db.put(data);
        });
    }

    stats(){

    }

}

export default NodeAgent