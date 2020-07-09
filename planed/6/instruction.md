### 폴리시의 구현

- store 의 PolicyHandler를 수정하여 주문이 접수 되었을 시에 주문에 대한 알림을 System.out.prinltn() 으로 출력한다.
- store 에도 들어온 주문에 대한 이력을 남기기 위해 Order Entity class 에 주문내역을 저장한다.

```java 

- Store 서비스의 PolicyHandler.java

@Service
public class PolicyHandler {

    @Autowired
    OrderRepository orderRepository;

    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverOrderPlaced_NotifyOrder(@Payload OrderPlaced orderPlaced){

        if(orderPlaced.isMe()){
            Order order = new Order();
            order.setOrderId(orderPlaced.getId());
            order.setProductId(orderPlaced.getProductId());
            System.out.println("##### listener NotifyOrder : " + orderPlaced.toJson());
            orderRepository.save(order);
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

- 주문처리를 했을때, store microservice 의 로그에서 주문내역이 표시되고, CookList 에 저장되었는지 확인한다. 

  - http localhost:8081/orders productId=1001 storeId=101 
  - (주문 내역이 상점서비스에서 확인됨)
  - http localhost:8082/orders     
