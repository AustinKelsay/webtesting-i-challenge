const enhancer = require('./enhancer.js');


it("should increase enhancement by 1 unless enhancement is already 20", () => {
    const item = {name: "Mace", durability: 75, enhancement: 15};
    const masterItem = {name: "Mace", durability: 75, enhancement: 20};

    expect(enhancer.succeed(item)).toEqual({name: "Mace", durability: 75, enhancement: 16 });
    expect(enhancer.succeed(masterItem)).toEqual(masterItem);
})
