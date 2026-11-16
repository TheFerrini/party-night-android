#!/usr/bin/env sh
set -eu

APP_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
RES_DIR="$APP_DIR/android/app/src/main/res"
SOURCE_DIR="$APP_DIR/resources/android-res"

if [ ! -d "$RES_DIR" ]; then
  echo "Android project not found. Run npm run android:init first." >&2
  exit 1
fi

find "$RES_DIR" -type f -name 'ic_launcher*' -delete
cp -R "$SOURCE_DIR"/. "$RES_DIR"/
echo "Party Night Android launcher icons installed."
