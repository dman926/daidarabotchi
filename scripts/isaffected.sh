#!/bin/bash

IFS=', '
str=$(pnpm exec nx print-affected --select=projects --base=origin/main)
read -rasplitIFS <<<"$str"
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
