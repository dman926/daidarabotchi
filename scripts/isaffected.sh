#!/bin/bash

IFS=', '
str=$(npx nx print-affected --select=projects)
read -rasplitIFS<<< "$str"
for word in "${splitIFS[@]}"; do
  if [[ $word == $1 ]]; then
    IFS=''
    echo "1"
    exit 0
  fi
done
IFS=''
echo "0"
exit 0