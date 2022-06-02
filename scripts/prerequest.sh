#!/bin/bash

set -e

echo "-- CHECKING: WORKSPACE LINT --"
pnpm exec nx workspace-lint
echo "-- PASS --"

echo "-- CHECKING: FORMAT CHECK --"
pnpm exec nx format:check
echo "-- PASS --"

echo "-- CHECKING: LINT --"
pnpm exec nx affected --target=lint
echo "-- PASS --"

echo "-- CHECKING: TEST --"
pnpm exec nx affected --target=test
echo "-- PASS --"

echo "-- CHECKING: BUILD --"
pnpm exec nx affected --target=build
echo "-- PASS --"
