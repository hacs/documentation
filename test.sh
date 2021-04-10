#! /bin/sh
# Build the site

# Stop on errors
set -e

if [ -n "$TEST_VAR" ]; then
  if [ -n "$INCOMING_HOOK_URL" ]; then
    sleep 61 # Wait for KV writes to reach all nodes
    echo $INCOMING_HOOK_BODY
    echo $INCOMING_HOOK_URL
  else 
    echo "no sleep"
  fi

fi

yarn run build