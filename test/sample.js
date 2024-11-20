// 测试注释颜色
function testFunction() {
    const variable = "测试字符串颜色";
    let number = 42;
    
    if (number > 0) {
        console.log(`测试模板字符串 ${variable}`);
    }
    
    // 测试关键字高亮
    return {
        async test() {
            await Promise.resolve();
        }
    };
}

class TestClass {
    constructor() {
        this.property = 'test';
    }
} 