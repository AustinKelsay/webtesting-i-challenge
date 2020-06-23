const {repair, succeed, fail, get} = require('./enhancer.js');

describe('enhancement functions', () => {

    describe('succeed()', () => {
        it('should increase enhancement by 1 unless enhancement is already 20', () => {
            const item = {name: "Mace", durability: 75, enhancement: 15};
            const masterItem = {name: "Mace", durability: 75, enhancement: 20};
            
            expect(succeed(item)).toEqual({name: "Mace", durability: 75, enhancement: 16 });
            expect(succeed(masterItem)).toEqual(masterItem);
        });
    });
});