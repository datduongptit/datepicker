var mode = 1;
[Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
  function (e) {
    e.hasOwnProperty("append") ||
      Object.defineProperty(e, "append", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          var e = Array.prototype.slice.call(arguments),
            t = document.createDocumentFragment();
          e.forEach(function (e) {
            var a = e instanceof Node;
            t.appendChild(a ? e : document.createTextNode(String(e)));
          }),
            this.appendChild(t);
        },
      });
  }
);

var server_folder = "";
if (0 == mode)
  var path = "shivani-savani.myshopify.com",
    cart = 1,
    product = 0,
    shopName = "shivani-savani.myshopify.com",
    target =
      "http://localhost/appsonrent-apps/order-delivery-date/order-delivery-date_v1.php",
    oddSiteFdUrl = "http://localhost/appsonrent-apps/order-delivery-date/",
    Scripturl =
      "https://app.identixweb.com/" +
      server_folder +
      "order-delivery-date/assets/js/order-delivery-date_v1.js?v=1.0&scid=OUVFK0NZREg2Ly80bEJiV3p6Ym5UQT09&shop=shivani-savani.myshopify.com",
    res = Scripturl.split("&"),
    res1 = res[1].split("="),
    scid = res1[1];
else {
  var path = __st.pageurl,
    shopName = Shopify.shop;
  if ("rozness-paris.myshopify.com" == Shopify.shop) {
    if (void 0 === __st.p) var cart = path.search("/cart");
  } else if ("altacucinaitaliana.myshopify.com" == Shopify.shop) {
    if ("collection" != __st.p) var cart = path.search("/cart");
  } else var cart = path.search("/cart");
  if (void 0 === document.currentScript) var scid = "";
  else
    var Scripturl = document.currentScript.src,
      res = Scripturl.split("&"),
      res1 = res[1].split("="),
      scid = res1[1];
  var target =
    "https://app.identixweb.com/" +
    server_folder +
    "order-delivery-date/order-delivery-date_v1.php";
  if ("product" === __st.p)
    var product = path.search("/products"),
      target =
        "https://app.identixweb.com/" +
        server_folder +
        "order-delivery-date/addon/product_calendar/order-delivery-date_v1.php";
  var oddSiteFdUrl =
    "https://app.identixweb.com/" + server_folder + "order-delivery-date/";
}
var oddShopInfo = {},
  oddshipping_price = "",
  oddshipping_method = "",
  oddconditional_cart_apply = 0,
  oddresultJson = "",
  cutofftime_with_no_show_time_select_box = "little-succers.myshopify.com",
  required_delivery_date = "",
  use_time_option = "",
  oddSelectorCartForm = "form[action*='/cart']",
  oddSelectorCartForm2 = "form[action='/cart?locale=en']",
  oddSelectorCartForm3 = "form[action='/cart']",
  oddAppDiv = ".identixweb-order-delivery",
  oddItemsData = [],
  oddProductTimeStatus,
  oddGetdateProductStatus,
  oddEditdateProductStatus,
  oddEditdateProductRequiredStatus,
  oddEditdateProductTime,
  oddEditdateProductRequiredText,
  oddEditdateProductDeliveryDate,
  oddEditdateProductDeliveryDay,
  oddEditdateProductDeliveryTime = "",
  oddShippingAddon = "",
  oddShippingCalander = "",
  oddStorePickup = "",
  oddLocationCalanderSettings = [],
  local_html = "",
  map_load = 0,
  map_js_load = 0,
  cartParsData = 1,
  pcAppStatus = 0,
  ldAppStatus = 0,
  ldRequiredMsgStatus = 0,
  localDeliveryMessage = "",
  icart_html_return = "",
  local_action = "",
  store_action = "",
  oddProductAppStatus = 0,
  deliveryDateText = "",
  deliveryDayText = "",
  deliveryTimeText = "";
if (cart > 0) {
  var scripts = [];
  if (
    "deli-in-the-city.myshopify.com" == shopName ||
    ("charlescvvonlinest.myshopify.com" == shopName &&
      "2.1.4" == window.jQuery.fn.jquery) ||
    ("chandni-demo.myshopify.com" == shopName &&
      "2.2.3" == window.jQuery.fn.jquery)
  )
    scripts.push(oddSiteFdUrl + "assets/js/jquery-3.4.1-front.min.js"),
      oddt_loadScripts(scripts);
  else if ("undefined" == typeof jQuery)
    scripts.push(oddSiteFdUrl + "assets/js/jquery-3.4.1-front.min.js"),
      oddt_loadScripts(scripts);
  else if ("undefined" != typeof jQuery) {
    var $ = jQuery.noConflict();
    scripts.push(oddSiteFdUrl + "assets/js/jquery-ui-front-min.js"),
      oddt_loadScripts(scripts);
  }
  oddt_loadCss(oddSiteFdUrl + "assets/css/jquery-ui-front.css"),
    oddt_loadCss(oddSiteFdUrl + "assets/css/order-delivery-date.css"),
    oddt_loadCss(oddSiteFdUrl + "assets/css/store-pickup-ui-front.css");
}
if (product > 0) {
  var scripts = [];
  if ("undefined" == typeof jQuery)
    scripts.push(oddSiteFdUrl + "assets/js/jquery-3.4.1-front.min.js"),
      oddt_loadScripts(scripts);
  else if ("undefined" != typeof jQuery) {
    var $ = jQuery.noConflict();
    scripts.push(oddSiteFdUrl + "assets/js/jquery-ui-front-min.js"),
      oddt_loadScripts(scripts);
  }
  oddt_loadCss(oddSiteFdUrl + "assets/css/product-calendar-ui-front.css");
}
if (
  Shopify.Checkout &&
  void 0 !== Shopify.Checkout.OrderStatus &&
  ("thank_you" == Shopify.Checkout.page || Shopify.checkout.order_id)
) {
  var scripts = [];
  scripts.push(oddSiteFdUrl + "assets/js/jquery-3.4.1-front.min.js"),
    oddt_loadScripts(scripts);
}
function oddt_loadScripts(e) {
  var t = document.getElementsByTagName("head")[0],
    a = e.shift(),
    r = document.createElement("script");
  t.append(r),
    (r.onload = function (t) {
      void 0 === jQuery.ui &&
        e.push(oddSiteFdUrl + "assets/js/jquery-ui-front-min.js"),
        e.length
          ? oddt_loadScripts(e)
          : "little-succers.myshopify.com" == shopName
          ? checkLittlesuccers()
          : orderDeliveryDateFun();
    }),
    (r.src = a);
}
function oddt_loadCss(e) {
  var t = document.getElementsByTagName("head")[0],
    a = document.createElement("link");
  (a.rel = "stylesheet"),
    (a.type = "text/css"),
    (a.href = e),
    (a.media = "all"),
    t.appendChild(a);
}
function checkLittlesuccers() {
  var e = [],
    t = new XMLHttpRequest();
  (t.onload = function () {
    var a = JSON.parse(t.responseText);
    (items_count = a.item_count),
      $.each(a.items, function (t, a) {
        e.push(a.product_id);
      });
    $(e).not([126532714521]).get().length > 0 && orderDeliveryDateFun();
  }),
    t.open("GET", "/cart.js", !0),
    t.setRequestHeader("content-type", "application/json"),
    t.send();
}
function oddJsLoad(e, t) {
  if (!document.getElementById(t)) {
    var a = document.createElement("script");
    (a.type = "text/javascript"), (a.async = !0), (a.src = e), (a.id = t);
    var r = document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(a, r);
  }
}
function oddCssLoad(e, t) {
  if (!document.getElementById(t)) {
    var a = document.getElementsByTagName("head")[0],
      r = document.createElement("link");
    (r.id = t),
      (r.rel = "stylesheet"),
      (r.type = "text/css"),
      (r.href = e),
      (r.media = "all"),
      a.appendChild(r);
  }
}
function orderDeliveryDateFun() {
  var e = {};
  (e.scid = scid),
    (e.shop = shopName),
    (e.oddShopInfo = oddShopInfo),
    (e.method_name = "oddt_front_calendar_settings"),
    $.ajax({
      type: "POST",
      url: target,
      data: e,
      dataType: "json",
      success: function (e) {
        if (
          "success" == (oddresultJson = e).msg &&
          ((oddShopInfo = oddresultJson.oddShopInfo), 1 == oddresultJson.enable)
        ) {
          var t = oddresultJson.custom_css;
          $("body").append("<style>" + t + "</style>");
          var a = oddresultJson.active_addon;
          if (
            ((pcAppStatus = oddresultJson.pc_app_status),
            (ldAppStatus = oddresultJson.ld_app_status),
            (ldRequiredMsgStatus = oddresultJson.ld_required_msg_status),
            (localDeliveryMessage =
              null != oddresultJson.ld_text_settings &&
              null != oddresultJson.ld_text_settings.local_delivery_message
                ? oddresultJson.ld_text_settings.local_delivery_message
                : ""),
            "1" == oddresultJson.additional_checkout_button &&
              $(
                ".additional-checkout-buttons,.dynamic-checkout__content"
              ).hide(),
            1 == pcAppStatus)
          )
            oddJsLoad(
              oddSiteFdUrl + "assets/js/product-calendar.min.js",
              "oddProdutCalendarJs"
            );
          else if (
            ((deliveryDateText =
              null != oddresultJson.shipping_data.delivery_date_text &&
              null != oddresultJson.shipping_data.delivery_date_text
                ? oddresultJson.shipping_data.delivery_date_text
                : ""),
            (deliveryDayText =
              null != oddresultJson.shipping_data.delivery_day_text &&
              null != oddresultJson.shipping_data.delivery_day_text
                ? oddresultJson.shipping_data.delivery_day_text
                : ""),
            (deliveryTimeText =
              null != oddresultJson.shipping_data.delivery_time_text &&
              null != oddresultJson.shipping_data.delivery_time_text
                ? oddresultJson.shipping_data.delivery_time_text
                : ""),
            $.inArray("6", a) > -1)
          ) {
            if (
              (oddJsLoad(
                oddSiteFdUrl + "assets/js/store-pickup.min.js",
                "oddStorePickupJs"
              ),
              (local_html = oddresultJson.local_html),
              $(oddAppDiv).length
                ? $(oddAppDiv).html(oddresultJson.html)
                : (1 == oddresultJson.cal_type
                    ? $(
                        oddSelectorCartForm +
                          "," +
                          oddSelectorCartForm2 +
                          "," +
                          oddSelectorCartForm3
                      ).append(
                        '<div class="identixweb-order-delivery"> ' +
                          oddresultJson.html +
                          " </div>"
                      )
                    : $(
                        oddSelectorCartForm +
                          "," +
                          oddSelectorCartForm2 +
                          "," +
                          oddSelectorCartForm2
                      ).append(
                        '<div class="identixweb-order-delivery"> ' +
                          oddresultJson.html +
                          " </div>"
                      ),
                  $(
                    "form[action='/cart/update'] .identixweb-order-delivery"
                  ).remove()),
              $("body").append("<style>" + oddresultJson.style + "</style>"),
              $(oddSelectorCartForm).length ||
                $(oddSelectorCartForm2).length ||
                0 == mode)
            )
              if ("1" == oddresultJson.shipping_status) shipping_calender(1);
              else if ("1" == oddresultJson.sp_app_status)
                var r = setInterval(function () {
                  "undefined" != typeof store_pickup_calender &&
                    (clearInterval(r), store_pickup_calender(r));
                }, 500);
              else if ("1" == oddresultJson.ld_app_status) {
                $(".main_loader").after(local_html),
                  $(
                    ".main_loader .identixweb-order-delivery-date-local-delivery-preloader"
                  ).hide(),
                  $(
                    ".local_loader .identixweb-order-delivery-date-local-delivery-preloader"
                  ).hide();
                var i = $(
                    "form[action*='/cart'],form[action='/cart?locale=en']"
                  ),
                  d = oddresultJson.ld_text_settings;
                $(".order-delivery-date-postalcode").length &&
                  $(".order-delivery-date-postalcode").keypress(function (e) {
                    "13" == e.which && e.preventDefault();
                  }),
                  "1" == oddresultJson.ld_required_msg_status &&
                    ($('a[href="/checkout"]').length &&
                      $('a[href="/checkout"]').click(function (e) {
                        doRequired(
                          e,
                          oddresultJson,
                          d.local_delivery_subheading,
                          i
                        );
                      }),
                    $(".additional-checkout-button").length &&
                      $(".additional-checkout-button").click(function (e) {
                        doRequired(
                          e,
                          oddresultJson,
                          d.local_delivery_subheading,
                          i
                        );
                      }),
                    i.find("[name='checkout']").length &&
                      i.find("[name='checkout']").click(function (e) {
                        doRequired(
                          e,
                          oddresultJson,
                          d.local_delivery_subheading,
                          i
                        );
                      }),
                    i.submit(function (e) {}));
              } else
                $(
                  ".identixweb-order-delivery-date-local-delivery-preloader"
                ).hide();
          } else
            ($(oddSelectorCartForm).length ||
              $(oddSelectorCartForm2).length ||
              0 == mode) &&
              ($(oddAppDiv).length
                ? $(".identixweb-order-delivery").html(
                    oddresultJson.shipping_loader
                  )
                : $(oddSelectorCartForm + "," + oddSelectorCartForm2).append(
                    '<div class="identixweb-order-delivery">' +
                      oddresultJson.shipping_loader +
                      "</div>"
                  )),
              shipping_show(
                0,
                (oddShippingCalander = oddresultJson.shipping_data)
              );
        }
      },
    });
}
function shipping_calender(e) {
  if ("" != oddShippingCalander) shipping_show(e, oddShippingCalander);
  else {
    var t = {};
    (t.shop = shopName),
      (t.oddShopInfo = oddShopInfo),
      (t.s_type = e),
      (t.method_name = "oddt_front_calendar_shipping"),
      (odd_currentRequestoforderdeliverydateapp = $.ajax({
        type: "POST",
        url: target,
        data: t,
        dataType: "json",
        success: function (t) {
          (oddShippingCalander = t), shipping_show(e, t);
        },
      }));
  }
}
function shipping_show(e, t) {
  var a = parseInt(t.week_start),
    r = t.date_format,
    i = t.min_date,
    d = oddt_invalid_days(t.invalid_day),
    o = oddt_disable_dates(t.extra_no_available),
    s = t.time_format,
    n = oddt_day_text_value(t.current_time_c),
    l = t.additional_checkout_button,
    c = (t.select_time_text, t.cart_required_message),
    p = $("form[action*='/cart'],form[action='/cart?locale=en']"),
    u = t.current_month;
  if (i < 0 && "pro" == t.account_type);
  else {
    if (
      ("1" == t.required &&
        ("undefined" != typeof BOLD &&
          void 0 !== BOLD.recurring_orders &&
          void 0 !== BOLD.recurring_orders.app &&
          void 0 !== BOLD.recurring_orders.app.cartWidget &&
          (BOLD.recurring_orders.app.cartWidget.checkoutEnabled = !1),
        $('a[href="/checkout"]').length &&
          $('a[href="/checkout"]').click(function (e) {
            doRequired(e, t, c, p);
          }),
        $(".additional-checkout-button").length &&
          $(".additional-checkout-button").click(function (e) {
            doRequired(e, t, c, p);
          }),
        p.find("[name='checkout']").length &&
          p.find("[name='checkout']").click(function (e) {
            doRequired(e, t, c, p);
          }),
        p.submit(function (e) {})),
      "1" == t.timer_status && t.delivery_time)
    ) {
      var _,
        v = "";
      _ = oddt_day_text_value(t.auto_current_time_c);
      var m = t.auto_current_time_c;
      (v = oddt_get_time_slots(t, _, m, t.auto_current_month)),
        3 == s && "" == v[1] && (v = ""),
        "" == v &&
          (auto_minday_calculation(t.auto_date, t, d, r, o),
          (o =
            o +
            "," +
            oddt_get_date_formated(new Date(t.current_time_c), t.date_format))),
        oddt_delivery_time_change_action(t.delivery_time_text, l);
    } else {
      0 == oddt_cutOffTimeDate(t, n, t.auto_current_time_c, u) &&
        (auto_minday_calculation(t.auto_date, t, d, r, o),
        (o =
          o +
          "," +
          oddt_get_date_formated(new Date(t.current_time_c), t.date_format)));
    }
    1 == e
      ? 1 == t.enable &&
        1 == t.shipping_status &&
        ($(".identixweb-order-delivery-date-main").remove(),
        $(".main_loader").after(t.shipping_html))
      : $(oddAppDiv).length
      ? $(".identixweb-order-delivery").html(t.shipping_html)
      : $(oddSelectorCartForm + "," + oddSelectorCartForm2).append(
          '<div class="identixweb-order-delivery">' + t.shipping_html + "</div>"
        ),
      bindDatePicker(i, d, a, r, t.months_name, t.days_name, o, t.max_date, t);
  }
}
function date_select(e, t, a, r, i) {
  var d = a,
    o = i.active_addon;
  if ($.inArray("7", o) > -1) {
    var s = i.extra_no_available.split(",");
    if ($.inArray(d, s) > -1)
      return void $(".identixweb-order-delivery-date-deliveryRequired")
        .html(
          "Sorry... You can't order for selected date. Please select other date."
        )
        .show();
  }
  var n = r.charAt(2),
    l = "",
    c = oddt_day_text_value(
      (a = dateFormatConvert(r, "mm" + n + "dd" + n + "yy", "" + n, "/", a))
    ),
    p = oddt_month_text_value(parseDate(i.current_time_c));
  if (
    ($(".uiDeliveryDateVal").val(d),
    $(".uiDeliveryDayVal").val(oddt_day_text_value(a)),
    $(".deliveryTime").empty(),
    1 == i.timer_status && (l = oddt_get_time_slots(i, c, a, p)),
    $(".deliveryTime").append(l),
    $.inArray("6", i.active_addon) > -1 &&
      $(".identixweb-order-delivery-deliveryTime").html(l),
    $(".uiDeliveryTimeVal").val(""),
    1 === oddEditdateProductStatus && (oddEditdateProductDeliveryDate = d),
    "1" == i.timer_status)
  )
    var u =
      "attributes[" +
      i.delivery_date_text +
      "]=" +
      d +
      "&attributes[" +
      i.delivery_day_text +
      "]=" +
      c +
      "&attributes[" +
      i.delivery_time_text +
      "]&update";
  else
    u =
      "attributes[" +
      i.delivery_date_text +
      "]=" +
      d +
      "&attributes[" +
      i.delivery_day_text +
      "]=" +
      c +
      "&update";
  if ($.inArray("3", o) > -1 && 1 == pcAppStatus)
    $.get("/cart.json", "", function (e) {
      if (0 == oddProductAppStatus) {
        var t,
          a,
          r = $(".uiDeliveryDateVal").val(),
          i = $(".uiDeliveryDayVal").val(),
          d = new URLSearchParams(window.location.search);
        if (1 == d.has("variant")) a = t = Number(d.get("variant"));
        else {
          var o,
            s = window.location.href;
          if (s.includes("?")) {
            var n = s.split("?");
            s = n[0];
          }
          $.ajax({
            url: s + ".js",
            dataType: "json",
            async: !1,
            type: "GET",
            success: function (e) {
              for (var t = 0; t < e.variants.length; t++)
                if (e.variants[t].available) {
                  o = e.variants[t].id;
                  break;
                }
            },
          }),
            (a = t = "" != o ? o : Number(meta.product.variants[0].id));
        }
        var l = e.attributes;
        if (void 0 === l.OrderDeliveryDate) {
          (jsonObj = []),
            (attributes = {}),
            (attributes.product_id = __st.rid),
            (attributes.variant_id = a),
            (attributes.DeliveryDate = r),
            (attributes.DeliveryDay = i),
            jsonObj.push(attributes);
          var c = JSON.stringify(jsonObj);
          $.ajax({
            url: "/cart",
            data: "attributes[OrderDeliveryDate]=" + c + "&update",
            type: "POST",
            dataType: "text",
          });
        } else {
          for (
            var p = JSON.parse(l.OrderDeliveryDate), u = [], _ = 0;
            _ < p.length;
            _++
          )
            u[_] = p[_].variant_id;
          if (0 == u.includes(t)) {
            ((c = {}).product_id = __st.rid),
              (c.variant_id = a),
              (c.DeliveryDate = r),
              (c.DeliveryDay = i),
              p.push(c);
            var v = JSON.stringify(p);
            $.ajax({
              url: "/cart",
              data: "attributes[OrderDeliveryDate]=" + v + "&update",
              type: "POST",
              dataType: "text",
            });
          } else if (1 == u.includes(t)) {
            var m = u.indexOf(t);
            (p[m].product_id = __st.rid),
              (p[m].variant_id = t),
              (p[m].DeliveryDate = r),
              (p[m].DeliveryDay = i);
            v = JSON.stringify(p);
            $.ajax({
              url: "/cart",
              data: "attributes[OrderDeliveryDate]=" + v + "&update",
              type: "POST",
              dataType: "text",
            });
          }
        }
      }
    });
  else {
    if ($.inArray("6", o) > -1) {
      var _ = $(".uiLocationOrderTypeVal").val(),
        v = $(".uiLocationNameVal").val(),
        m = $(".uiLocationAddressVal").val(),
        y = $(".uiLocationIdVal").val(),
        h = $(".uiPostalCodeVal").val();
      if ("Shipping" == _)
        if ("1" == i.timer_status)
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=&attributes[Location Id]=&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=&update";
        else
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=Shipping&attributes[Location Id]=&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=&update";
      else if ("Store Pickup" == _)
        if ("1" == i.timer_status)
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=&attributes[Location Id]=&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=&update";
        else
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=Store Pickup&attributes[Location Id]=" +
            y +
            "&attributes[Location Name]=" +
            v +
            "&attributes[Location Address]=" +
            m +
            "&attributes[Postal Code]=&update";
      else if ("Local Delivery" == _)
        if ("1" == i.timer_status)
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=&attributes[Location Id]=&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=&update";
        else
          u =
            "attributes[" +
            i.delivery_date_text +
            "]=" +
            d +
            "&attributes[" +
            i.delivery_day_text +
            "]=" +
            c +
            "&attributes[" +
            i.delivery_time_text +
            "]=&attributes[Order Type]=Local Delivery&attributes[Location Id]=" +
            y +
            "&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=" +
            h +
            "&update";
    }
    $.ajax({
      url: "/cart",
      data: u,
      type: "POST",
      dataType: "text",
      async: !1,
    }),
      "1" == i.additional_checkout_button &&
        $(".additional-checkout-buttons, .dynamic-checkout__content").show(),
      "1" == i.timer_status &&
        "1" == i.additional_checkout_button &&
        $(".additional-checkout-buttons, .dynamic-checkout__content").hide(),
      "Store Pickup" != _ && oddt_shipping_price_display(a, i);
  }
  "onload" == e &&
    "" != l &&
    ($.inArray("3", o) > -1 && 1 == pcAppStatus
      ? ($(".identixwebproductorderdeliverydeliveryTime").val(
          $(".identixwebproductorderdeliverydeliveryTime")
            .find("option:eq(1)")
            .val()
        ),
        $(".identixwebproductorderdeliverydeliveryTime").trigger("change"))
      : $.inArray("6", o) > -1
      ? ($(".identixweb-order-delivery-deliveryTime").val(
          $(".identixweb-order-delivery-deliveryTime")
            .find("option:eq(1)")
            .val()
        ),
        $(".identixweb-order-delivery-deliveryTime").trigger("change"))
      : ($(".deliveryTime").val($(".deliveryTime").find("option:eq(1)").val()),
        $(".deliveryTime").trigger("change")));
}
function auto_minday_calculation(e, t, a, r, i) {
  e = t.temp_auto_date;
  var d = t.temp_auto_current_week_day,
    o = r.charAt(2),
    s = dateFormatConvert(r, "mm" + o + "dd" + o + "yy", "" + o, "/", e),
    n = new Date(s),
    l = n.setDate(n.getDate() + 1);
  for (
    e = oddt_get_date_formated(new Date(l), r),
      d++,
      oddresultJson.auto_current_week_day++,
      d = d >= 7 ? 0 : d;
    $.inArray(d, a) > -1;

  )
    (l = n.setDate(n.getDate() + 1)),
      (e = oddt_get_date_formated(new Date(l), r)),
      d++,
      oddresultJson.auto_current_week_day++,
      (d = null != t.special_days ? (d > 7 ? 0 : d) : d >= 7 ? 0 : d);
  for (; $.inArray(e, i) > -1; )
    for (
      l = n.setDate(n.getDate() + 1),
        e = oddt_get_date_formated(new Date(l), r),
        d++,
        oddresultJson.auto_current_week_day++,
        d = null != t.special_days ? (d > 7 ? 0 : d) : d >= 7 ? 0 : d;
      $.inArray(d, a) > -1;

    )
      (l = n.setDate(n.getDate() + 1)),
        (e = oddt_get_date_formated(new Date(l), r)),
        d++,
        oddresultJson.auto_current_week_day++,
        (d = null != t.special_days ? (d > 7 ? 0 : d) : d >= 7 ? 0 : d);
  t.auto_date = e;
}
function bindDatePicker(e, t, a, r, i, d, o, s, n) {
  var l = n.auto_select_date,
    c = n.auto_date,
    p = c,
    u = n.max_dates;
  if (1 == l && "" != n.max_date) {
    var _ = r.charAt(2),
      v = dateFormatConvert(r, "mm" + _ + "dd" + _ + "yy", "" + _, "/", u),
      m = Date.parse(v),
      y = dateFormatConvert(r, "mm" + _ + "dd" + _ + "yy", "" + _, "/", c),
      h = Date.parse(y);
    l = m < h ? 0 : 1;
  }
  1 == l && date_select("onload", c, (p = c), r, n);
  var f = (oddresultJson = n).previous,
    g = oddresultJson.next;
  if (
    ($(".uiDeliveryCalendar").datepicker({
      onChangeMonthYear: function (e, t, a) {
        var r = oddresultJson.active_addon;
        if (
          0 == pcAppStatus &&
          $.inArray("7", r) > -1 &&
          1 == oddresultJson.timer_status &&
          3 == oddresultJson.time_format
        ) {
          var i = "01/" + (t > 9 ? "" : "0") + t + "/" + e,
            d =
              null != oddresultJson.location_id
                ? oddresultJson.location_id
                : "IS NULL",
            s = 0;
          "Store Pickup" == $(".uiLocationOrderTypeVal").val()
            ? ((d = $(".uiLocationIdVal").val()), (s = 2))
            : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
              ((d = $(".uiLocationIdVal").val()), (s = 3));
          var n = {};
          (n.shop = shopName),
            (n.oddShopInfo = oddShopInfo),
            (n.min_date = i),
            (n.extra_no_available = oddresultJson.extra_no_available),
            (n.timer_status = oddresultJson.timer_status),
            (n.date_format = oddresultJson.date_format),
            (n.time_format = oddresultJson.time_format),
            (n.delivery_time = oddresultJson.time_format_value),
            (n.location_id = d),
            (n.order_type = s),
            (n.method_name = "oddt_addon_order_data"),
            (currentRequestoformonthchnage = $.ajax({
              type: "POST",
              url: target,
              data: n,
              success: function (e) {
                (addonOrderData = JSON.parse(e)),
                  (o =
                    "" != o
                      ? o + "," + addonOrderData.extra_no_available
                      : addonOrderData.extra_no_available),
                  (oddresultJson.all_orders_status =
                    addonOrderData.all_orders_status),
                  (oddresultJson.all_orders = addonOrderData.all_orders);
              },
            }));
        }
      },
      beforeShowDay: function (e) {
        return oddt_before_show_days(e, t, o, r, n);
      },
      onSelect: function (e) {
        $(".uiDeliveryCalendar").datepicker("setDate", e);
        var t = $(this)
          .closest(".uiDeliveryCalendar")
          .parents(".icartOddMainDiv");
        $(".icartOddMainDiv").length > 0 &&
          t.length > 0 &&
          icartCountClick($(this)),
          (l = 0),
          date_select("onselect", c, e, r, n);
      },
      minDate: p,
      firstDay: a,
      dateFormat: r,
      dayNamesMin: d.split(","),
      monthNames: i.split(","),
      maxDate: s,
      prevText: f,
      nextText: g,
    }),
    $(
      'form[action*="/cart"] [name="checkout"],form[action="/cart?locale=en"] [name="checkout"]'
    ).removeAttr("disabled"),
    "squished-orders.myshopify.com" == shopName &&
      $(
        'form[action*="/cart"] [name="checkout"],form[action="/cart?locale=en"] [name="checkout"]'
      ).show(),
    1 == oddresultJson.cal_type &&
      $(".identixweb-order-delivery-datepicer-icon").bind(
        "click",
        ".order-calendar-button-click",
        function (e) {
          $(e.delegateTarget).find(".uiDeliveryCalendar").focus();
        }
      ),
    1 === oddEditdateProductStatus &&
      ($(".uiDeliveryCalendar").datepicker(
        "setDate",
        oddEditdateProductDeliveryDate
      ),
      1 == n.timer_status))
  ) {
    _ = r.charAt(2);
    date_parameter = dateFormatConvert(
      r,
      "mm" + _ + "dd" + _ + "yy",
      "" + _,
      "/",
      oddEditdateProductDeliveryDate
    );
    var D = oddt_day_text_value(oddEditdateProductDeliveryDate),
      b = oddt_month_text_value(oddresultJson.current_time_c);
    (delivery_time = oddt_get_time_slots(oddresultJson, D, date_parameter, b)),
      0 == oddresultJson.time_format &&
        (delivery_time = replaceAll(
          delivery_time,
          '<option value="' +
            oddEditdateProductDeliveryTime +
            '">' +
            oddEditdateProductDeliveryTime +
            "</option>",
          '<option value="' +
            oddEditdateProductDeliveryTime +
            '" selected>' +
            oddEditdateProductDeliveryTime +
            "</option>"
        )),
      $(".deliveryTime").html(delivery_time);
  }
  0 == l
    ? ($(".uiDeliveryCalendar").datepicker("setDate", null),
      $(".uiDeliveryCalendar")
        .find(".ui-datepicker-current-day a")
        .removeClass("ui-state-active")
        .removeClass("ui-state-hover"),
      $(".uiDeliveryCalendar")
        .find(".ui-datepicker-current-day")
        .removeClass("ui-datepicker-current-day")
        .removeClass("ui-datepicker-days-cell-over"),
      $(".uiDeliveryCalendar .ui-datepicker").addClass("notranslate"),
      $("#ui-datepicker-div").addClass("notranslate"))
    : $(".uiDeliveryCalendar").datepicker("setDate", c);
  oddresultJson.active_addon;
  if (
    (setTimeout(function () {
      $(".identixweb-order-delivery-date-local-delivery-preloader").hide(),
        $(
          ".local_loader .identixweb-order-delivery-date-local-delivery-preloader"
        ).hide(),
        $(".identixweb-order-delivery-date-main").show(),
        $(".order-delivery-date-local-delivery").show(),
        $(".identixweb-order-delivery-date-store-pickup-delivery").show(),
        $(".store_loader .identixweb-order-delivery-date-store-pickup").show();
    }, 300),
    0 == map_load &&
      1 ==
        $(".store-pickup-identixweb-order-delivery-date").hasClass("active") &&
      null != oddresultJson.google_map_status &&
      1 == oddresultJson.google_map_status)
  )
    var S = setInterval(function () {
      $("#oddGoogleMap").length > 0 &&
        (initMap(oddresultJson), clearInterval(S));
    }, 1e3);
}
function oddt_before_show_days(e, t, a, r, i) {
  var d = e.getDay(),
    o = (new Date(e), i.current_time_c, i.active_addon);
  if (t.indexOf(d) > -1) return [!1, "booked", ""];
  if (a) {
    var s = $.datepicker.formatDate(r, e);
    return [-1 == a.indexOf(s)];
  }
  return $.inArray("2", o), [!0, "", ""];
}
function oddt_delivery_time_change_action(e, t) {
  var a = ".deliveryTime";
  $.inArray("6", oddresultJson.active_addon) > -1 &&
    (a = ".identixweb-order-delivery-deliveryTime"),
    $(document).on("change", a, function () {
      $(a + ' option[value="' + $(this).val() + '"]').attr(
        "selected",
        "selected"
      ),
        $(".uiDeliveryTimeVal").val($(this).val());
      var r = $(this).val(),
        i = $(".uiDeliveryDateVal").val(),
        d = $(".uiDeliveryDayVal").val(),
        o = oddresultJson.active_addon;
      if ("" != r) {
        var s = "attributes[" + e + "]=" + r + "&update";
        if ($.inArray("6", o) > -1) {
          var n = $(".uiLocationOrderTypeVal").val(),
            l = $(".uiLocationNameVal").val(),
            c = $(".uiLocationAddressVal").val(),
            p = $(".uiLocationIdVal").val(),
            u = $(".uiPostalCodeVal").val();
          if ("Shipping" == n)
            s =
              "attributes[" +
              deliveryDateText +
              "]=" +
              i +
              "&attributes[" +
              deliveryDayText +
              "]=" +
              d +
              "&attributes[" +
              deliveryTimeText +
              "]=" +
              r +
              "&attributes[Order Type]=Shipping&attributes[Location Id]=&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=&update";
          else if ("Store Pickup" == n)
            s =
              "attributes[" +
              deliveryDateText +
              "]=" +
              i +
              "&attributes[" +
              deliveryDayText +
              "]=" +
              d +
              "&attributes[" +
              deliveryTimeText +
              "]=" +
              r +
              "&attributes[Order Type]=Store Pickup&attributes[Location Id]=" +
              p +
              "&attributes[Location Name]=" +
              l +
              "&attributes[Location Address]=" +
              c +
              "&attributes[Postal Code]=&update";
          else if ("Local Delivery" == n)
            s =
              "attributes[" +
              deliveryDateText +
              "]=" +
              i +
              "&attributes[" +
              deliveryDayText +
              "]=" +
              d +
              "&attributes[" +
              deliveryTimeText +
              "]=" +
              r +
              "&attributes[Order Type]=Local Delivery&attributes[Location Id]=" +
              p +
              "&attributes[Location Name]=&attributes[Location Address]=&attributes[Postal Code]=" +
              u +
              "&update";
        }
        $.ajax({
          url: "/cart",
          async: !0,
          data: s,
          type: "POST",
          dataType: "text",
        }),
          (cartParsData = s);
      }
      "1" == t &&
        $(".additional-checkout-buttons, .dynamic-checkout__content").show(),
        "" == r &&
          $(".additional-checkout-buttons, .dynamic-checkout__content").hide();
    });
}
function oddt_get_date_formated(e, t) {
  if (parseInt(e.getMonth() + 1) < 10) var a = "0" + parseInt(e.getMonth() + 1);
  else a = parseInt(e.getMonth() + 1);
  if (e.getDate() < 10) var r = "0" + e.getDate();
  else r = e.getDate();
  var i = e.getFullYear(),
    d = "";
  switch (t) {
    case "dd/mm/yy":
      d = r + "/" + a + "/" + i;
      break;
    case "dd/yy/mm":
      d = r + "/" + i + "/" + a;
      break;
    case "mm/dd/yy":
      d = a + "/" + r + "/" + i;
      break;
    case "mm/yy/dd":
      d = a + "/" + i + "/" + r;
      break;
    case "yy/dd/mm":
      d = i + "/" + r + "/" + a;
      break;
    case "yy/mm/dd":
      d = i + "/" + a + "/" + r;
      break;
    case "dd-mm-yy":
      d = r + "-" + a + "-" + i;
      break;
    case "dd-yy-mm":
      d = r + "-" + i + "-" + a;
      break;
    case "mm-dd-yy":
      d = a + "-" + r + "-" + i;
      break;
    case "mm-yy-dd":
      d = a + "-" + i + "-" + r;
      break;
    case "yy-dd-mm":
      d = i + "-" + r + "-" + a;
      break;
    case "yy-mm-dd":
      d = i + "-" + a + "-" + r;
  }
  return d;
}
function dateFormatConvert(e, t, a, r, i) {
  var d = e.toLowerCase().split(a),
    o = i.split(a);
  (o[d[0]] = o[0]), (o[d[1]] = o[1]), (o[d[2]] = o[2]);
  var s = t.toLowerCase().split(a);
  return (newDate = o[s[0]] + r + o[s[1]] + r + o[s[2]]), newDate;
}
function oddt_get_time_slots(e, t, a, r) {
  var i = e,
    d = ((a = a), i.time_format);
  t = t;
  return 0 == d
    ? oddt_time_dropdown_format_zero(i, t, a, r)
    : 1 == d
    ? oddt_time_dropdown_format_one(i, t, a, r)
    : 2 == d
    ? oddt_time_dropdown_format_two(i, t, a, r)
    : 3 == d
    ? oddt_time_dropdown_format_three(i, t, a, r)
    : void 0;
}
function oddt_time_dropdown_format_zero(e, t, a, r) {
  var i,
    d = e.delivery_time.time,
    o = e.select_time_text;
  "Store Pickup" == $(".uiLocationOrderTypeVal").val()
    ? (o = e.sp_text_settings.store_pickup_timer_heading)
    : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
      (o = e.ld_text_settings.local_delivery_timer_heading);
  var s = t,
    n = e.currentmonthday,
    l = r,
    c = e.currentHr,
    p = e.cutoff_time_status,
    u = e.cutoff_hour_minute;
  a = parseDate(a);
  var _ = new Date(a).getDate(),
    v = oddt_month_text_value(a),
    m = "",
    y = "",
    h = '<option value="">' + o + "</option>";
  i = d.split(",");
  var f = e.delivery_time.time_24;
  c = hide_slots_settings(e, c);
  for (var g = 0; g < i.length; g++) {
    if (t == s && parseInt(n) == parseInt(_) && l == v) {
      if (0 == p) {
        if (parseFloat(c) <= parseFloat(i[g]))
          m += '<option value="' + f[g] + '">' + f[g] + "</option>";
      } else if (
        parseFloat(c) <= parseFloat(i[g]) &&
        parseFloat(c) <= parseFloat(u)
      )
        m += '<option value="' + f[g] + '">' + f[g] + "</option>";
    } else m += '<option value="' + f[g] + '">' + f[g] + "</option>";
  }
  return "" != m && (y = h + m), y;
}
function oddt_time_dropdown_format_one(e, t, a, r) {
  var i,
    d = 0,
    o = e.delivery_time,
    s = e.select_time_text;
  "Store Pickup" == $(".uiLocationOrderTypeVal").val()
    ? (s = e.sp_text_settings.store_pickup_timer_heading)
    : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
      (s = e.ld_text_settings.local_delivery_timer_heading);
  var n = t,
    l = e.currentmonthday,
    c = r,
    p = e.currentHr,
    u = e.cutoff_time_status,
    _ = e.cutoff_hour_minute;
  a = parseDate(a);
  var v = new Date(a).getDate(),
    m = oddt_month_text_value(a),
    y = "",
    h = "",
    f = '<option value="">' + s + "</option>";
  i = o.split(",");
  for (var g = 0; g < i.length; g++) {
    y += '<option value="' + i[g] + '">' + i[g] + "</option>";
  }
  return (
    0 == u
      ? (d = 1)
      : t == n && parseInt(l) == parseInt(v) && c == m
      ? parseFloat(p) <= parseFloat(_) && (d = 1)
      : (d = 1),
    1 == d && (h = f + y),
    h
  );
}
function oddt_time_dropdown_format_two(e, t, a, r) {
  var i = 0,
    d = e.delivery_time,
    o = "",
    s = t;
  if ($.inArray("6", e.active_addon) > -1 && null != e.ld_date_settings) {
    var n = e.ld_date_settings.special_days.split(",");
    "" != n && $.inArray(a, n) > -1 && ((t = "specialday"), (s = "specialday"));
  }
  var l = e.currentmonthday,
    c = r,
    p = e.currentHr,
    u = e.cutoff_time_status,
    _ = e.cutoff_hour_minute;
  a = parseDate(a);
  var v = new Date(a).getDate(),
    m = oddt_month_text_value(a),
    y = e.select_time_text;
  "Store Pickup" == $(".uiLocationOrderTypeVal").val()
    ? (y = e.sp_text_settings.store_pickup_timer_heading)
    : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
      (y = e.ld_text_settings.local_delivery_timer_heading);
  var h = "";
  o = d;
  var f = '<option value="">' + y + "</option>";
  if (
    ($.each(d, function (e, a) {
      t == e && (o = a);
    }),
    0 == u
      ? (i = 1)
      : t == s && parseInt(l) == parseInt(v) && c == m
      ? parseFloat(p) <= parseFloat(_) && (i = 1)
      : (i = 1),
    1 == i)
  ) {
    o = o.split(",");
    for (var g = 0; g < o.length; g++)
      (temp = '<option value="' + o[g] + '">' + o[g] + "</option>"),
        (h += temp);
    h = f + h;
  }
  return h;
}
function oddt_time_dropdown_format_three(e, t, a, r) {
  var i = t;
  if ($.inArray("6", e.active_addon) > -1 && null != e.ld_date_settings) {
    var d = e.ld_date_settings.special_days.split(",");
    "" != d && $.inArray(a, d) > -1 && (i = "Special");
  }
  var o = t,
    s = e.currentmonthday,
    n = r,
    l = e.currentHr,
    c = e.cutoff_time_status,
    p = e.cutoff_hour_minute,
    u = e.select_time_text;
  "Store Pickup" == $(".uiLocationOrderTypeVal").val()
    ? (u = e.sp_text_settings.store_pickup_timer_heading)
    : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
      (u = e.ld_text_settings.local_delivery_timer_heading);
  var _ = e.delivery_time,
    v = e.time_display_format;
  a = parseDate(a);
  var m,
    y,
    h = new Date(a).getDate(),
    f = oddt_month_text_value(a),
    g = [],
    D = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Special",
    ],
    b = [],
    S = [],
    x = [],
    T = [],
    k = [];
  l = hide_slots_settings(e, l);
  var w = e.is_show_hide_slot;
  for (w = 1 == w ? "start" : "end", B = 0; B < _.length; B++)
    if (i == D[B])
      for (m = 0; m < _[B].end.length; m++) {
        if (
          ((y = _[B].end[m].split(":")),
          (temp_start = _[B].start[m].split(":")),
          12 == v)
        )
          var C = _[B].start[m].split(":"),
            F = _[B].end[m].split(":"),
            A = oddt_convert_24_to_12(C),
            J = oddt_convert_24_to_12(F);
        else (A = _[B].start[m]), (J = _[B].end[m]);
        var L = _[B].pre[m],
          O = _[B].post[m],
          P = _[B].to[m];
        if ($.inArray("7", e.active_addon) > -1 && 0 == pcAppStatus)
          var j = _[B].limit_status[m],
            q = _[B].number_orders[m];
        var I = 0;
        if (t == o && parseInt(s) == parseInt(h) && n == f)
          if (0 == c)
            if ("start" == w && 1 == e.hide_slots_settings) {
              if (
                parseFloat(l) <= parseFloat(temp_start[0]) &&
                parseFloat(l) <= parseFloat(y[0])
              ) {
                var N = A + "-" + J,
                  R = L + " " + A + " " + P + " " + J + " " + O;
                b.push(N),
                  S.push(R),
                  $.inArray("7", e.active_addon) > -1 &&
                    0 == pcAppStatus &&
                    (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
              }
            } else if ("end" == w && 1 == e.hide_slots_settings) {
              if (parseFloat(l) <= parseFloat(y[0])) {
                (N = A + "-" + J),
                  (R = L + " " + A + " " + P + " " + J + " " + O);
                b.push(N),
                  S.push(R),
                  $.inArray("7", e.active_addon) > -1 &&
                    0 == pcAppStatus &&
                    (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
              }
            } else I = 1;
          else if ("start" == w && 1 == e.hide_slots_settings) {
            if (
              parseFloat(e.currentHr) <= parseFloat(temp_start[0]) &&
              parseFloat(e.currentHr) <= parseFloat(y[0]) &&
              parseFloat(e.currentHr) <= parseFloat(p)
            ) {
              (N = A + "-" + J),
                (R = L + " " + A + " " + P + " " + J + " " + O);
              b.push(N),
                S.push(R),
                $.inArray("7", e.active_addon) > -1 &&
                  0 == pcAppStatus &&
                  (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
            }
          } else if ("end" == w && 1 == e.hide_slots_settings) {
            if (
              parseFloat(e.currentHr) <= parseFloat(y[0]) &&
              parseFloat(e.currentHr) <= parseFloat(p)
            ) {
              (N = A + "-" + J),
                (R = L + " " + A + " " + P + " " + J + " " + O);
              b.push(N),
                S.push(R),
                $.inArray("7", e.active_addon) > -1 &&
                  0 == pcAppStatus &&
                  (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
            }
          } else if (1 == c && 0 == e.hide_slots_settings) {
            if (parseFloat(e.currentHr) <= parseFloat(p)) {
              (N = A + "-" + J),
                (R = L + " " + A + " " + P + " " + J + " " + O);
              b.push(N),
                S.push(R),
                $.inArray("7", e.active_addon) > -1 &&
                  0 == pcAppStatus &&
                  (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
            }
          } else I = 1;
        else I = 1;
        if (I) {
          (N = A + "-" + J), (R = L + " " + A + " " + P + " " + J + " " + O);
          b.push(N),
            S.push(R),
            $.inArray("7", e.active_addon) > -1 &&
              0 == pcAppStatus &&
              (1 == j && 0 == q && k.push(N), x.push(j), T.push(q));
        }
      }
  if (
    (g.push(b.toString().split(",")),
    g.push(S.toString().split(",")),
    $.inArray("7", e.active_addon) > -1 &&
      (g.push(x.toString().split(",")), g.push(T.toString().split(","))),
    "" != g[0])
  ) {
    var V = '<option value="">' + u + "</option>";
    if ($.inArray("7", e.active_addon) > -1 && 0 == pcAppStatus) {
      if (
        "" == $(".uiDeliveryDateVal").val() ||
        null == $(".uiDeliveryDateVal").val()
      )
        var E = e.min_date;
      else E = $(".uiDeliveryDateVal").val();
      var M = order_limit_time_format(
        e,
        E,
        i,
        _,
        e.all_orders_status,
        e.all_orders,
        g[0],
        g[1],
        g[2],
        g[3]
      );
      k.forEach(function (e, t) {
        if ($.inArray(e, M[0]) > -1) {
          var a = M[0].indexOf(e);
          delete M[0][a], delete M[1][a], delete M[2][a], delete M[3][a];
        }
      });
      for (var U = 0; U < M[1].length; U++)
        void 0 !== M[0][U] &&
          (V += '<option value="' + M[0][U] + '">' + M[1][U] + "</option>");
    } else
      for (var B = 0; B < g[1].length; B++)
        V += '<option value="' + g[0][B] + '">' + g[1][B] + "</option>";
    g = V;
  }
  return g;
}
function order_limit_time_format(e, t, a, r, i, d, o, s, n, l) {
  var c = [],
    p = e.date_format,
    u = p.charAt(2);
  t = dateFormatConvert(p, "yy" + u + "mm" + u + "dd", "" + u, "-", t);
  if (1 == i) {
    for (var _ = 0; _ < d.length; _++) {
      var v = d[_].delivery_date,
        m = d[_].delivery_time;
      t == v && c.push(m);
    }
    if (c.length) {
      var y = [];
      c.forEach(function (e) {
        y[e] = (y[e] || 0) + 1;
      });
      for (var h = 0; h < o.length; h++)
        1 == n[h] &&
          ((timer = null != y[o[h]] ? y[o[h]] : ""),
          "" != timer &&
            timer >= l[h] &&
            (delete o[h], delete s[h], delete n[h], delete l[h]));
      return ((f = [])[0] = o), (f[1] = s), (f[2] = n), (f[3] = l), f;
    }
    var f;
    return ((f = [])[0] = o), (f[1] = s), (f[2] = n), (f[3] = l), f;
  }
  return ((f = [])[0] = o), (f[1] = s), (f[2] = n), (f[3] = l), f;
}
function hide_slots_settings(e, t) {
  return 1 == e.hide_slots_settings ||
    1 == e.padding_time_status ||
    (1 == e.cutoff_time_status && e.currentHr >= e.cutoff_hour_minute)
    ? t
    : 0;
}
function oddt_convert_24_to_12(e) {
  if (0 == e[0]) var t = 12;
  else t = e[0];
  return e[0] > 12
    ? parseInt(e[0] - 12) < 10
      ? "0" + parseInt(e[0] - 12) + ":" + e[1] + " PM"
      : parseInt(e[0] - 12) + ":" + e[1] + " PM"
    : 12 == e[0]
    ? parseInt(e[0]) + ":" + e[1] + " PM"
    : t + ":" + e[1] + " AM";
}
function oddt_cutOffTimeDate(e, t, a, r) {
  var i = 0,
    d = t,
    o = e.currentmonthday,
    s = r,
    n = e.currentHr,
    l = e.cutoff_time_status,
    c = e.cutoff_hour_minute;
  a = parseDate(a);
  var p = new Date(a).getDate(),
    u = oddt_month_text_value(a);
  return (
    0 == l
      ? (i = 1)
      : t == d && parseInt(o) == parseInt(p) && s == u
      ? parseFloat(n) <= parseFloat(c) && (i = 1)
      : (i = 1),
    i
  );
}
function oddt_shipping_price(e, t) {
  var a = e.sp_settings,
    r = [];
  return r.push(a[t].price), r.push(a[t].method), r;
}
function oddt_shipping_price_display(date_parameter, resultData) {
  $(".oddt_shipping_addon").css("color", resultData.msg_txt_color);
  var status = resultData.sp_tl_status,
    message = resultData.message,
    storeCurrency = resultData.money_format,
    activeAddon = resultData.active_addon,
    conditional_shipping = resultData.sp_condition,
    conditional_cart_value = resultData.scp_condition,
    date2 = new Date(date_parameter),
    day_value = date2.getDay();
  $.inArray("2", activeAddon) > -1 &&
    1 == resultData.sp_app_status &&
    $.get("/cart.json", "", function (result) {
      var shipping_call = 0;
      if (conditional_cart_value.length > 0) {
        var total_price = result.total_price / 100;
        for (i = 0; i < conditional_cart_value.length; i++) {
          var cart_value = conditional_cart_value[i].cart_value,
            scp_method = conditional_cart_value[i].scp_method,
            scp_operator = conditional_cart_value[i].scp_operator,
            scp_price = conditional_cart_value[i].scp_price;
          "=" == scp_operator && (scp_operator = "==");
          var cart_condition = eval(total_price + scp_operator + cart_value),
            cart_message = resultData.message;
          if (cart_condition) {
            if (
              ((oddshipping_price = parseFloat(scp_price)),
              (oddshipping_method = scp_method),
              1 == status)
            ) {
              shipping_call = 1;
              var price = storeCurrency + "" + oddshipping_price;
              (oddconditional_cart_apply = 1),
                (cart_message = replaceAll(
                  cart_message,
                  "{shipping.price}",
                  price
                )),
                (cart_message = replaceAll(
                  cart_message,
                  "{shipping.method_name}",
                  oddshipping_method
                )),
                $(".oddt_shipping_addon").css("display", "flex"),
                $(".oddt_shipping_addon").html(
                  '<span class="oddtDeliveryShippingPrice">' +
                    cart_message +
                    "</span>"
                );
            }
            return !1;
          }
        }
      }
      if (1 == shipping_call) return !1;
      if (conditional_shipping.length > 0) {
        var dateFormat = resultData.date_format,
          separator = dateFormat.charAt(2),
          min_date = dateFormatConvert(
            dateFormat,
            "mm" + separator + "dd" + separator + "yy",
            "" + separator,
            "/",
            resultData.min_date
          ),
          date1 = new Date(min_date),
          dayWiseShippingRate = oddt_shipping_price(resultData, day_value),
          difference_In_Time = date2.getTime() - date1.getTime(),
          difference_In_Days = difference_In_Time / 864e5,
          dayWiseShippingRate = parseFloat(dayWiseShippingRate[0]),
          i;
        for (
          isNaN(dayWiseShippingRate) && (dayWiseShippingRate = 0), i = 0;
          i < conditional_shipping.length;
          i++
        ) {
          var day_name = conditional_shipping[i].day_name,
            operator = conditional_shipping[i].cs_operator,
            base_price = conditional_shipping[i].base_price;
          "=" == operator && (operator = "==");
          var cs_price = conditional_shipping[i].cs_price,
            cs_method = conditional_shipping[i].cs_method,
            condition = eval(
              parseInt(difference_In_Days) + operator + parseInt(day_name)
            ),
            cs_price = parseFloat(cs_price);
          if (condition) {
            if (
              ((oddshipping_price =
                1 == base_price
                  ? parseFloat(cs_price)
                  : parseFloat(cs_price) + dayWiseShippingRate),
              (oddshipping_method = cs_method),
              "" != oddshipping_price && 0 != oddshipping_price && 1 == status)
            ) {
              var price = storeCurrency + "" + oddshipping_price;
              (message = replaceAll(message, "{shipping.price}", price)),
                (message = replaceAll(
                  message,
                  "{shipping.method_name}",
                  oddshipping_method
                )),
                $(".oddt_shipping_addon").css("display", "flex"),
                $(".oddt_shipping_addon").html(
                  '<span class="oddtDeliveryShippingPrice">' +
                    message +
                    "</span>"
                );
            }
            return;
          }
          var shippingData = oddt_shipping_price(resultData, day_value);
          (oddshipping_price = shippingData[0]),
            (oddshipping_method = shippingData[1]),
            isNaN(oddshipping_price) && (oddshipping_price = "");
        }
      } else {
        var shippingData = oddt_shipping_price(resultData, day_value);
        (oddshipping_price = shippingData[0]),
          (oddshipping_method = shippingData[1]),
          isNaN(oddshipping_price) && (oddshipping_price = "");
      }
      if ("" != oddshipping_price && 0 != oddshipping_price && 1 == status) {
        var price = storeCurrency + "" + oddshipping_price;
        (message = replaceAll(message, "{shipping.price}", price)),
          (message = replaceAll(
            message,
            "{shipping.method_name}",
            oddshipping_method
          )),
          $(".oddt_shipping_addon").css("display", "flex"),
          $(".oddt_shipping_addon").html(
            '<span class="oddtDeliveryShippingPrice">' + message + "</span>"
          );
      } else $(".oddt_shipping_addon").css("display", "none"), $(".oddt_shipping_addon").html("");
    });
}
function replaceAll(e, t, a) {
  return e.replace(new RegExp(escapeRegExp(t), "g"), a);
}
function escapeRegExp(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function oddt_invalid_days(e) {
  var t = e.split(",");
  if (t) for (var a = 0; a < t.length; a++) t[a] = parseInt(t[a]);
  else t = [];
  return t;
}
function oddt_disable_dates(e) {
  var t = !1;
  return e && (t = e.split(",")), t;
}
function parseDate(e) {
  var t = Date.parse(e);
  return isNaN(t)
    ? Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "))
    : t;
}
function oddt_day_text_value(e) {
  var t = parseDate(e);
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(t).getDay()];
}
function oddt_month_text_value(e) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][new Date(e).getMonth()];
}
function doRequired(e, oddresultJson, requiredText, cartForm) {
  $(".deliveryRequired").hide(),
    cutofftime_with_no_show_time_select_box == shopName &&
      (oddresultJson.timer_status = "0");
  var postalCode = $(".uiPostalCodeVal").val(),
    oddPostalCode = $(".order-delivery-date-postalcode").val(),
    deliveryDate = $(".uiDeliveryDateVal").val(),
    deliveryTime = $(".uiDeliveryTimeVal").val();
  if ("Store Pickup" == $(".uiLocationOrderTypeVal").val())
    var timerStatus = $("input[name=sp_time_status]").val();
  else if ("Local Delivery" == $(".uiLocationOrderTypeVal").val())
    var timerStatus = $("input[name=ld_time_status]").val();
  else var timerStatus = oddresultJson.timer_status;
  var activeAddon = oddresultJson.active_addon;
  if (
    ($.inArray("2", activeAddon) > -1 &&
      1 == oddresultJson.sp_app_status &&
      (cartForm.removeAttr("action"),
      $('button[name="checkout"]').removeAttr("type")),
    1 == ldAppStatus &&
      1 == ldRequiredMsgStatus &&
      $(".order-delivery-date-postalcode").length &&
      (0 == oddPostalCode.length || void 0 === postalCode))
  )
    return (
      $(".order-delivery-date-local-delivery").html(""),
      $(".identixweb-order-delivery-date-deliveryRequired")
        .html(localDeliveryMessage)
        .show(),
      $(".order-delivery-date-postalcode-text").css({
        border: "1px solid #ff0000",
        "border-radius": "4px",
      }),
      void e.preventDefault()
    );
  var calender_class_name = ".ui-datepicker-inline";
  if (
    (1 == oddresultJson.cal_type &&
      (calender_class_name = ".uiDeliveryCalendar"),
    "utrucking.myshopify.com" != shopName ||
      (deliveryDate &&
        (1 != timerStatus || deliveryTime) &&
        "" !=
          cartForm
            .find("[name='attributes[Building]']")
            .children("option:selected")
            .val() &&
        "" != cartForm.find("[name='attributes[Room]']").val() &&
        0 != cartForm.find("#agree").prop("checked")))
  )
    if (!deliveryDate || (1 == timerStatus && !deliveryTime))
      $(".identixweb-order-delivery-date-deliveryRequired").show(),
        $("html, body").animate(
          { scrollTop: $(".uiDeliveryCalendar").offset().top - 100 },
          1e3
        ),
        $(".deliveryRequired").html(requiredText).show(),
        $.inArray("6", activeAddon) > -1 &&
          $(".identixweb-order-delivery-date-deliveryRequired")
            .html(requiredText)
            .show(),
        deliveryDate
          ? $(calender_class_name).removeClass("uiRequired")
          : $(calender_class_name).addClass("uiRequired"),
        "1" == timerStatus &&
          (deliveryTime
            ? ($(".deliveryTime").removeClass("uiRequired"),
              $(".identixweb-order-delivery-deliveryTime").removeClass(
                "uiRequired"
              ))
            : ($(".deliveryTime").addClass("uiRequired"),
              $(".identixweb-order-delivery-deliveryTime").addClass(
                "uiRequired"
              ))),
        setTimeout(function () {
          cartForm.find("[name='checkout']").removeClass("btn--loading");
        }, 0),
        e.preventDefault();
    else if (
      ("undefined" != typeof BOLD &&
        void 0 !== BOLD.recurring_orders &&
        void 0 !== BOLD.recurring_orders.app &&
        void 0 !== BOLD.recurring_orders.app.cartWidget &&
        (BOLD.recurring_orders.app.cartWidget.checkoutEnabled = !0),
      "Store Pickup" == $(".uiLocationOrderTypeVal").val()
        ? $(oddSelectorCartForm).attr("action", store_action)
        : "Local Delivery" == $(".uiLocationOrderTypeVal").val() &&
          $(oddSelectorCartForm).attr("action", local_action),
      "1" == timerStatus && $(".deliveryTime").removeClass("uiRequired"),
      $(".uiDeliveryCalendar").removeClass("uiRequired"),
      $(".deliveryRequired").hide(),
      $.inArray("2", activeAddon) > -1 && 1 == oddresultJson.sp_app_status)
    ) {
      if (1 == oddconditional_cart_apply)
        var final_condition = eval(
          null != oddshipping_price || 0 == oddshipping_price
        );
      else
        var final_condition = eval(
          "" != oddshipping_price && 0 != oddshipping_price
        );
      final_condition &&
        (e.preventDefault(),
        $.get("/cart.json", "", function (e) {
          var t = cartForm.serialize();
          (t +=
            "&" +
            $.param({
              shop: shopName,
              method_name: "oddt_draft_order",
              cart: e,
              shipping_price: oddshipping_price,
              shipping_method: oddshipping_method,
              customer_id: __st.cid,
              shop_settings: oddresultJson,
              oddShopInfo: oddShopInfo,
            })),
            $.ajax({
              type: "POST",
              url:
                target + "?shop=" + shopName + "&method_name=oddt_draft_order",
              dataType: "json",
              async: !0,
              data: t,
              success: function (e) {
                var t = e;
                "success" == t.msg && (window.location = t.invoice_url);
              },
            });
        }));
    } else
      cartForm.unbind("submit"),
        cartForm.find("[name='checkout']").length
          ? (cartForm.find("[name='checkout']").unbind("click"),
            cartForm.find("[name='checkout']").click())
          : cartForm.submit();
  else
    (deliveryDate && (1 != timerStatus || deliveryTime)) ||
      ($("html, body").animate(
        { scrollTop: $(".uiDeliveryCalendar").offset().top - 100 },
        1e3
      ),
      $(".deliveryRequired").html(requiredText).show(),
      $.inArray("6", activeAddon) > -1 &&
        $(".identixweb-order-delivery-date-deliveryRequired")
          .html(requiredText)
          .show(),
      deliveryDate
        ? $(calender_class_name).removeClass("uiRequired")
        : $(calender_class_name).addClass("uiRequired"),
      "1" == timerStatus &&
        (deliveryTime
          ? ($(".deliveryTime").removeClass("uiRequired"),
            $(".identixweb-order-delivery-deliveryTime").removeClass(
              "uiRequired"
            ))
          : ($(".deliveryTime").addClass("uiRequired"),
            $(".identixweb-order-delivery-deliveryTime").addClass(
              "uiRequired"
            ))),
      setTimeout(function () {
        cartForm.find("[name='checkout']").removeClass("btn--loading");
      }, 0),
      e.preventDefault());
}
if (0 == mode);
else if (
  Shopify.Checkout &&
  void 0 !== Shopify.Checkout.OrderStatus &&
  ("thank_you" == Shopify.Checkout.page || Shopify.checkout.order_id)
) {
  var data = {};
  (data.shop = Shopify.Checkout.apiHost),
    (data.method_name = "oddt_getOrders"),
    (data.order_id = Shopify.checkout.order_id),
    window.Checkout.$.get(target, data, function (e) {
      if (0 == e.length) return !1;
      if (
        ((e = JSON.parse(e)),
        (html = e.html),
        "undefined" !== e.order.html && 1 == e.order.product_calendar)
      )
        "undefined" !== e.order_details &&
          1 == e.order.show_on_thankyou &&
          window.Checkout.$(".content-box:first").after(html);
      else if (
        "undefined" !== e.html &&
        1 == e.order_details.show_on_thankyou
      ) {
        var t = e.order_details.delivery_date;
        "little-succers.myshopify.com" == Shopify.Checkout.apiHost
          ? window.Checkout.$(".product__description").append(
              '<span class="product__description__property order-summary__small-text">' +
                e.order_details.delivery_date_label +
                ": " +
                t +
                "</span>"
            )
          : window.Checkout.$(".content-box:first").after(html);
      }
    });
}
$(document).ready(function () {
  $(".icart .icartOddMainDiv").length > 0 &&
    0 == $(".icart .icartOddMainDiv.oddDisplyed").length &&
    oddJsLoad(
      oddSiteFdUrl + "assets/js/icart_support_odd.min.js",
      "oddSupportiCartJs"
    );
});
