function divide(a,b){
    if(b==0){
        throw Error('除数不能为零');
    }
    if(isNaN(a)||isNaN(b)){
        throw Error('除数和被除数都必须是数字');
    }
    window.name='zhenglei';
    return a/b;
}


var should = chai.should();
describe('我要测试一个除法的函数',function(){
    it('4除以2等于2',function(){
        divide(4,2).should.equal(2);
    });
    it('除数不能为零',function(){
        (function(){
            divide(4,0)
        }).should.throw('除数不能为零');//包一个自执行函数
    });
    it('除数和被除数都必须是数字',function(){
        (function(){
            divide("a","b")
        }).should.throw('除数和被除数都必须是数字');
    });
    it('window.name应该已经赋值了',function(){
        (window.name).should.equal('zhenglei');
    })
})