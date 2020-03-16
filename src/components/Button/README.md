## Button 按钮


### 概述
基础组件，触发业务逻辑时使用。

### 示例

<template>
    <div>
        <hd-button :eleData="$mock.button"></hd-button>
    </div>
</template>

### source code

<details>
    <summary style="outline: none; color: #409eff; margin: 10px 0;">显示源码</summary>

```vue
<template>
    <div>
        <hd-button :eleData="button"></hd-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            button: {
                property: {
                    basic: { name: "元素名称" },
                    data: {
                        content: "按钮",
                        action: {
                            type: 0,
                            value: "http://www.baidu.com"
                        }
                    },
                    style: {
                        backgroundColor: "rgba(7, 193, 96, 1)",
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 1)",
                        textAlign: "center",
                        width: "100%",
                        borderRadius: "4px",
                        fontFamily: "Helvetica"
                    },
                    moduleStyle: {
                        paddingBottom: "10px",
                        paddingTop: "10px"
                    }
                }
            }
        }
    }
}
</script>
```

</details>


### API

#### Button Props

 data      | 类型      |  属性说明
 -------- | :-----------:| :-----------:
 content     | string  | 按钮文案  
 action     |  string  | 按钮交互 [通用属性](/common
 /attr/)

 style      | 类型      |  属性说明
 -------- | :-----------:| :-----------:
 backgroundColor     | string  | 按钮背景色  
 borderRadius     | string `<px>` | 按钮圆角  
 width     | string `<%>` | 按钮宽度  
 height     | string `<px>` | 按钮高度  
 fontSize     |string `<px>` | 字号  
 color     | string  | 字色  
 fontFamily     | string  | 字体  
 lineHeight     | string `<px>` | 行高  
 letterSpacing     | string `<px>` | 字距  
 fontWeight     | string  | 字重  
 fontStyle     |  string  | font-family 字体下的 italic 或 oblique 样式  
 textDecoration     |  string  | 字体下划线  
 textAlign     |  string  | 文字居中  


 moduleStyle      | 类型      |  属性说明
 -------- | :-----------:| :-----------:
 padding[Left/Top/Right/Bottom]     |  string  | 位置 [通用样式](/common/style/)    
