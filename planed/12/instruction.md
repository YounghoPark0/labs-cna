### 쿠버네티스에 서비스 배포

- 앞서 생성한 도커이미지 명을 기반으로 쿠버네티스에 서비스를 배포한다. 

- Root에 보이는 Deployment.yaml 화일을 편집하여, Order, Customer, Store의 컨테이너 이미지명을 수정한다.
  - <DockerHub UserID>/order:v1
  - <DockerHub UserID>/customer:v1
  - <DockerHub UserID>/store:v1  

- Deployment.yaml과 Service.yaml 화일을 클러스터에 배포한다.
  - kubectl create -f ./Deployment.yaml
  - kubectl create -f ./Service.yaml

- 서비스간 커뮤니케이션 확인
  - 클러스터 내부에 http Client를 통한 테스트
  - 아래 코드를 복사하여 Terminal에서 실행

``` yaml

cat <<EOF | kubectl apply -f -
apiVersion: "v1"
kind: "Pod"
metadata: 
  name: httpie
  labels: 
    name: httpie
spec: 
  containers: 
    - 
      name: httpie
      image: clue/httpie
      command:
        - sleep
        - "36000"
EOF
```

  - 클러스터 내부로 접속
  - kubectl exec -it httpie -- bin/bash

  - 주문을 생성하고, Store에 정상 수신 유무 확인
  - http http://order:8080/orders productId="1001" storeId="101"
  - http http://store:8080/orders