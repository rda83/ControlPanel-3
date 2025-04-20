# Этап сборки
FROM node:18 AS build
WORKDIR /app

# Копируем package.json и package-lock.json
COPY ["ControlPanel.Ui/package.json", "ControlPanel.Ui/package-lock.json*", "./"]

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем приложение
WORKDIR "/app/ControlPanel.Ui"
RUN npm run build -- --configuration=production

# Финальный этап
FROM nginx:alpine
COPY --from=build /app/ControlPanel.Ui/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/ControlPanel.Ui/dist/control-panel-ui/browser/ /usr/share/nginx/html
EXPOSE 80