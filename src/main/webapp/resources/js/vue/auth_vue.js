"user strict"
var auth_vue = auth_vue || {}
auth_vue ={
    join_head:()=>{
        return '<head>'+
        '    <meta charset="utf-8">'+
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '    <meta name="description" content="">'+
        '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
        '    <meta name="generator" content="Jekyll v3.8.5">'+
        '    <title>Checkout example · Bootstrap</title>'+
        '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
        '    <!-- Bootstrap core CSS -->'+
        '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
        '    <style>'+
        '      .bd-placeholder-img {'+
        '        font-size: 1.125rem;'+
        '        text-anchor: middle;'+
        '        -webkit-user-select: none;'+
        '        -moz-user-select: none;'+
        '        -ms-user-select: none;'+
        '        user-select: none;'+
        '      }'+
        '      @media (min-width: 768px) {'+
        '        .bd-placeholder-img-lg {'+
        '          font-size: 3.5rem;'+
        '        }'+
        '      }'+
        '    </style>'+
        '    <!-- Custom styles for this template -->'+
        '    <link href="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
        '  </head>'
    },
    join_body: ()=>{
        return '<div class="container" >'+
        '  <div class="py-5 text-center">'+
        '    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">'+
        '    <h2>Checkout form</h2>'+
        '  </div>'+
        '  <div class="row">'+
        '    <div class="col-md-4 order-md-2 mb-4">'+
        '      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
        '        <span class="text-muted">Your cart</span>'+
        '        <span class="badge badge-secondary badge-pill">3</span>'+
        '      </h4>'+
        '      <ul class="list-group mb-3">'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Product name</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$12</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Second product</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$8</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Third item</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between bg-light">'+
        '          <div class="text-success">'+
        '            <h6 class="my-0">Promo code</h6>'+
        '            <small>EXAMPLECODE</small>'+
        '          </div>'+
        '          <span class="text-success">-$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between">'+
        '          <span>Total (USD)</span>'+
        '          <strong>$20</strong>'+
        '        </li>'+
        '      </ul>'+
        '      <form class="card p-2">'+
        '        <div class="input-group">'+
        '          <input type="text" class="form-control" placeholder="Promo code">'+
        '          <div class="input-group-append">'+
        '            <button type="submit" class="btn btn-secondary">Redeem</button>'+
        '          </div>'+
        '        </div>'+
        '      </form>'+
        '    </div>'+
        '    <div class="col-md-8 order-md-1">'+
        '      <h4 class="mb-3">Billing address</h4>'+
        '      <form class="needs-validation" novalidate="">'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="uid">USERID</label>'+
        '            <input type="text" class="form-control" id="uid" placeholder="" value="" required="">'+
        '            <div class="check_font" id="uid">'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="id_check">ID 중복체크</label>'+
        '            <input type="text" class="form-control" id="dupl_check" placeholder="" value="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Valid last name is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="address2">패스워드<span class="text-muted">(Optional)</span></label>'+
        '          <input type="text" class="form-control" id="upw" placeholder="Apartment or suite">'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="uname">Username</label>'+
        '          <div class="input-group">'+
        '            <div class="input-group-prepend">'+
        '              <span class="input-group-text">@</span>'+
        '            </div>'+
        '            <input type="text" class="form-control" id="uname" placeholder="uname" required="">'+
        '            <div class="invalid-feedback" style="width: 100%;">'+
        '              Your username is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="email">Email <span class="text-muted">(Optional)</span></label>'+
        '          <input type="email" class="form-control" id="email" placeholder="you@example.com">'+
        '          <div class="invalid-feedback">'+
        '            Please enter a valid email address for shipping updates.'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="address">Address</label>'+
        '          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'+
        '          <div class="invalid-feedback">'+
        '            Please enter your shipping address.'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-5 mb-3">'+
        '            <label for="country">Country</label>'+
        '            <select class="custom-select d-block w-100" id="country" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>United States</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please select a valid country.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-4 mb-3">'+
        '            <label for="state">State</label>'+
        '            <select class="custom-select d-block w-100" id="state" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>California</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please provide a valid state.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="zip">Zip</label>'+
        '            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Zip code required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="same-address">'+
        '          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
        '        </div>'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="save-info">'+
        '          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <h4 class="mb-3">Payment</h4>'+
        '       <div class="d-block my-3">'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
        '            <label class="custom-control-label" for="credit">Credit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="debit">Debit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="paypal">PayPal</label>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-name">Name on card</label>'+
        '            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
        '            <small class="text-muted">Full name as displayed on card</small>'+
        '            <div class="invalid-feedback">'+
        '              Name on card is required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-number">Credit card number</label>'+
        '            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Credit card number is required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-expiration">Expiration</label>'+
        '            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Expiration date required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-cvv">CVV</label>'+
        '            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Security code required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <div id="btn_join">'+
        '        </div>'+
        '      </form>'+
        '    </div>'+
        '  </div>'+
        '  <footer class="my-5 pt-5 text-muted text-center text-small">'+
        '    <p class="mb-1">© 2017-2019 Company Name</p>'+
        '    <ul class="list-inline">'+
        '      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
        '      <li class="list-inline-item"><a href="#">Terms</a></li>'+
        '      <li class="list-inline-item"><a href="#">Support</a></li>'+
        '    </ul>'+
        '  </footer>'+
        '</div>'
    },
    login_head: x=>{
        return '<head>'+
        '  <meta charset="UTF-8" />'+
        '  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '  <title>Document</title>'+
        '  '+
        '  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
        '   <meta charset="utf-8">'+
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '    <meta name="description" content="">'+
        '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
        '    <meta name="generator" content="Jekyll v3.8.5">'+
        '    <title>Signin Template · Bootstrap</title>'+
        '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
        '    <style>'+
        '      .bd-placeholder-img {'+
        '        font-size: 1.125rem;'+
        '        text-anchor: middle;'+
        '        -webkit-user-select: none;'+
        '        -moz-user-select: none;'+
        '        -ms-user-select: none;'+
        '        user-select: none;'+
        '      }'+
        '      @media (min-width: 768px) {'+
        '        .bd-placeholder-img-lg {'+
        '          font-size: 3.5rem;'+
        '        }'+
        '      }'+
        '    </style>'+
        '    <!-- Custom styles for this template -->'+
        '    <link href="'+x.css+'/signin.css" rel="stylesheet">'+
        '</head>'
    },
    login_body: x=>{
        return'<body class="text-center">'+
        '  <form id="form_join" class="form-signin">'+
        '    <div class="form-Checkout">'+
        '    <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
        '    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>'+
        '    <label for="userid" class="sr-only">userid</label>'+
        '    <input type="text" id="uid" class="form-control" placeholder="ID" required="" autofocus="">'+
        '    <label for="password" class="sr-only">Password</label>'+
        '    <input type="password" id="upw" class="form-control" placeholder="Password" required="">'+
        '    <div class="checkbox mb-3">'+
        '      <label>'+
        '        <a id="a_go_join" href="#">GO JOIN</a>'+
        '      </label>'+
        '    </div>'+
        '    <div id ="btn_login"></div>'+
        '    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
        '  </form>'+
        '</body>'
    }
};