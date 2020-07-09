### 서킷 브레이커 설정과 테스트

1. store 의 '요리완성' 이벤트에 따라 order 서비스의 Order 테이블의 '해당건의' status 가 '요리완성'으로 같이 변경됨.
1. correlation key 는 orderId 임

e.g.
`
샘플코드

`
1. 체크 방법 
`

http localhost:8081/orders item='통닭'
http localhost:8082/cookLists     # 통닭 주문 내역이 확인됨
http PATCH localhost:8082/cookLists/1 status="요리완성"
http localhost:8081/orders/1    # 상태가 같이 '요리완성'으로 변경

`