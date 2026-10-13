#!/bin/bash
# Wird beim Start einer Claude-Code-Cloud-Session ausgeführt (SessionStart-Hook).
# Lokal macht das Skript nichts.
# npm ci statt npm install: installiert exakt nach Lockfile und schreibt es nicht um.
if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0
fi
npm ci
exit 0
