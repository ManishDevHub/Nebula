
FROM oven/bun:latest

WORKDIR /apps

COPY . . 

RUN bun install

EXPOSE 4002

CMD [ "bun", "run", "src/index.ts" ]