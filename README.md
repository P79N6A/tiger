
# About tiger
**Tiger is a platform to create a project, including simple Cli and Components**

## Install tiger
In order to use it anywhere, First of all, we need to install tiger NPM module globally.

So, run the following commands.
```
tnpm install -g @tencent/tiger
```
## Use tiger
**1. For Help**

This step is very important.

For the first time to use it, you need to get more information about tiger. 

For example, The most important is **How to use it?**

For that, you can run it with:
```
tiger -h
```
The results is looks like this following after run it.
```
Optoins:
  -V, --version output the version number
  -H, --help    output usage information

Commands:
  add|ap        Add a new project
  add|ac        Add a new Component
  list|l        List all the project && components 
  init|i        Generate a new project
  delete|dp     Delete a project
  delete|dc     Delete a component
```
As is shown in the above list. A lot of commands are available for you to use. 

Next, About all commands, we need to know how to run it.

**2. About Commands**
```
tiger list  
tiger init 
tiger add -c(ac)
tiger add -p(ap)
tiger delete -c(dc)
tiger delete -p(dp)
```
## Tiger structure
```
├── dist
  ├── bin
  │   └── tiger           # 命令行文件
  ├── commands
  │   ├── add-c.js        # 添加组件执行
  │   ├── add-p.js        # 添加模板执行    
  │   ├── delete-c.js     # 删除组件执行
  │   ├── delete-c.js     # 删除模板执行
  │   ├── init.js         # 初始化项目执行
  │   └── list.js         # 罗列项目列表执行   
  ├── .gitignore          # GIT非提交文件
  ├── package.json        # 依赖安装目录
  ├── README.md           # 脚手架使用说明 
  ├── templates.json      # 模板装载文件 
  └── utils.js            # 罗列项目功能
```
## That's It
This is all about the NPM module - @tencent/tiger. You can download it and create your app quickly.
