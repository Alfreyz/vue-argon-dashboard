#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "new deploy"
git push -f git@github.com:Alfreyz/vue-argon-dashboard.git main:gh-pages

cd -
