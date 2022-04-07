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

/ prov / golv
  # laminat
    ean 0200500 15 0728
  # parkett
    ean 0200500 15 0735

/ prov / kakel
  * ean 0200500 
  # < 30x30cm
    ean ...17 8333
  # > 30x30cm
    ean ...17 8340
  # > 45x45cm
    ean ...29 2176
  # mosaik
    ean ...16 8297
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


/ gips / normal / 13x900x___
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
    dim 2400

  # 2500mm
    ean ...033
    ccd yb
    dim 2500

  # 2700mm
    ean ...057
    ccd rb
    dim 2700

  # 3000mm
    ean ...071
    ccd yys
    dim 3000


/ gips / normal / 13x1200x___
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

/ gips / renovering
  # ytskiva 6mm
    ean 5709 636 39 8240
    ccd o
    dim 6x900x2500

  # X-9 utvändig
    ean 7046 630 12 1244
    ccd ob
    dim 9x1200x2700

/ gips / kortplank takskiva
  # 1200mm
    ean 5709636 40 8222
    ccd vs
    dim 12,5x600x1200
  # 2400mm
    ean 5709636 40 8246
    ccd vvss
    dim 12,5x600x2400

/ gips
  # golvgips
    ean 5709636 39 8264
    ccd yyys
    dim 13x600x2400

  # plan skiva försänkt
    ean 7332169 01 7753
    ccd ygg
    dim 13x900x2400

`

// MDF
DATA.str += `
/ MDF / _x1220x2440mm
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
    ean 4042456 22 3805
    ccd bbbbbbb
    dim 25

`
