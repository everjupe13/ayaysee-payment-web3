#!/bin/sh

docker build -t ayaysee-payment-front .
docker run -d --rm -p 3001:3001 --name ayaysee-payment-front-container ayaysee-payment-front
