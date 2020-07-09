### 도커라이징 & 이미지 Push

- 카프카 Topic 설정
  - Order 서비스의 applicatiion.yml 화일을 열어, 모든 destination: 의 fooddeliveryrevival 를 나의 구글메일 아이디로 변경한다. (ex. destination: test) 
  - Store, Customer 서비스에 대해서도 동일한 작업을 수행한다.

- 카프카 설정까지 완료된 애플리케이션에 대해 이미지(Image)를 생성하고, 이미지 저장소(Docker hub)에 생성한 이미지를 푸시한다. 

- 도커허브(hub.docker.com) 사이트에 계정이 없으면 계정을 생성한다. 
- 로컬 Docker Client로 도커 허브에 인증을 실행한다. 

  `
  docker login
  `

- Customer 애플리케이션 루트에서 mvn package -B 명령으로 패키징 한다.
- ls ./target 명령으로 패키징된 파일(.jar)이 생성되었는 지 확인한다.

- customer 애플리케이션 루트에서 도커 이미지를 생성한다.

  `
  docker build -t <DockerHub-ID>/customer:v1 .
  ` 

- docker images 명령으로 생성된 도커 이미지를 확인한다.
  - docker images | grep <DockerHub UserID>

- 생성된 이미지를 Docker hub 에 Push 한다.

  `
  docker push <DockerHub-ID>/customer:v1
  `

- 도커 허브(https://hub.docker.com/)의 Repository 메뉴에서 Push된 이미지를 확인한다.

- Order와 Store 서비스에 대해서도 동일한 작업을 수행한다.