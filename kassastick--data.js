let source_str = ``;

source_str += `
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
  * ean 0200500...
  # < 30x30cm
    ean ...17 8333
  # > 30x30cm
    ean ...17 8340
  # > 45x45cm
    ean ...29 2176
  # mosaik
    ean ...16 8297

/ prov / 
  # tapetbok
    ean 0200500 20 0157 

/ dränering
  * ean 4752053...
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
  * ean 7393593 00...
  # grå
    ean ...7727
  # blå ...7710
  # vit ...7697

/ tomburk plast (inkl lock)
  * ean 7311230 35...
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
    ean 0200500 188363

    `

source_str += `
= 3 gips


/ gips / normal / 13x900x___
  * ean  7046638888...

  # 1800mm
    ean ...118
    ccd ooos
    dim 13x900x1800

  # 2000mm
    ean ...132
    ccd rss
    dim 13x900x2000

  # 2400mm
    ean ...019
    ccd ryy
    dim 13x900x2400

  # 2500mm
    ean ...033
    ccd by
    dim 13x900x2500

  # 2700mm
    ean ...057
    ccd rb
    dim 13x900x2700

  # 3000mm
    ean ...071
    ccd yys
    dim 13x900x3000


/ gips / normal / 13x900x___
    * ean  5709636009...
    # 2400mm
      ean ...917
      ccd ooos
      dim 13x1200x2400
    
    # 2500mm
      ean ...900
      ccd ooos
      dim 13x1200x2500

    # 2700mm
      ean ...887
      ccd ooos
      dim 13x1200x2700

/ gips / renovering
  # ytskiva 6mm
    ean 5709 636 398 240
    ccd o
    dim 6x900x2500

  # X-9 utvändig
    ean 7046 630 121 244
    ccd ob
    dim 9x1200x2700

/ gips / kortplank takskiva
  # 1200mm
    ean 5709636 408 222
    ccd vs
    dim 12,5x600x1200
  # 2400mm
    ean 5709636 408 246
    ccd vvss
    dim 12,5x600x2400

/ gips
  # golvgips
    ean 5709636 398 264
    ccd yyys
    dim 13x600x2400

  # plan skiva försänkt
    ean 7332169 017 753
    ccd ygg
    dim 13x900x2400

`