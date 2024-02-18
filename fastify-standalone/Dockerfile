FROM oven/bun:alpine AS BUILD
WORKDIR /app
COPY . .
RUN bun run build

FROM gcr.io/distroless/base-debian12	
WORKDIR /app
COPY --from=BUILD /app/fastify-test ./fastify-test
ENTRYPOINT [ "/app/fastify-test" ]
EXPOSE 3000