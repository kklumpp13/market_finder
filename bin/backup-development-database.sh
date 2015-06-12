#!/usr/bin/env sh
TIMESTAMP=`date +%Y%m%d-%H%M%S` 
BACKUP_FILE="mfd-${TIMESTAMP}.dump"
pg_dump --host=localhost --verbose --clean --no-owner --no-acl --format=c market_finder_development > $BACKUP_FILE
bzip2 $BACKUP_FILE
