FROM oven/bun:alpine AS BUILD
WORKDIR /app
COPY . .
RUN bun run build

FROM gcr.io/distroless/base-debian12	
WORKDIR /app
COPY --from=BUILD /app/crypto-test ./crypto-test
ENTRYPOINT [ "/app/crypto-test" ]
