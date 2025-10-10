//Fri Oct 10 2025 00:19:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ae) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
        {
          return typeof ah;
        }
      } : function (ah) {
        return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
      };
      return b(ae);
    }
  }
  function c(ae, af) {
    {
      var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
      if (!ah) {
        {
          if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
            {
              ah && (ae = ah);
              var ai = 0;
              var aj = function () {};
              return {
                s: aj,
                n: function () {
                  {
                    var an = {
                      done: true
                    };
                    return ai >= ae.length ? an : {
                      done: false,
                      value: ae[ai++]
                    };
                  }
                },
                e: function (an) {
                  {
                    throw an;
                  }
                },
                f: aj
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ak;
      var al = true;
      var am = false;
      return {
        s: function () {
          {
            ah = ah.call(ae);
          }
        },
        n: function () {
          {
            var ap = ah.next();
            al = ap.done;
            return ap;
          }
        },
        e: function (ap) {
          am = true;
          ak = ap;
        },
        f: function () {
          {
            try {
              {
                al || null == ah.return || ah.return();
              }
            } finally {
              {
                if (am) {
                  throw ak;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ae, af) {
    {
      if (ae) {
        {
          if ("string" == typeof ae) {
            return f(ae, af);
          }
          var ah = {}.toString.call(ae).slice(8, -1);
          "Object" === ah && ae.constructor && (ah = ae.constructor.name);
          return "Map" === ah || "Set" === ah ? Array.from(ae) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(ae, af) : undefined;
        }
      }
    }
  }
  function f(ae, af) {
    {
      (null == af || af > ae.length) && (af = ae.length);
      for (var ag = 0, ah = Array(af); ag < af; ag++) {
        ah[ag] = ae[ag];
      }
      return ah;
    }
  }
  function g() {
    "use strict";

    var ae = {
      JZcpH: function (aL, aM) {
        return aL === aM;
      },
      FOOps: "throw",
      GJlIH: function (aL, aM, aN, aO, aP) {
        return aL(aM, aN, aO, aP);
      },
      PZmDv: "next",
      LLvQF: function (aL, aM) {
        return aL == aM;
      },
      qfpJi: "function",
      PsDoO: "xxxCK",
      TzkOk: function (aL, aM) {
        return aL === aM;
      },
      fslCk: "LvBMR",
      BuMRS: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      dLriW: function (aL, aM) {
        return aL !== aM;
      },
      rptiw: "EAZKN",
      tLEdm: "gAOEk",
      xXwFI: "PxVOD",
      pbZLU: "return",
      xsJbm: function (aL, aM) {
        return aL * aM;
      },
      TaSEV: function (aL, aM) {
        return aL === aM;
      },
      OivOh: function (aL, aM) {
        return aL & aM;
      },
      merwo: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      HopdT: function (aL, aM) {
        return aL + aM;
      },
      cxzAc: "The iterator does not provide a '",
      dDlPz: "' method",
      xBASJ: "Map",
      Nufhs: function (aL, aM) {
        return aL === aM;
      },
      dhvJj: "dFaEK",
      iaOIP: function (aL) {
        return aL();
      },
      ClEQr: " API请求失败，请检查网路重试",
      jtUxi: "Generator is already running",
      iNDBI: function (aL, aM) {
        return aL === aM;
      },
      EtzMK: "UDzMn",
      HewTF: "MkFaP",
      MUzqf: function (aL, aM) {
        return aL === aM;
      },
      zsneK: function (aL, aM) {
        return aL !== aM;
      },
      jFZdS: "FPkjl",
      kwApq: "kKsVa",
      SOtTh: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      GQoMG: function (aL, aM) {
        return aL === aM;
      },
      wEijf: "dybCL",
      iNlux: "yTlHC",
      CvtXZ: function (aL, aM) {
        return aL === aM;
      },
      oMPEF: function (aL, aM) {
        return aL === aM;
      },
      muyBQ: function (aL, aM) {
        return aL === aM;
      },
      FFMaZ: "aaeAJ",
      OGqXI: "iplfZ",
      XzcZe: function (aL, aM) {
        return aL === aM;
      },
      MIEsW: "GnYpu",
      EvSaT: "TkHyC",
      EgAyJ: "glazH",
      AgfhS: "2|4|5|1|0|3",
      KbKAL: function (aL, aM) {
        return aL === aM;
      },
      aErdb: "iterator result is not an object",
      CDyxn: function (aL, aM) {
        return aL === aM;
      },
      oSQdE: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      ytjay: function (aL, aM) {
        return aL === aM;
      },
      EAbgk: function (aL, aM) {
        return aL + aM;
      },
      DEqqd: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      ZASGd: function (aL, aM) {
        return aL(aM);
      },
      prkwa: function (aL) {
        return aL();
      },
      nRoRz: function (aL, aM) {
        return aL >= aM;
      },
      pKxZU: function (aL) {
        return aL();
      },
      YgqBp: "end",
      nmuUs: function (aL, aM) {
        return aL !== aM;
      },
      pPiHn: "gLmEP",
      vajff: function (aL, aM) {
        return aL < aM;
      },
      BZRZy: "(((.+)+)+)+$",
      GRSEl: function (aL, aM, aN, aO, aP) {
        return aL(aM, aN, aO, aP);
      },
      NLTub: "vouYn",
      vGOiM: function (aL, aM) {
        return aL == aM;
      },
      WZcSG: "GeneratorFunction",
      UYUlB: "Utils_Code",
      rDLYM: "✅ Utils加载成功, 请继续",
      RmlyT: function (aL, aM) {
        return aL(aM);
      },
      wBXmW: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      WzgtA: function (aL, aM) {
        return aL !== aM;
      },
      AXdSV: "OSIVD",
      jURSO: function (aL, aM) {
        return aL === aM;
      },
      hQQnu: "IXXEJ",
      aNmah: function (aL, aM) {
        return aL === aM;
      },
      jqwRD: function (aL, aM) {
        return aL === aM;
      },
      hhQWf: "iPScr",
      xIDvz: function (aL, aM, aN, aO, aP, aQ, aR, aS) {
        return aL(aM, aN, aO, aP, aQ, aR, aS);
      },
      qrUXt: function (aL, aM) {
        return aL === aM;
      },
      aqeaU: "XAjxd",
      KhzqQ: "sEBkW",
      aDXQv: function (aL, aM) {
        return aL in aM;
      },
      YgEum: "WKOwW",
      PZpUS: function (aL, aM) {
        return aL === aM;
      },
      veTvU: "VoLaI",
      JXabF: function (aL, aM) {
        return aL - aM;
      },
      OkqFn: function (aL, aM) {
        return aL >= aM;
      },
      BAJMh: function (aL, aM) {
        return aL === aM;
      },
      MWpfy: "break",
      NAyxf: function (aL, aM) {
        return aL === aM;
      },
      UEkSG: "normal",
      zbPZh: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      dLxrT: "Object",
      fTyoD: "Arguments",
      zroYv: "jidzK",
      LXuQA: "JGpto",
      BIJKY: function (aL, aM) {
        return aL === aM;
      },
      KbKmN: "root",
      vePjz: function (aL, aM) {
        return aL(aM);
      },
      MSLDm: function (aL, aM) {
        return aL <= aM;
      },
      nxLtw: function (aL, aM) {
        return aL === aM;
      },
      zeiCo: "HQWbe",
      NWvgM: "finallyLoc",
      ujvhK: function (aL, aM) {
        return aL && aM;
      },
      QHovM: function (aL, aM) {
        return aL !== aM;
      },
      oFHxA: "Xjinz",
      XVrGq: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      WmxVt: function (aL, aM) {
        return aL < aM;
      },
      AFznY: function (aL, aM) {
        return aL !== aM;
      },
      qbUua: "dOFyk",
      ihVRR: "gDWea",
      maWim: "GuvWC",
      TONpn: function (aL, aM) {
        return aL(aM);
      },
      YTSnX: function (aL, aM) {
        return aL === aM;
      },
      jWsph: "14.1.6",
      nyWTG: function (aL, aM) {
        return aL(aM);
      },
      qMvkp: "M2001J2C",
      LiWAX: "M2001J1E",
      PGupT: "M2002J9E",
      cSJeL: "M2101K9C",
      vGvcx: "2201123C",
      MFbUZ: "2112123AC",
      XAvsR: "2201122C",
      PLQjr: "2211133C",
      OqWBh: "24031PN0DC",
      utsqr: "23090RA98C",
      MTCwW: "2312CRAD3C",
      DrjzA: "Xiaomi ",
      VMjOl: "Android",
      hfaWa: ";1.0;null;",
      BOAym: "6.11.0",
      GItBR: function (aL, aM) {
        return aL === aM;
      },
      xzxja: "vONNa",
      KRbom: "Nbkpq",
      nLxLb: "dprVr",
      aDZVZ: function (aL, aM) {
        return aL < aM;
      },
      ZzYRP: "hrHrU",
      evTTZ: "continue",
      rHhbV: function (aL, aM) {
        return aL < aM;
      },
      romjP: function (aL, aM) {
        return aL === aM;
      },
      jSjFl: function (aL, aM) {
        return aL instanceof aM;
      },
      GchiP: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      EzbfO: "_invoke",
      AyfRn: "hRDbV",
      eDMoS: "oZgRe",
      fDRxd: function (aL, aM) {
        return aL >= aM;
      },
      PLFuL: "vrFes",
      ZEEux: function (aL, aM) {
        return aL === aM;
      },
      ETHJo: "LClsp",
      ibxiS: function (aL, aM) {
        return aL !== aM;
      },
      jDzka: "nHHCi",
      cHGvA: function (aL, aM) {
        return aL(aM);
      },
      PhNEY: "illegal catch attempt"
    };
    g = function () {
      return ag;
    };
    var af;
    var ag = {};
    var ah = Object.prototype;
    var ai = ah.hasOwnProperty;
    var aj = Object.defineProperty || function (aL, aM, aN) {
      {
        aL[aM] = aN.value;
      }
    };
    var ak = "function" == typeof Symbol ? Symbol : {};
    var al = ak.iterator || "@@iterator";
    var am = ak.asyncIterator || "@@asyncIterator";
    var an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      {
        var aP = {
          value: aN,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aL, aM, aP);
        return aL[aM];
      }
    }
    try {
      {
        ao({}, "");
      }
    } catch (aM) {
      ao = function (aN, aO, aP) {
        {
          return aN[aO] = aP;
        }
      };
    }
    function ap(aO, aP, aQ, aR) {
      {
        var aS = aP && aP.prototype instanceof aw ? aP : aw;
        var aT = Object.create(aS.prototype);
        var aU = new aJ(aR || []);
        aj(aT, "_invoke", {
          value: aF(aO, aQ, aU)
        });
        return aT;
      }
    }
    function aq(aO, aP, aQ) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aO.call(aP, aQ)
            };
          }
        } catch (aW) {
          {
            var aT = {
              type: "throw",
              arg: aW
            };
            return aT;
          }
        }
      }
    }
    ag.wrap = ap;
    var ar = "suspendedStart";
    var as = "suspendedYield";
    var at = "executing";
    var au = "completed";
    var av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      {
        return this;
      }
    });
    var aA = Object.getPrototypeOf;
    var aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      {
        ["next", "throw", "return"].forEach(function (aR) {
          ao(aO, aR, function (aT) {
            {
              return this._invoke(aR, aT);
            }
          });
        });
      }
    }
    function aE(aO, aP) {
      {
        function aT(aU, aV, aW, aX) {
          {
            var aZ = aq(aO[aU], aO, aV);
            if ("throw" !== aZ.type) {
              {
                var b0 = aZ.arg;
                var b1 = b0.value;
                return b1 && "object" == b(b1) && ai.call(b1, "__await") ? aP.resolve(b1.__await).then(function (b3) {
                  aT("next", b3, aW, aX);
                }, function (b3) {
                  {
                    aT("throw", b3, aW, aX);
                  }
                }) : aP.resolve(b1).then(function (b3) {
                  {
                    b0.value = b3;
                    aW(b0);
                  }
                }, function (b3) {
                  {
                    return aT("throw", b3, aW, aX);
                  }
                });
              }
            }
            aX(aZ.arg);
          }
        }
        var aR;
        aj(this, "_invoke", {
          value: function (aU, aV) {
            {
              function aY() {
                {
                  return new aP(function (b1, b2) {
                    {
                      aT(aU, aV, b1, b2);
                    }
                  });
                }
              }
              return aR = aR ? aR.then(aY, aY) : aY();
            }
          }
        });
      }
    }
    function aF(aO, aP, aQ) {
      {
        var aR = ar;
        return function (aT, aU) {
          if (aR === at) {
            throw Error("Generator is already running");
          }
          if (aR === au) {
            {
              if ("throw" === aT) {
                throw aU;
              }
              var aW = {
                value: af,
                done: true
              };
              return aW;
            }
          }
          for (aQ.method = aT, aQ.arg = aU;;) {
            {
              var aX = aQ.delegate;
              if (aX) {
                {
                  var aY = aG(aX, aQ);
                  if (aY) {
                    {
                      if (aY === av) {
                        continue;
                      }
                      return aY;
                    }
                  }
                }
              }
              if ("next" === aQ.method) {
                aQ.sent = aQ._sent = aQ.arg;
              } else {
                if ("throw" === aQ.method) {
                  {
                    if (aR === ar) {
                      throw aR = au, aQ.arg;
                    }
                    aQ.dispatchException(aQ.arg);
                  }
                } else {
                  "return" === aQ.method && aQ.abrupt("return", aQ.arg);
                }
              }
              aR = at;
              var aZ = aq(aO, aP, aQ);
              if ("normal" === aZ.type) {
                {
                  if (aR = aQ.done ? au : as, aZ.arg === av) {
                    continue;
                  }
                  var b0 = {
                    value: aZ.arg,
                    done: aQ.done
                  };
                  return b0;
                }
              }
              "throw" === aZ.type && (aR = au, aQ.method = "throw", aQ.arg = aZ.arg);
            }
          }
        };
      }
    }
    function aG(aO, aP) {
      {
        var aT = aP.method;
        var aU = aO.iterator[aT];
        if (aU === af) {
          aP.delegate = null;
          "throw" === aT && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aT && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aT + "' method"));
          return av;
        }
        var aV = aq(aU, aO.iterator, aP.arg);
        if ("throw" === aV.type) {
          aP.method = "throw";
          aP.arg = aV.arg;
          aP.delegate = null;
          return av;
        }
        var aS = aV.arg;
        return aS ? aS.done ? (aP[aO.resultName] = aS.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aS : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
      }
    }
    function aH(aO) {
      {
        var aQ = {
          tryLoc: aO[0]
        };
        1 in aO && (aQ.catchLoc = aO[1]);
        2 in aO && (aQ.finallyLoc = aO[2], aQ.afterLoc = aO[3]);
        this.tryEntries.push(aQ);
      }
    }
    function aI(aO) {
      {
        var aQ = aO.completion || {};
        aQ.type = "normal";
        delete aQ.arg;
        aO.completion = aQ;
      }
    }
    function aJ(aO) {
      {
        var aP = {
          tryLoc: "root"
        };
        this.tryEntries = [aP];
        aO.forEach(aH, this);
        this.reset(true);
      }
    }
    function aK(aO) {
      {
        if (aO || "" === aO) {
          {
            var aR = aO[al];
            if (aR) {
              return aR.call(aO);
            }
            if ("function" == typeof aO.next) {
              return aO;
            }
            if (!isNaN(aO.length)) {
              {
                var aS = -1;
                var aT = function aW() {
                  {
                    for (; ++aS < aO.length;) {
                      if (ai.call(aO, aS)) {
                        aW.value = aO[aS];
                        aW.done = false;
                        return aW;
                      }
                    }
                    aW.value = af;
                    aW.done = true;
                    return aW;
                  }
                };
                return aT.next = aT;
              }
            }
          }
        }
        throw new TypeError(b(aO) + " is not iterable");
      }
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: true
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: true
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    ag.isGeneratorFunction = function (aO) {
      {
        var aP = "function" == typeof aO && aO.constructor;
        return !!aP && (aP === ax || "GeneratorFunction" === (aP.displayName || aP.name));
      }
    };
    ag.mark = function (aO) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
        aO.prototype = Object.create(aC);
        return aO;
      }
    };
    ag.awrap = function (aO) {
      {
        var aQ = {
          __await: aO
        };
        return aQ;
      }
    };
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      return this;
    });
    ag.AsyncIterator = aE;
    ag.async = function (aO, aP, aQ, aR, aS) {
      {
        undefined === aS && (aS = Promise);
        var aU = new aE(ap(aO, aP, aQ, aR), aS);
        return ag.isGeneratorFunction(aP) ? aU : aU.next().then(function (aW) {
          return aW.done ? aW.value : aU.next();
        });
      }
    };
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      return this;
    });
    ao(aC, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ag.keys = function (aO) {
      {
        var aP = Object(aO);
        var aQ = [];
        for (var aR in aP) aQ.push(aR);
        aQ.reverse();
        return function aS() {
          {
            for (; aQ.length;) {
              {
                var aU = aQ.pop();
                if (aU in aP) {
                  aS.value = aU;
                  aS.done = false;
                  return aS;
                }
              }
            }
            aS.done = true;
            return aS;
          }
        };
      }
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = false, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
            for (var aQ in this) "t" === aQ.charAt(0) && ai.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = af);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aO = this.tryEntries[0].completion;
          if ("throw" === aO.type) {
            throw aO.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aO) {
        if (this.done) {
          throw aO;
        }
        var aQ = this;
        function aW(aX, aY) {
          {
            aT.type = "throw";
            aT.arg = aO;
            aQ.next = aX;
            aY && (aQ.method = "next", aQ.arg = af);
            return !!aY;
          }
        }
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          {
            var aS = this.tryEntries[aR];
            var aT = aS.completion;
            if ("root" === aS.tryLoc) {
              return aW("end");
            }
            if (aS.tryLoc <= this.prev) {
              {
                var aU = ai.call(aS, "catchLoc");
                var aV = ai.call(aS, "finallyLoc");
                if (aU && aV) {
                  {
                    if (this.prev < aS.catchLoc) {
                      return aW(aS.catchLoc, true);
                    }
                    if (this.prev < aS.finallyLoc) {
                      return aW(aS.finallyLoc);
                    }
                  }
                } else {
                  if (aU) {
                    {
                      if (this.prev < aS.catchLoc) {
                        return aW(aS.catchLoc, true);
                      }
                    }
                  } else {
                    {
                      if (!aV) {
                        throw Error("try statement without catch or finally");
                      }
                      if (this.prev < aS.finallyLoc) {
                        return aW(aS.finallyLoc);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aO, aP) {
        {
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              if (aS.tryLoc <= this.prev && ai.call(aS, "finallyLoc") && this.prev < aS.finallyLoc) {
                {
                  var aT = aS;
                  break;
                }
              }
            }
          }
          aT && ("break" === aO || "continue" === aO) && aT.tryLoc <= aP && aP <= aT.finallyLoc && (aT = null);
          var aU = aT ? aT.completion : {};
          aU.type = aO;
          aU.arg = aP;
          return aT ? (this.method = "next", this.next = aT.finallyLoc, av) : this.complete(aU);
        }
      },
      complete: function (aO, aP) {
        {
          if ("throw" === aO.type) {
            throw aO.arg;
          }
          "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
          return av;
        }
      },
      finish: function (aO) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.finallyLoc === aO) {
                this.complete(aR.completion, aR.afterLoc);
                aI(aR);
                return av;
              }
            }
          }
        }
      },
      catch: function (aO) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.tryLoc === aO) {
                {
                  var aS = aR.completion;
                  if ("throw" === aS.type) {
                    {
                      var aT = aS.arg;
                      aI(aR);
                    }
                  }
                  return aT;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aO, aP, aQ) {
        {
          this.delegate = {
            iterator: aK(aO),
            resultName: aP,
            nextLoc: aQ
          };
          "next" === this.method && (this.arg = af);
          return av;
        }
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    {
      try {
        {
          var am = ae[aj](ak);
          var an = am.value;
        }
      } catch (aq) {
        {
          return void ag(aq);
        }
      }
      am.done ? af(an) : Promise.resolve(an).then(ah, ai);
    }
  }
  function i(ae) {
    return function () {
      var ah = this;
      var ai = arguments;
      return new Promise(function (aj, ak) {
        var am = ae.apply(ah, ai);
        function an(ap) {
          {
            h(am, aj, ak, an, ao, "next", ap);
          }
        }
        function ao(ap) {
          {
            h(am, aj, ak, an, ao, "throw", ap);
          }
        }
        an(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = undefined;
  window = {};
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "94";
  var s = "";
  var t = "10048";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "";
  var E = "";
  function F() {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    G = i(g().mark(function ah() {
      {
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
        var aq;
        var ar;
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        var b0;
        var b1;
        var b2;
        var b3;
        var b4;
        var b5;
        var b6;
        var b7;
        var b8;
        var b9;
        var ba;
        var bb;
        var bc;
        var bd;
        var be;
        var bf;
        var bg;
        var bh;
        var bi;
        return g().wrap(function (bk) {
          {
            for (;;) {
              switch (bk.prev = bk.next) {
                case 0:
                  if (j) {
                    {
                      bk.next = 5;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  bk.next = 4;
                  return ac("先去boxjs填写账号密码");
                case 4:
                  return bk.abrupt("return");
                case 5:
                  bk.next = 7;
                  return a8();
                case 7:
                  m = bk.sent;
                  aj = j.split(" ");
                  ak = c(aj);
                  bk.prev = 10;
                  ak.s();
                case 12:
                  if ((al = ak.n()).done) {
                    {
                      bk.next = 272;
                      break;
                    }
                  }
                  am = al.value;
                  console.log("随机生成UA");
                  an = a7();
                  x = an.ua;
                  y = an.commonUa;
                  z = an.uuid;
                  console.log(x);
                  console.log(y);
                  u = am.split("&")[0];
                  v = am.split("&")[1];
                  w = am.split("&")[2];
                  console.log("用户：".concat(u, "开始任务"));
                  console.log("获取sessionId");
                  bk.next = 28;
                  return N("/api/account/init");
                case 28:
                  ao = bk.sent;
                  q = ao.data.session.id;
                  console.log(q);
                  console.log("获取signature_key");
                  bk.next = 34;
                  return H("/web/init?client_id=".concat(t));
                case 34:
                  ap = bk.sent;
                  n = ap.data.client.signature_key;
                  console.log(n);
                  console.log("获取code");
                  bk.next = 40;
                  return J("/web/oauth/credential_auth");
                case 40:
                  if (aq = bk.sent, aq.data) {
                    {
                      bk.next = 44;
                      break;
                    }
                  }
                  console.log(aq.message);
                  return bk.abrupt("continue", 270);
                case 44:
                  ar = aq.data.authorization_code.code;
                  console.log(ar);
                  console.log("登录");
                  bk.next = 49;
                  return N("/api/zbtxz/login", "check_token=&code=".concat(ar, "&token=&type=-1&union_id="));
                case 49:
                  as = bk.sent;
                  console.log("登录成功");
                  s = as.data.session.account_id;
                  q = as.data.session.id;
                  console.log("————————————");
                  console.log("有缘对对碰");
                  bk.next = 57;
                  return X("/open/xxdtest/dailyMatchFans/controller.php", "appid=".concat(q, "&openid=").concat(s, "&type=101"));
                case 57:
                  bk.next = 59;
                  return bk.sent;
                case 59:
                  at = bk.sent;
                  console.log(at);
                  au = 0;
                case 62:
                  if (!(au < 5)) {
                    {
                      bk.next = 72;
                      break;
                    }
                  }
                  bk.next = 65;
                  return X("/open/xxdtest/dailyMatchFans/controller.php", "type=105&score=60");
                case 65:
                  if (av = bk.sent, console.log(av), 1 == av.status) {
                    {
                      bk.next = 69;
                      break;
                    }
                  }
                  return bk.abrupt("break", 72);
                case 69:
                  au++;
                  bk.next = 62;
                  break;
                case 72:
                  if (B) {
                    {
                      bk.next = 80;
                      break;
                    }
                  }
                  console.log("获取对对碰抽奖id");
                  bk.next = 76;
                  return V("/open/xxdtest/dailyMatchFans/bookflip3.php?source=bookflip2");
                case 76:
                  aw = bk.sent;
                  ax = /\/h5\?mark=raffle@designh5&tid=([a-zA-Z0-9]+)/;
                  ay = aw.match(ax);
                  ay && (B = ay[1], console.log("对对碰抽奖id：".concat(B)));
                case 80:
                  bk.next = 82;
                  return L("/api/user_mumber/account_detail");
                case 82:
                  if (az = bk.sent, !B) {
                    {
                      bk.next = 104;
                      break;
                    }
                  }
                  aA = Math.round(new Date().getTime() / 1000).toString();
                  bk.next = 87;
                  return R("/memberhy/tm/signature", {
                    accountId: s,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(aA, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: q,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: az.data.rst.image_url,
                      nick_name: az.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: s
                    },
                    timestamp: aA,
                    sign: "xsb_hn"
                  });
                case 87:
                  aB = bk.sent;
                  A = JSON.stringify({
                    id: aB.id,
                    black: 0,
                    btoken: aB.btoken,
                    expire: aB.expire,
                    token: aB.token,
                    source: "xsb_hn",
                    mobile: aB.mobile,
                    mark: aB.mark,
                    mtoken: aB.mtoken,
                    stoken: aB.stoken,
                    nick_name: encodeURI(aB.nick_name),
                    avatar: aB.avatar
                  });
                  bk.next = 91;
                  return P("/lotteryhy/designh5/client/activity/".concat(B));
                case 91:
                  aC = bk.sent;
                  console.log("拥有".concat(aC.response.remain_counts, "次抽奖"));
                  aD = 0;
                case 94:
                  if (!(aD < aC.response.remain_counts)) {
                    {
                      bk.next = 102;
                      break;
                    }
                  }
                  bk.next = 97;
                  return R("/lotteryhy/api/client/cj/awd/drw/".concat(B), {});
                case 97:
                  aE = bk.sent;
                  aE.award_name ? (console.log("抽奖获得：".concat(aE.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aE.award_name, "\n")) : (console.log(JSON.stringify(aE)), o += "用户：".concat(u, " 抽奖获得：").concat(aE.error_message, "\n"));
                case 99:
                  aD++;
                  bk.next = 94;
                  break;
                case 102:
                  bk.next = 105;
                  break;
                case 104:
                  console.log("获取对对碰抽奖id失败");
                case 105:
                  if (console.log("————————————"), console.log("获取id"), E && D) {
                    {
                      bk.next = 117;
                      break;
                    }
                  }
                  bk.next = 110;
                  return L("/api/myPage/list");
                case 110:
                  aF = bk.sent;
                  aG = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                  aH = JSON.stringify(aF).match(aG);
                  aH && (E = aH[1]);
                  aG = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                  aH = JSON.stringify(aF).match(aG);
                  aH && (D = aH[1]);
                case 117:
                  if (!E) {
                    {
                      bk.next = 163;
                      break;
                    }
                  }
                  console.log("签到id：".concat(E));
                  timestamp = Math.round(new Date().getTime() / 1000).toString();
                  bk.next = 122;
                  return R("/memberhy/tm/signature", {
                    accountId: s,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(timestamp, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: q,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: az.data.rst.image_url,
                      nick_name: az.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: s
                    },
                    timestamp: timestamp,
                    sign: "xsb_hn"
                  });
                case 122:
                  signature = bk.sent;
                  A = JSON.stringify({
                    id: signature.id,
                    black: 0,
                    btoken: signature.btoken,
                    expire: signature.expire,
                    token: signature.token,
                    source: "xsb_hn",
                    mobile: signature.mobile,
                    mark: signature.mark,
                    mtoken: signature.mtoken,
                    stoken: signature.stoken,
                    nick_name: encodeURI(signature.nick_name),
                    avatar: signature.avatar
                  });
                  console.log("开始签到");
                  aI = new (m.loadJSEncrypt())();
                  aI.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  aJ = aI.encrypt(JSON.stringify({
                    activity_id: E,
                    timestamp: Math.round(new Date().getTime() / 1000).toString()
                  }));
                  bk.next = 130;
                  return R("/signhy/client/actSign/actSign", {
                    params: aJ
                  });
                case 130:
                  aK = bk.sent;
                  0 == aK.error_code ? console.log("签到成功") : console.log(aK.error_message);
                  bk.next = 134;
                  return P("/signhy/client/actSign/getRelationCjList?activity_id=".concat(E));
                case 134:
                  aL = bk.sent;
                  aM = c(aL.response);
                  bk.prev = 136;
                  aM.s();
                case 138:
                  if ((aN = aM.n()).done) {
                    {
                      bk.next = 153;
                      break;
                    }
                  }
                  aO = aN.value;
                  console.log("活动：".concat(aO.title));
                  console.log("拥有".concat(aO.draw_num, "次抽奖"));
                  aP = 0;
                case 143:
                  if (!(aP < aO.draw_num)) {
                    {
                      bk.next = 151;
                      break;
                    }
                  }
                  bk.next = 146;
                  return R("/lotteryhy/api/client/cj/awd/drw/".concat(aO.hashid), {});
                case 146:
                  aQ = bk.sent;
                  aQ.award_name ? (console.log("抽奖获得：".concat(aQ.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aQ.award_name, "\n")) : (console.log(JSON.stringify(aQ)), o += "用户：".concat(u, " 抽奖获得：").concat(aQ.error_message, "\n"));
                case 148:
                  aP++;
                  bk.next = 143;
                  break;
                case 151:
                  bk.next = 138;
                  break;
                case 153:
                  bk.next = 158;
                  break;
                case 155:
                  bk.prev = 155;
                  bk.t0 = bk.catch(136);
                  aM.e(bk.t0);
                case 158:
                  bk.prev = 158;
                  aM.f();
                  return bk.finish(158);
                case 161:
                  bk.next = 164;
                  break;
                case 163:
                  console.log("获取签到id失败");
                case 164:
                  if (!D) {
                    {
                      bk.next = 238;
                      break;
                    }
                  }
                  console.log("————————————");
                  console.log("阅读抽奖");
                  console.log("阅读id：".concat(D));
                  console.log("滑块验证");
                  bk.next = 171;
                  return P("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                case 171:
                  aR = bk.sent;
                  bk.next = 174;
                  return a1("".concat(k, "/crop"), {
                    image: aR.img,
                    y_coordinate: 150
                  });
                case 174:
                  if (aS = bk.sent, aS) {
                    {
                      bk.next = 180;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  bk.next = 179;
                  return ac("ddddocr服务异常");
                case 179:
                  return bk.abrupt("continue", 270);
                case 180:
                  var bm = {
                    slidingImage: aS.slidingImage,
                    backImage: aS.backImage
                  };
                  bk.next = 182;
                  return a1("".concat(k, "/slideComparison"), bm);
                case 182:
                  if (aT = bk.sent, aT) {
                    {
                      bk.next = 188;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  bk.next = 187;
                  return ac("ddddocr服务异常");
                case 187:
                  return bk.abrupt("continue", 270);
                case 188:
                  console.log(aT);
                  aU = aR.request_id;
                  aV = aT.result;
                  bk.next = 193;
                  return P("/newshy/api/client/news/list/".concat(D));
                case 193:
                  aW = bk.sent;
                  aX = c(aW.data[0].information_content_data[0].data);
                  bk.prev = 195;
                  aX.s();
                case 197:
                  if ((aY = aX.n()).done) {
                    {
                      bk.next = 213;
                      break;
                    }
                  }
                  for (aZ = aY.value, console.log("文章：".concat(aZ.title)), b0 = aZ.link.split("?")[1], b1 = {}, b2 = b0.split("&"), b3 = 0, b4 = b2.length; b3 < b4; b3++) {
                    b5 = b2[b3].split("=");
                    b1[b5[0]] = b5[1];
                  }
                  b6 = new (m.loadJSEncrypt())();
                  b6.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  b7 = b6.encrypt(JSON.stringify({
                    news_id: D,
                    item_id: aZ.item_id,
                    request_id: aU,
                    timestamp: Math.round(new Date().getTime() / 1000).toString(),
                    tn_x: aV
                  }));
                  bk.next = 209;
                  return R("/newshy/api/client/news/readArticle", {
                    params: b7
                  });
                case 209:
                  b8 = bk.sent;
                  console.log("阅读：".concat(null == b8 ? undefined : b8.success));
                case 211:
                  bk.next = 197;
                  break;
                case 213:
                  bk.next = 218;
                  break;
                case 215:
                  bk.prev = 215;
                  bk.t1 = bk.catch(195);
                  aX.e(bk.t1);
                case 218:
                  bk.prev = 218;
                  aX.f();
                  return bk.finish(218);
                case 221:
                  C = aW.data[0].draw.activity_id;
                  console.log("抽奖id：".concat(C));
                  bk.next = 225;
                  return P("/lotteryhy/designh5/client/activity/".concat(C));
                case 225:
                  b9 = bk.sent;
                  console.log("拥有".concat(b9.response.remain_counts, "次抽奖"));
                  ba = 0;
                case 228:
                  if (!(ba < b9.response.remain_counts)) {
                    {
                      bk.next = 236;
                      break;
                    }
                  }
                  bk.next = 231;
                  return R("/lotteryhy/api/client/cj/awd/drw/".concat(C), {});
                case 231:
                  bb = bk.sent;
                  bb.award_name ? (console.log("抽奖获得：".concat(bb.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(bb.award_name, "\n")) : (console.log(JSON.stringify(bb)), o += "用户：".concat(u, " 抽奖获得：").concat(bb.error_message, "\n"));
                case 233:
                  ba++;
                  bk.next = 228;
                  break;
                case 236:
                  bk.next = 239;
                  break;
                case 238:
                  console.log("获取id失败");
                case 239:
                  bk.next = 241;
                  return Z("/lotteryhy/api/client/cj/member/prize/info?prize_type=3&page=1&count=20");
                case 241:
                  bc = bk.sent;
                  bd = c(bc.data);
                  bk.prev = 243;
                  bd.s();
                case 245:
                  if ((be = bd.n()).done) {
                    {
                      bk.next = 262;
                      break;
                    }
                  }
                  if (bf = be.value, 2 == bf.status || 6 == bf.status) {
                    {
                      bk.next = 260;
                      break;
                    }
                  }
                  if (bg = JSON.parse(bf.prize_info).code, console.log("奖品：".concat(bf.prize_content, " code：").concat(bg)), !w) {
                    {
                      bk.next = 259;
                      break;
                    }
                  }
                  var bn = {
                    code: bg
                  };
                  bh = "";
                  bk.next = 254;
                  return T("/lotteryhy/api/client/cj/send/pak", bn);
                case 254:
                  bi = bk.sent;
                  bi.success ? (console.log("领取成功"), bh = "领取成功") : (console.log(bi.error_message), bh = bi.error_message);
                  p += "用户：".concat(u, " 奖品：").concat(bf.prize_content, " 领取结果：").concat(bh, "\n");
                  bk.next = 260;
                  break;
                case 259:
                  p += "用户：".concat(u, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(bg, "\n");
                case 260:
                  bk.next = 245;
                  break;
                case 262:
                  bk.next = 267;
                  break;
                case 264:
                  bk.prev = 264;
                  bk.t2 = bk.catch(243);
                  bd.e(bk.t2);
                case 267:
                  bk.prev = 267;
                  bd.f();
                  return bk.finish(267);
                case 270:
                  bk.next = 12;
                  break;
                case 272:
                  bk.next = 277;
                  break;
                case 274:
                  bk.prev = 274;
                  bk.t3 = bk.catch(10);
                  ak.e(bk.t3);
                case 277:
                  bk.prev = 277;
                  ak.f();
                  return bk.finish(277);
                case 280:
                  if (!o) {
                    {
                      bk.next = 283;
                      break;
                    }
                  }
                  bk.next = 283;
                  return ac(o);
                case 283:
                  if (!p) {
                    {
                      bk.next = 286;
                      break;
                    }
                  }
                  bk.next = 286;
                  return ac(p);
                case 286:
                case "end":
                  return bk.stop();
              }
            }
          }
        }, ah, null, [[10, 274, 277, 280], [136, 155, 158, 161], [195, 215, 218, 221], [243, 264, 267, 270]]);
      }
    }));
    return G.apply(this, arguments);
  }
  function H(ae) {
    {
      return I.apply(this, arguments);
    }
  }
  function I() {
    I = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        {
          for (;;) {
            switch (aj.prev = aj.next) {
              case 0:
                return aj.abrupt("return", new Promise(function (am) {
                  {
                    var an = {
                      url: "https://passport.tmuyun.com".concat(ag),
                      headers: {
                        Connection: "Keep-Alive",
                        "Cache-Control": "no-cache",
                        "X-REQUEST-ID": a5(),
                        "Accept-Encoding": "gzip",
                        "user-agent": x
                      }
                    };
                    $.get(an, function () {
                      {
                        var ap = i(g().mark(function ar(as, at, au) {
                          {
                            return g().wrap(function (aw) {
                              {
                                for (;;) {
                                  switch (aw.prev = aw.next) {
                                    case 0:
                                      try {
                                        {
                                          as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(au));
                                        }
                                      } catch (ay) {
                                        {
                                          $.logErr(ay, at);
                                        }
                                      } finally {
                                        {
                                          am();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return aw.stop();
                                  }
                                }
                              }
                            }, ar);
                          }
                        }));
                        return function (as, at, au) {
                          return ap.apply(this, arguments);
                        };
                      }
                    }());
                  }
                }));
              case 1:
              case "end":
                return aj.stop();
            }
          }
        }
      }, af);
    }));
    return I.apply(this, arguments);
  }
  function J(ae) {
    {
      return K.apply(this, arguments);
    }
  }
  function K() {
    K = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a3();
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ai.uuid,
                  "X-SIGNATURE": ai.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": x
                };
                var an = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: am,
                  body: ai.body
                };
                $.post(an, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              {
                                as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(au));
                              }
                            } catch (ax) {
                              $.logErr(ax, at);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a4(af);
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ah.time,
                  "X-SESSION-ID": q,
                  "X-REQUEST-ID": ah.uuid,
                  "X-SIGNATURE": ah.signature,
                  "X-TENANT-ID": r,
                  "X-ACCOUNT-ID": s,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var an = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: am
                };
                $.get(an, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ae(af, ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a4(af);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ai.time,
                  "X-SESSION-ID": q,
                  "X-REQUEST-ID": ai.uuid,
                  "X-SIGNATURE": ai.signature,
                  "X-TENANT-ID": r,
                  "X-ACCOUNT-ID": s,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: an,
                  body: ag
                };
                $.post(ao, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !ar) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(at));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, as);
                          case 14:
                            av.prev = 14;
                            al();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ae);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            aj();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae, af) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, af);
    }));
    return S.apply(this, arguments);
  }
  function T(ae, af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ag(ah, ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://m.aihoge.com/api".concat(ah),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: w,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ai)
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return U.apply(this, arguments);
  }
  function V(ae) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://active.hndachao.cn".concat(af),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(ar);
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return W.apply(this, arguments);
  }
  function X(ae, af) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  },
                  body: ah
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ae) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://axh5.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: "default",
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://axh5.aihoge.com/winningList?refresh_times=1641284795642",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            aj();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ae, af) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function ag(ah, ai) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (ak) {
                var al = {
                  "Content-Type": "application/json"
                };
                var am = {
                  url: ah,
                  headers: al,
                  body: JSON.stringify(ai)
                };
                $.post(am, function (an, ao, ap) {
                  try {
                    an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ap));
                  } catch (aq) {
                    $.logErr(aq, ao);
                  } finally {
                    ak();
                  }
                });
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, ag);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    var ag = new (m.loadJSEncrypt())();
    ag.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ag.encrypt(v);
    var ak = a5();
    var al = "client_id=".concat(t, "&password=").concat(v, "&phone_number=").concat(u);
    var am = "post%%/web/oauth/credential_auth?".concat(al, "%%").concat(ak, "%%");
    al = "client_id=".concat(t, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = m.createCryptoJS();
    var ah = CryptoJS.HmacSHA256(am, n);
    var ai = CryptoJS.enc.Hex.stringify(ah);
    var aj = {
      uuid: ak,
      signature: ai,
      body: al
    };
    return aj;
  }
  function a4(ae) {
    var af = a5();
    var ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = m.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(q, "&&").concat(af, "&&").concat(ag, "&&FR*r!isE5W&&").concat(r)).toString();
    var ai = {
      uuid: af,
      time: ag,
      signature: ah
    };
    return ai;
  }
  function a5() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0;
      var ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a6(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a7() {
    var ae = "14.1.6";
    var af = a5();
    var ag = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ah = "Xiaomi " + ag;
    var ai = "Android";
    var aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(t, ";").concat(ae, ";1.0;null;").concat(ag);
    var ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";").concat("6.11.0");
    var al = {
      ua: aj,
      commonUa: ak,
      uuid: af
    };
    return al;
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function af() {
      var ag;
      return g().wrap(function ah(ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (ag = $.getdata("Utils_Code") || "", !ag || !Object.keys(ag).length) {
                ai.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ag);
              return ai.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ai.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ao(ap) {
                    for (;;) {
                      switch (ap.prev = ap.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ap.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a9.apply(this, arguments);
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ae() {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aq).notice);
                            } catch (as) {
                              $.logErr(as, ap);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (!$.isNode()) {
                ai.next = 5;
                break;
              }
              ai.next = 3;
              return notify.sendNotify($.name, ah);
            case 3:
              ai.next = 6;
              break;
            case 5:
              $.msg($.name, "", ah);
            case 6:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return aa();
          case 2:
            ag.next = 4;
            return F();
          case 4:
          case "end":
            return ag.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}