clear

echo "####### test Deployments : order, store, customer"
    set -x
    kubectl get deployments
    set +x
    echo ""
    echo ""

echo "####### test Services : order, store, customer"
    set -x
    kubectl get services
    set +x
    echo ""
    echo ""

echo "####### test OrderServiceIsOn : HTTP/1.1 201 "
    set -x
    http $(INGRESS_ADDRESS)/orders item="chicken"
    set +x
