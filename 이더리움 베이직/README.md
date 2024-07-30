# 이더리움 베이직 모듈 구성

---

# 개요

- 이더리움 베이직 모듈은 이더리움 블록체인의 출현 배경과 어카운트, 트랜젝션, EVM, 클라이언트를 비롯한 네트워크의 전반을 이해하기 위한 자료를 제공한다. 또한 암호학, 어카운트 생성, 트랜젝션 생성 등을 실습할 수 있는 미션을 통해 개발자의 관점에서 이더리움 네트워크의 기술을 체험할 수 있는 미션을 포함한다.
- 모듈은 아티클과 미션으로 구성된다. 아티클이란 특정 개념 혹은 현상을 설명하는 자료이다. 아티클은 기술 및 배경의 정의와 출현 배경, 구성 요소, 구동 원리, 특장점, 활용 방안을 포함한다. 반면 미션은 실습을 통해 기술 및 개념 체득을 유도하는 자료이다. 미션은 결과물 설명을 포함하는 목적 및 배경, 사전 설치, 코드와 설명을 포함한 수행 방법, 제출 내용을 포함한다.

# 모듈 구성

이더리움 베이직 모듈의 구성은 다음과 같다

| 순서 | 제목                         | 구분   | 설명                                                              | 자료 링크                                                                                                                                         |
| ---- | ---------------------------- | ------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 이더리움의 출현 배경 및 개요 | 아티클 | 이더리움의 출현 배경과 의의 이해하기                              | [이더리움의 출현 배경 및 개요](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/01.이더리움의-출현-배경-및-개요.md) |
| 2    | 이더리움 계정                | 아티클 | 이더리움 계정의 유형과 구조, 주요 개념에 대한 이해                | [이더리움 계정](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/02.이더리움-계정.md)                               |
| 3    | EOA 만들기                   | 미션   | ethers.js를 활용한 이더리움 어카운트 만들기 실습                  | [EOA 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/03.EOA-만들기.md)                                     |
| 4    | 트랜잭션 살펴보기            | 아티클 | 이더리움 트랜젝션의 구조의 이해와<br>이더 스캔을 통한 확인 방법   | [트랜잭션 살펴보기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/04.트랜잭션-살펴보기.md)                       |
| 5    | 트랜잭션 만들기              | 미션   | 블록체인 트랜젝션의 실행 방식 실습                                | [트랜잭션 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/05.트랜잭션-만들기.md)                           |
| 6    | 이더리움 가상 머신<br>(EVM)  | 아티클 | 이더리움 가상 머신의 트랜젝션 처리와<br>어카운트 업데이트 방식    | [이더리움 가상 머신(EVM)](<https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/06.이더리움-가상머신(EVM).md>)          |
| 7    | EVM 실행 실습                | 미션   | 솔리디티 컨트랙트를 통한 EVM 스택 실행 실습                       | [EVM 실행 실습](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/07.EVM-실행-실습.md)                               |
| 8    | 블록과 체인                  | 아티클 | 이더리움의 블록                                                   | [블록과 체인](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/08.블록과-체인.md)                                   |
| 9    | 머클트리 만들기              | 미션   | 트랜젝션 데이터의 머클 트리 구성 방식 실습                        | [머클트리 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/09.머클트리-만들기.md)                           |
| 10   | 블록 만들기                  | 미션   | 블록의 생성과 연결 방식 실습                                      | [블록 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/10.블록-만들기.md)                                   |
| 11   | 노드와 클라이언트            | 아티클 | 이더리움 노드와 클라이언트 구조 설명                              | [노드와 클라이언트](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/11.노드와-클라이언트.md)                       |
| 12   | 노드 네트워크 만들기         | 미션   | ECDSA 노드 서버를 통한 잔고                                       | [노드 네트워크 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/12.노드-네트워크-만들기.md)                 |
| 13   | 합의 메커니즘                | 아티클 | 이더리움의 합의 메커니즘 구조 설명                                | [합의 메커니즘](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/13.합의-메커니즘.md)                               |
| 14   | 지분 증명<br>합의 프로토콜   | 아티클 | 이더리움의 지분 증명 합의 프로토콜 구조 설명                      | [지분 증명 합의 프로토콜](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/14.지분-증명-합의-프로토콜.md)           |
| 15   | 잔고 관리와 채굴자 보상      | 미션   | 블록체인 어카운트 잔고와 채굴자 보상 구조 제작 실습               | [잔고 관리와 채굴자 보상](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/15.잔고-관리와-채굴자-보상.md)           |
| 16   | 온체인 데이터와 ABI          | 아티클 | JSON RPC를 활용한 온체인 ABI 데이터 조회,<br>온체인 데이터의 이해 | [온체인 데이터와 ABI](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/16.온체인-데이터와-ABI.md)                   |
| 17   | 블록 익스플로러 만들기       | 미션   | 온체인 데이터를 불러오는 익스플로러 제작 실습                     | [블록 익스플로러 만들기](https://github.com/Ludium-Official/road-to-bangkok/blob/main/이더리움%20베이직/17.블록-익스플로러-만들기.md)             |

# 제안 및 추가

- 이더리움 베이직 교육 모듈은 오픈 소스 컨트리뷰션을 통해 지속적으로 자료를 보완, 발전시킨다
- 현존하는 모듈에 제안을 원하는 빌더는 [Issue를 통해 제안 내용을 작성](https://github.com/Ludium-Official/road-to-bangkok/issues)하거나 리포를 포킹해서 개선된 내용을 [Pull Request로 바로 요청](https://github.com/Ludium-Official/road-to-bangkok/pulls)할 수도 있다
- 제안, 요청된 내용은 루디움에서 검토 이후 적절성을 판단하여 자료를 업데이트 한다
