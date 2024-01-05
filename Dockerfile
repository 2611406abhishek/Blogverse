FROM node:18-alpine as base

WORKDIR /blogverse
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /blogverse
COPY . .
RUN npm run build


FROM base as production
WORKDIR /blogverse

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /blogverse/.next ./.next
COPY --from=builder /blogverse/node_modules ./node_modules
COPY --from=builder /blogverse/package.json ./package.json
COPY --from=builder /blogverse/public ./public

CMD npm start

FROM base as dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev