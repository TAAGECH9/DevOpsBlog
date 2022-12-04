FROM python:3.7.15-alpine

RUN pip install mkdocs-material && mkdir -p /app/docs
WORKDIR /app
COPY docs/* docs/
COPY ./mkdocs.yaml .

CMD ["mkdocs","serve"]
