# Makefile pour un projet Next.js

# Commandes
install:
	npm install

lint:
	npx eslint .

format:
	npx prettier --write .

test:
	npx jest

# Commande par défaut
.PHONY: install lint format test
