.DEFAULT_GOAL := help

help: ## Shows help message.
	@printf "\033[1m%s\033[36m %s\033[32m %s\033[0m \n\n" "Development environment for" "HACS" "Documentation";
	@awk 'BEGIN {FS = ":.*##";} /^[a-zA-Z_-]+:.*?##/ { printf " \033[36m make %-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST);
	@echo

init: bootstrap

start: ## Start the documentation server
	yarn start;

bootstrap: ## Run yarn
	yarn global add @cloudflare/wrangler
	yarn;

build: ## Build the documentation
	yarn build;

update: ## Pull main from hacs/documentation
	git pull upstream main;
