const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// 安装如下命令中的包，实现对antd按需打包，命令: yarn add react-app-rewired customize-cra babel-plugin-import
module.exports = override(
    // 针对antd实现按需打包，根据import来打包(使用babel-plugin-import)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    // 对antd的主题进行自定义
    addLessLoader({
        javascriptEnabled: true,
    }),
);