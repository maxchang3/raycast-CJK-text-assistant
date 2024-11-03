<br>
<br>
<p align="center">
<img src="./assets/extension-icon.png" width="140" height="140" align="center" />
</p>

<h1 align="center">中文复制助手 <sup>for Raycast</sup></h1>
<h1 align="center">Chinese Copy Assistant</h1>

<p align="center">

改进从 PDF 或 OCR 复制的中文文本格式。智能删除空行、空格、乱码，[paper-assistant](https://github.com/laorange/paper-assistant) 的 [Raycast](https://www.raycast.com/) 移植版本。

Improve the formatting of Chinese text copied from a PDF or OCR. A [Raycast](https://www.raycast.com/) port of [paper-assistant](https://github.com/laorange/paper-assistant).

</p>

## Motivation 动机

最近，我经常从一些论文和书籍中复制内容（大多数是 PDF），在发现格式问题需要修正后找到了 [paper-assistant](https://github.com/laorange/paper-assistant) 这个工具，它非常好用！但是我同时也在用一个 Raycast 插件——[raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format)，他也有类似的功能，不过只是单纯调用 pangu 来加空格。某一天，我依旧复制出来带有空格的文本的时候我在想，为什么不把他们结合在一起呢？于是他就诞生了。

Recently, I've been copying content from various papers and books (mostly PDFs), and when formatting issues cropped up, I discovered the incredibly useful [paper-assistant](https://github.com/laorange/paper-assistant) tool. At the same time, I was also using a Raycast plugin—[raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format)—which has similar functionality but primarily uses pangu to add spaces. One day, while pasting text with extra spaces, it struck me: why not combine the two? And that’s how this idea came to life.

## Installation 安装

目前，你需要克隆这个仓库并在开发者模式下本地安装。

你需要安装 Node.js 和 pnpm。

1. 克隆这个仓库 `git clone https://github.com/maxchang3/raycast-chinese-copy-assistant.git`
2. 进入文件夹 `cd raycast-chinese-copy-assistant`
3. 安装依赖 `pnpm install`
4. 在 Raycast 中运行 Import Extension 并选择文件夹

由于原始项目的协议原因，目前**没有可能**发布到 [raycast/extensions](https://github.com/raycast/extensions)。

Currently, you need to clone this repo and install it locally in developer mode.

You will need to have Node.js and pnpm installed.

1. Clone this repo `git clone https://github.com/maxchang3/raycast-chinese-copy-assistant.git`
2. Go to the folder `cd raycast-chinese-copy-assistant`
3. Install dependencies `pnpm install`
4. Go to Raycast, run Import Extension and select the folder

Due to licensing reasons, there are **no possibility** to publish this to [raycast/extensions](https://github.com/raycast/extensions).

## Features 特性

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

Inherits almost all features from [paper-assistant](https://github.com/laorange/paper-assistant):

* Remove reference marks, such as: [1], [2, 3], [4-7], (1), (2, 3), (4-7)...
* Convert full-width characters to half-width characters
* Batch replace characters
* Convert Chinese characters between simplified and traditional
* Convert Chinese and English punctuation
* ······

Compared to the original project:
* **Chinese typesetting optimization** is enabled by default, see [CONFIG.MD](CONFIG.md) for default values
* For line breaks at the end of a line, they will be retained separately

## Credits

* [paper-assistant](https://github.com/laorange/paper-assistant) 原始项目。
* [raycast-text-format](https://github.com/mrgeneralgoo/raycast-text-format) 灵感来源，部分代码。
* [raycast-multi-translate](https://github.com/antfu/raycast-multi-translate) 参考了文档格式、插件结构。

## License

[AGPL-3.0](./LICENSE)
