export default function (req, res, next) {
  // req 是 Node.js http request 对象
  // console.log(req,res)
  res.status(200).send('<p>12355</p>')
  // res 是 Node.js http response 对象
  //next是一个调用下一个中间件的函数
  // 如果您的中间件不是最终执行，请不要忘记在最后调用next！
  // next()
}

