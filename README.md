简体中文 | [English](./README_EN.md)
<br>
<br>
<p align="center">
<img src="./assets/extension-icon.png" width="140" height="140" align="center" />
</p>

<h1 align="center">CJK 文本助手 <sup>for Raycast</sup></h1>

<p align="center">

改进中日韩（CJK）文本的排版（尤其是与英文混排），提供以下两个命令：
* **Improve Copied Text**: 优化从 PDF 或 OCR 中复制的文本格式（移植自 [paper-assistant](https://github.com/laorange/paper-assistant)）
* **Format Text**: 在 CJK 字符和英文字符之间添加空格。（通过 [pangu.js](https://github.com/vinta/pangu.js))

</p>

## 动机

最近，我经常从一些论文和书籍中复制内容（大多数是 PDF），在发现格式问题需要修正后找到了 [paper-assistant](https://github.com/laorange/paper-assistant) 这个工具，它非常好用！但是我同时也在用一个 Raycast 插件——[raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format)，他使用 [pangu.js](https://github.com/vinta/pangu.js) 来在中英文之间添加空格。某一天，我依旧复制出来带有空格的文本的时候我在想，为什么不把他们结合在一起呢？于是他就诞生了。

## 安装

目前，你需要克隆这个仓库并在开发者模式下本地安装。

你需要安装 Node.js 和 pnpm。

1. 克隆这个仓库 `git clone https://github.com/maxchang3/raycast-CJK-text-assistant.git`
2. 进入文件夹 `cd raycast-CJK-text-assistant`
3. 安装依赖 `pnpm install`
4. 在 Raycast 中运行 Import Extension 并选择文件夹

由于原始项目的协议原因，目前**没有可能**发布到 [raycast/extensions](https://github.com/raycast/extensions)。

## 特性

### Format Text（格式化文本）

在 CJK 字符和英文字符之间添加空格。

### Improve Copied Text（优化复制的文本）

继承了 [paper-assistant](https://github.com/laorange/paper-assistant) 的几乎所有功能：

* 删除引用角标，如: [1], [2, 3], [4-7], (1), (2, 3), (4-7)...
* 全角字符转半角字符
* 批量替换字符
* 汉字繁简转换
* 中英文标点转换
* ······

和原始项目相比：
* 默认开启了**中文排版优化**，配置默认值见 [CONFIG.MD](CONFIG.md)
* 对于行尾换行符会单独保留

## Credits

* [paper-assistant](https://github.com/laorange/paper-assistant) 原始项目。
* [raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format) 灵感来源，部分代码。
* [raycast-multi-translate](https://github.com/antfu/raycast-multi-translate) 参考了文档格式。

## License

[AGPL-3.0](./LICENSE)
