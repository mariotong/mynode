/**
 * Created by Administrator on 2016/3/10.
 */
function after(times,func){
    if(times<=0){
        return func()
    }
    return function(){
        if(--times<1){
            return func.apply(this,arguments);
        }
    }
}
var eat=after(3,function(){
    console.log('吃光苹果');
});
eat();
eat();
eat();

