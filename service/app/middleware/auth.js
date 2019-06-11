module.exports = (options, app) => {
   
    //返回一个异步的方法
    return async function auth(ctx,next){


            // console.log(options);

            await next();
    }

};