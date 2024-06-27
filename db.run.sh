
docker kill fullstack-template || true
docker rm fullstack-template || true

docker run -it --name  fullstack-template -p 5432:5432  fullstack-template
