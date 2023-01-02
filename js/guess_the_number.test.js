
const point = require('./guess_the_number')

test('make sure function is right',()=>{
    expect(point(2,2,4,2)).toEqual(3)
    expect(point(3,3,9,0)).toEqual(0)
    expect(point(2,3,6,2)).toEqual(1)
})