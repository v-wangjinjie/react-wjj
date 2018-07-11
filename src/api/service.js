import http from './http.js'; // 导入我们封装好的axios对象
import apis from './apis.js'; // 导入我们封装好的apis对象

// 从外部接受参数，没有参数默认为空对象
// return对应的get/post方法，第一个填路径，第二个给参数对象
const getExampleData = (params = {}) => {
  return http.get(apis.getExampleData, params);
}

export default {
  getExampleData
}