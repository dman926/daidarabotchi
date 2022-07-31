#!/bin/bash

# 1st argument is a brief (<20 characters) description of the migration

if [ -f "nx.json" ]; then
  # In the root of the workspace
  PREFIX="apps/sephira-api/"
else
  # Assume in the sephira-api folder
  PREFIX=""
fi

REPLY="$1"

# if no description was passed in ask for it
while [[ -z "$REPLY" ]]; do
  read -p "Please enter a brief description of this migration: " -r
done

DESC="${REPLY// /_}"

VERSION=$(date +'%Y%m%d%H%M%S')

code "${PREFIX}migrations/${VERSION}_${DESC}.up.sql"
code "${PREFIX}migrations/${VERSION}_${DESC}.down.sql"
