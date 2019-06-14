//这里增加了登陆接口的配置，
//登录接口为post请求的 ip地址为：http://localhost:3000/login ，data参数：{"username":"admin","password":"123"}
const adminJson = {
  id: 1,
  name: 'Admin',
  authorities: 'admin',
};
const userJson = {
  id: 2,
  name: 'User',
  authorities: 'user',
};

module.exports = (req, res, next) => {
  console.log(`------------------::::${req.method}`);
  console.log(`---------、---------::::${req.path}`);
  console.log(`------------------::::${JSON.stringify(req.body)}`);
  if (req.method === 'POST' && req.path === '/login') {
    console.log(`ppppppppp::::${888822}`);
    if (req.body.username === 'admin' && req.body.password === '123') {
      res.status(200).json(adminJson);
    } else if (req.body.username === 'user' && req.body.password === '123') {
      res.status(200).json(userJson);
    } else {
      res.status(400).json({ error: 'wrong password' });
    }
  } else {
    next();
  }
};
