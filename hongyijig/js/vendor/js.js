/*
 * Title: Boutique carousel jQuery plugin
 * Author: Berend de Jong, Frique
 * Author URI: http://www.frique.me/
 * Version: 1.5.1 (20121008.1)
 */
;
(function(e) {
    e.fn.boutique = function(t) {
        var n = e.extend({
            container_width: "auto",
            front_img_width: 280,
            front_img_height: "auto",
            variable_container_height: !0,
            frames: 5,
            starter: 1,
            speed: 600,
            front_topmargin: 40,
            behind_topmargin: 20,
            back_topmargin: 0,
            behind_opacity: .4,
            back_opacity: .15,
            behind_size: .7,
            back_size: .4,
            behind_distance: "auto",
            autoplay: !1,
            autoplay_interval: 3e3,
            stop_autoplay_on_click: !1,
            freescroll: !0,
            hovergrowth: .08,
            easing: "easeIOBoutique",
            move_more_easein: "easeInBoutique",
            move_more_easebetween: "linear",
            move_more_easeout: "easeOutBoutique",
            move_more_directly: !1,
            never_move_twice: !1,
            text_front_only: !1,
            text_opacity: .7,
            keyboard: !0,
            move_on_hover: !1,
            right_to_left: !1,
            lightbox_support: !1
        }, t);
        e.each(this, function() {
            function Dt() {
                var e = parseInt(i.width(), 10);
                r.width(e);
                if (n.behind_distance === "auto") {
                    dt = Math.round(e / 4 - nt / 2);
                    ht = Math.round(e / 2 - J / 2);
                    p.css({
                        left: dt
                    });
                    v.css({
                        left: vt
                    })
                }
                vt = e - dt - nt;
                pt = e - lt;
                d.css({
                    left: ht
                });
                m.css({
                    left: pt
                })
            }

            function Pt() {
                if (g) {
                    clearInterval(g);
                    g = !1
                }
            }

            function Ht() {
                g && Pt();
                g = setInterval(function() {
                    n.right_to_left ? p.click() : v.click()
                }, n.autoplay_interval)
            }

            function Bt(t, i) {
                var s, c, g = n.speed;
                x = !0;
                i = i || !1;
                i || (t > 1 ? i = "first" : i = "normal");
                if (t > 1 && i === "first") {
                    c = n.move_more_easein;
                    g = Math.round(n.speed * .7)
                } else if (t > 1) {
                    c = n.move_more_easebetween;
                    g = Math.round(n.speed * .4)
                } else i === "last" ? c = n.move_more_easeout : c = n.easing;
                n.autoplay && Pt();
                if (N === C - 2) E = 1;
                else if (N === C - 1) {
                    E = 2;
                    E > C && (E = 1)
                } else if (N === C) {
                    E = 3;
                    E > C && (E = 1)
                } else E = N + 3;
                if (typeof pre_move_callback == "function") {
                    var y = v.children("a").attr("href");
                    y || (y = "no_anchor");
                    pre_move_callback(y, S, v.data("framesource"))
                }
                if (A) {
                    r.stop();
                    n.text_front_only && d.find("span").hide()
                }
                h.removeClass("frame1").addClass("remove").css("z-index", -1);
                u = p.removeClass("frame2").addClass("frame1").stop().animate({
                    opacity: n.back_opacity,
                    left: 0,
                    top: q
                }, g, c);
                s = u.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(At, g, c);
                n.text_front_only || u.find("h6").stop().animate({
                    fontSize: ot
                }, g, c).end().find("span").stop().animate(St, g, c);
                setTimeout(function() {
                    u.css("z-index", 1)
                }, g / 4);
                a = d.removeClass("frame3").addClass("frame2").stop().animate({
                    opacity: n.behind_opacity,
                    left: dt,
                    top: I
                }, g, c);
                a.find("h6").stop().animate({
                    fontSize: Y
                }, g, c).end().find("span").stop().animate(Et, g, c);
                s = a.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(Mt, g, c);
                setTimeout(function() {
                    a.css("z-index", 2)
                }, g / 4);
                f = v.removeClass("frame4").addClass("frame3").stop().animate({
                    opacity: 1,
                    left: ht,
                    top: F
                }, g, c, function() {
                    A && n.text_front_only && e(this).find("h6").stop().css({
                        fontSize: z
                    }).end().find("span").stop().css(wt).fadeIn(200);
                    A && _ && n.variable_container_height && kt(!0)
                });
                s = f.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(_t, g, c);
                (!A || !n.text_front_only) && f.find("h6").stop().animate({
                    fontSize: z
                }, g, c).end().find("span").stop().show().animate(wt, g, c);
                setTimeout(function() {
                    f.css("z-index", 3)
                }, g / 4);
                l = m.removeClass("frame5").addClass("frame4").stop().animate({
                    opacity: n.behind_opacity,
                    left: vt,
                    top: I
                }, g, c);
                s = l.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(Mt, g, c);
                n.text_front_only || l.find("h6").stop().animate({
                    fontSize: Y
                }, g, c).end().find("span").stop().animate(Et, g, c);
                setTimeout(function() {
                    l.css("z-index", 2)
                }, g / 4);
                m = D[E].clone();
                m.addClass("frame5").prependTo(r).data("framesource", E).show().css({
                    opacity: 0,
                    left: pt,
                    top: q
                }).animate({
                    opacity: n.back_opacity
                }, g, function() {
                    a.find("a *").css({
                        cursor: "default"
                    });
                    n.autoplay && Ht();
                    t === 2 ? Bt(1, "last") : t > 1 ? Bt(t - 1, "normal") : f.find("a *").css({
                        cursor: "pointer"
                    });
                    if (!f.is(":animated")) {
                        x = !1;
                        r.children(".remove").stop().fadeOut(g, function() {
                            e(this).remove()
                        });
                        if (typeof move_callback == "function") {
                            var i = f.children("a").attr("href");
                            i || (i = "no_anchor");
                            move_callback(i, S, d.data("framesource"))
                        }
                    }
                }).find("img").css(Ot).end().children("a").removeAttr("rel");
                n.text_front_only ? m.find("h6").css({
                    fontSize: Y
                }).end().find("span").css(Et).hide() : m.find("h6").css({
                    fontSize: ot
                }).end().find("span").css(St);
                h = u;
                p = a;
                d = f;
                v = l;
                r.children(".remove").fadeOut(g, function() {
                    e(this).remove()
                });
                N === C ? N = 1 : N += 1;
                !A && _ && n.variable_container_height && kt(!0)
            }

            function jt(t, i) {
                var s, u, g = n.speed;
                x = !0;
                i = i || !1;
                i || (t > 1 ? i = "first" : i = "normal");
                if (t > 1 && i === "first") {
                    u = n.move_more_easein;
                    g = Math.round(n.speed * .7)
                } else if (t > 1) {
                    u = n.move_more_easebetween;
                    g = Math.round(n.speed * .4)
                } else i === "last" ? u = n.move_more_easeout : u = n.easing;
                n.autoplay && Pt();
                if (N === 3) E = C;
                else if (N === 2) {
                    E = C - 1;
                    E < 1 && (E = C)
                } else if (N === 1) {
                    E = C - 2;
                    E < 1 && (E = C)
                } else E = N - 3;
                if (typeof pre_move_callback == "function") {
                    var y = p.children("a").attr("href");
                    y || (y = "no_anchor");
                    pre_move_callback(y, S, p.data("framesource"))
                }
                if (A) {
                    r.stop();
                    n.text_front_only && d.find("span").hide()
                }
                m.removeClass("frame5").addClass("remove").css("z-index", -1);
                c = v.removeClass("frame4").addClass("frame5").stop().animate({
                    opacity: n.back_opacity,
                    left: pt,
                    top: q
                }, g, u);
                s = c.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(At, g, u);
                n.text_front_only || c.find("h6").stop().animate({
                    fontSize: ot
                }, g, u).end().find("span").stop().animate(St, g, u);
                setTimeout(function() {
                    c.css("z-index", 1)
                }, g / 4);
                l = d.removeClass("frame3").addClass("frame4").stop().animate({
                    opacity: n.behind_opacity,
                    left: vt,
                    top: I
                }, g, u);
                l.find("h6").stop().animate({
                    fontSize: Y
                }, g, u).end().find("span").stop().animate(Et, g, u);
                s = l.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(Mt, g, u);
                setTimeout(function() {
                    l.css("z-index", 2)
                }, g / 4);
                f = p.removeClass("frame2").addClass("frame3").stop().animate({
                    opacity: 1,
                    left: ht,
                    top: F
                }, g, u, function() {
                    A && n.text_front_only && e(this).find("h6").stop().css({
                        fontSize: z
                    }).end().find("span").stop().css(wt).fadeIn(200);
                    A && _ && n.variable_container_height && kt(!0)
                });
                s = f.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(_t, g, u);
                (!A || !n.text_front_only) && f.find("h6").stop().animate({
                    fontSize: z
                }, g, u).end().find("span").stop().show().animate(wt, g, u);
                setTimeout(function() {
                    f.css("z-index", 3)
                }, g / 4);
                a = h.removeClass("frame1").addClass("frame2").stop().animate({
                    opacity: n.behind_opacity,
                    left: dt,
                    top: I
                }, g, u);
                s = a.find("img").stop();
                L && _ && s.css({
                    height: "auto"
                });
                s.animate(Mt, g, u);
                n.text_front_only || a.find("h6").stop().animate({
                    fontSize: Y
                }, g, u).end().find("span").stop().animate(Et, g, u);
                setTimeout(function() {
                    a.css("z-index", 2)
                }, g / 4);
                h = D[E].clone();
                h.addClass("frame1").prependTo(r).data("framesource", E).show().css({
                    opacity: 0,
                    left: 0,
                    top: q
                }).animate({
                    opacity: n.back_opacity
                }, g, function() {
                    l.find("a *").css({
                        cursor: "default"
                    });
                    n.autoplay && Ht();
                    t === 2 ? jt(1, "last") : t > 1 ? jt(t - 1, "normal") : f.find("a *").css({
                        cursor: "pointer"
                    });
                    if (!f.is(":animated")) {
                        x = !1;
                        r.children(".remove").stop().fadeOut(g, function() {
                            e(this).remove()
                        });
                        if (typeof move_callback == "function") {
                            var i = f.children("a").attr("href");
                            i || (i = "no_anchor");
                            move_callback(i, S, d.data("framesource"))
                        }
                    }
                }).find("img").css(Ot).end().children("a").removeAttr("rel");
                n.text_front_only ? h.find("h6").css({
                    fontSize: Y
                }).end().find("span").css(Et).hide() : h.find("h6").css({
                    fontSize: ot
                }).end().find("span").css(St);
                p = a;
                d = f;
                v = l;
                m = c;
                r.children(".remove").fadeOut(g, function() {
                    e(this).remove()
                });
                N === 1 ? N = C : N -= 1;
                !A && _ && n.variable_container_height && kt(!0)
            }
            var t = e(window),
                r = e(this).addClass("boutique").show(),
                i = r.parent(),
                s = r.children("li"),
                u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S = r.attr("id"),
                x = !1,
                T = !1,
                N = n.starter,
                C = s.length,
                k = !1,
                L = !1,
                A = !1,
                O = !1,
                M = n.speed / 4,
                _ = !1;
            if (typeof e.browser == "object" && e.browser.msie) {
                k = !0;
                if (e.browser.version < 9) {
                    A = !0;
                    e.browser.version < 7 && (L = !0)
                }
            }
            n.starter > C && (n.starter = C);
            n.right_to_left && r.addClass("rtl");
            S || (S = "no_id");
            "behind_opac" in n && (n.behind_opacity = n.behind_opac);
            "back_opac" in n && (n.back_opacity = n.back_opac);
            "autointerval" in n && (n.autoplay_interval = n.autointerval);
            "hoverspeed" in n && (M = n.hoverspeed);
            if (n.frames === 3 || n.frames === "3") {
                n.behind_distance === "auto" && (n.behind_distance = 0);
                n.back_opacity = 0
            }
            var D = [],
                P = [];
            e.each(s, function(t) {
                t += 1;
                var r = e(this).addClass("li" + t),
                    i = r.children("a"),
                    s = r.find("img"),
                    u = 0,
                    a = 0,
                    f = 0,
                    l = 0,
                    c = s.attr("alt"),
                    h = r.find("span");
                if (n.front_img_height === "auto") {
                    a = s.attr("width");
                    f = parseInt(s.attr("height"), 10);
                    a || (a = s.width());
                    f || (f = s.height());
                    P.push(f);
                    if (a && n.front_img_width !== a) {
                        u = n.front_img_width / a;
                        l = Math.floor(u * f)
                    }
                    r.data("displayheight", l)
                } else r.data("displayheight", n.front_img_height);
                if (!h.length) {
                    c ? h = e("<span />") : h = e('<span class="dummy" />');
                    i.length ? h.appendTo(i) : h.appendTo(r)
                } else h = r.find("span");
                c ? e("<h6>" + c + "</h6>").prependTo(h) : e('<h6 class="dummy" />').prependTo(h);
                D[t] = r
            });
            if (n.front_img_height === "auto") {
                _ = !0;
                w = 0
            } else w = n.front_img_height;
            if (C === 1) {
                h = D[1].clone().addClass("frame1").prependTo(r).data("framesource", 1);
                p = D[1].clone().addClass("frame2").prependTo(r).data("framesource", 1)
            } else if (n.starter === 2) {
                p = D[1].clone().addClass("frame2").prependTo(r).data("framesource", 1);
                h = D[C].clone().addClass("frame1").prependTo(r).data("framesource", C)
            } else if (n.starter === 1) {
                h = D[C - 1].clone().addClass("frame1").prependTo(r).data("framesource", C - 1);
                p = D[C].clone().addClass("frame2").prependTo(r).data("framesource", C)
            } else {
                p = D[n.starter - 1].clone().addClass("frame2").prependTo(r).data("framesource", n.starter - 1);
                h = D[n.starter - 2].clone().addClass("frame1").prependTo(r).data("framesource", n.starter - 2)
            }
            d = D[n.starter].clone().addClass("frame3").prependTo(r).data("framesource", n.starter);
            if (C === 1) {
                v = D[1].clone().addClass("frame4").prependTo(r).data("framesource", 1);
                m = D[1].clone().addClass("frame5").prependTo(r).data("framesource", 1)
            } else if (n.starter === C - 1) {
                v = D[C].clone().addClass("frame4").prependTo(r).data("framesource", C);
                m = D[1].clone().addClass("frame5").prependTo(r).data("framesource", 1)
            } else if (n.starter === C) {
                v = D[1].clone().addClass("frame4").prependTo(r).data("framesource", 1);
                m = D[2].clone().addClass("frame5").prependTo(r).data("framesource", 2)
            } else {
                v = D[n.starter + 1].clone().addClass("frame4").prependTo(r).data("framesource", n.starter + 1);
                m = D[n.starter + 2].clone().addClass("frame5").prependTo(r).data("framesource", n.starter + 2)
            }
            h.add(p).add(d).add(v).add(m).children("a").removeAttr("rel");
            var H = h.add(m).show().css({
                    opacity: 0
                }).addClass("back"),
                B = p.add(v).show().css({
                    opacity: 0
                }).addClass("behind"),
                j = d.show().css({
                    opacity: 0
                }).addClass("front");
            if (n.container_width === "auto" || n.container_width === "100%") {
                O = !0;
                y = parseInt(i.width(), 10)
            } else y = n.container_width;
            var F = parseInt(j.css("marginTop"), 10),
                I = parseInt(B.css("marginTop"), 10),
                q = parseInt(H.css("marginTop"), 10);
            F || (F = parseInt(n.front_topmargin, 10));
            I || (I = parseInt(n.behind_topmargin, 10));
            q || (q = parseInt(n.back_topmargin, 10));
            var R = parseInt(s.css("borderLeftWidth"), 10),
                U = parseInt(s.css("paddingLeft"), 10),
                z = j.find("h6").css("font-size"),
                W = j.find("span").css("font-size"),
                X = j.find("img"),
                V = {
                    top: parseInt(X.css("marginTop"), 10),
                    right: parseInt(X.css("marginRight"), 10),
                    bottom: parseInt(X.css("marginBottom"), 10),
                    left: parseInt(X.css("marginLeft"), 10)
                },
                J = Math.round(n.front_img_width + V.left + V.right + U * 2 + R * 2),
                K = Math.round(w + V.top + V.bottom + U * 2 + R * 2),
                Q = Math.round(n.front_img_width * n.behind_size),
                G = Math.round(w * n.behind_size),
                Y = B.find("h6").css("font-size"),
                Z = B.find("span").css("font-size"),
                et = B.find("img"),
                tt = {
                    top: parseInt(et.css("marginTop"), 10),
                    right: parseInt(et.css("marginRight"), 10),
                    bottom: parseInt(et.css("marginBottom"), 10),
                    left: parseInt(et.css("marginLeft"), 10)
                },
                nt = Math.round(Q + tt.left + tt.right + U * 2 + R * 2),
                rt = Math.round(G + tt.top + tt.bottom + U * 2 + R * 2),
                it = Math.round(n.front_img_width * n.back_size),
                st = Math.round(w * n.back_size),
                ot = H.find("h6").css("font-size"),
                ut = H.find("span").css("font-size"),
                at = H.find("img"),
                ft = {
                    top: parseInt(at.css("marginTop"), 10),
                    right: parseInt(at.css("marginRight"), 10),
                    bottom: parseInt(at.css("marginBottom"), 10),
                    left: parseInt(at.css("marginLeft"), 10)
                },
                lt = Math.round(it + ft.left + ft.right + U * 2 + R * 2),
                ct = Math.round(st + ft.top + ft.bottom + U * 2 + R * 2),
                ht = Math.round(y / 2 - J / 2),
                pt = y - lt,
                dt;
            if (_) {
                w = "auto";
                G = "auto";
                st = "auto"
            }
            n.behind_distance !== "auto" ? dt = parseInt(n.behind_distance, 10) : dt = Math.round(y / 4 - nt / 2);
            var vt = y - dt - nt;
            H.removeClass("back");
            B.removeClass("behind");
            j.removeClass("front");
            var mt = e("span", s).css("padding-top"),
                gt = e("span", s).css("padding-right"),
                yt = e("span", s).css("padding-bottom"),
                bt = e("span", s).css("padding-left"),
                wt = {
                    opacity: n.text_opacity,
                    fontSize: W,
                    paddingTop: mt,
                    paddingRight: gt,
                    paddingBottom: yt,
                    paddingLeft: bt
                },
                Et = {
                    opacity: n.text_opacity,
                    fontSize: Z,
                    paddingTop: Math.round(parseInt(mt, 10) * .8),
                    paddingRight: Math.round(parseInt(gt, 10) * .8),
                    paddingBottom: Math.round(parseInt(yt, 10) * .8),
                    paddingLeft: Math.round(parseInt(bt, 10) * .8)
                },
                St = {
                    opacity: n.text_opacity,
                    fontSize: ut,
                    paddingTop: Math.round(parseInt(mt, 10) * .6),
                    paddingRight: Math.round(parseInt(gt, 10) * .6),
                    paddingBottom: Math.round(parseInt(yt, 10) * .6),
                    paddingLeft: Math.round(parseInt(bt, 10) * .6)
                };
            if (n.text_front_only) {
                Et.opacity = 0;
                St = e.extend(St, Et)
            }
            if (L) {
                var xt = parseInt(j.find("span").css("margin-left"), 10) + parseInt(j.find("span").css("margin-right"), 10),
                    Tt = parseInt(B.find("span").css("margin-left"), 10) + parseInt(B.find("span").css("margin-right"), 10),
                    Nt = parseInt(H.find("span").css("margin-left"), 10) + parseInt(H.find("span").css("margin-right"), 10);
                wt.width = J - parseInt(gt, 10) - parseInt(bt, 10) - xt - R * 2;
                Et.width = nt - Et.paddingRight - Et.paddingLeft - Tt - R * 2;
                St.width = lt - St.paddingRight - St.paddingLeft - Nt - R * 2
            }
            r.find(".dummy").remove();
            var Ct = [],
                kt = function(e) {
                    Ct = [];
                    Ct.push(Math.floor(parseInt(D[h.data("framesource")].data("displayheight"), 10) * n.back_size) + ct + parseInt(q, 10));
                    Ct.push(Math.floor(parseInt(D[p.data("framesource")].data("displayheight"), 10) * n.behind_size) + rt + parseInt(I, 10));
                    Ct.push(parseInt(D[N].data("displayheight"), 10) + K + parseInt(F, 10));
                    Ct.push(Math.floor(parseInt(D[v.data("framesource")].data("displayheight"), 10) * n.behind_size) + rt + parseInt(I, 10));
                    Ct.push(Math.floor(parseInt(D[m.data("framesource")].data("displayheight"), 10) * n.back_size) + ct + parseInt(q, 10));
                    if (e) {
                        Ct.sort(function(e, t) {
                            return t - e
                        });
                        if (b !== Ct[0]) {
                            b = Ct[0];
                            r.stop().animate({
                                height: b
                            }, n.speed, n.easing).css({
                                overflow: "visible"
                            })
                        }
                    }
                };
            if (n.variable_container_height && _) kt(!1);
            else if (_) {
                P.sort(function(e, t) {
                    return t - e
                });
                var Lt = parseInt(P[0], 10);
                Lt || (Lt = 300);
                Ct.push(Lt + K + parseInt(F, 10));
                Ct.push(Lt + rt + parseInt(I, 10));
                Ct.push(Lt + ct + parseInt(q, 10))
            } else {
                Ct.push(K + parseInt(F, 10));
                Ct.push(rt + parseInt(I, 10));
                Ct.push(ct + parseInt(q, 10))
            }
            Ct.sort(function(e, t) {
                return t - e
            });
            b = Ct[0];
            r.height(b).width(y);
            h.css({
                left: 0,
                top: q
            }).css({
                opacity: n.back_opacity
            }).find("img").css({
                width: it,
                height: st,
                marginTop: ft.top,
                marginRight: ft.right,
                marginBottom: ft.bottom,
                marginLeft: ft.left,
                opacity: 1
            }).siblings("span").css(St).children("h6").css({
                fontSize: ot
            });
            p.css({
                left: dt,
                top: I,
                zIndex: 2
            }).css({
                opacity: n.behind_opacity
            }).find("img").css({
                width: Q,
                height: G,
                marginTop: tt.top,
                marginRight: tt.right,
                marginBottom: tt.bottom,
                marginLeft: tt.left,
                opacity: 1
            }).siblings("span").css(Et).children("h6").css({
                fontSize: Y
            });
            d.css({
                left: ht,
                top: F,
                zIndex: 3
            }).css({
                opacity: 1
            }).find("a *").css({
                cursor: "pointer"
            }).end().find("img").css({
                width: n.front_img_width,
                height: w,
                marginTop: V.top,
                marginRight: V.right,
                marginBottom: V.bottom,
                marginLeft: V.left,
                opacity: 1
            }).siblings("span").css(wt).children("h6").css({
                fontSize: z
            });
            v.css({
                left: vt,
                top: I,
                zIndex: 2
            }).css({
                opacity: n.behind_opacity
            }).find("img").css({
                width: Q,
                height: G,
                marginTop: tt.top,
                marginRight: tt.right,
                marginBottom: tt.bottom,
                marginLeft: tt.left,
                opacity: 1
            }).siblings("span").css(Et).children("h6").css({
                fontSize: Y
            });
            m.css({
                left: pt,
                top: q
            }).css({
                opacity: n.back_opacity
            }).find("img").css({
                width: it,
                height: st,
                marginTop: ft.top,
                marginRight: ft.right,
                marginBottom: ft.bottom,
                marginLeft: ft.left,
                opacity: 1
            }).siblings("span").css(St).children("h6").css({
                fontSize: ot
            });
            n.text_front_only && h.add(p).add(v).add(m).find("span").hide();
            if (L && _) {
                h.find("img").css({
                    height: Math.floor(D[h.data("framesource")].data("displayheight") * n.back_size)
                });
                p.find("img").css({
                    height: Math.floor(D[p.data("framesource")].data("displayheight") * n.behind_size)
                });
                d.find("img").css({
                    height: Math.floor(D[d.data("framesource")].data("displayheight"))
                });
                v.find("img").css({
                    height: Math.floor(D[v.data("framesource")].data("displayheight") * n.behind_size)
                });
                m.find("img").css({
                    height: Math.floor(D[m.data("framesource")].data("displayheight") * n.back_size)
                })
            }
            var At = {
                width: it,
                marginTop: ft.top,
                marginRight: ft.right,
                marginBottom: ft.bottom,
                marginLeft: ft.left,
                opacity: 1
            };
            _ || (At.height = st);
            var Ot = e.extend({}, At);
            _ && (Ot.height = "auto");
            var Mt = {
                width: Q,
                marginTop: tt.top,
                marginRight: tt.right,
                marginBottom: tt.bottom,
                marginLeft: tt.left,
                opacity: 1
            };
            _ || (Mt.height = G);
            var _t = {
                width: n.front_img_width,
                marginTop: V.top,
                marginRight: V.right,
                marginBottom: V.bottom,
                marginLeft: V.left,
                opacity: 1
            };
            _ || (_t.height = w);
            (typeof e.easing.easeIOBoutique == "undefined" || !e.easing.easeIOBoutique) && e.extend(e.easing, {
                easeInBoutique: function(e, t, n, r, i) {
                    var s = t / i;
                    return s * s
                },
                easeOutBoutique: function(e, t, n, r, i) {
                    var s = t / i;
                    return -1 * s * (s - 2)
                },
                easeIOBoutique: function(e, t, n, r, i) {
                    var s = t / (i / 2);
                    return e <= .5 ? s / 2 * s : -0.5 * (--s * (s - 2) - 1)
                }
            });
            O && Dt();
            window[S + "_ext_prev"] = window[S + "_prev"] = window[S + "_previous"] = function(e) {
                e = e || 1;
                n.right_to_left ? Bt(e) : jt(e)
            };
            window[S + "_ext_next"] = window[S + "_next"] = function(e) {
                e = e || 1;
                n.right_to_left ? jt(e) : Bt(e)
            };
            window[S + "_stopautoplay"] = function() {
                n.autoplay && Pt();
                n.autoplay = !1
            };
            window[S + "_startautoplay"] = function() {
                n.autoplay || Ht();
                n.autoplay = !0
            };
            window[S + "_goto"] = function(e) {
                e = e || !1;
                if (e) {
                    e = parseInt(e, 10);
                    if (parseFloat(e) === e && N !== e && C >= e) {
                        var t = 0,
                            n;
                        if (N < e)
                            if (e - N <= N + (C - e)) {
                                n = "right";
                                t = e - N
                            } else {
                                n = "left";
                                t = N + (C - e)
                            }
                        else if (C - N + e <= N - e) {
                            n = "right";
                            t = C - N + e
                        } else {
                            n = "left";
                            t = N - e
                        }
                        n === "right" ? Bt(t) : jt(t)
                    }
                }
            };
            r.delegate(".frame1", "click", function(e) {
                if (n.freescroll || !x) {
                    if (n.never_move_twice) jt(1);
                    else if (n.move_more_directly) {
                        jt(1);
                        jt(1)
                    } else jt(2);
                    e.preventDefault()
                }
            });
            r.delegate(".frame2", "click", function(e) {
                if (n.freescroll || !x) {
                    jt(1);
                    e.preventDefault()
                }
            });
            r.delegate(".frame4", "click", function(e) {
                if (n.freescroll || !x) {
                    Bt(1);
                    e.preventDefault()
                }
            });
            r.delegate(".frame5", "click", function(e) {
                if (n.freescroll || !x) {
                    if (n.never_move_twice) Bt(1);
                    else if (n.move_more_directly) {
                        Bt(1);
                        Bt(1)
                    } else Bt(2);
                    e.preventDefault()
                }
            });
            if (n.move_on_hover) {
                r.delegate(".frame1", "mousemove", function() {
                    h.click()
                });
                r.delegate(".frame2", "mousemove", function() {
                    p.click()
                });
                r.delegate(".frame4", "mousemove", function() {
                    v.click()
                });
                r.delegate(".frame5", "mousemove", function() {
                    m.click()
                })
            }
            var Ft = {
                left: "-=" + Math.floor(n.front_img_width * (n.hovergrowth / 2)),
                top: "-=" + Math.floor(n.front_img_width * n.hovergrowth / 2)
            };
            _ || (Ft.top = "-=" + Math.floor(w * n.hovergrowth));
            var It = {
                    left: "-=" + Math.floor(Q * n.hovergrowth)
                },
                qt = {
                    left: "+=" + Math.floor(Q * n.hovergrowth)
                },
                Rt = {
                    width: Math.floor(n.front_img_width * (1 + n.hovergrowth))
                },
                Ut = {
                    width: "+=" + Math.floor(n.hovergrowth * n.front_img_width)
                };
            _ || (Rt.height = Math.floor(w * (1 + n.hovergrowth)));
            var zt = {
                width: n.front_img_width
            };
            _ || (zt.height = w);
            r.delegate(".frame3", "mouseenter mouseleave", function(e) {
                if (e.type === "mouseenter" && !x && !T) {
                    T = !0;
                    n.autoplay && Pt();
                    _ && L && (Rt.height = Math.floor(D[d.data("framesource")].data("displayheight") * (1 + n.hovergrowth)));
                    d.addClass("zoomed").stop(!0, !0).animate(Ft, M).find("img").stop().animate(Rt, M);
                    p.stop(!0, !0).animate(It, M);
                    v.stop(!0, !0).animate(qt, M);
                    L && d.find("span").stop().animate(Ut, M)
                } else if (!x) {
                    T = !1;
                    n.autoplay && Ht();
                    _ && L && (zt.height = D[d.data("framesource")].data("displayheight"));
                    d.stop().animate({
                        left: ht,
                        top: F
                    }, M).find("img").stop().animate(zt, M, function() {
                        d.removeClass("zoomed")
                    });
                    p.stop().animate({
                        left: dt
                    }, M);
                    v.stop().animate({
                        left: vt
                    }, M);
                    L && r.find(".zoomed span").stop().animate(wt, M)
                }
            });
            k || r.delegate(".frame3:not(.zoomed)", "mousemove", function() {
                T || d.trigger("mouseenter")
            });
            r.delegate(".frame3 a", "click", function(t) {
                typeof link_callback == "function" && link_callback(e(this).attr("href"), S);
                if (n.autoplay && n.stop_autoplay_on_click) {
                    Pt();
                    n.autoplay = !1
                }
                if (n.lightbox_support) {
                    s.eq(N - 1).children("a").click();
                    t.preventDefault()
                }
            });
            n.keyboard && e(document).keydown(function(e) {
                (e.keyCode === 39 || !n.right_to_left && (e.keyCode === 13 || e.keyCode === 32)) && Bt(1);
                (e.keyCode === 37 || n.right_to_left && (e.keyCode === 13 || e.keyCode === 32)) && jt(1)
            });
            n.autoplay && Ht();
            O && t.resize(function() {
                Dt()
            })
        });
        return this
    }
})(jQuery);