#!/bin/bash
# Download all media from toddengineering.co.uk before the old site goes offline.
# Run from the zeusxr-next root:  bash download-old-site-media.sh
# Images are saved to public/media/ with clean names and code references already updated.

set -e
cd "$(dirname "$0")"

mkdir -p public/media/projects/smallest-cog
mkdir -p public/media/projects/hills-helicopters
mkdir -p public/media/projects/sail-gp
mkdir -p public/media/projects/wfel
mkdir -p public/media/projects/gemini-taunton
mkdir -p public/media/projects/al-haddad-motors
mkdir -p public/media/projects/angus-mackinnon
mkdir -p public/media/projects/rhodes
mkdir -p public/media/projects/rmd-kwikform
mkdir -p public/media/projects/hgv-solutions
mkdir -p public/media/projects/autolux
mkdir -p public/media/projects/jet-glow
mkdir -p public/media/projects/mg-accident-repair
mkdir -p public/media/projects/sandal-bmw
mkdir -p public/media/about
mkdir -p public/media/products/apollo-wheelcabin
mkdir -p public/media/products/nemesis
mkdir -p public/media/products/smart-mixing
mkdir -p public/media/products/worky

echo "Downloading project images..."

curl -fL --retry 3 -o "public/media/projects/smallest-cog/hero.jpg" \
  "https://www.toddengineering.co.uk/media/3emjgs10/eob_2047eob.jpg"

curl -fL --retry 3 -o "public/media/projects/hills-helicopters/hero.jpg" \
  "https://www.toddengineering.co.uk/media/tqqcixtw/img_4588.jpg"

curl -fL --retry 3 -o "public/media/projects/sail-gp/hero.jpg" \
  "https://www.toddengineering.co.uk/media/dxkgo214/photo-2024-08-01-07-25-52.jpg"

curl -fL --retry 3 -o "public/media/projects/wfel/hero.jpg" \
  "https://www.toddengineering.co.uk/media/djnnhlug/4d93414f-fc17-4b6c-bbf6-383936422a79.jpg"

curl -fL --retry 3 -o "public/media/projects/gemini-taunton/hero.jpg" \
  "https://www.toddengineering.co.uk/media/djua12au/b6bb37d0-f229-4e66-bc42-e1a00e4585ef.jpg"

curl -fL --retry 3 -o "public/media/projects/al-haddad-motors/hero.jpg" \
  "https://www.toddengineering.co.uk/media/wufdmpr5/out.jpg"

curl -fL --retry 3 -o "public/media/projects/angus-mackinnon/hero.png" \
  "https://www.toddengineering.co.uk/media/iznnq2t3/img_4667.png"

curl -fL --retry 3 -o "public/media/projects/rhodes/hero.jpg" \
  "https://www.toddengineering.co.uk/media/0bgj5ymj/1729781701010.jpeg"

curl -fL --retry 3 -o "public/media/projects/rmd-kwikform/hero.jpg" \
  "https://www.toddengineering.co.uk/media/fpkhzkzl/49efedba-b3f9-4d7d-9496-0f4008c5ef61.jpg"

curl -fL --retry 3 -o "public/media/projects/hgv-solutions/hero.png" \
  "https://www.toddengineering.co.uk/media/vlwgsbjn/de3f3394-bf58-43d7-b0ab-1112b14c2570.png"

curl -fL --retry 3 -o "public/media/projects/autolux/hero.jpg" \
  "https://www.toddengineering.co.uk/media/0p1e0lvn/462264937_122122202240454025_4076624584352154895_n.jpg"

curl -fL --retry 3 -o "public/media/projects/jet-glow/hero.jpg" \
  "https://www.toddengineering.co.uk/media/agslr5np/photo-2024-08-02-12-48-05-6.jpg"

curl -fL --retry 3 -o "public/media/projects/mg-accident-repair/hero.png" \
  "https://www.toddengineering.co.uk/media/a0khul2b/dsc07408.png"

curl -fL --retry 3 -o "public/media/projects/sandal-bmw/hero.png" \
  "https://www.toddengineering.co.uk/media/o5bdbnbj/img_3891.png"

echo "Downloading about/company images..."

curl -fL --retry 3 -o "public/media/about/heritage-1.jpg" \
  "https://www.toddengineering.co.uk/media/0hlpmjde/cci28062018.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-2.jpg" \
  "https://www.toddengineering.co.uk/media/cftf5hja/cci28062018_0001.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-3.jpg" \
  "https://www.toddengineering.co.uk/media/ixnmjehl/cci28062018_0002.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-4.jpg" \
  "https://www.toddengineering.co.uk/media/sf3nmusj/cci28062018_0003.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-5.jpg" \
  "https://www.toddengineering.co.uk/media/cqlb4mkd/cci28062018_0004.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-6.jpg" \
  "https://www.toddengineering.co.uk/media/3gdbf5tr/cci28062018_0005.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-7.jpg" \
  "https://www.toddengineering.co.uk/media/ncig4hc4/cci28062018_0006.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-8.jpg" \
  "https://www.toddengineering.co.uk/media/lhgbdbvi/cci28062018_0009.jpg"
curl -fL --retry 3 -o "public/media/about/heritage-9.jpg" \
  "https://www.toddengineering.co.uk/media/adjc1nbj/cci28062018_0008.jpg"
curl -fL --retry 3 -o "public/media/about/todds-1.png" \
  "https://www.toddengineering.co.uk/media/cmpbguho/todds_-79.png"
curl -fL --retry 3 -o "public/media/about/todds-2.png" \
  "https://www.toddengineering.co.uk/media/gtmggoo1/todds_-42.png"
curl -fL --retry 3 -o "public/media/about/todds-3.png" \
  "https://www.toddengineering.co.uk/media/kwhpgnx2/todds_-76.png"
curl -fL --retry 3 -o "public/media/about/todds-4.png" \
  "https://www.toddengineering.co.uk/media/lxhfdusf/todds_-65.png"
curl -fL --retry 3 -o "public/media/about/todds-5.png" \
  "https://www.toddengineering.co.uk/media/vsinkwca/todds_-13.png"

echo "Downloading product images..."

curl -fL --retry 3 -o "public/media/products/apollo-wheelcabin/hero.jpg" \
  "https://www.toddengineering.co.uk/media/yqijidba/5235431c-d7b3-43f4-b163-fea192b3c118.jpg"
curl -fL --retry 3 -o "public/media/products/apollo-wheelcabin/2.jpg" \
  "https://www.toddengineering.co.uk/media/2sjcji4z/af357bde-3ba5-44cf-a97f-240e319622bc.jpg"
curl -fL --retry 3 -o "public/media/products/apollo-wheelcabin/3.jpg" \
  "https://www.toddengineering.co.uk/media/353pxb03/c71a4c57-5e75-4465-909a-a53469716475.jpg"
curl -fL --retry 3 -o "public/media/products/nemesis/hero.png" \
  "https://www.toddengineering.co.uk/media/qgig2r1t/3fb3e61c-323a-4d73-b553-1027e9322a1a.png"
curl -fL --retry 3 -o "public/media/products/smart-mixing/hero.png" \
  "https://www.toddengineering.co.uk/media/lvnhnwgd/img_3515.png"
curl -fL --retry 3 -o "public/media/products/smart-mixing/2.png" \
  "https://www.toddengineering.co.uk/media/nklg4vs4/img_2349.png"
curl -fL --retry 3 -o "public/media/products/smart-mixing/3.png" \
  "https://www.toddengineering.co.uk/media/x2sabjv4/img_2548.png"
curl -fL --retry 3 -o "public/media/products/worky/hero.png" \
  "https://www.toddengineering.co.uk/media/jjvc5coz/baxt-products.png"
curl -fL --retry 3 -o "public/media/products/worky/2.png" \
  "https://www.toddengineering.co.uk/media/rqmnbze1/2.png"

echo ""
echo "✅ Done. All media saved to public/media/"
echo "Now run:  git add public/media && git commit -m 'feat: archive all toddengineering.co.uk media locally' && git push origin main"
