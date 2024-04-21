import {
  registerForEvent
} from "./chunk-7GQFL3OX.mjs";
import {
  checkIn
} from "./chunk-LQGEVYEU.mjs";
import {
  createEvent
} from "./chunk-PVCSD4TD.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-ZVZYSTZL.mjs";
import {
  getEventAttendees
} from "./chunk-ZR556QNY.mjs";
import {
  getEvent
} from "./chunk-KX2Q2G4J.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["aplicattion/json"],
    produces: ["application/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xF5es da api para o backend da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("http server running");
});
export {
  app
};
