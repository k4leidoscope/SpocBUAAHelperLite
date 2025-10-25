# SpocBUAAHelperLite
智学北航课程测试工具 Fiddler Script简易实现

仅用于测试相关接口的稳定性

由于FiddlerClassic最新版Script移除了第三方API，故需自行下载相关dll：[Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json/releases)

## 部署测试工具步骤：
将.Net3.5对应`Newtonsoft.Json.dll`放在D盘

Fiddler->Tools->Options->Scripting：
在Reference下添加：`D:\Newtonsoft.Json.dll`

Laguage改为C#，重启Fiddler

在Script部分开头添加`using Newtonsoft.Json.Linq;`

`OnBeforeRequest()`函数内添加[tamper.js](https://github.com/k4leidoscope/SmartBUAAHelperLite/tamper.js)中的内容

Save后，在spoc.buaa中播放所需课程，完成进度增加代表网站接口稳定运行