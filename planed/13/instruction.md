장애격리 테스트

1. 서비스중 store 서비스의 replicas 를 일시적으로 0로 설정한다. 
`
# kubernetes/deployment.yaml 의 수정

$ nano kubernetes/deployment.yaml
...
 spec
   ...
     replicas: 1  -->  0


$ kubectl apply -f kubernetes/deployment.yaml
`

1. 그 사이 여러개의 주문을 입력: (클러스터 내에서 실행해야 함)
`
$ kubectl exec -it httpie /bin/bash
http http://order/orders item='chicken'
http http://order/orders item='chicken'
http http://order/orders item='chicken'
...

`
1. store 서비스가 제대로 기동되지 못했기 때문에 주문한 내역들의 status 가 변경되지 않음을 확인

`
$ kubectl exec -it httpie /bin/bash
http http://order/orders   #status는 '주문요청됨' 으로 유지
...

`

1. store 서비스의 replicas 를 복구함
`
# kubernetes/deployment.yaml 의 수정

$ nano kubernetes/deployment.yaml
...
 spec
   ...
     replicas: 0  -->  1


$ kubectl apply -f kubernetes/deployment.yaml
`

1. store 서비스에 의하여 '주문접수됨'으로 처리됨을 확인

`
$ kubectl exec -it httpie /bin/bash
http http://order/orders   #status는 '주문접수됨' 으로 변경
...

`
