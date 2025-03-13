export default {
    development: {
        // 开发环境接口请求，通过代理解决跨域问题
        host: '/api', // 使用相对路径，由 Vite 或 Webpack 代理到目标地址
        // 开发环境 cdn 路径
        cdn: '',
    },
    test: {
        // 测试环境接口地址
        host: 'https://tjxt-admin-t.itheima.net/api',
        // 测试环境 cdn 路径
        cdn: '',
    },
    product: {
        // 正式环境接口地址
        host: 'http://api.CloudCourse.com',
        // 正式环境 cdn 路径
        cdn: '',
    },
    pro: {
        // 正式环境接口地址
        host: 'https://tjxt-api.itheima.net',
        // 正式环境 cdn 路径
        cdn: '',
    },
};