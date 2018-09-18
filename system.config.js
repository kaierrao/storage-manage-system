
const debug = process.env.NODE_ENV == 'development';
//服务器端口
const serverPort = '4000';

//服务器地址
//开发模式，服务器地址
const httpServerDev = 'http://localhost:'+serverPort;
//跨域请求头配置
const defaultOptionsDev = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'content-type': 'application/json'
    },
};

//部署模式，服务器地址
const httpServerPro = '';
//同域请求头配置
const defaultOptionsProd = {
    credentials: 'same-origin',
    headers: {
		'content-type': 'application/json'
    },
};


//数据库地址
//开发模式数据库地址
const mongooseConnectDev = "mongodb://localhost:27017/accountSystem";
//部署模式数据库地址
//const mongooseConnectPro = "mongodb://localhost:27017/accountSystem";



const uploadImgServerDev = 'localhost';
//onst uploadImgServerPro = '192.168.195.74'; 

module.exports = {
	httpServer: debug ? httpServerDev:httpServerPro,
	serverPort: serverPort,
	defaultOptions: debug ? defaultOptionsDev : defaultOptionsProd,
	mongooseConnect: debug ? mongooseConnectDev:mongooseConnectPro,
	uploadImgServer: debug ? uploadImgServerDev:uploadImgServerPro,
	//是否支持注册功能
	register: debug
};