// 使用require方法加载需要的内置模块、用户自定义模块、第三方模块
// 使用require方法加载其他模块时，会执行被加载模块中的代码
// 在使用require加载用户自定义模块期间，可以省略.js的后缀名
// 每个.js自定义模块都有一个module对象，它存储了和当前模块有关的信息
console.log(module);
// 在一个自定义模块中，默认情况下，module.exports = {}
// 在外界使用require导入一个自定义模块的时候，得到的成员就是模块中通过module.exports指向的那个对象
// 为了简化向外共享成员的代码，Node提供了exports对象。默认情况下
// exports和module.exports指向同一个对象，最终共享的结果还是以module.exports指向的对象为准