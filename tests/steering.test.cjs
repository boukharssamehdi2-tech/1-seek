const test=require('node:test');const assert=require('node:assert/strict');const S=require('../src/behaviors/steering.js');
test('seek points toward target',()=>assert.deepEqual(S.seek({x:0,y:0},{x:3,y:4}),{x:0.6,y:0.8}));
test('flee points away from threat',()=>assert.deepEqual(S.flee({x:3,y:4},{x:0,y:0}),{x:0.6,y:0.8}));
test('zero vector stays finite',()=>assert.deepEqual(S.seek({x:2,y:2},{x:2,y:2}),{x:0,y:0}));
test('wander direction is normalized',()=>assert.ok(Math.abs(Math.hypot(...Object.values(S.wander(1.2)))-1)<1e-10));
