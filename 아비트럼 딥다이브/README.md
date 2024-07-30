# 아비트럼 딥다이브 모듈 구성
--- 
# 개요

* 아비트럼 모듈은 아비트럼의 기술을 활용한 스마트 컨트랙트, 웹3 디앱, 롤업 체인 개발자를 육성하기 위한 자료를 제공한다.
* 모듈은 아티클과 미션으로 구성된다. 아티클이란 특정 개념 혹은 현상을 설명하는 자료이다. 아티클은 기술 및 배경의 정의와 출현 배경, 구성 요소, 구동 원리, 특장점, 활용 방안을 포함한다. 반면 미션은 실습을 통해 기술 및 개념 체득을 유도하는 자료이다. 미션은 결과물 설명을 포함하는 목적 및 배경, 사전 설치, 코드와 설명을 포함한 수행 방법, 제출 내용을 포함한다.

# 모듈 구성

아비트럼 딥다이브 모듈의 구성은 다음과 같다

|  | 구분 | 설명 | 자료 링크 |
| --- | --- | --- | ----- |
| 아비트럼 개요 | 아티클 | 아비트럼 네트워크의 탄생 배경과 롤업의 구동 방식 | [아비트럼 개요](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/%EC%95%84%ED%8B%B0%ED%81%B4/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B0%9C%EB%B0%9C%EC%9E%90%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Arbitrum%20intro.md) |
| L1 -> L2 메시지 보내기 | 미션 | 이더리움 세폴리아 테스트넷(L1)에서 아비트럼 세폴리아<br>테스트넷(L2)으로 메시지를 보내는 디앱 제작하기 | [Greeter Example](https://github.com/Ludium-Official/road-to-bangkok/tree/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/L1ToL2) |
| L2 -> L1 메시지 보내기 | 미션 | 아비트럼 세폴리아 테스트넷(L2)에서 이더리움 세폴리아<br>테스트넷(L1)으로 메시지를 보내는 디앱 제작하기 | [Outbox Example](https://github.com/Ludium-Official/road-to-bangkok/tree/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/L2ToL1) |
| 투표 디앱 만들기 | 미션 | 아비트럼 네트워크에서 구동되는 투표 디앱 만들기 | [Arbitrum Dapp](https://github.com/Ludium-Official/road-to-bangkok/tree/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Arbitrum%20DApp) |
| 오르빗 체인의 이해 | 아티클 | 오르빗 체인과 AnyTrust 데이터 가용성 이해 | [오르빗 체인](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C/%EC%95%84%ED%8B%B0%ED%81%B4/Orbit%20%EC%B2%B4%EC%9D%B8%20%EB%AF%B8%EC%85%98.md) |
| 오르빗 체인 만들기 | 미션 | 아비트럼 오르빗체인, Anytrust의 개념 이해와 오르빗<br>체인 기반 L3 만들기 실습 | [오르빗체인 만들기](https://github.com/Ludium-Official/road-to-bangkok/tree/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Orbit%20Chain) |
| Styuls SDK 설치하기 | 아티클 | Stylus SDK의 의미와 설치 방법 | [Styulus](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/%EC%95%84%ED%8B%B0%ED%81%B4/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B0%9C%EB%B0%9C%EC%9E%90%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Geth%2CWAVM.md) |
| Byte in, Byte Out | 미션 | 러스트 언어 기반 Stylus SDK의 스택 메모리 구조 실습 | [Byte in, Byte Out](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/01.Bytes%20In%20Bytes%20Out.md) |
| Storage | 미션 | Counter 예시를 통한 Storage 구동 실습 | [Storage](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/02.Solidity_Storage.md) |
| Primitive Data Type | 미션 | U256, I256, Address, book 데이터 활용 실습 | [Primitive Data Type](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/03.Primitive%20Data%20Types.md) |
| Variable | 미션 | 러스트 언어를 통한 변수 선언 실습 | [Variables](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/04.Variables.md) |
| Constants | 미션 | 러스트 언어를 통한 상수 선언 실습 | [Constants](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/05.Constants.md) |
| Events | 미션 | 이벤트와 로그 생성 방식 실습 | [Events](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EA%B5%90%EC%9C%A1%20%EB%AA%A8%EB%93%88/Stylus/06.Events.md) |
| Stylus NFT | 미션 | StylusSDK를 활용하여 ERC-721 기반 NFT 발행하기 | [Stylus NFT](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C/Stylus/07.Stylus-ERC-721.md) |

# 제안 및 추가

* 아비트럼 딥다이브 모듈은 오픈 소스 컨트리뷰션을 통해 지속적으로 자료를 보완, 발전시킨다
* 현존하는 모듈에 제안을 원하는 빌더는 [Issue를 통해 제안 내용을 작성](https://github.com/Ludium-Official/road-to-bangkok/issues)하거나 리포를 포킹해서 개선된 내용을 [Pull Request로 바로 요청](https://github.com/Ludium-Official/road-to-bangkok/pulls)할 수도 있다
* 제안, 요청된 내용은 루디움에서 검토 이후 적절성을 판단하여 자료를 업데이트 한다