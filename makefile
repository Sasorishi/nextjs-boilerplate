# Makefile pour un projet Next.js

# Variables
IMAGE_NAME = nextjs-app
CONTAINER_NAME = nextjs-container
DOCKER_COMPOSE = docker-compose
PORT = 3000

# 🔨 Build Docker image
build:
	docker build -t $(IMAGE_NAME) .

# 🚀 Run container
up:
	$(DOCKER_COMPOSE) up -d

# 🛑 Stop container
down:
	$(DOCKER_COMPOSE) down

delete containers:
	$(DOCKER_COMPOSE) down --volumes

restart: down up

# 🧹 Clean everything
clean:
	docker rmi $(IMAGE_NAME) || true
	docker rm $(CONTAINER_NAME) || true

# 🧪 Dev mode (hot reload using bind mount)
dev:
	docker run -it --rm -p $(PORT):3000 \
	-v $$PWD:/app \
	-w /app \
	--name $(CONTAINER_NAME) \
	node:18-alpine sh -c "npm install && npm run dev"

# 📂 Bash into container
sh:
	docker exec -it $(CONTAINER_NAME) sh

# 🧪 Lint code
lint:
	npm run lint

format:
	npx prettier --write .

test:
	npx jest

# Commande par défaut
.PHONY: install lint format test
