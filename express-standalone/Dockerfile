FROM oven/bun:alpine AS BUILD
WORKDIR /app
COPY . .
RUN bun run build

FROM gcr.io/distroless/base-debian12	
WORKDIR /app
COPY --from=BUILD /app/express-test ./express-test
ENTRYPOINT [ "/app/express-test" ]
EXPOSE 3000