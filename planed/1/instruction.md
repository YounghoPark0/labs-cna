## 아래 사용자 시나리오에 포함된 도메인 이벤트들을 도출하시오

1. 고객 (Customer) 이 메뉴를 선택하여 주문한다 (Place an Order)
1. 주문이 되면 주문 내역이 입점상점주인 (Store owner) 에게 전달된다 (notify order)
1. 상점주인이 음식준비를 마치면 요리완료 버튼을 클릭하면 플랫폼에서 음식을 배달한다 (STORE OWNER prepares for the food and press the button for notifying the cook is done. Then the platform will deliver the foods to the customer)
1. 주문상태가 바뀔 때 마다 카톡(kakao talk)으로 알림을 보낸다 (Whenever order status is changed, that must be notified to the customer through the Kakao Talk)

예시) OrderPlaced (pp형으로 도출, 목적어+동사pp)

## 확장 시나리오 - Saga Compensation
1. 고객이 주문을 취소할 수 있다 (Customer can cancel order)
1. 주문이 취소되면 배달이 취소된다 (Whenever customer cancel an order, cook or delivery is canceled too)

## 확장 시나리오 - CQRS
1. 고객은 언제든지 주문한 내역의 총액과 마일리지 등을 조회한다
