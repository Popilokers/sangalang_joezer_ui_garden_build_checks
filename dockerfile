FROM node:18-alpine AS builder

WORKDIR /sangalang_joezer_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

#production build
ENV NODE_ENV=production

#used for Production Builds (Dev => npm start)
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /sangalang_joezer_ui_garden/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]