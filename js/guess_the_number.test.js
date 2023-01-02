
const point = require('./guess_the_number')

test('Check score increases with correct answer',()=>{
    expect(point(2,2,4,2)).toEqual(3)
})
test('Check score drop when wrong answer',()=>{
    expect(point(2,3,6,2)).toEqual(1)
})
test('Scores of 0 will not decrease anymore',()=>{
    expect(point(3,3,9,0)).toEqual(0)
})