import Mock from 'mockjs'

Mock.mock('/api/login', 'post',function (options) {
  let data = JSON.parse(options.body);
  let response = {};
  response.errors = {};

  if (!data.username || !data.password) {
    if (!data.username)
      response.errors.username = '没有姓名';
    if (!data.password)
      response.errors.password = '没有密码';

    return response;
  }

  delete response.errors;
  return response.message = '成功了';


});
