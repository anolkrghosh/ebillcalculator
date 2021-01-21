/**
 * WBSEDCL BILL ESTIMATION AND BREAKDOWN
 * AUTHOR : ANOL KR GHOSH
 * DATE : 15/12/2020
 * Note : Default Rates Are Provided by Wbsedcl || May Change over periods of time.
 **/

import Calculator from './app.js';
import {
    addList,
    input_list,
    input_unit,
    input_slab,
    Show_List,
    Show_Cost_Card,
    Cost_Card,
    Init
} from './component.js';
window.calculator = Calculator;
window.list_data = Array();
window.init = Init;
init(true);
$(document).on('click', '.card.bg-success', function (e) {

    let id = e.target.getAttribute('data-init_id');
    let dv = $(this).children(':first-child');

    dv.html(loading2);
    dv.fadeIn('slow');
    setTimeout(() => {
        if (id == 1)
            setTimeout(() => {
                input_list();
            }, 200)
        else
            setTimeout(() => {
                input_unit();
            }, 200)
    }, 500);
});

window.init_breakdown = function () {
    $('.init_brk').addClass('disabled').html(loading);
    setTimeout(() => {
        //input_slab();
        //process_breakdown();
        swal("Under Constraction", {
            buttons: false,
            timer: 1500,
        });
    }, 300)
}

window.append_to_list = function () {
    let name, watt, qty, hr;
    name = $('#name').val();
    watt = $('#watt').val();
    qty = $('#qty').val();
    hr = $('#hours').val();
    if (validation.isNotEmpty(name) && validation.isNotEmpty(watt) && validation.isNotEmpty(qty) && validation.isNotEmpty(hr)) {
        if (validation.isNumber(watt) && validation.isNumber(qty) && validation.isNumber(hr)) {
            let temp = Array();
            temp._id = Math.random().toString(36).substr(2, 9); // Math.floor(Math.random() * 100000000);//
            temp.name = name
            temp.watt = watt
            temp.qty = qty
            temp.load = Math.round(watt * qty);
            temp.hours = hr
            temp.req_energy = (watt * qty * hr) / 1000; //Math.round((watt * qty * hr) / 1000);
            list_data.push(temp);
            addList(temp);
            Show_List();
            Cal();
            // Reset Input Field
            $('#name').val(null);
            $('#watt').val(null);
            $('#qty').val(null);
            $('#hours').val(null);
        } else {
            let txt = "";
            if (!validation.isNumber(watt)) txt += "Watt";
            if (!validation.isNumber(qty)) txt += " / Quantity / ";
            if (!validation.isNumber(hr)) txt += "hours";
            swal(`Only Numbers are allowerd for ${txt}`, {
                buttons: false,
                timer: 1500,
            });
        }
    } else {
        swal("Empty Fields", {
            buttons: false,
            timer: 1500,
        });
    }
}

window.remove_from_list = function (id) {
    list_data = list_data.filter(list => list._id !== id);
    Cal();
    $(`#${id}`).remove();
    if ($('.list > .row').length < 1) Show_List(false);
}
var validation = {
    isEmailAddress: function (str) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str); // returns a boolean
    },
    isNotEmpty: function (str) {
        var pattern = /\S+/;
        return pattern.test(str); // returns a boolean
    },
    isNumber: function (str) {
        var pattern = /^\d+$/;
        return pattern.test(str); // returns a boolean
    },
    isSame: function (str1, str2) {
        return str1 === str2;
    }
};

window.Cal = function () {
    let Cal = new Calculator(list_data);
    let data = Cal.data();
    Cost_Card(data);
}

window.loading = '<span class="spinner-border m-1 spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only-focusable">Loading...</span>';
window.loading2 = '<span class="spinner-border m-2 spinner-border" role="status" aria-hidden="true"></span>';