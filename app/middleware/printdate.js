

/**
 * 
 * @param {*} options 中间件的配置项
 * @param {*} app 当前应用的application
 */
module.exports = (options,app) => {
    console.log('++++++++',options);
    return async function printDate(ctx,next) {
        console.log(new Date());
        await next()
    }
}