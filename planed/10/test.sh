clear

echo "####### test DockerBuild : order, store, customer"
    set -x
    docker images
    set +x
    echo ""
    echo ""

echo "####### test DockerPush : order, store, customer"
    set -x
    curl -k -H "Accept: application/json" -X GET "https://index.docker.io/v1/search?q=order"
    set +x

