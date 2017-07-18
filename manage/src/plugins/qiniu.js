// 定义鉴权对象
var accessKey = '4Lq-3jHskDgYQ9NYjA5DKYBKQXCaf79pu2ZhO5Pr';
var secretKey = 'nNvKlnjkNzXafHL-jfbh4gACrCmNd1u71lW90Pky';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var bucket = 'http://blog.create.jixianu.cn';
// 创建简单上传凭证
var options = {
  scope: bucket,
  returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);