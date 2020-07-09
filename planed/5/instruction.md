### 생성된 마이크로 서비스들의 기동

- order, store, customer 마이크로 서비스를 각각 8081, 8082, 8083 포트로 실행한다.
- order 서비스의 Application.java 화일로 이동한다. 
- 14행과 15행 사이의 'Run'을 클릭 후, 5초 정도 지나면 서비스가 터미널 창에서 실행된다. 
- 새로운 터머널 창에서 netstat -lntp 명령어로 실행중인 서비스 포트를 확인한다.
- store, customer 서비스에 대해서도 동일한 작업을 수행한다.
- 기동된 order 서비스를 호출하여 주문 1건을 요청한다.

http localhost:8081/orders productId=1001 storeId=101