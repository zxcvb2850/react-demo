const router = require('koa-router')()

router.prefix('/users')

router.get('/info', function (ctx, next) {
  ctx.body = {
    code: 0,
    msg: '获取失败'
  }
})

module.exports = router
