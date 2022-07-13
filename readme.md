# 테스트 자동화와 Mocha
**테스트 자동화는 앞으로 풀어야 할 과제에서 뿐만 아니라 현업에서도 광범위하게 쓰입니다.**

## 테스트의 필요성
테스팅 자동화는 테스트 코드가 실제 동작에 관여하는 코드와 별개로 작성되었을 때 가능합니다. 테스트 코드를 이용하면 함수를 다양한 조건에서 실행해 볼 수 있는데 이때 실행 결과와 기대 결과를 비교할 수 있습니다.   
출처 : https://ko.javascript.info/testing-mocha

---

## 설치
전역으로 설치하면 mocha 명령어로 실행할 수 있습니다.   
```
$ npm i -D mocha // 개발과정과 배포에 사용되는 모듈이기 때문에 -D(개발 의존성)옵션으로 설치
$ npx mocha --version
```   

## 테스트 케이스 작성
  
[테스트 대상 모듈](ex01.js)  
Mocha를 사용하여 기본적인 테스트케이스를 작성하였다.    
```js
exports.hello = () => 'Hello World';
```  
[테스트 케이스](test/ex01.js)   
```test/```  디렉토리에 별도의 테스트 파일을 생성한 후 테스트할 코드를 require()로 가져와 테스트를 진행하였다.      
```js
const { describe } = require('mocha');
const { hello } = require('../ex01');
const assert = require('assert');

describe('Hello World', function(){
    it('hello() test', function(){
        assert.strictEqual(hello(), "Hello World");
    });
});
```   

**결과**   
```
$ npx mocha test/ex01
```   
![image](https://user-images.githubusercontent.com/50813232/178694876-8a94e30c-fa2b-4965-849d-cda450bb576c.png)   




