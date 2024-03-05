import { axios } from "taro-axios";
export const API_PATH = "https://qqlykm.cn/api/free/ip/get";

enum Method {
  GET = "GET",
  POST = "POST"
}

enum RequestHeader {
  FD = "form-data",
  MULTIPARTFD = "multipart/form-data",
}

enum PhpAction {
  TestAction = "TestAction",
}

enum Action {
  TestAction = "TestAction",
}

export const baseAxios = axios.create({
  baseURL: API_PATH,
  timeout: 5000 // 设置超时时间为5秒
});

// 添加请求拦截器
baseAxios.interceptors.request.use(
  function(config) {
    // 在发送请求之前给请求加上全局token处理
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
baseAxios.interceptors.response.use(
  async (response): Promise<any> => {
    if (response.status === 200) {
      return response;
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

const phpCommon = ({
  method,
  action,
  params,
  type
}: {
  method: Method;
  action: string;
  params: any;
  type?: RequestHeader;
}) => {
  // 写成switch case的方式
  switch (method) {
    case Method.GET:
      return baseAxios.get("", { params: { ...params, s: action } });
    case Method.POST:
      if (type === RequestHeader.FD) {
        // 正常的表单提交请求
        return baseAxios.post("", params, {params:{s: action} });
      } else {
        // 用&连接放在body里提交请求
        return baseAxios.post("", params, { headers: { "Content-Type": "application/x-www-form-urlencoded",params:{s: action} } });
      }
  }
};

export const testPhpApi = (params) => {
  return phpCommon({method: Method.GET,action: PhpAction.TestAction,params: {...params}});
}