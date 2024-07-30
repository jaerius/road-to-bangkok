# 솔리디티 베이직 모듈 구성
--- 
# 개요

* 솔리디티 베이직 모듈은 EVM 스마트 컨트랙트 작성을 위한 솔리디티 언어 이해 및 실습 자료를 제공한다. 모듈은 솔리디티 언어의 다양한 문법 실습을 비롯해 ERC-20, ERC-721과 같은 컨트랙트 제작 실습 미션을 포함한다.
* 모듈은 아티클과 미션으로 구성된다. 아티클이란 특정 개념 혹은 현상을 설명하는 자료이다. 아티클은 기술 및 배경의 정의와 출현 배경, 구성 요소, 구동 원리, 특장점, 활용 방안을 포함한다. 반면 미션은 실습을 통해 기술 및 개념 체득을 유도하는 자료이다. 미션은 결과물 설명을 포함하는 목적 및 배경, 사전 설치, 코드와 설명을 포함한 수행 방법, 제출 내용을 포함한다.

# 모듈 구성

솔리디티 베이직 모듈의 구성은 다음과 같다

|  | 구분 | 설명 | 자료 링크 |
| --- | --- | --- | ----- |
| 솔리디티 오버뷰 | 아티클 | 스마트 컨트랙트와 솔리디티 언어의 특징 이해 | [솔리디티 오버뷰](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/01.%20Solidity%20Overview.md) |
| 리믹스 사용법 | 아티클 | 솔리디티 컨트랙트 배포를 위한 Ethereum Remix 사용법 이해 | [리믹스 사용법](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/02.%20Remix.md) |
| Hello World | 미션 | Hello World 컨트랙트 배포 실습 | [Hello World](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/03.%20HelloWorld.md) |
| Counter Contract | 미션 | Counter Contract 배포 실습 | [Counter Contract](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/04.%20Counter%20Contract.md) |
| Primitive Data Type | 미션 | boolean, uint, int, address 그리고 bytes 활용 실습 | [Primitive Data Type](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/05.%20Primitive%20Data%20Types.md) |
| Variables | 미션 | Local, State, Global 변수 활용 실습 | [Variables(제작 중)](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/06.%20Variables.md) |
| Constant/Immutable | 미션 | Constant와 Immutable 활용 실습 | [Constant/Immutable](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/07.%20Constant%2C%20Immutable.md) |
| State Variable | 미션 | State Variable 활용 실습 | [State Variable](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/08.%20State%20Variable.md) |
| Gas / ETH Unit | 미션 | Gas와 ETH Unit 활용 실습 | [Gas / ETH Unit](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/09.%20Gas%2C%20Gasfee%2C%20Ether%20Units.md) |
| If/Else | 미션 | If/Else 활용 실습 | [If/Else](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/10.%20if%2C%20else.md) |
| Loop | 미션 | While/Do-While/For 루프 활용 실습 | [Loop](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/11.%20Loop(for%2C%20while).md) |
| Mapping | 미션 | Mapping 활용 실습 | [Mapping](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/12.%20Mapping.md) |
| Array | 미션 | Array 활용 실습 | [Array](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/13.%20Array.md) |
| Enum | 미션 | Enum 활용 실습 | [Enum](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/14.%20Enum.md) |
| Struct | 미션 | Struct 활용 실습 | [Struct](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/15.%20Struct.md) |
| Data Location | 미션 | Storage, Memory, CallData 활용 실습 | [Data Location](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/16.%20Data%20Locations.md) |
| Transient Memory | 미션 | Transient memory 활용 실습 | [Transient Memory](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/17.%20Transient%20Storage.md) |
| Function | 미션 | Function 기본 구조, 작성법 실습 | [Function](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/18.%20Function.md) |
| View/Pure | 미션 | View/Pure Function 활용 실습 | [View/Pure](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/19.%20View%20and%20Pure%20Function.md) |
| Error | 미션 | Assert, Require, Revert 활용 실습 | [Error](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/20.%20Error.md) |
| Function Modifier | 미션 | Function Modifier 활용 실습 | [Function Modifier](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/21.%20Function%20Modifier.md) |
| Events | 미션 | Event 선언 및 사용 실습 | [Events](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/22.%20Events.md) |
| Constructor | 미션 | Constructor 활용 실습 | [Constructor](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/23.%20Constructor.md) |
| Inheritance | 미션 | Inheritance 활용 실습 | [Inheritance](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/24.%20Inheritance.md) |
| Visibility | 미션 | Public, Private, Internal, External 활용 실습 | [Visibility](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/25.%20Visibility.md) |
| Interface | 미션 | Interface 활용 실습 | [Interface](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/26.%20Interface.md) |
| Payable | 미션 | Payable 활용 실습 | [Payable](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/27.%20Payable.md) |
| Sending Ether | 미션 | Sending Ether 활용 실습 | [Sending Ether](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/28.%20Sending%20Ether.md) |
| Calling Other Contract | 미션 | Calling Other Contract 활용 실습 | [Calling Other Contract](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/29.%20Calling%20other%20contract.md) |
| Contract that<br>Creates Contract | 미션 | Contract that creates contract 활용 실습 | [Contract that](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/30.%20Contract%20that%20creates%20Contract.md)<br>[Creates Contract](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/30.%20Contract%20that%20creates%20Contract.md) |
| Import | 미션 | Import 활용 실습 | [Import](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/31.%20Import.md) |
| Library | 미션 | Library 활용 실습 | [Library](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/32.%20Library.md) |
| ABI Encode/Decode | 미션 | ABI Encode/Decode 활용 실습 | [ABI Encode/Decode](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/33.%20ABI%20encode%20decode.md) |
| Fallback, Receive | 미션 | Fallback과 Receive 함수 활용 실습 | [Fallback, Receive](https://github.com/LudiumAgwn/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/34.%20Fallback%2C%20Receive.md) |
| Delegate Call | 미션 | Delegate Call 함수 활용 실습 | [Delegate Call](https://github.com/LudiumAgwn/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EB%AC%B8%EB%B2%95/35.%20delegate_call.md) |
| Fungible Token | 미션 | ERC-20 표준에 부합한 토큰 발행 및 전송 기능 실습 | [Fungible Token](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EC%8B%A4%EC%8A%B5/Fungible_Token.md) |
| Non Fungible Token | 미션 | ERC-721 표준에 부합한 토큰 발행 및 소각 기능 실습 | [Non Fungible Token](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EC%8B%A4%EC%8A%B5/Non-Fungible%20Token.md) |
| English Auction | 미션 | NFT에 대해 7일간 경쟁 입찰이 가능한 컨트랙트 배포 실습 | [English Auction](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EC%8B%A4%EC%8A%B5/English_Auction.md) |
| Crowd Funding | 미션 | 토큰 모금과 환불이 가능한 컨트랙트 배포 실습 | [Crowd Funding](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EC%8B%A4%EC%8A%B5/CrowdFunding.md) |
| Proxy Contract | 미션 | 업그레이드가 가능한 Proxy 컨트랙트 배포 실습 | [Proxy Contract](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0%20%EB%B2%A0%EC%9D%B4%EC%A7%81/%EC%8B%A4%EC%8A%B5/UpgradeableProxy.md) |

# 제안 및 추가

* 솔리디티 베이직 교육 모듈은 오픈 소스 컨트리뷰션을 통해 지속적으로 자료를 보완, 발전시킨다
* 현존하는 모듈에 제안을 원하는 빌더는 [Issue를 통해 제안 내용을 작성](https://github.com/Ludium-Official/road-to-bangkok/issues)하거나 리포를 포킹해서 개선된 내용을 [Pull Request로 바로 요청](https://github.com/Ludium-Official/road-to-bangkok/pulls)할 수도 있다
* 제안, 요청된 내용은 루디움에서 검토 이후 적절성을 판단하여 자료를 업데이트 한다