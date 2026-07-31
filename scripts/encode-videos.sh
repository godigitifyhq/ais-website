#!/usr/bin/env bash
#
# Re-encode the AIS video masters into the web assets the site serves.
#
# !! THE MASTERS ARE NO LONGER ON DISK — they were deleted after the web assets
# below were generated. To run this script again you must first restore all four
# 1080p sources into public/video/ (they are gitignored and never committed):
#
#     hero.mp4  admission-page.mp4  robotics-lab.mp4  sports-new.mp4
#
# Everything this script writes IS committed and is what the browser loads. Those
# outputs are all present and working — you only need this script if you want to
# change a poster frame, retime a loop, or re-encode at a different quality.
#
# Requires ffmpeg on PATH.  Run from the repo root:  bash scripts/encode-videos.sh
#
# Three kinds of output:
#   hero-loop.mp4   silent hero background, autoplays everywhere   (~2.6 MB)
#   *-loop.mp4      silent preview, autoplays on mobile in place
#                   of a poster still                              (~1-2 MB)
#   *.mp4 films     full production, click-to-play with audio      (~15-20 MB)
#
# The preview loops exist so phones get motion without downloading a 20 MB film
# on scroll. Never point a mobile autoplay at a full film.
#
# Notes on choices made here:
#   · CRF 32 at 1280px holds up well on this footage and roughly halves CRF 28.
#   · VP9/WebM came out LARGER than x264 on this material, so there is no webm.
#   · admission-page.mp4 is letterboxed — its true frame is 1920x888 at y=96.
#   · Loop in/out points were chosen by eye. They matter: the first pick for the
#     admission loop landed on the ad's worried-parent beat and the robotics one
#     on a static talking head. Re-check the frames if you move them.
#   · The original sports-video.mp4 was corrupt past ~88s and was replaced by
#     sports-new.mp4, which decodes clean end to end.

set -euo pipefail
cd "$(dirname "$0")/.."

SRC=public/video
OUT=public/video

missing=()
for m in hero.mp4 admission-page.mp4 robotics-lab.mp4 sports-new.mp4; do
  [ -f "$SRC/$m" ] || missing+=("$m")
done
if [ ${#missing[@]} -gt 0 ]; then
  echo "✗ Missing master(s) in $SRC/: ${missing[*]}" >&2
  echo "  Restore them before re-encoding — see the header of this script." >&2
  exit 1
fi

X264="-c:v libx264 -profile:v main -level 4.0 -preset slow -pix_fmt yuv420p -movflags +faststart"
AUD="-c:a aac -b:a 96k -ac 2"
LOOP="-crf 32 -maxrate 1400k -bufsize 2800k -g 48"

echo "→ hero loop (silent, 16s from t=22 — playground, crafts, classrooms)"
ffmpeg -v error -y -ss 22 -t 16 -i "$SRC/hero.mp4" -an \
  -vf "scale=1280:720:flags=lanczos" $X264 $LOOP "$OUT/hero-loop.mp4"
ffmpeg -v error -y -ss 21.5 -i "$SRC/hero.mp4" -frames:v 1 \
  -vf "scale=1600:-2:flags=lanczos" -q:v 4 "$OUT/hero-poster.jpg"

echo "→ campus tour film"
ffmpeg -v error -y -i "$SRC/hero.mp4" \
  -vf "scale=1280:-2:flags=lanczos" $X264 -crf 32 $AUD "$OUT/campus-tour.mp4"
ffmpeg -v error -y -ss 21.5 -i "$SRC/hero.mp4" -frames:v 1 \
  -vf "scale=1280:-2:flags=lanczos" -q:v 4 "$OUT/campus-tour-poster.jpg"

echo "→ admission story film (letterbox cropped)"
ffmpeg -v error -y -i "$SRC/admission-page.mp4" \
  -vf "crop=1920:888:0:96,scale=1280:-2:flags=lanczos" $X264 -crf 32 $AUD "$OUT/admission-story.mp4"
ffmpeg -v error -y -ss 6 -i "$SRC/admission-page.mp4" -frames:v 1 \
  -vf "crop=1920:888:0:96,scale=1280:-2:flags=lanczos" -q:v 4 "$OUT/admission-story-poster.jpg"

echo "→ robotics lab film"
ffmpeg -v error -y -i "$SRC/robotics-lab.mp4" \
  -vf "scale=1280:-2:flags=lanczos" $X264 -crf 32 $AUD "$OUT/robotics-lab-film.mp4"
ffmpeg -v error -y -ss 30 -i "$SRC/robotics-lab.mp4" -frames:v 1 \
  -vf "scale=1280:-2:flags=lanczos" -q:v 4 "$OUT/robotics-lab-poster.jpg"

echo "→ sports film"
ffmpeg -v error -y -i "$SRC/sports-new.mp4" \
  -vf "scale=1280:-2:flags=lanczos" $X264 -crf 32 $AUD "$OUT/sports-campus.mp4"
ffmpeg -v error -y -ss 29 -i "$SRC/sports-new.mp4" -frames:v 1 \
  -vf "scale=1280:-2:flags=lanczos" -q:v 4 "$OUT/sports-campus-poster.jpg"

# ── Mobile preview loops (silent) ────────────────────────────────────────────
echo "→ preview loops"
# classroom → computer lab → sports court: the holistic mix
ffmpeg -v error -y -ss 60 -t 16 -i "$SRC/hero.mp4" -an \
  -vf "scale=1280:720:flags=lanczos" $X264 $LOOP "$OUT/campus-tour-loop.mp4"
# happy classroom beat — NOT the worried-parent opening
ffmpeg -v error -y -ss 55 -t 15 -i "$SRC/admission-page.mp4" -an \
  -vf "crop=1920:888:0:96,scale=1280:-2:flags=lanczos" $X264 $LOOP "$OUT/admission-story-loop.mp4"
# hands building with kits — NOT the talking-head intro
ffmpeg -v error -y -ss 150 -t 15 -i "$SRC/robotics-lab.mp4" -an \
  -vf "scale=1280:720:flags=lanczos" $X264 $LOOP "$OUT/robotics-lab-loop.mp4"
ffmpeg -v error -y -ss 15 -t 16 -i "$SRC/sports-new.mp4" -an \
  -vf "scale=1280:720:flags=lanczos" $X264 $LOOP "$OUT/sports-campus-loop.mp4"

echo "✓ done"
ls -la "$OUT"/*.mp4
