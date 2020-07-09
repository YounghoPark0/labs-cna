### Message Queue - Kafka 설치

- 쿠버네티스 내에 kafka 서버를 Helm 을 통해 배포한다.
  - curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get | bash
  - kubectl --namespace kube-system create sa tiller
  - kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
  - helm init --service-account tiller
  - kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
  - helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator
  - helm repo update
  - helm install --name my-kafka incubator/kafka

- kafka 설치확인
  - watch kubectl get all 명령어로 Kafka와 zookeeper 정상 기동 여부 확인
  - zookeeper와 kafka 서버 초기화 확인 - 각 3대

