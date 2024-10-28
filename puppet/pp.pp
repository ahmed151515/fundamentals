frontend http:80
        bind 0:80
        bind 0:443 ssl crt /etc/haproxy/sslahmedarafa.pem alpn h2.http/1.1
        timeout client 120s
        default_backend servers
        mode http

backend servers
        server web1 54.160.121.198:80
        server web2 35.153.18.54:80
        timeout server 60s
        timeout connect 20s
        mode http



        frontend https_http
        bind 0:80
        bind 0:433 ssl crt /etc/haproxy/sslahmedarafa.pem alpn h2.http/1.1
        default_backend servers
        mode http
        timeout client 3m

backend servers
        server web1 54.160.121.198:80
        server web2 35.153.18.54:80
        mode http
        timeout connect 30s
        timeout server  60s
