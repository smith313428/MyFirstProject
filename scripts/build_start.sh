#!/bin/bash
set -xe
sudo chown ubuntu:ubuntu /home/ubuntu/sharering-admin-panel/appspec.yml
sudo chown ubuntu:ubuntu /home/ubuntu/sharering-admin-panel/scripts/* 
sudo chown ubuntu:ubuntu -R /home/ubuntu/sharering-admin-panel
chmod +x /home/ubuntu/sharering-admin-panel/scripts/*
cd /home/ubuntu/sharering-admin-panel && /home/ubuntu/.nvm/versions/node/v14.15.1/bin/yarn install --ignore-engines && /home/ubuntu/.nvm/versions/node/v14.15.1/bin/yarn build