exports = module.exports = [{
  method: 'GET',
  path: '/api/user',
  impl: 'account.userById'
}, {
  method: 'POST',
  path: '/api/user',
  impl: 'account.createUser'
}, {
  method: 'GET',
  path: '/api/getList',
  impl: 'account.getList'
}, {
  method: 'GET',
  path: '/api/queryList',
  impl: 'account.queryList'
}];