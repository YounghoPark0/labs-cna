## 다음 시나리오에 대하여 Command와 Actor, Aggregate 를 부착하고 설정하시오

1. Command 부착: 주문(OrderPlaced), 주문취소(OrderCanceled)에 대한 의사결정 Command 인(order, cancel)
1. Actor 부착: 'CUSTOMER'과 'STORE OWNER' 
1. Aggregate 부착과 설정: 주문과 주문취소의 행위(Command)와 결과(Event)를 하나의 ACID 트랜잭션 단위인 Aggregate 로 묶어준다
