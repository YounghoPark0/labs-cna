### Correlation 폴리시의 구현

- store 의 '요리완성' 이벤트에 따라 order 서비스의 Order 테이블의 '해당건의' status 가 '요리완성'으로 같이 변경됨.
- correlation key 는 orderId 임

```java 

- Order서비스의 PolicyHandler.java

@Service
public class PolicyHandler{
    @Autowired
    OrderRepository orderRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverOrderPlaced_NotifyOrder(@Payload CookFinished cookFinished){

        if(cookFinished.isMe()){
            Optional<Order> orderOptional = orderRepository.findById(cookFinished.getOrderId());
            if (orderOptional.isPresent()) {
                Order order = orderOptional.get();
                order.setStatus(cookFinished.getStatus());                
                orderRepository.save(order);
            }
        }
    }
}

```

- ** 서비스 확인 **

- 새로운 터머널 창에서 netstat -lntp 명령어로 실행중인 서비스 포트를 확인한다.
- order, store, customer 마이크로 서비스를 실행한다.
- order 서비스의 Application.java 화일로 이동한다. 
- 14행과 15행 사이의 'Run'을 클릭 후, 5초 정도 지나면 서비스가 터미널 창에서 실행된다. 
- store, customer 서비스에 대해서도 동일한 작업을 수행한다.

- 테스트
  - http localhost:8081/orders productId=1001 storeId=101 
  - (주문 내역이 상점서비스에서 확인됨)
  - http localhost:8082/orders    
  - http PATCH localhost:8082/orders/1 status="CookFinished"
  - (상태가 같이 'CookFinished'로 변경)
  - http localhost:8081/orders/1    
