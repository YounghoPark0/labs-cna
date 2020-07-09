### 쿠버네티스 디플로이 설계

1. 각 서비스별 (BC별) Deployment 를 작성한다 (order, store, customer)
2. 작성한 Deployment 로 연결될 Service 들을 작성
3. Ingress 를 이용하여 진입점을 통일한다. Path-based Routing 로 각각의 마이크로 서비스들이 연결되도록 설정한다.
각 path 는 '/orders', '/orders', '/customers' 임

### 확장주제

1. 데이터베이스로 Mongo DB 를 이용하기 위해 mongo 용 Deployment 를 만든다.
1. Service 로 'mongo' 를 연결한다.
1. Persistence Volume 와 PersistenceVolume 을 선언하여 mongo 에 mount 시킨다.
