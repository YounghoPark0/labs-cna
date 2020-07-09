## 다음 시나리오에 대하여 Policy 를 부착하고 이름을 부여한 후, 해당하는 이벤트와 연결하시오.


1. 상점관리팀은 order 시스템의 주문이 발생할 때마다 (OrderPlaced) 주문 메시지를 점주에게 알린다 (policy명: notify order).
1. 고객관리팀은 주문상태가 바뀔 때마다 (OrderPlaced, OrderCanceled) 카톡으로 알림을 보낸다 (policy명: send KakaoTalk).

## 아래에 명시된 BC 명으로 Bounded Context 를 나누어 각각의 이벤트와 폴리시가 위치할 곳으로 옮겨 담으시오


1. 주문: order
1. 상점관리: store
1. 고객관리: customer