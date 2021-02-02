module.exports = (options,app) => {
    return async function forbidIp(ctx,next) {
        // 要屏蔽的ip
        var forbidips=options.forbidips
        var clientIp = ctx.request.ip

        var hasip = forbidips.some(function(val) {
            if(clientIp == val) {
                return true
            }
        })
        if(hasip) {
            ctx.status=403
            ctx.message = 'this ip is forbid'
        } else {
            await next()
        }
    }
}