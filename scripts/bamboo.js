/* Copyright (c) 2018 Reid Netterville III */

"use strict";

var HuangShan = {};

HuangShan.WhiteTiger = {
      j2: "vv zq __ __ ry wu __ uw __ sx __ qz ",
      j3: "vt __ tv xq __ ws __ uu __ sw __ qx ",
      j5: "wr __ ut __ sv oq qo __ __ tu __ rw ",
      j6: "vu __ tw __ rx wt __ uv yq __ __ qy ",
      k1: "__ qx vt __ tv xq __ ws __ uu __ sw ",
      k2: "yr __ __ qz vv zq __ xs __ wu __ uw ",
      k5: "xr __ wt __ uv yq __ __ qy vu __ tw ",
      k6: "vs __ tu __ rw wr __ ut __ __ oq qo ",
      n0: "vr __ tt __ rv wq __ us __ su __ qw ",
     j17: "__ __ tu __ rw wr __ ut __ sv oq qo ",
     j23: "vv zq __ xs __ wu __ uw __ sx __ qz ",
     j25: "qr vp __ __ pv rq wo __ __ yu __ ow ",
     j26: "vv zq __ __ ry wu __ uw yr __ __ qz ",
     j36: "vu __ tw xr __ wt __ uv yq __ __ qy ",
     j56: "xr __ wt __ uv yq so __ qy __ __ tw ",
     k12: "__ sx __ qz vv zq __ xs __ wu __ uw ",
     k15: "__ rx wt __ uv yq __ __ qy vu __ tw ",
     k25: "yr __ __ qz vv zq __ __ ry wu __ uw ",
     k26: "vp __ __ pv rq wo __ uy __ __ ow qr ",
     k34: "wr __ ut __ __ oq qo vs __ tu __ rw ",
     k56: "vu __ tw __ rx wt __ __ yq __ os qy ",
    j236: "vv zq __ xs __ wu __ uw yr __ __ qz ",
    j256: "qr vp __ __ pv rq wo __ uy __ __ ow ",
    j2k5: "qr vp __ __ pv rq __ __ uy yu __ ow ",
    j2k6: "vv zq __ __ ry wu __ uw __ __ ot qz ",
    j2y3: "vv zq to __ __ wu __ uw __ sx __ qz ",
    j3k5: "yr __ ot qz __ zq __ __ ry wu __ uw ",
    j3k6: "vo __ ty xu __ ww __ ux __ __ ov qq ",
    j5y6: "wr __ ut __ sv oq qo vs __ __ __ rw ",
    k125: "__ sx __ qz vv zq __ __ ry wu __ uw ",
    k1j5: "__ ux yt __ ov qq vo __ __ xu __ ww ",
    k1j6: "__ zq to __ ry wu __ uw yr __ __ qz ",
    k256: "vp __ __ pv rq wo __ __ yu __ ow qr ",
    k2j5: "yr __ __ qz vv zq to __ __ wu __ uw ",
    k2j6: "vp __ __ pv rq wo __ uy yu __ __ qr ",
    k2x1: "__ __ ot qz vv zq __ xs __ wu __ uw ",
    k6x5: "vs __ tu __ rw wr __ __ __ sv oq qo ",
    n167: "yr __ __ qz __ zq to __ ry wu __ uw ",
    n345: "__ zq __ __ ry wu __ uw yr __ ot qz ",
    n5y2: "vp __ __ pv rq __ __ uy yu __ ow qr ",
    n6x2: "qr vp __ __ pv rq wo __ uy yu __ __ ",
   j17y2: "vs __ __ __ rw wr __ ut __ sv oq qo ",
   j23k6: "vv zq __ xs __ wu __ uw __ __ ot qz ",
   j25y6: "or qp __ __ tv pq ro ws __ __ __ sw ",
   j26y3: "vv zq to __ __ wu __ uw yr __ __ qz ",
   j2k34: "or qp __ __ __ pq ro ws __ uu __ sw ",
   j2k56: "vv zq __ __ ry wu __ __ yr __ ot qz ",
   j34k6: "vt __ tv pq ro __ __ uu __ __ or qp ",
   j56y7: "xr __ wt __ uv yq so __ qy vu __ __ ",
   k12j5: "__ sx __ qz vv zq to __ __ wu __ uw ",
   k17j5: "or qp vt __ tv pq ro __ __ uu __ __ ",
   k2j17: "__ __ __ pq ro ws __ uu __ sw or qp ",
   k25x1: "__ __ ot qz vv zq __ __ ry wu __ uw ",
   k26x5: "vt __ __ pq ro ws __ __ __ sw or qp ",
   k2j56: "yr __ __ qz vv zq to __ ry __ __ uw ",
   k34x2: "wr __ __ __ sv oq qo vs __ tu __ rw ",
   k56x4: "vu __ tw __ rx __ __ uv yq __ os qy ",
   n25x6: "or qp vt __ __ pq ro ws __ __ __ sw ",
   n26y5: "__ __ tv pq ro ws __ __ __ sw or qp ",
   n45y2: "vo __ __ xu __ ww __ ux yt __ ov qq ",
   n67x2: "__ ux __ __ ov qq vo __ ty xu __ ww ",
  j136y7: "__ __ tw xr __ wt __ uv yq so __ qy ",
  j167y2: "vu __ __ __ rx wt __ uv yq __ os qy ",
  j246y3: "vv zq to __ ry __ __ uw yr __ __ qz ",
  j26y34: "vv zq to xs __ __ __ uw yr __ __ qz ",
  j2k6x5: "vv zq __ __ ry wu __ __ __ sx ot qz ",
  j2k6y3: "vv zq to __ __ wu __ uw __ __ ot qz ",
  j346y5: "yr __ ot qz vv zq __ __ ry __ __ uw ",
  j3k5x4: "vu __ tw xr __ __ __ uv yq so __ qy ",
  k135x4: "__ rx wt __ __ yq __ os qy vu __ tw ",
  k157x6: "vv zq to __ ry wu __ __ yr __ __ qz ",
  k1j6y7: "__ rx wt __ uv yq __ os qy vu __ __ ",
  k257x1: "yr __ ot qz vv zq __ __ ry wu __ __ ",
  k25x17: "__ sx ot qz vv zq __ __ ry wu __ __ ",
  k2j5x1: "__ __ ot qz vv zq to __ __ wu __ uw ",
  k2j5y6: "yr __ __ qz vv zq to xs __ __ __ uw ",
  k345x2: "xr __ __ __ uv yq so __ qy vu __ tw ",
  n167x4: "vu __ __ xr __ wt __ uv yq so __ qy ",
  n345y7: "__ rx __ __ uv yq __ os qy vu __ tw ",
 j2k56x4: "vv zq __ __ ry __ __ uw yr __ ot qz ",
 j3k56x4: "vo __ ty xu __ __ __ ux yt __ ov qq ",
 k1j56y7: "__ ux yt __ ov qq vo __ ty xu __ __ ",
 k2j56y7: "yr __ __ qz vv zq to __ ry wu __ __ "};


HuangShan.AzureDragon = {
      j2: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
      j3: "汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 一一 铁铀 ",
      j5: "铅铜 一一 金锡 一一 银汞 钒铁 铁钒 一一 一一 锡金 一一 铜铅 ",
      j6: "汞金 一一 锡铅 一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
      k1: "一一 铁铀 汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 ",
      k2: "镎铜 一一 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
      k5: "铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
      k6: "汞银 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 一一 钒铁 铁钒 ",
      n0: "汞铜 一一 锡锡 一一 铜汞 铅铁 一一 金银 一一 银金 一一 铁铅 ",
     j17: "一一 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
     j23: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
     j25: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 ",
     j26: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
     j36: "汞金 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
     j56: "铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 一一 一一 锡铅 ",
     k12: "一一 银铀 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
     k15: "一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
     k25: "镎铜 一一 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
     k26: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 一一 一一 钒铅 铁铜 ",
     k34: "铅铜 一一 金锡 一一 一一 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
     k56: "汞金 一一 锡铅 一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 ",
    j236: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    j256: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 一一 一一 钒铅 ",
    j2k5: "铁铜 汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 ",
    j2k6: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
    j2y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
    j3k5: "镎铜 一一 钒锡 铁钚 一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    j3k6: "汞钒 一一 锡镎 铀金 一一 铅铅 一一 金铀 一一 一一 钒汞 铁铁 ",
    j5y6: "铅铜 一一 金锡 一一 银汞 钒铁 铁钒 汞银 一一 一一 一一 铜铅 ",
    k125: "一一 银铀 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    k1j5: "一一 金铀 镎锡 一一 钒汞 铁铁 汞钒 一一 一一 铀金 一一 铅铅 ",
    k1j6: "一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    k256: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 铁铜 ",
    k2j5: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
    k2j6: "汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 铁铜 ",
    k2x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
    k6x5: "汞银 一一 锡金 一一 铜铅 铅铜 一一 一一 一一 银汞 钒铁 铁钒 ",
    n167: "镎铜 一一 一一 铁钚 一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 ",
    n345: "一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 钒锡 铁钚 ",
    n5y2: "汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 铁铜 ",
    n6x2: "铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 ",
   j17y2: "汞银 一一 一一 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
   j23k6: "汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
   j25y6: "钒铜 铁锰 一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   j26y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
   j2k34: "钒铜 铁锰 一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 ",
   j2k56: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 镎铜 一一 钒锡 铁钚 ",
   j34k6: "汞锡 一一 锡汞 锰铁 铜钒 一一 一一 金金 一一 一一 钒铜 铁锰 ",
   j56y7: "铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 一一 ",
   k12j5: "一一 银铀 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
   k17j5: "钒铜 铁锰 汞锡 一一 锡汞 锰铁 铜钒 一一 一一 金金 一一 一一 ",
   k2j17: "一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 钒铜 铁锰 ",
   k25x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
   k26x5: "汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   k2j56: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 ",
   k34x2: "铅铜 一一 一一 一一 银汞 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
   k56x4: "汞金 一一 锡铅 一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 ",
   n25x6: "钒铜 铁锰 汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   n26y5: "一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   n45y2: "汞钒 一一 一一 铀金 一一 铅铅 一一 金铀 镎锡 一一 钒汞 铁铁 ",
   n67x2: "一一 金铀 一一 一一 钒汞 铁铁 汞钒 一一 锡镎 铀金 一一 铅铅 ",
  j136y7: "一一 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  j167y2: "汞金 一一 一一 一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 ",
  j246y3: "汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j26y34: "汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j2k6x5: "汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 一一 银铀 钒锡 铁钚 ",
  j2k6y3: "汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
  j346y5: "镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 ",
  j3k5x4: "汞金 一一 锡铅 铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 ",
  k135x4: "一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
  k157x6: "汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 镎铜 一一 一一 铁钚 ",
  k1j6y7: "一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 一一 ",
  k257x1: "镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k25x17: "一一 银铀 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k2j5x1: "一一 一一 钒锡 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
  k2j5y6: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 ",
  k345x2: "铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 锡铅 ",
  n167x4: "汞金 一一 一一 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  n345y7: "一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
 j2k56x4: "汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 镎铜 一一 钒锡 铁钚 ",
 j3k56x4: "汞钒 一一 锡镎 铀金 一一 一一 一一 金铀 镎锡 一一 钒汞 铁铁 ",
 k1j56y7: "一一 金铀 镎锡 一一 钒汞 铁铁 汞钒 一一 锡镎 铀金 一一 一一 ",
 k2j56y7: "镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 "};


if (document.title === "") {
  if (document.location.hash) {
    document.title = document.location.hash.replace("#", "");
  } else {
    document.title = "n0_n0";
  }
}

HuangShan.clade = document.title.split("_");

if (HuangShan.clade[0] !== undefined && HuangShan.clade[0] !== "" &&
    HuangShan.AzureDragon.hasOwnProperty(HuangShan.clade[0])) {
  HuangShan.prime = HuangShan.clade[0];
} else {
  HuangShan.prime = "n0";
}

if (HuangShan.clade[1] !== undefined && HuangShan.clade[1] !== "" &&
    HuangShan.AzureDragon.hasOwnProperty(HuangShan.clade[1])) {
  HuangShan.retro = HuangShan.clade[1];
} else {
  HuangShan.retro = "n0";
}


HuangShan.digraph = {
  fj: function(qp) {return this.en(qp)},
  cj: function(qp) {return this.bn(qp)},
  gj: function(qp) {return this.fk(qp)},
  dj: function(qp) {return this.ck(qp)},
  aj: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  ej: function(qp) {return(qp.slice( 9,36).concat(qp.slice(0, 9)))},
  bj: function(qp) {return(qp.slice(30,36).concat(qp.slice(0,30)))},
  fn: function(qp) {return(qp.slice(15,36).concat(qp.slice(0,15)))},
  cn: function(qp) {return(qp.slice( 0,36).concat(qp.slice(0, 0)))},
  gn: function(qp) {return(qp.slice(21,36).concat(qp.slice(0,21)))},
  dn: function(qp) {return(qp.slice( 6,36).concat(qp.slice(0, 6)))},
  an: function(qp) {return(qp.slice(27,36).concat(qp.slice(0,27)))},
  en: function(qp) {return(qp.slice(12,36).concat(qp.slice(0,12)))},
  bn: function(qp) {return(qp.slice(33,36).concat(qp.slice(0,33)))},
  fk: function(qp) {return(qp.slice(18,36).concat(qp.slice(0,18)))},
  ck: function(qp) {return(qp.slice( 3,36).concat(qp.slice(0, 3)))},
  gk: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  dk: function(qp) {return this.ej(qp)},
  ak: function(qp) {return this.bj(qp)},
  ek: function(qp) {return this.fn(qp)},
  bk: function(qp) {return this.cn(qp)}
};

HuangShan.headstock = function(list) {
  var abacus = 0;
  while (abacus < list.length) {
    document.writeln(list[abacus]);
    abacus += 1;
  }
};

HuangShan.beadgcf = function(qp) {
  var jiandu = [
    this.digraph.fn(qp).concat(qp.slice(15,18)),
    this.digraph.cn(qp).concat(qp.slice( 0, 3)),
    this.digraph.gn(qp).concat(qp.slice(21,24)),
    this.digraph.dn(qp).concat(qp.slice( 6, 9)),
    this.digraph.an(qp).concat(qp.slice(27,30)),
    this.digraph.en(qp).concat(qp.slice(12,15)),
    this.digraph.bn(qp).concat(qp.slice(33,36))
  ];
  this.headstock(jiandu);
};

HuangShan.cgdae = function(qp) {
  var jiandu = [
    this.digraph.en(qp).concat(qp.slice(12,15)),
    this.digraph.an(qp).concat(qp.slice(27,30)),
    this.digraph.dn(qp).concat(qp.slice( 6, 9)),
    this.digraph.gn(qp).concat(qp.slice(21,24)),
    this.digraph.cn(qp).concat(qp.slice( 0, 3))
  ];
  this.headstock(jiandu);
};

HuangShan.eadgbe = function(qp) {
  var jiandu = [
    this.digraph.en(qp).concat(qp.slice(12,15)),
    this.digraph.bn(qp).concat(qp.slice(33,36)),
    this.digraph.gn(qp).concat(qp.slice(21,24)),
    this.digraph.dn(qp).concat(qp.slice( 6, 9)),
    this.digraph.an(qp).concat(qp.slice(27,30)),
    this.digraph.en(qp).concat(qp.slice(12,15))
  ];
  this.headstock(jiandu);
};


HuangShan.serialism = function(entity) {
  var nt = new Date();
  var sr = document.getElementById(entity);
  sr.textContent = nt.getTime();
};

HuangShan.auricular = function(entity) {
  var srl = document.getElementById(entity);
  srl.addEventListener("click", function() {
    window.history.back();
  }, false);
};


