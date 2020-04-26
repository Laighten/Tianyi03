const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
Random.extend({
  a: function(date) {
      var as=["敏感图片","敏感文字","敏感视频"]
      return this.pick(as)
  },
  b: function(date) {
    var bs=["政治敏感","暴力敏感","黄色敏感","涉毒敏感","涉暴敏感","涉赌敏感"]
    return this.pick(bs)
  },
  c: function(date) {
    var cs=["高级","中级","低级"]
    return this.pick(cs)
  }
})
// 随机生成文章数据
const postData = req => {
  
  console.log(req) // 请求体，用于获取参数

  let posts = [] // 用于存放文章数据的数组
  
  
  for (let i = 0; i < 5; i++) {
    let post = {
      //title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
      //icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
      //author: Random.cname(), // 随机生成名字
      //date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
      
      SourseFrom:Random.a(),
      SenstiKind:Random.b(),
      Class:Random.c(),
      time:Random.datetime(),
    }
    if(post.Class=="高级"){
      posts.push(post)
    }
    
  }
  
  // 返回状态码和文章数据posts
  // return {
  //   // code,
      
  //     posts
  // }
  if(posts[0]==null){
    return null
  }else return posts

}


// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/posts`, 'post', postData);
// Mock.mock(`${domain}/getWarning`, 'get', getWarning);
