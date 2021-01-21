function addList(item) {
    let list = $('.list')
    let i =
        `<div class="row" id="${item._id}">
   <div class="col col-lg-12 col-md-12 col-xs-12">
       <div class="card mb-2">
           <div class="card-body py-2">
               <div class="row">
                   <div class="col col-lg-4 col-md-4 col-xs-4 d-flex align-items-center my-2">
                       <p class="card-text">${item.name}</p>
                   </div>
                   <div class="col col-lg-2 col-md-2 col-xs-2 d-flex align-items-center my-2">
                       <p class="card-text">${item.load}</p>
                   </div>
                   <div class="col col-lg-2 col-md-2 col-xs-2 d-flex align-items-center my-2">
                       <p class="card-text">${item.hours}</p>
                   </div>
                   <div class="col col-lg-2 col-md-2 col-xs-2 d-flex align-items-center my-2 text-right">
                       <p class="card-text">${Math.round(item.req_energy)}</p>
                   </div>
                   <div class="col col-lg-2 col-md-2 col-xs-2 float-right my-2">
                       <button type="button" onclick="remove_from_list('${item._id}')" class="btn float-right btn-warning btn-circle"><i class="fa fa-times"></i>
                       </button>
                   </div>

               </div>
               
           </div>
       </div>
   </div>
</div>`;
    list.append(i);
}

function input_list(v = true) {
    let inp = $('#init');

    let i = `<div class="col-lg col-md col-xs">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Equipment Name</label>
                        <input type="text" class="form-control" id='name'
                            placeholder="Equipment Name">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Watt</label>
                        <input type="number" class="form-control" id='watt'
                            onKeyUp="if(this.value>10000) this.value='10000';" min="1" max="10000"
                            placeholder="Watt">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Qty</label>
                        <input type="number" class="form-control" id='qty'
                            onKeyUp="if(this.value>20) this.value='20';" min="1" max="20"
                            placeholder="No of Items">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Hours</label>
                        <input type="number" class="form-control" id='hours'
                            onKeyUp="if(this.value>24) this.value='24';" max="24"
                            placeholder="Active hours">
                    </div>
                </div>
                <div class="col-md-2 my-4">
                    <button type="button" onclick="append_to_list()"
                        class="btn float-right mr-4 btn-info btn-circle"><i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>`;

    if (v) inp.fadeOut("fast"), setTimeout(() => {
        inp.empty(), inp.append(i), inp.fadeIn("fast")
    }, 200);
    else inp.fadeOut("fast"), inp.hide();
}

function input_unit(v = true) {
    let inp = $('#init');

    let i = `<div class="col-lg col-md col-xs">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Total Unit</label>
                        <input type="text" class="form-control" id='qunit'
                            placeholder="Total Unit/Quarter">
                    </div>
                </div>
                <div class="col-md-1 mt-4 pt-2 text-center"><h4 class="text-weight-light">OR</h4>
                    
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>First Month Unit</label>
                        <input type="text" class="form-control" id='funit'
                            
                            placeholder="1st">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Second Month Unit</label>
                        <input type="text" class="form-control" id='sunit'
                            placeholder="2nd">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Third Month Unit</label>
                        <input type="text" class="form-control" id='tunit'
                            placeholder="3rd">
                    </div>
                </div>
                <div class="col-md-2 my-4">
                    <button onclick="init_breakdown()" class="btn init_brk btn-lg float-right btn-primary">Next</button>
                </div>
            </div>
            </div>
        </div>
    </div>`;

    if (v) inp.fadeOut("fast"), setTimeout(() => {
        inp.empty(), inp.append(i), inp.fadeIn("fast")
    }, 200);
    else inp.hide(), inp.empty();
}

function input_slab(v = true) {
    let inp = $('#init');

    let i = `<div class="col-lg col-md col-xs">
    <div class="card">
        <div class="card-header text-center">Rate Slab</div>
        <div class="card-body">
            <div class="row">
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>Total Unit</label>
                        <input type="text" class="form-control" id='qunit'
                            placeholder="Total Unit/Quarter">
                    </div>
                </div>
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>First Month Unit</label>
                        <input type="text" class="form-control" id='funit'
                            
                            placeholder="1st">
                    </div>
                </div>
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>Second Month Unit</label>
                        <input type="text" class="form-control" id='sunit'
                            placeholder="2nd">
                    </div>
                </div>
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>Third Month Unit</label>
                        <input type="text" class="form-control" id='tunit'
                            placeholder="3rd">
                    </div>
                </div>
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>Third Month Unit</label>
                        <input type="text" class="form-control" id='tunit'
                            placeholder="3rd">
                    </div>
                </div>
                <div class="col col-tenbysix">
                    <div class="form-group">
                        <label>Third Month Unit</label>
                        <input type="text" class="form-control" id='tunit'
                            placeholder="3rd">
                    </div>
                </div>
                <div class="col-md-2 my-4">
                    <button onclick="init_breakdown()" class="btn init_brk btn-lg float-right btn-primary">Next</button>
                </div>
            </div>
            </div>
        </div>
    </div>`;

    if (v) inp.fadeOut("fast"), setTimeout(() => {
        inp.empty(), inp.append(i), inp.fadeIn("fast")
    }, 300);
    else inp.hide(), inp.empty();
}

function Init(v = true) {
    let init = $('#init');
    Show_Cost_Card(false);
    Show_List(false);
    let i = `<div class="col col-lg-12 col-md-12 col-xs-12">
                        <div class="card-group">
                            <!-- Column -->
                            <div class="card bg-success">
                                <div  data-init_id="1"style="cursor: pointer;" class="card-body text-center text-white">
                                        <span data-init_id="1" class="display-6"><i onMouseOver="this.style.color='#0F0'"  onMouseOut="this.style.color='#FFF'" data-init_id="1" class="ti-light-bulb"></i></span>
                                        <div data-init_id="1" class="mt-3">
                                            <h5 data-init_id="1" class="font-weight-light  text-white">Estimate</h5>
                                        </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <!-- Column -->
                            <div class="card bg-success">
                                <div data-init_id="2" style="cursor: pointer;" class="card-body text-center text-white">
                                    <span data-init_id="2" class="display-6"><i onMouseOver="this.style.color='#0F0'"  onMouseOut="this.style.color='#FFF'" data-init_id="2" class="icon-energy"></i></span>
                                    <div data-init_id="2" class="mt-3">
                                        <h5 data-init_id="2" class="font-weight-light  text-white">Breakdown</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- Column -->
                        </div>
                    </div>`;
    if (v) init.empty(), init.append(i), init.fadeIn('fast');
    else init.fadeOut('fast'), init.empty();
}

// function Show_Input(i=true){
//     let row = $('#list_input');
//     let row_header =  $('#list_header');
//     if(i) row.show(),row_header.show();
//     else row.hide(),row_header.hide();
// }
function Show_List(i = true) {
    let row = $('.list');
    let row_result = $('#list_result');
    let row_header = $('#list_header');
    if (i) row_header.show(), row.show(), row_result.show();
    else row_header.hide(), row.hide(), row_result.hide();
}

function Show_Cost_Card(i = true) {
    let card = $("#cost_result");
    if (i) card.show();
    else card.hide();
}

function Cost_Card(data) {
    let card = $("#cost_result > div > .card").eq(0);
    let i2 = `<div class="card-body">
                <div class="float-left">
                    <h6 class="font-weight-medium mb-0 text-balck">Monthly Cost</h6>
                </div>
                <div class="float-right">
                    <h6 class="font-weight-medium mb-0 text-black">₹${(data[0].monthly).toFixed(2)}</h6>
                </div>
            </div>`;
    let i3 = `<div class="card-body">
                <div class="float-left">
                    <h6 class="font-weight-medium mb-0 text-balck">Quarterly Cost</h6>
                </div>
                <div class="float-right">
                    <h6 class="font-weight-medium mb-0 text-black">₹${(data[0].quarterly).toFixed(2)}</h6>
                </div>
            </div>`;
    let i = `<div class="card-body">
                <div class="float-left">
                    <h6 class="font-weight-medium mb-0 text-balck">Daily Cost</h6>
                </div>
                <div class="float-right">
                    <h6 class="font-weight-medium mb-0 text-black">₹${(data[0].daily[0]["Quarterly Basis / Day"]).toFixed(2)}</h6>
                </div>
            </div>`;
    if (data[0].monthly > 0) card.empty(), card.append(i, i2, i3), Show_Cost_Card();
    else Show_Cost_Card(false);
}



export {
    addList,
    input_list,
    input_unit,
    input_slab,
    Show_List,
    Show_Cost_Card,
    Cost_Card,
    Init
}
