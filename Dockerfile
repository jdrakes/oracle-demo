FROM node
ENV PATH="$PATH:/opt/yarn/bin"
WORKDIR /dist
COPY package.json yarn.lock ./
RUN cd /opt && wget \
--quiet https://yarnpkg.com/latest.tar.gz && \
tar zvxf latest.tar.gz && \
mv /opt/dist /opt/yarn
RUN yarn
COPY bin bin/
COPY views views/
COPY db db/
COPY public public/
COPY routes routes/
COPY app.js .
EXPOSE 3002
ENTRYPOINT ["npm"]
CMD ["start"]
