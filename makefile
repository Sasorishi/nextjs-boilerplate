# Makefile pour un projet Next.js

# Variables
IMAGE_NAME = nextjs-app
CONTAINER_NAME = nextjs-container
PORT = 3000

# 🔨 Build Docker image
build:
	docker build -t $(IMAGE_NAME) .

# 🚀 Run container
up:
	docker run -d --rm -p $(PORT):3000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# 🛑 Stop container
stop:
	docker stop $(CONTAINER_NAME)

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
