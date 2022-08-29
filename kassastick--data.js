const DATA     = {};
DATA.str       = ``;    //  original input
DATA.items     = [];    // items yeah
DATA.groups    = [];  // set in main file
DATA.txt_ean   = [];    // filter on text
DATA.ccd_ean   = [];    // filter on color code
/* DATA.ean2groupnode = {};    // know which group nodes to highlight
DATA.ean2itemnode  = {};    // know item nodes
 */
DATA.str += `
=2 övrigt

/ diverse
  # färgburksöppnare
    ean 7311230 39 4450
  # EUR-pall
    ean 0200500 11 1088
  # BENDERS-pall
    ean 0200500 39 9936

/ prov / golvbräda
  # laminat
    ean 0200500 15 0728
  # parkett
    ean 0200500 15 0735

/ prov / kakelplatta
  * ean 0200500 
  # < 30x30cm
    ean ...17 8333
  # > 30x30cm
    ean ...17 8340
  # > 45x45cm
    ean ...29 2176
  # mosaik
    ean ...16 8297

/ prov / tapet
  # tapetbok
    ean 0200500 20 0157 

/ dränering
  * ean 4752053
  # slang 10m/rulle
    ean ...01 3815
  # rör 110mm x 4m
    ean ...01 6397

/ avstängarlist
  # Combimix 15x15mm
    ean 7350007 77 0912
  # Finja 15x15mm
    ean 7331933 59 6111  
  
/ T-list
  * ean 7393593 00
  # grå
    ean ...7727
  # blå
    ean ...7710
  # vit 
    ean ...7697

/ tomburk plast (inkl lock)
  * ean 7311230 35
  # 1L
    ean ...0555
  # 3,4L
    ean ...0647
  # 10L
    ean ...0593
  
/ bauhaus
  # hopfällbar korg
    ean 5900791 00 8504
  # barncancerfonden RUNDA UPP
    ean 0200500 18 8363

    `

DATA.str += `
= 3 gips


/ skiva / gips / normal / 13x900x___
  * ean  7046638 88 8
  * dim  13x900x

  # 1800mm
    ean ...118
    ccd ooos
    dim ...1800

  # 2000mm
    ean ...132
    ccd rss
    dim ...2000

  # 2400mm
    ean ...019
    ccd ryy
    dim ...2400

  # 2500mm
    ean ...033
    ccd yb
    dim ...2500

  # 2700mm
    ean ...057
    ccd rb
    dim ...2700

  # 3000mm
    ean ...071
    ccd yys
    dim ...3000


/ skiva / gips / normal / 13x1200x___
    * ean  5709636 00 
    * dim  13x1200x
    # 2400mm
      ean ...9917
      ccd rbbb
      dim ...2400
    
    # 2500mm
      ean ...9900
      ccd rbb
      dim ...2500

    # 2700mm
      ean ...9887
      ccd rsss
      dim ...2700

    # 3000mm
      ean ...9863
      ccd yyss
      dim ...3000

/ skiva / gips / renovering
  # ytskiva 6mm
    ean 5709 636 39 8240
    ccd o
    dim 6x900x2500

  # X-9 utvändig
    ean 7046 630 12 1244
    ccd ob
    dim 9x1200x2700

/ skiva / gips / kortplank takskiva
  # 1200mm
    ean 5709636 40 8222
    ccd vs
    dim 12,5x600x1200
  # 2400mm
    ean 5709636 40 8246
    ccd vvss
    dim 12,5x600x2400

/ skiva / gips
  # golvgips
    ean 5709636 39 8264
    ccd yyys
    dim 13x600x2400

  # plan skiva försänkt
    ean 7332169 01 7753
    ccd ygg
    dim 13x900x2400
 
`
// gips 2
DATA.str += `
/ skiva / gips / Humidboard 2.0 våtrum
  * ean 7332169 00
  # 13x900x2500
    ean ...5330
    ccd v
  # 13x900x2700
    ean ...5316
    ccd ooo
  # 13x1200x2500
    ean ...5545
    ccd vvvv
  # 13x1200x2700
    ean ...5552
    ccd vvvvvv

/ skiva / gips / brandgips
  * ean 7046630 12
    # 15x900x2500
      ean ...0766
      ccd ryyy
    # 15x900x2400
      ean ...0711
      ccd ryyyyy
    # 15x1200x2500
      ean ...1701
      ccd ryyyy

/ skiva / Gipsotex
  # 12,5x1200x2400
    # 12,5x1200x2400
      ean 7046632 48 5610
      ccd rroo
/ skiva / gips / Norgips standard smygskiva
    # 9x900x2500
      ean 7046636 20 8383
      ccd rroooo

/ skiva / gips / Ultraboard
  * ean 5709636
    # 13x900x2500
      ean ...400097
      ccd bss
    # 15x1200x900
      ean ...398202
      ccd rrbb
    # 13x1200x2500
      ean 7046 636 71 4822
      ccd ysss

/ skiva / gips / Miniboard
  # 13x900x1200
    ean 4003982 539052
    ccd vvvsss
`

// MDF
DATA.str += `
/ skiva / MDF / _x1220x2440mm
  * dim ...x1220x2400mm
  # 8mm
    ean 4042456 22 1994
    ccd b
    dim 8
  # 10mm
    ean 4042456 22 2007
    ccd bb
    dim 10
  # 12mm
    ean 4042456 22 2014
    ccd bbb
    dim 12
  # 16mm
    ean 4042456 22 2021
    ccd bbbb
    dim 16
  # 19mm
    ean 4042456 22 2038
    ccd bbbbb
    dim 19
  # 22mm
    ean 7350072 59 3799
    ccd bbbbbb
    dim 22
  # 25mm
    ean 7350072 59 3805
    ccd bbbbbbb
    dim 25

`

DATA.str += `
/ skiva / trossbotten oljehärdad
  # 6x550x1200mm
    dim 6x550x1200
    ccd yyyyyggggg
    ean 7350072 59 0651

/ skiva / OSB
  * ean 4752011 00
  # 11x897x2500
    ccd ggss
    ean ...1779
  # 11x1197x2500
    ccd gggss
    ean ...1731
  # 15x1250x2500
    ccd ggsss
    ean ...0581
  # 18x1250x2500
    ccd rssss
    ean ...0598
  # 18x600x2397
    ccd yygggg
    ean ...1861
  
/ skiva / spånskiva / __x1200x2500
  * ean 7029560 02
  * dim x1200x2500
  # 10mm
    ccd r
    ean ...7374
    dim 10...
  # 12mm
    ccd rr
    ean ...7398
    dim 12...
  # 16mm
    ccd rrr
    ean ...7381
    dim 16...
  # 19mm
    ccd rrrr
    ean ...7602
    dim 19...
  # 22mm
    ccd rrrrr
    ean ...7619
    dim 22...
    
`
DATA.str += `
/ skiva / golv / regelgolv
  * ean 7029560 00
  # 18x620x1820
    ccd s
    ean ...0773
    dim 18x620x1820
  # 22x620x1820
    ccd ss
    ean ...0698
    dim 22x620x1820
  # 22x620x2420
    ccd sss
    ean ...5389
    dim 22x620x2420
   

/ skiva / golv / forestia renoveringsgolv
  * ean 7029560
  # 12x620x1820
    ccd ssss
    ean ...00 3378
    dim 12x620x1820
  # 22x620x1820
    ccd rs
    ean ...02 0009
    dim 22x620x1820

`
DATA.str += `

/ skiva / plywood / Formplywood Basform (Brun glansig yta) / 12x_x_
  * ean 7350072 59
  # 12x600x2500
    ean ...0354
    ccd og
  # 12x1200x1200
    ean ...0347
    ccd oog
  # 12x1200x2500
    ean ...0361
    ccd ooog
  # 12x1200x2500
    ean ...6547
    ccd ooooss

/ skiva / plywood / formplywood Basform -- OBS! Brun glansig yta / >12x1200x2500
  * ean 7350072 59    
  # 15x1200x2500
    ean ...0378
    ccd oogg
  # 18x1200x2500
    ean ...0385
    ccd ogg
  # 21x1200x2500
    ean ...0392
    ccd oggg

/ skiva / plywood / slitskyddsplywood -- OBS! yta med struktur
  * ean 7350072 59    
  # 15x1200x2500
    ean ...4451
    ccd oooyy

/ skiva / plywood / takplywood _x1200x2400
  * ean 7040437 62
  # 12mm
    ean ...1037
    ccd rv
  # 18mm
    ean ...1365
    ccd rrrGG

/ skiva / plywood / väggplywood Wisa-wall / _x616x2400
  * ean 7350072 59
  # 12mm
    ean ...3201
    ccd ggb
  # 15mm
    ean ...3218
    ccd rrb

/ skiva / plywood / byggplywood C+/C
  * ean 7350072 59 
  # 12x1200x2500mm
    ean ...6639
    ccd ggbb

/ skiva / plywood / furuplywood / _x1220x2440
* ean 7350072 59 
  # 4mm
    ean ...3232
    ccd gG
  # 7mm
    ean ...3249
    ccd ggGG
  # 10mm
    ean ...3256
    ccd gggGGG
  # 12mm
    ean ...3263
    ccd rrrryyyy

/ skiva / plywood / furuplywood / spårad
    * ean 7350072 59 
      # 12x1220x2440
        ean ...2365
        ccd G

/ skiva / plywood / konstruktionsplywood WISA
    * ean 7350072 59 
      # 12x1200x2500
        ean ...3515
        ccd bs
      # 12x900x2500
        ean ...3881
        ccd bbs
      # 15x1200x2500
        ean ...3102
        ccd bbbs
    


/ skiva / plywood / konstruktionsplywood
    * ean 7040437 62
      # 12x900x2500
        ean ...3635
        ccd yyggggg
      # 15x900x2500
        ean ...2416
        ccd GGss
      # 12x1200x2500
        ean ...3666
        ccd bsss
      # 15x1200x2500
        ean ...3680
        ccd rGG
      # 18x1200x2500
        ean ...3697
        ccd yG
      # 21x1200x2500
        ean ...3864
        ccd yyyGG

/ skiva / plywood / vänerply kompakt / _x2420mm 
  * ean 7040437 62
  * info spontade kanter
  * vikt 4-5kg
  * img https://www.moelven.com/globalassets/inriver/images/vanerply-kompakt-k2070.jpg
  # 12mm
    ean ...4717
    ccd ooss
  # 15mm
    ean ...4724


/ skiva / board / _x1220x2440 
    * ean 7350072 59
      # oljehärdat 3mm
        ean ...3041
        ccd ooy
      # oljehärdat 4,8mm
        ean ...3300
        ccd ooooy
      # hårdboard 3mm
        ean ...6226
        ccd oooy

/ skiva / vit lackboard
    * ean 7350072 59
      # matt
        ean ...6554
        ccd ww
      # hålad
        ean ...1443
        ccd www
/ skiva / porös board
      # ~
        dim 12x1200x2440
        ean 7350072 59 1467
        ccd GGG
      # vindtät
        dim 12x1200x2440
        ean 7022611 05 0055
        ccd ooyy
/ skiva / primaflex brandsäker
    * ean 7350072 59
      # 9x1200x2550
        ean ...4727
        ccd rrss
      # 9x595x2550
        ean ...5335
        ccd rrrrssss
 `
DATA.str += `
/ 979 / metallexpander
  # 4x32 H
    ean 4006209 62 3183
  # 4x46mm S (4x45mm)
    ean 4048962 16 4831
  # 4x54mm S
    ean 4048962 23 9744
  # 5x52mm S
    ean 4048962 16 4879
  # 5x65 S
    ean 4006209 62 3121
  # 5x80 S
    ean 4006209 62 3138

/ 979 / kabelkanal
  # ledningslist
    ean 3606480 78 7805
`

DATA.str += `
/ gasol / PK5
  * ean 7330385
  # fyllning
    ean ...13 2052
    dim 5kg
  # tomflaska
    ean ...23 2059
    dim 5kg
    
/ gasol / PK10
  * ean 7330385
  # fyllning
    ean ...13 2106
    dim 10kg
  # tomflaska
    ean ...23 2103
    dim 10kg
`
DATA.str += `
/ 979 / ved
  # björkved 
    ean 4742622 00 0018

/ 979 / jord / 5 för 139:-
  * ean 7391430 24
  # planteringsjord
    ean ...0146
  # täckbark
    ean ...0283
  # toppdress
    ean ...0337
  # naturgödsel 
    ean ...0382

/ 979 / jord / 5 för 99:95
  * ean 7391430 24
  # trädgårdsjord
    ean ...0153
 

`
