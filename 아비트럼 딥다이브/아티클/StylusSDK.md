## 스타일러스 SDK 개발 개요

### 스타일러스 SDK란 무엇인가?

아비트럼 스타일러스는 니트로의 업그레이드 버전이자 아비트럼이 더욱 많은 생태계의 개발자들을 유입시키기 위한 기술적인 진화에 해당한다. 우선, 아비트럼 스타일러스를 도입하여 아비트럼 원과 노바에 EVM, WASM VM을 추가하여 솔리디티, C, C++ 등 다양한 언어로 개발한 컨트랙트를 아비트럼 체인에서 실행할 수 있게 되었다. 

스타일러스의 도입으로 예상되는 주요 이점은 두 가지로 요약할 수 있다.([출처:아비트럼-레이어2 선두를 유지하기 위한 노력](https://medium.com/despread-creative/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC-arbitrum-%EB%A0%88%EC%9D%B4%EC%96%B4-2-%EC%84%A0%EB%91%90%EB%A5%BC-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%EB%85%B8%EB%A0%A5-dc27a4fa2a73) )

![alt text](<아비트럼 개발자 교육 모듈/Images/image7.png>)

첫째, 개발자 생태계의 대폭적인 확장이다. 스타일러스는 솔리디티 외에도 러스트, C++과 같이 훨씬 더 광범위하게 사용되는 프로그래밍 언어를 지원한다. Statista의 2023년 데이터에 따르면, 솔리디티 사용자는 전체 개발자의 1.33%에 불과한 반면, 러스트는 13.05%, C언어는 19.34%, C++은 22.42%의 개발자가 사용하고 있다. 이는 스타일러스가 블록체인 개발에 참여할 수 있는 개발자 풀을 크게 확대할 수 있음을 시사한다.

둘째, 성능과 효율성의 현저한 개선이다. 스타일러스는 WASM(Web Assembly)을 활용하여 가스비를 대폭 절감하고 트랜잭션 처리 속도를 획기적으로 향상시킬 수 있다. 아비트럼 팀은 자체 개발한 니트로의 독특한 사기 방지 메커니즘과 결합하여, WASM 기반 트랜잭션의 처리 속도가 기존 대비 10배 이상 빨라지고, 비용은 100배에서 심지어 500배까지 절감될 수 있다고 주장한다.
이러한 두 가지 핵심 이점은 스타일러스가 블록체인 기술의 접근성을 높이고, 동시에 그 효율성을 대폭 개선할 수 있는 잠재력을 지니고 있음을 보여준다.

아래에선 이렇듯 아비트럼의 개발 환경을 더욱 확장시켜줄 수 있는 스타일러스 SDK의 정의와 구동원리에 대해 설명하려고 한다.

## 스타일러스 SDK 구동원리 

스타일러스 SDK는 개발자들에게 유연한 스마트 컨트랙트 개발
환경을 제공한다. 이 SDK의 핵심 특징과 구동원리를 이해하기 위해서는 아비트럼의 전체적인 구조와 각 구성 요소의 역할을 살펴볼 필요가 있다. 

### 아비트럼의 기본 구조

먼저, 아비트럼의 기본 구조는 '실행'과 '증명'을 분리하는 방식으로 설계되어 있다. 이는 마치 일을 먼저 빠르게 처리하고(실행), 나중에 필요할 때만 그 일이 제대로 수행되었는지 확인(증명)하는 것과 비슷하다. 이러한 구조 덕분에 개발자들은 빠른 트랜잭션 처리 속도를 경험할 수 있다. 예를 들어, 개발자가 스마트 컨트랙트를 배포하거나 사용자가 dApp을 통해 트랜잭션을 발생시킬 때, 이 트랜잭션은 즉시 처리되어 빠른 응답을 받을 수 있다. 이는 사용자 경험을 크게 향상시키며, 개발자들이 메인넷에 가까운 속도로 dApp을 운영할 수 있게 해준다. 증명 과정은 백그라운드에서 이루어지며, 실제로 분쟁이 발생할 때만 활성화된다. 이를 통해 L2의 높은 보안성도 함께 유지할 수 있다.

### Geth와 WAVM


![alt text](<아비트럼 개발자 교육 모듈/Images/image1.png>)

스타일러스 SDK의 구동 원리를 이해하기 위해서는 Arbitrum 시스템의 핵심 구성 요소인 Geth와 WAVM의 역할을 파악하는 것이 중요하다. Geth(go-ethereum)는 Arbitrum Nitro 시스템의 기반이 되는 이더리움의 핵심 노드 소프트웨어로, Nitro는 이를 중심으로 "Geth 샌드위치" 구조를 형성하고 있다. 이 구조는 세 개의 주요 레이어로 구성되는데, 가장 아래에 위치한 Geth Core 레이어는 EVM 계약 실행과 상태 데이터 구조 유지를 담당한다. 중간에 위치한 ArbOS 레이어는 Layer 2에 특화된 기능을 제공하며, Sequencer 데이터 처리, 가스 비용 계산, 수수료 수집, 크로스체인 브릿지 등을 지원한다. 최상위에 있는 Node Functionality 레이어는 클라이언트 연결과 RPC 요청 처리 등 이더리움 호환 블록체인 노드 운영에 필요한 고수준 기능을 제공한다. 이러한 구조를 통해 Arbitrum은 이더리움의 안정성과 호환성을 유지하면서도 Layer 2의 특화된 기능을 제공할 수 있게 된다.

한편, WAVM(WebAssembly Virtual Machine)은 Arbitrum의 요구사항에 맞게 수정된 특수한 가상 머신으로, 실행과 증명을 분리하는 Arbitrum의 접근법을 구현하기 위해 도입되었다. WAVM은 WebAssembly를 기반으로 하지만 일부 기능을 제거하거나 제한하고, 부동 소수점 연산을 소프트웨어 라이브러리로 대체하며, 제어 흐름 구조를 단순화하는 등의 특징을 가지고 있다. 또한 블록체인 환경과의 상호작용을 위한 특별한 opcode를 추가하고, 실행 시간을 예측 가능하게 만들며, 효율적인 증명 생성과 검증에 최적화되어 있다.

스타일러스 SDK는 이 Geth와 WAVM 구조 위에서 작동한다. 스타일러스에서는 Rust 언어에 대한 지원이 가장 풍부해서 Rust용 스타일러스 SDK를 통해 스마트 컨트랙트 개발에 필요한 모든 기능을 가짐과 동시에 Rust로 스마트 컨트랙트를 작성하는 과정을 최대한 쉽고 효율적으로 만들 수 있다. 또한 C와 C++ 언어도 지원되어, 기존에 이 언어들로 작성된 코드를 최소한의 수정으로
블록체인에 올릴 수 있다.

개발자가 Rust나 C++로 작성한 코드는 WASM으로 컴파일되고, 이 WASM 코드는 WAVM에서 실행된다. 이 과정에서 Geth의 EVM 호환성과 WAVM의 효율적인 증명 시스템이 결합되어 높은 성능과 보안성을 제공한다. 구체적으로, 스타일러스 SDK를 통해 작성된 스마트 컨트랙트는 개발자가 코드를 작성하고, 이를 WASM으로 컴파일하여 블록체인에 배포하는 과정을 거친다. 배포된 코드는 'ArbWasm'이라는 새로운 프리컴파일을 통해 노드의 네이티브 머신 코드로 변환되며, 이 과정에서 가스 계측, 깊이 검사, 메모리 과금 등 안전성을 위한 절차가 진행된다. 실행은 Geth 기반의 시스템에서 이루어지고, 증명이 필요한 경우 WAVM을 통해 효율적으로 처리된다.

## 스타일러스 개발과정

스타일러스 SDK의 개발 과정은 크게 코딩, 컴파일, 실행, 증명의 네 단계로
나눌 수 있다. 개발자는 선호하는 언어로 코드를 작성한 뒤, 이를 WASM으로
컴파일한다. 컴파일된 WASM 코드는 블록체인에 올라가고, \'ArbWasm\'이라는
새로운 프리컴파일을 통해 노드의 네이티브 머신 코드로 변환된다. 이
과정에서 가스 계측, 깊이 검사, 메모리 과금 등 안전성을 위한 여러 절차가
진행된다.

스타일러스의 장점은 다음과 같다:

1.  저렴한 실행 비용: WASM 프로그램은 EVM보다 훨씬 효율적으로 실행되어,
     복잡한 스마트 컨트랙트의 가스 비용을 크게 줄일 수 있다. 계산
    비용은 최대 10배, 메모리 사용은 100배 이상 저렴해질 수 있다.

2.  향상된 보안: 재진입(reentrancy) 공격 같은 흔한 취약점에 대해 더 나은
    보호를 제공한다. Rust SDK에서는 기본적으로 재진입이 불가능하며,
    필요한 경우에만 명시적으로 허용할 수 있다.

3.  완벽한 상호운용성: Solidity로 작성된 프로그램과 WASM 프로그램은 서로
    완벽하게 호환된다. 개발자는 언어의 제약 없이 다른 컨트랙트를
    호출하거나 활용할 수 있다.

이러한 장점들로 인해 스타일러스는 기존에 EVM에서 구현하기 어려웠던
복잡한 연산이나 대규모 메모리 사용이 필요한 작업들을 가능하게 만든다.
예를 들어, 고급 암호화 알고리즘, 대규모 생성 예술, 복잡한 게임 로직,
연산 집약적인 AI 모델 등을 블록체인 상에서 구현할 수 있게 되었다.

결론적으로, 스타일러스 SDK는 블록체인 개발의 새로운 지평을 열어주고
있다. 더 많은 개발자들이 자신의 전문 분야를 블록체인에 접목시킬 수 있게
되었고, 이는 곧 더 혁신적이고 다양한 탈중앙화 애플리케이션의 등장으로
이어질 것이다.

[Stylus Contracts Intro](https://docs.arbitrum.io/stylus/stylus-gentle-introduction) 

[Rust SDK](https://docs.arbitrum.io/stylus/reference/rust-sdk-guide)

## Arb-Stylus 환경설정

아비트럼 stylus는 Rust와 같은 프로그래밍 언어를 사용하여 arbitrum에서 빌드하려는 개발자를 위한 것 입니다. 자신이 선호하는 프로그래밍언어를 사용하여 EVM호환 스마트계약을 작성하는 것이 Stylus로 가능하다.

- ### 사용 가능 언어
  - Rust, C, C++ 및 기타 언어로 WASM으로 컴파일되는 프로그래밍언어로 스마트 계약 작성을 가능하게 한다.
  - WASM 덕분에 Stylus 계약은 훨씬 더 빠르고 가스 요금도 저렴합니다.
  - 블록체인에서 RAM을 소비하는 것이 가능해지면서 Stylus를 사용하면 메모리 비용이 100 ~ 500배 저렴해진다.

## 0. WSL 설치

맥북 혹은 WSL환경에서 하는 것을 권장합니다. 기본 windows의 shell에서 할 경우 오류가 발생할 수 있습니다. 맥북은 아래의 rust 다운로드 후 사용가능하다.

## 1. Rust 설치

- [Rust 설치](https://www.rust-lang.org/tools/install)
  ![Install Rust](https://github.com/Ludium-Official/road-to-bangkok/blob/main/%EC%95%84%EB%B9%84%ED%8A%B8%EB%9F%BC%20%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C/Stylus/image-1.png)
  rust 설치를 한 후 windows 프로그램 유저는 wsl 환경에서 아래 명령어를 추가한다.
  ```wsl
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
  rust 가 정상적으로 설치 되었다면 rustc --version으로 정상적으로 깔렸는지 확인한다.

## 2. 지갑 확인

개발용 지갑에 sepolia eth와 arb sepolia eth를 확인한다.

## 3. 스타일러스

`cargo-stylus`는 Rust에서 Arbitrum Stylus 프로그램을 관리하는 CLI 도구로, Rust 개발 환경에서 표준 도구인 cargo와 통합되어 사용된다.

```rust
cargo install --force cargo-stylus cargo-stylus-check
```

아래 명령어로 rust 컴파일러의 빌드 대상으로 wasm을 추가한다.

```rust
rustup target add wasm32-unknown-unknown
```

caargo 명령으로 사용할 수 있다.

```rust
❯ cargo stylus --help
Cargo subcommand for developing Stylus projects

Usage: cargo stylus <COMMAND>

Commands:
  new         Create a new Rust project // 생성
  export-abi  Export a Solidity ABI     // export abi
  check       Check a contract          // 컨트랙트 체크
  deploy      Deploy a contract         // 배포
  replay      Replay a transaction in gdb   // 트랜잭션 재시작
  trace       Trace a transaction           // 트랜잭션 추적
  c-gen       Generate C code               // c 코드 생성
  help        Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```

### 새 프로젝트 생성

```rust
cargo stylus new <내가만들 프로젝트 명>
```

### 스타일러스 프로젝트 확인

프로그램이 온체인에서 성공적으로 배포되고 활성화 되었는지 하위 명령어를 통해 확인한다.

```rust
cargo stylus check
```

이 명령은 JSON-RPC 엔드포인트를 지정하여 트랜잭션 없이도 프로그램이 온체인에 배포되고 활성화될 수 있는지 확인하려고 시도한다

프로그램을 온체인에 배포할 준비가 되면 `cargo stylus deploy` 다음과 같이 하위 명령을 사용할 수 있다. 먼저, 다음을 사용하여 배포를 수행하는 데 필요한 가스를 추정할 수 있다.

### 가스 추정

```rust
cargo stylus deploy --private-key-path=<사용자의 비밀키 경로> --estimate-gas-only
```

### 배포

```rust
cargo stylus deploy --private-key-path=<사용자의 비밀키 경로>
```

### 체크

아래와 같이 배포가 정상적으로 동작하면 나온다.

```rust
Compressed WASM size: 3 KB
Deploying program to address 0x457b1ba688e9854bdbed2f473f7510c476a3da09
Estimated gas: 12756792
Submitting tx...
Confirmed tx 0x42db…7311, gas used 11657164
Activating program at address 0x457b1ba688e9854bdbed2f473f7510c476a3da09
Estimated gas: 14251759
Submitting tx...
Confirmed tx 0x0bdb…3307, gas used 14204908
```


