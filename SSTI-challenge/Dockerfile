FROM python:latest

RUN apt update
RUN apt -y install locales && localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
RUN apt install -y vim

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9

RUN mkdir /challenge
WORKDIR /challenge
COPY index.py /challenge
COPY flag.txt /challenge

EXPOSE 5000
RUN pip install --upgrade pip
RUN pip install Flask
RUN pip install jinja2
