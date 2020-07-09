## 이벤트 스토밍 결과를 기반한 Spring-boot 코드의 생성과 컴파일

1. 'Code' 버튼을 클릭
1. 각 Bounded Context 별로 작성한 Event, Command, Aggregate 에 대한 Event POJO Class, Controller 혹은 RestRepository, Entity (Aggregate Root) 들이 제대로 생성되었는가?
1. Policy 들에 대하여 PolicyHandler 내에 kafka event listener 로 생성되었는가?
1. 'Code' > 'Project IDE' 선택
1. IDE 에 로딩한 클래스들이 제대로 컴파일 되는가?