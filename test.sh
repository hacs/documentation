#! /bin/sh
# Build the site

# Stop on errors
set -e

echo $TEST_VAR
echo $INCOMING_HOOK_BODY

yarn run build