import NodeAgent from '../src/index';
import chai from 'chai';

let assert = chai.assert;

describe('NodeAgent', function() {
    it('should be and object', function () {
        let agent = new NodeAgent({
            gc: true,
            cpu: true,
            mem: true
        });

        agent.start();

        global.gc();

        assert.typeOf(agent, 'object');
    });
});