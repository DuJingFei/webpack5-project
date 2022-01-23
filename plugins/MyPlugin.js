class MyPlugin {
  constructor(options) {
      
  }

  apply(compiler) {
    compiler.hooks.emit.tap('插件名称', (compilation) => {
      for (const name in compilation.assets) {
        if (name.endsWith('.css')) {
            // 获取处理之前的内容
            const notes = compilation.assets[name].source();
            // 将原来的内容，通过正则表达式匹配后删除注释
            const noNotes = notes.replace(/\/\*[\s\S]*?\*\//g, '');
            // 将处理后的结果，替换掉
            compilation.assets[name] = {
                source: () => noNotes,
                size: () => noNotes.length
            }
          }
      }
    })
  }
}

module.exports = MyPlugin