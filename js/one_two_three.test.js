const logic = require("./one_two_three")

test("Test draw game",()=>{
    //0 thua 1 hoa 2 thang
    //1 bua 2 keo 3 bao
    expect(logic(1,1)).toEqual(1)
    expect(logic(2,2)).toEqual(1)
    expect(logic(3,3)).toEqual(1)
})
// trai: nguoi ; phai : AI
test("Test win game",()=>{
    //0 thua 1 hoa 2 thang
    //1 bua 2 keo 3 bao
    expect(logic(1,2)).toEqual(2)
    expect(logic(3,1)).toEqual(2)
    expect(logic(2,3)).toEqual(2)
})

test("Test lose game",()=>{
    //0 thua 1 hoa 2 thang
    //1 bua 2 keo 3 bao
    expect(logic(1,3)).toEqual(0)
    expect(logic(2,1)).toEqual(0)
    expect(logic(3,2)).toEqual(0)
})