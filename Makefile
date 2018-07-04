.PHONY: docker-build
docker-build:
	docker build . -t itsalex/slack-yaml-user-list:$$(git rev-parse --abbrev-ref HEAD)

.PHONY: docker-push
docker-push:
	docker tag itsalex/slack-yaml-user-list:$$(git rev-parse --abbrev-ref HEAD) itsalex/slack-yaml-user-list:latest
	docker push itsalex/slack-yaml-user-list:latest
