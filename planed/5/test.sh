echo "####### test 8081 : HTTP/1.1 200"
http localhost:8081
echo "####### test 8082 : HTTP/1.1 200"
http localhost:8082
echo "####### test 8083 : HTTP/1.1 200"
http localhost:8083
echo "########## test 8081 to save order item "
http localhost:8081/orders productId=1001 storeId=101
