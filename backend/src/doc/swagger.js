export const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "Insights",
    description: "Documentação para API insights",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "API de teste",
    },
  ],
  basePath: "/",
  paths: {
    "/cards": {
      post: {
        description: "Cria um card.",
        tags: ["Cards"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  texto: {
                    type: "string",
                  },
                  data_criacao: {
                    type: "string",
                  },
                  tags: {
                    type: "array",
                  },
                },
                example: {
                  texto: "Futebol - Alemanha x brasil",
                  data_criacao: "19-03-2023 às 20:30:00",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Card criado com sucesso.",
          },
          400: {
            description:
              "Os campos texto, data de criação e tags são obrigatórios para a criação de um card.",
          },
        },
      },
      get: {
        description: "Lista todos os cards.",
        tags: ["Cards"],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
    "/cards/findById/{id}": {
      get: {
        description: "Lista um card pelo id.",
        tags: ["Cards"],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Não existe card com o id digitado.",
          },
        },
      },
    },
    "/cards/findByTagName/{name}": {
      get: {
        description: "Lista os card pelo nome da tag.",
        tags: ["Cards"],
        parameters: [
          {
            in: "path",
            name: "name",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Não existem cards com o nome digitado.",
          },
        },
      },
    },
    "/cards/{id}": {
      put: {
        description: "Atualiza um card pelo id.",
        tags: ["Cards"],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  texto: {
                    type: "string",
                  },
                  data_modificacao: {
                    type: "string",
                  },
                },
                example: {
                  texto: "Futebol - Alemanha x brasil",
                  data_modificacao: "19-03-2023 às 20:30:00",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Card criado com sucesso.",
          },
          400: {
            description:
              "Os campos texto e data de criação e tags são obrigatórios para a criação de um card.",
          },
        },
      },
      delete: {
        description: "Deleta um card pelo id.",
        tags: ["Cards"],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Card deletado com sucesso.",
          },
          400: {
            description: "Não existe card com o id digitado.",
          },
        },
      },
    },
    "/tags/findCardById/{cardId}": {
      post: {
        description: "Cria uma tag.",
        tags: ["Tags"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  data_modificacao: {
                    type: "string",
                  },
                },
                example: {
                  name: "Gol!",
                  data_modificacao: "20-03-2023",
                },
              },
            },
          },
        },
        parameters: [
          {
            in: "path",
            name: "cardId",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Tag criada com sucesso.",
          },
          400: {
            description:
              "Os campos name e data de modificação são obrigátorios para criação da tag e atualização do card.",
          },
        },
      },
    },
    "/tags/findCardById/{cardId}/findTagById/{id}": {
      get: {
        description: "Lista uma tag pelo id.",
        tags: ["Tags"],
        parameters: [
          {
            in: "path",
            name: "cardId",
            type: "string",
            required: true,
          },
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Não existe card com o id digitado.",
          },
        },
      },
      put: {
        description: "Atualiza uma Tag pelo id.",
        tags: ["Tags"],
        parameters: [
          {
            in: "path",
            name: "cardId",
            type: "string",
            required: true,
          },
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                  },
                  data_modificacao: {
                    type: "string",
                  },
                },
                example: {
                  name: "Gol!",
                  data_modificacao: "19-03-2023 às 22:00:00",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Tag criada com sucesso.",
          },
          400: {
            description:
              "Os campos name e data de modificação são obrigatórios para a atualização de uma tag.",
          },
        },
      },
      delete: {
        description: "Deleta uma tag pelo id.",
        tags: ["Tags"],
        parameters: [
          {
            in: "path",
            name: "cardId",
            type: "string",
            required: true,
          },
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data_modificacao: {
                    type: "string",
                  },
                },
                example: {
                  data_modificacao: "20-03-2023 às 23:00:00",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Tag deletada com sucesso.",
          },
          400: {
            description: "Não existe tag com o id digitado.",
          },
        },
      },
    },
  },
};
