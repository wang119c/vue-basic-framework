项目参考vue[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

# 组件
所有的Component文件都是以大写开头 (PascalCase),但除了 index.vue。

例子：
```
@/components/BackToTop/index.vue
@/components/Charts/Line.vue
@/views/example/components/Button.vue
```
# JS 文件
所有的.js文件都遵循横线连接 (kebab-case)。

例子：

```
@/utils/open-window.js
@/views/svg-icons/require-icons.js
@/components/MarkdownEditor/default-options.js
```

# Views
在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子:
```
@/views/svg-icons/index.vue
@/views/svg-icons/require-icons.js
```

# css
在css 


> 使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。

> views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)

> 页面的url 也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一

> 没有大小写敏感问题




