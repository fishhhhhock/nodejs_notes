// package.json文件中有一个dependencies节点，专门记录使用npm install命令安装了哪些包
// 当下载别人的项目需要安装包时，可以一次性安装所有的包
// 执行npm install 命令时，npm包管理工具 会先读取package.json中的dependencies节点
// 读取到记录的所有依赖包名称和版本号之后，npm包管理工具会把这些包一次性下载到项目里
// 卸载包：npm uninstall
// 某些包只在项目开发阶段用到，项目上线之后不会用到，这些包安装到devDependencies
// 如果项目开发和上线都会用到，则记录到dependencies中
// 判断放在哪个节点可以看npmjs官网搜索

// 安装指定的包，并记录到devDependencies节点中
// npm i 包名 -D (npm install 包名 --save-dev)

// 切换npm的下包镜像源：从官网切换到淘宝镜像下包的服务器地址
// 查看当前的下包镜像源(国外的官方地址)
// npm config get registry
// 将下包的镜像源切换为淘宝镜像源
// npm config set registry=https://registry.npm.taobao.org/
// 检查镜像源是否切换成功
// npm config get registry
