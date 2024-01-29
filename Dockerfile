FROM public.ecr.aws/m0m4y5c6/node:14.15.1

WORKDIR /app

COPY ./ /app
RUN apt-get update -y

RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libudev-dev libusb-1.0-0-dev
RUN apt-get install -y cron bash curl
RUN rm -rf node_modules package-lock.json

RUN yarn
RUN ls ./node_modules

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]