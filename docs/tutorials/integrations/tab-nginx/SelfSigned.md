
<!-- File: tab-nginx/SelfSigned.md -->

### Self-Signed Certificate

Using self-signed certificates is suitable for development or internal use where trust is not a critical concern.

#### Steps

1. **Create Directories for Nginx Files:**

    ```bash
    mkdir -p tab-nginx/self-signed/conf.d tab-nginx/self-signed/ssl
    ```

2. **Create Nginx Configuration File:**

    **`tab-nginx/self-signed/conf.d/open-webui.conf`:**

    ```nginx
    server {
        listen 443 ssl;
        server_name your_domain_or_IP;

        ssl_certificate /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;
        ssl_protocols TLSv1.2 TLSv1.3;

        location / {
            proxy_pass http://host.docker.internal:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    ```

3. **Generate Self-Signed SSL Certificates:**

    ```bash
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout tab-nginx/self-signed/ssl/nginx.key \
    -out tab-nginx/self-signed/ssl/nginx.crt \
    -subj "/CN=your_domain_or_IP"
    ```

4. **Update Docker Compose Configuration:**

    Add the Nginx service to your `docker-compose.yml`:

    ```yaml
    services:
      nginx:
        image: nginx:alpine
        ports:
          - "443:443"
        volumes:
          - ./tab-nginx/self-signed/conf.d:/etc/nginx/conf.d
          - ./tab-nginx/self-signed/ssl:/etc/nginx/ssl
        depends_on:
          - open-webui
    ```

5. **Start Nginx Service:**

    ```bash
    docker compose up -d nginx
    ```

#### Access the WebUI

Access Open WebUI via HTTPS at:

[https://your_domain_or_IP](https://your_domain_or_IP)

---