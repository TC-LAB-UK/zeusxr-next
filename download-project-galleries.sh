#!/bin/bash
# Download all project gallery images from toddengineering.co.uk
# Run from zeusxr-next root: bash download-project-galleries.sh

set -e
cd "$(dirname "$0")"
BASE="https://www.toddengineering.co.uk"

dl() { curl -fL --retry 3 -o "$1" "$2" && echo "✓ $1" || echo "✗ FAILED: $2"; }

# AL HADDAD MOTORS
mkdir -p public/media/projects/al-haddad-motors
dl public/media/projects/al-haddad-motors/hero.jpg     "$BASE/media/wufdmpr5/out.jpg"
dl public/media/projects/al-haddad-motors/gallery-1.jpg "$BASE/media/syba4n1s/img1.jpg"
dl public/media/projects/al-haddad-motors/gallery-2.jpg "$BASE/media/fc2flvlb/img3.jpg"
dl public/media/projects/al-haddad-motors/gallery-3.jpg "$BASE/media/x4snoroa/img4.jpg"
dl public/media/projects/al-haddad-motors/gallery-4.jpg "$BASE/media/gupf5cbk/b59e37ec-8e40-4f25-9f6a-f69472884835.jpg"
dl public/media/projects/al-haddad-motors/gallery-5.jpg "$BASE/media/wrgkofl2/d8c2ad3e-e87a-4046-a68b-b79c189f5537.jpg"
dl public/media/projects/al-haddad-motors/gallery-6.jpg "$BASE/media/25jbcppl/ead55bfd-a0c9-4146-bc0a-ab99d153b4db.jpg"

# ANGUS MACKINNON
mkdir -p public/media/projects/angus-mackinnon
dl public/media/projects/angus-mackinnon/hero.png      "$BASE/media/iznnq2t3/img_4667.png"
dl public/media/projects/angus-mackinnon/gallery-1.png "$BASE/media/snedrxcn/img_4648.png"
dl public/media/projects/angus-mackinnon/gallery-2.png "$BASE/media/d4gdut0w/img_4649.png"
dl public/media/projects/angus-mackinnon/gallery-3.png "$BASE/media/ixliukf5/img_4652.png"
dl public/media/projects/angus-mackinnon/gallery-4.png "$BASE/media/minlsltr/img_4659.png"
dl public/media/projects/angus-mackinnon/gallery-5.png "$BASE/media/ysrh0ugw/img_4657.png"

# AUTOLUX
mkdir -p public/media/projects/autolux
dl public/media/projects/autolux/hero.jpg "$BASE/media/0p1e0lvn/462264937_122122202240454025_4076624584352154895_n.jpg"

# GEMINI TAUNTON
mkdir -p public/media/projects/gemini-taunton
dl public/media/projects/gemini-taunton/hero.jpg      "$BASE/media/djua12au/b6bb37d0-f229-4e66-bc42-e1a00e4585ef.jpg"
dl public/media/projects/gemini-taunton/gallery-1.jpg "$BASE/media/bh0hlq0r/ab482c7e-2c76-41d0-bcb6-01486395f027.jpg"
dl public/media/projects/gemini-taunton/gallery-2.jpg "$BASE/media/bqbjoy4a/135bc278-d040-4208-a395-cab781ea0ae4.jpg"
dl public/media/projects/gemini-taunton/gallery-3.jpg "$BASE/media/e3cjaugp/4ca7cfdf-63f2-43a3-bd1b-87a5c52e2070.jpg"
dl public/media/projects/gemini-taunton/gallery-4.jpg "$BASE/media/mywccpl1/cd7e5a24-749c-4088-bcdb-d8ae968f8dfc.jpg"
dl public/media/projects/gemini-taunton/gallery-5.jpg "$BASE/media/q5qlcjft/1316bbc3-1e5e-4bf8-a8d7-a73223f47ff9.jpg"
dl public/media/projects/gemini-taunton/gallery-6.jpg "$BASE/media/wjyj3rn3/bd94f527-8998-42ce-882e-f4eaf88350b7.jpg"

# HGV SOLUTIONS
mkdir -p public/media/projects/hgv-solutions
dl public/media/projects/hgv-solutions/hero.png      "$BASE/media/vlwgsbjn/de3f3394-bf58-43d7-b0ab-1112b14c2570.png"
dl public/media/projects/hgv-solutions/gallery-1.jpg "$BASE/media/eszfvotr/b51d30a0-55ed-4537-8987-d0513a2179a7.jpg"
dl public/media/projects/hgv-solutions/gallery-2.jpg "$BASE/media/ipqfkull/0b9ab320-f2b0-4c70-adde-7f67a6a192d9.jpg"
dl public/media/projects/hgv-solutions/gallery-3.jpg "$BASE/media/jioatejd/deda1b13-993e-41b0-a176-a2bdc1c40bc7.jpg"
dl public/media/projects/hgv-solutions/gallery-4.jpg "$BASE/media/udqjxjnh/ecaea07d-70b1-4651-b270-634ebd96a70c.jpg"
dl public/media/projects/hgv-solutions/gallery-5.jpg "$BASE/media/vvufd4y1/6ef93cd6-1a59-426c-a76f-0c3838713ba5.jpg"
dl public/media/projects/hgv-solutions/gallery-6.jpg "$BASE/media/zesjdowe/e19a5423-bd35-4348-a731-229f64b7a10e.jpg"

# HILLS HELICOPTERS
mkdir -p public/media/projects/hills-helicopters
dl public/media/projects/hills-helicopters/hero.jpg      "$BASE/media/tqqcixtw/img_4588.jpg"
dl public/media/projects/hills-helicopters/gallery-1.jpg "$BASE/media/wridofho/img_4582.jpg"
dl public/media/projects/hills-helicopters/gallery-2.jpg "$BASE/media/opfgeduw/img_4585.jpg"
dl public/media/projects/hills-helicopters/gallery-3.jpg "$BASE/media/0ohpatmc/img_4586.jpg"
dl public/media/projects/hills-helicopters/gallery-4.jpg "$BASE/media/qtcp3eoq/img_4580.jpg"
dl public/media/projects/hills-helicopters/gallery-5.jpg "$BASE/media/nv1kjwg5/img_4583.jpg"

# JET GLOW
mkdir -p public/media/projects/jet-glow
dl public/media/projects/jet-glow/hero.jpg      "$BASE/media/agslr5np/photo-2024-08-02-12-48-05-6.jpg"
dl public/media/projects/jet-glow/gallery-1.jpg "$BASE/media/0eyh4yxj/photo-2024-08-02-12-48-05-1.jpg"
dl public/media/projects/jet-glow/gallery-2.jpg "$BASE/media/z4wbyxr2/photo-2024-08-02-12-48-05-2.jpg"
dl public/media/projects/jet-glow/gallery-3.jpg "$BASE/media/uiahrgyv/photo-2024-08-02-12-48-05-5.jpg"
dl public/media/projects/jet-glow/gallery-4.jpg "$BASE/media/syqd0puh/photo-2024-08-02-12-48-05-9.jpg"
dl public/media/projects/jet-glow/gallery-5.jpg "$BASE/media/r4bo2yrj/photo-2024-08-02-12-48-05-12.jpg"

# MG ACCIDENT REPAIR
mkdir -p public/media/projects/mg-accident-repair
dl public/media/projects/mg-accident-repair/hero.png     "$BASE/media/a0khul2b/dsc07408.png"
dl public/media/projects/mg-accident-repair/gallery-1.jpg "$BASE/media/suxi5kwp/1.jpg"
dl public/media/projects/mg-accident-repair/gallery-2.jpg "$BASE/media/l2skezjo/img_2532.jpg"
dl public/media/projects/mg-accident-repair/gallery-3.jpg "$BASE/media/duql313o/img_2547-1.jpg"
dl public/media/projects/mg-accident-repair/gallery-4.jpg "$BASE/media/wfjpoy5t/img_2548-1.jpg"
dl public/media/projects/mg-accident-repair/gallery-5.jpg "$BASE/media/4ztn2hio/img_2553.jpg"

# RHODES
mkdir -p public/media/projects/rhodes
dl public/media/projects/rhodes/hero.jpg      "$BASE/media/0bgj5ymj/1729781701010.jpeg"
dl public/media/projects/rhodes/gallery-1.jpg "$BASE/media/lacm5krh/img_6502.jpg"
dl public/media/projects/rhodes/gallery-2.jpg "$BASE/media/mxtjekoo/img_6494.jpg"
dl public/media/projects/rhodes/gallery-3.jpg "$BASE/media/wttl0rv3/img_6498.jpg"
dl public/media/projects/rhodes/gallery-4.jpg "$BASE/media/ydvogcpr/img_6499.jpg"
dl public/media/projects/rhodes/gallery-5.jpg "$BASE/media/qval1ia1/img_6508.jpg"
dl public/media/projects/rhodes/gallery-6.jpg "$BASE/media/gn2nhngd/img_6514.jpg"

# RMD KWIKFORM
mkdir -p public/media/projects/rmd-kwikform
dl public/media/projects/rmd-kwikform/hero.jpg      "$BASE/media/fpkhzkzl/49efedba-b3f9-4d7d-9496-0f4008c5ef61.jpg"
dl public/media/projects/rmd-kwikform/gallery-1.jpg "$BASE/media/41xd1uja/c1743c58-c672-4e15-b3ed-326bf853e8f3.jpg"
dl public/media/projects/rmd-kwikform/gallery-2.jpg "$BASE/media/cltfekzf/627c64f5-5b58-4be2-9d2c-7889fae10ea6.jpg"
dl public/media/projects/rmd-kwikform/gallery-3.jpg "$BASE/media/hzehdbfc/a722c0db-0b21-4c24-afde-7f2bba40bf1f.jpg"
dl public/media/projects/rmd-kwikform/gallery-4.jpg "$BASE/media/t10nzhoq/d8a447f2-5d06-4352-ad13-04b31c852b62.jpg"
dl public/media/projects/rmd-kwikform/gallery-5.jpg "$BASE/media/tkmmmctl/6579b92b-ea41-489e-9a79-50d35e12a14a.jpg"

# SAIL GP
mkdir -p public/media/projects/sail-gp
dl public/media/projects/sail-gp/hero.jpg      "$BASE/media/dxkgo214/photo-2024-08-01-07-25-52.jpg"
dl public/media/projects/sail-gp/gallery-1.jpg "$BASE/media/x1lj40tc/photo-2024-08-01-07-25-05.jpg"
dl public/media/projects/sail-gp/gallery-2.jpg "$BASE/media/3ryjzwej/photo-2024-08-01-07-25-05-7.jpg"
dl public/media/projects/sail-gp/gallery-3.jpg "$BASE/media/yxzpr5bi/photo-2024-08-01-07-25-05-8.jpg"
dl public/media/projects/sail-gp/gallery-4.jpg "$BASE/media/nkbnhjux/photo-2024-08-01-07-25-05-9.jpg"
dl public/media/projects/sail-gp/gallery-5.jpg "$BASE/media/oivbhcer/photo-2024-08-01-07-25-04.jpg"

# SANDAL BMW
mkdir -p public/media/projects/sandal-bmw
dl public/media/projects/sandal-bmw/hero.png      "$BASE/media/o5bdbnbj/img_3891.png"
dl public/media/projects/sandal-bmw/gallery-1.jpg "$BASE/media/2k2iaqhf/1.jpg"
dl public/media/projects/sandal-bmw/gallery-2.jpg "$BASE/media/wjhh4sd2/2.jpg"
dl public/media/projects/sandal-bmw/gallery-3.jpg "$BASE/media/3j5ffgvv/3.jpg"
dl public/media/projects/sandal-bmw/gallery-4.png "$BASE/media/i4clurxo/img_3873.png"
dl public/media/projects/sandal-bmw/gallery-5.png "$BASE/media/wkjge0l3/img_3733.png"

# SMALLEST COG
mkdir -p public/media/projects/smallest-cog
dl public/media/projects/smallest-cog/hero.jpg      "$BASE/media/3emjgs10/eob_2047eob.jpg"
dl public/media/projects/smallest-cog/gallery-1.jpg "$BASE/media/0g5ddy1p/242194729_128913152809333_9144103536313955115_n.jpg"
dl public/media/projects/smallest-cog/gallery-2.jpg "$BASE/media/hb5g3snn/242243184_128913126142669_7541811579568133041_n.jpg"
dl public/media/projects/smallest-cog/gallery-3.png "$BASE/media/ie3prqf2/img_1967.png"
dl public/media/projects/smallest-cog/gallery-4.png "$BASE/media/rjlpvj2o/img_4619.png"
dl public/media/projects/smallest-cog/gallery-5.jpg "$BASE/media/f4matamf/457495509_523675116702953_6152066328697082405_n.jpg"

# WFEL
mkdir -p public/media/projects/wfel
dl public/media/projects/wfel/hero.jpg      "$BASE/media/djnnhlug/4d93414f-fc17-4b6c-bbf6-383936422a79.jpg"
dl public/media/projects/wfel/gallery-1.jpg "$BASE/media/2wqpgm1a/d55057f3-c099-433f-b3a0-0c7379f71c58.jpg"
dl public/media/projects/wfel/gallery-2.jpg "$BASE/media/bm2hokml/4f0f0043-9142-400f-ad57-6d456310e842.jpg"
dl public/media/projects/wfel/gallery-3.jpg "$BASE/media/tslhr10r/5da4f4dc-6561-4ac3-a3cc-0071ae0c8781.jpg"
dl public/media/projects/wfel/gallery-4.jpg "$BASE/media/x13ng2do/50b22586-14fc-42f9-bf66-a809189c6d7b.jpg"
dl public/media/projects/wfel/gallery-5.jpg "$BASE/media/lpulbkoy/4.jpg"

echo ""
echo "✅ All gallery images downloaded."
echo "Now run: git add public/media/projects && git commit -m 'feat: add project gallery images from old site' && git push origin main"
