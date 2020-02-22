# Swagger Ui with multi api support

This docker image support swagger ui with multi select apis.

Dockerhub: [Link to Dockerhub](https://hub.docker.com/r/volbrene/swagger-ui)

# How to use?

```console
docker run -d \
    -p 8080:80 \
    -e URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]" \
     volbrene/swagger-ui
```

That's it.

## Environment variables

This image uses environment variables for configuration.

| Available variables | Default value                                                                                                                                   | Description              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `URLS`              | [{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop 2'}] | List of api swagger docs |
| `THEME_COLOR`       | #32329f                                                                                                                                         | Primary Color            |
| `PAGE_TITLE`        | Swagger Ui                                                                                                                                      | Page Title of docs       |
