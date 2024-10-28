(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron p-3 p-md-2 text-white rounded bg-dark\">\n    <div class=\"col-md-12 px-0\">\n        <h3 class=\"display-4 font-italic\">Welcome to admin dasboard</h3>\n        <p class=\"lead my-3\">Admin can manage user and product details.</p>\n        <!-- <p class=\"lead mb-0\"><a href=\"#\" class=\"text-white font-weight-bold\">Continue reading...</a></p> -->\n    </div>\n</div>\n\n<div class=\"row mb-2\">\n    <div class=\"col-md-6\" (click)=\"userDashboard()\">\n        <div class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\n            <div class=\"col p-4 d-flex flex-column position-static\">\n                <strong class=\"d-inline-block mb-2 text-primary\">User</strong>\n                <h3 class=\"mb-0\">Manage User</h3>\n                <div class=\"progressbar-div\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{'width.%': admin_user}\"\n                            aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">Admin: {{admin_user}}</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{'width.%': seller_user}\"\n                            aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">Seller: {{seller_user}}</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" [ngStyle]=\"{'width.%': buyer_user}\"\n                            aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">Buyer: {{buyer_user}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-auto d-none d-lg-block\">\n                <svg class=\"bd-placeholder-img\" width=\"200\" height=\"220\" xmlns=\"http://www.w3.org/2000/svg\"\n                    preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                    <title>Manage User</title>\n                    <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"30%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">\n                        Tatal User: {{total_user}}\n                    </text>\n                </svg>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\" (click)=\"productDashboard()\">\n        <div class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\n            <div class=\"col p-4 d-flex flex-column position-static\">\n                <strong class=\"d-inline-block mb-2 text-success\">Products</strong>\n                <h3 class=\"mb-0\">Manage Products</h3>\n                <!-- <div class=\"mb-1 text-muted\">Last Product Update: <strong> Nov 11</strong></div> -->\n                <div class=\"progressbar-div\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"publish_product\"\n                            aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">Published: {{publish_product}}</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" [ngStyle]=\"{'width.%': inactive_product}\"\n                            aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">Inactive: {{inactive_product}}</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{'width.%': draft_product}\"\n                            aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">Draft: {{draft_product}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-auto d-none d-lg-block\">\n                <svg class=\"bd-placeholder-img\" width=\"200\" height=\"220\" xmlns=\"http://www.w3.org/2000/svg\"\n                    preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                    <title>Manage Products</title>\n                    <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"10%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">\n                        Total Products: {{total_product}}\n                    </text>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-login/admin-login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-login/admin-login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n    <h3>Admin Login - Angular 8 Template Driven Form With Validation</h3>\n    <form name=\"form\" #tf=\"ngForm\" (ngSubmit)=\"tf.form.valid && onSubmitSignIn()\" novalidate>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"userEmail\" [(ngModel)]=\"signInFormValue.userEmail\"\n                #userEmail=\"ngModel\" [ngClass]=\"{ 'is-invalid': tf.submitted && userEmail.invalid }\" required email />\n            <div *ngIf=\"tf.submitted && userEmail.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"userEmail.errors.required\">First Name is required</div>\n                <div *ngIf=\"userEmail.errors.email\">Email must be a valid email address</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"userPassword\" [(ngModel)]=\"signInFormValue.userPassword\"\n                #userPassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': tf.submitted && userPassword.invalid }\" required\n                minlength=\"5\" togglePassword />\n            <div *ngIf=\"tf.submitted && userPassword.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"userPassword.errors.required || userPassword.errors.minlength\">Password must be at least 8\n                    characters </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\">Login</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-crud/user-crud.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-crud/user-crud.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-md-10\">\n        <strong>All User List</strong>\n    </div>\n    <div class=\"col-md-2\"><button type=\"button\" class=\"btn btn-dark float-right\" (click)=\"addUserPopup()\" data-toggle=\"modal\"\n            data-target=\"#addEditUserModal\">Add\n            New User</button></div>\n</div>\n<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Mob</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">DOB</th>\n            <th scope=\"col\">City</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user_data of all_user_data; let i = index\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{user_data.name}}</td>\n            <td>{{user_data.mobNumber}}</td>\n            <td>{{user_data.email}}</td>\n            <td>{{user_data.dob}}</td>\n            <td>{{user_data.address.city}}</td>\n            <td>{{user_data.role}}</td>\n            <td>\n                <span class=\"sim-pointer\" (click)=\"editUserPopup(user_data.id)\" data-toggle=\"modal\" data-target=\"#addEditUserModal\"><i\n                        class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span>\n                &nbsp;&nbsp;&nbsp;\n                <span class=\"sim-pointer\" (click)=\"deleteUser(user_data.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<!-- Modal for add and edit user  -->\n<div class=\"modal fade\" id=\"addEditUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addEditUserTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{popup_header}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-10 offset-md-1\">\n                        <form [formGroup]=\"addEditUserForm\">\n                            <div class=\"form-group\">\n                                <label>Name</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':addEditUser && rf.name.errors}\" />\n                                <div *ngIf=\"addEditUser && rf.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.name.errors.required\">Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Mobile Number</label>\n                                <input type=\"tel\" class=\"form-control\" formControlName=\"mobNumber\" [ngClass]=\"{'is-invalid':addEditUser && rf.mobNumber.errors}\"\n                                    numberOnly />\n                                <div *ngIf=\"addEditUser && rf.mobNumber.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.mobNumber.errors.required\">Mobile Number is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Enter Your Age</label>\n                                <input type=\"number\" class=\"form-control\" formControlName=\"age\" [ngClass]=\"{'is-invalid':addEditUser && rf.age.errors}\" />\n                                <div *ngIf=\"addEditUser && rf.age.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.age.errors.required\">Age is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label>ENter Your DOB</label>\n                                <input type=\"date\" class=\"form-control\" formControlName=\"dob\" [ngClass]=\"{'is-invalid':addEditUser && rf.dob.errors}\" />\n                                <div *ngIf=\"addEditUser && rf.dob.errors\" class=\"invalid-feedback\" [ngClass]=\"{'is-invalid':addEditUser && rf.dob.errors}\">\n                                    <div *ngIf=\"rf.dob.errors.required\">Date Of Birth is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label for=\"inputEmail4\">Email</label>\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\n                                        [ngClass]=\"{'is-invalid':addEditUser && rf.email.errors}\">\n                                    <div *ngIf=\"addEditUser && rf.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"rf.email.errors.email\">Enter valid email</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-6\">\n                                    <label for=\"inputPassword4\">Password</label>\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                                        [ngClass]=\"{'is-invalid':addEditUser && rf.password.errors}\">\n                                    <div *ngIf=\"addEditUser && rf.password.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.password.errors.required\">Password is required</div>\n                                        <div *ngIf=\"rf.password.errors.minlength\">Name must be at least 6 characters</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputAddress\">Address</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"1234 Main St\" formControlName=\"addLine1\"\n                                    [ngClass]=\"{'is-invalid':addEditUser && rf.addLine1.errors}\">\n                                <div *ngIf=\"addEditUser && rf.addLine1.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.addLine1.errors.required\">Addressline1 is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"inputAddress2\">Address 2</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, studio, or floor\"\n                                    formControlName=\"addLine2\">\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label for=\"inputCity\">City</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"city\" [ngClass]=\"{'is-invalid':addEditUser && rf.city.errors}\">\n                                    <div *ngIf=\"addEditUser && rf.city.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.city.errors.required\">City is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                    <label for=\"inputState\">State</label>\n                                    <select id=\"inputState\" class=\"form-control\" formControlName=\"state\" [ngClass]=\"{'is-invalid':addEditUser && rf.state.errors}\">\n                                        <option selected>Choose...</option>\n                                        <option>...</option>\n                                    </select>\n                                    <div *ngIf=\"addEditUser && rf.state.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.state.errors.required\">Select one option</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"inputZip\">Zip</label>\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" [ngClass]=\"{'is-invalid':addEditUser && rf.zipCode.errors}\">\n                                    <div *ngIf=\"addEditUser && rf.zipCode.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.zipCode.errors.required\">Zipcode is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlSelect2\">Language You Know</label>\n                                <select multiple class=\"form-control\" formControlName=\"language\" [ngClass]=\"{'is-invalid':addEditUser && rf.language.errors}\">\n                                    <option>English</option>\n                                    <option>Hindi</option>\n                                    <option>Oriya/Odiya</option>\n                                    <option>Bengali</option>\n                                    <option>Other</option>\n                                </select>\n                                <div *ngIf=\"addEditUser && rf.language.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.language.errors.required\">Select atleast one language</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlSelect2\">Gender</label><br>\n                                <div class=\"form-check form-check-inline\">\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Male\"\n                                        [ngClass]=\"{'is-invalid':addEditUser && rf.gender.errors}\">\n                                    <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n                                </div>\n                                <div class=\"form-check form-check-inline\">\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Female\"\n                                        [ngClass]=\"{'is-invalid':addEditUser && rf.gender.errors}\">\n                                    <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n                                </div>\n                                <div class=\"form-check form-check-inline\">\n                                    <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Other\"\n                                        disabled [ngClass]=\"{'is-invalid':addEditUser && rf.gender.errors}\">\n                                    <label class=\"form-check-label\" for=\"inlineRadio3\">Other (disabled)</label>\n                                </div>\n                                <!-- <div *ngIf=\"addEditUser && rf.gender.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.gender.errors.required\">Select gender</div>\n                              </div> -->\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlTextarea1\">Something About You</label>\n                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"aboutYou\" [ngClass]=\"{'is-invalid':addEditUser && rf.aboutYou.errors}\"></textarea>\n                                <div *ngIf=\"addEditUser && rf.aboutYou.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.aboutYou.errors.required\">Write something about you</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlFile1\">Upload Your Photo</label>\n                                <span *ngIf=\"edit_user\"><span>Uplload image</span><br>{{upload_file_name}} <span> <a\n                                            href=\"\">Preview</a></span></span>\n                                <input type=\"file\" class=\"form-control-file\" formControlName=\"uploadPhoto\" [ngClass]=\"{'is-invalid':addEditUser && rf.uploadPhoto.errors}\">\n                                <div *ngIf=\"addEditUser && rf.uploadPhoto.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.uploadPhoto.errors.required\">Please upload file</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"roleSelect\">Chose the rule</label>\n                                <select class=\"form-control\" formControlName=\"role\" [ngClass]=\"{'is-invalid':addEditUser && rf.role.errors}\">\n                                    <option value=\"admin\">admin</option>\n                                    <option value=\"seller\">sheller</option>\n                                    <option value=\"buyer\">buyer</option>\n                                </select>\n                                <div *ngIf=\"addEditUser && rf.role.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.role.errors.required\">Select one option</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"agreetc\" [ngClass]=\"{'is-invalid':addEditUser && rf.agreetc.errors}\"\n                                        true>\n                                    <label class=\"form-check-label\" for=\"gridCheck\">\n                                        Agree our term and condition\n                                    </label>\n                                    <div *ngIf=\"addEditUser && rf.agreetc.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"rf.agreetc.errors.required\">Accept term and cpndition</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary\" (click)=\"addUser()\" *ngIf=\"add_user\">Register</button>\n                                <button class=\"btn btn-primary\" (click)=\"updateUser()\" *ngIf=\"edit_user\">Update</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\" [ngStyle]=\"{'min-height.px': footerMaxHeight}\">\n    <router-outlet></router-outlet>\n</main>\n<hr class=\"featurette-divider mt-3\">\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n        <h1>Love to Hear From You</h1>\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cumque voluptates vitae qui rem nobis blanditiis, odit quos magni, totam nesciunt, debitis ea facilis voluptatem sint optio. Soluta adipisci officia dicta commodi minus, natus molestiae placeat labore! Quod culpa natus sint odit minima. Maiores sunt repellat ut a pariatur aspernatur.\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.5814439776!2d-122.32199106332915!3d37.40247131407771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1567518063798!5m2!1sen!2sin\" width=\"100%\" height=\"250\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n            </div>\n            <div class=\"col-md-3\">\n                <h3>Postal Address</h3>\n                <p>\n                    Address Line 1\n                    Address Line 2 <br>\n                    City\n                    State\n                    Country <br>\n                    Pin code- 560037\n                </p>\n                <h3>Email</h3>\n                <p><strong>Office:</strong>office@gmail.com</p>\n                <p><strong>Personal:</strong>personal@gmail.com</p>\n                <h3>Phone</h3>\n                <p><strong>Office:</strong>+91-1234567890</p>\n                <p><strong>Work:</strong>+91-1234567891</p>\n            </div>\n        </div>\n        \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"#\">Buyer</a></li>\n        <li class=\"breadcrumb-item\"><a routerLink=\"/buyer-dashboard\">Products</a></li>\n    </ol>\n</nav>\n<div class=\"row\">\n    <div class=\"col-sm-4 product\" *ngFor=\"let product of all_products;\">\n        <div class=\"card\">\n            <img src=\"{{product.uploadPhoto}}\" class=\"card-img-top\" alt=\"{{product.name}}\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{product.name}}</h4>\n                <p><span class=\"float-left\"><strong>MRP</strong>: <del>{{product.mrp}}</del></span> <span class=\"float-right\"><strong>DP</strong>:\n                        {{product.dp}}</span></p>\n                <br>\n                <p class=\"card-text product-desc\">{{product.productDesc}}</p>\n                <a class=\"btn btn-primary float-left\" (click)=\"addToCart()\">Add to Cart</a>\n                <a class=\"btn btn-primary float-right\" (click)=\"buyProduct(product.id)\">Buy Now</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/buyer/checkout/checkout.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/buyer/checkout/checkout.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>You clicked on product id: {{single_product_id}}</h3> -->\n<br>\n<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a>Buyer</a></li>\n        <li class=\"breadcrumb-item\"><a>Checkout</a></li>\n    </ol>\n</nav>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Product Detail\n            </div>\n            <div class=\"card-body product-detail\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <img src=\"{{individual_product?.uploadPhoto}}\" class=\"card-img-top\" alt=\"{{individual_product?.name}}\">\n                    </div>\n                    <div class=\"col-md-8\">\n                        <h4 class=\"card-title\">{{individual_product?.name}}</h4>\n                        <br>\n                        <p class=\"card-text product-desc\">{{individual_product?.productDesc}}</p>\n                        <p><span class=\"float-left\"><strong>MRP</strong>: <del>{{individual_product?.mrp}}</del></span>\n                            <span class=\"float-right\"><strong>DP</strong>:\n                                {{individual_product?.dp}}</span></p>\n                    </div>\n                </div>\n                <!-- <h5 class=\"card-title\">Special title treatment</h5>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Address Detail\n            </div>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{user_address?.name}}</h5>\n                <p class=\"card-text\">{{user_address?.addLine1}},{{user_address?.addLine2}}</p>\n                <p class=\"card-text\">{{user_address?.city}},{{user_address?.state}}</p>\n                <p class=\"card-text\">Postal Code: {{user_address?.zipCode}}</p>\n                <p class=\"card-text\">Contact Number: {{user_contact_no}}</p>\n                <a class=\"btn btn-primary\" (click)=\"placeOrder()\">Deliver Here</a>\n                <div class=\"alert alert-info\" role=\"alert\">\n                    <strong>Note: </strong>\n                    We are not giving mutiple address addition, If you want to deliver in\n                    diffrent addres for now chage the address in\n                    <span routerLink=\"/my-profile\" class=\"text-info sim-pointer\">My profile</span>\n                    section.\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/seller/seller-dashboard/seller-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/seller/seller-dashboard/seller-dashboard.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron p-4 p-md-4 text-white rounded bg-dark\">\n    <div class=\"col-md-12 px-0\">\n        <h3 class=\"display-4 font-italic\">Welcome to seller dasboard</h3>\n        <p class=\"lead my-3\">Seller can manage product and order details.</p>\n        <!-- <p class=\"lead mb-0\"><a href=\"#\" class=\"text-white font-weight-bold\">Continue reading...</a></p> -->\n    </div>\n</div>\n\n<div class=\"row mb-2\">\n    <div class=\"col-md-6\" (click)=\"sellerOrderDashboard()\">\n        <div class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\n            <div class=\"col p-4 d-flex flex-column position-static\">\n                <strong class=\"d-inline-block mb-2 text-primary\">Order</strong>\n                <h3 class=\"mb-0\">Manage orders</h3>\n                <div class=\"mb-1 text-muted\">Lats order Date: <strong>{{last_order_date}}</strong></div>\n                <div class=\"progressbar-div\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">Pending</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">Processed</div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\"\n                            aria-valuemin=\"0\" aria-valuemax=\"100\">Reajected</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-auto d-none d-lg-block\">\n                <svg class=\"bd-placeholder-img\" width=\"200\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\"\n                    preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                    <title>Manage orders</title>\n                    <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"30%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">\n                        Tatal Orders: {{total_order}}\n                    </text>\n                </svg>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\" (click)=\"sellerProductDashboard()\">\n        <div class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\n            <div class=\"col p-4 d-flex flex-column position-static\">\n                <strong class=\"d-inline-block mb-2 text-success\">Products</strong>\n                <h3 class=\"mb-0\">Manage Products</h3>\n                <!-- <div class=\"mb-1 text-muted\">Last Product Update: <strong> Nov 11</strong></div> -->\n                <div class=\"progressbar-div\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"publish_product\"\n                            aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">Published: {{publish_product}}</div>\n                    </div>\n                    <br>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" [ngStyle]=\"{'width.%': inactive_product}\"\n                            aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">Inactive: {{inactive_product}}</div>\n                    </div>\n                    <br>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{'width.%': draft_product}\"\n                            aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">Draft: {{draft_product}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-auto d-none d-lg-block\">\n                <svg class=\"bd-placeholder-img\" width=\"200\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\"\n                    preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\" aria-label=\"Placeholder: Thumbnail\">\n                    <title>Manage Products</title>\n                    <rect width=\"100%\" height=\"100%\" fill=\"#55595c\" /><text x=\"10%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">\n                        Total Products: {{total_product}}\n                    </text>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/signin-signup/signin-signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/signin-signup/signin-signup.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\" *ngIf=\"regForm\">\n                <h3>Registeration - Angular 8 Reactive Form With Validation</h3>\n                <form [formGroup]=\"signUpform\" (ngSubmit)=\"onSubmitSignUp()\">\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.name.errors}\" />\n                        <div *ngIf=\"signUpsubmitted && rf.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Mobile Number</label>\n                        <input type=\"tel\" class=\"form-control\" formControlName=\"mobNumber\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.mobNumber.errors}\"\n                            numberOnly />\n                        <div *ngIf=\"signUpsubmitted && rf.mobNumber.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.mobNumber.errors.required\">Mobile Number is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Enter Your Age</label>\n                        <input type=\"number\" class=\"form-control\" formControlName=\"age\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.age.errors}\" />\n                        <div *ngIf=\"signUpsubmitted && rf.age.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.age.errors.required\">Age is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>ENter Your DOB</label>\n                        <input type=\"date\" class=\"form-control\" formControlName=\"dob\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.dob.errors}\" />\n                        <div *ngIf=\"signUpsubmitted && rf.dob.errors\" class=\"invalid-feedback\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.dob.errors}\">\n                            <div *ngIf=\"rf.dob.errors.required\">Date Of Birth is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputEmail4\">Email</label>\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\n                                [ngClass]=\"{'is-invalid':signUpsubmitted && rf.email.errors}\">\n                            <div *ngIf=\"signUpsubmitted && rf.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"rf.email.errors.email\">Enter valid email</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputPassword4\">Password</label>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                                [ngClass]=\"{'is-invalid':signUpsubmitted && rf.password.errors}\">\n                            <div *ngIf=\"signUpsubmitted && rf.password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.password.errors.required\">Password is required</div>\n                                <div *ngIf=\"rf.password.errors.minlength\">Name must be at least 6 characters</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputAddress\">Address</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"1234 Main St\" formControlName=\"addLine1\"\n                            [ngClass]=\"{'is-invalid':signUpsubmitted && rf.addLine1.errors}\">\n                        <div *ngIf=\"signUpsubmitted && rf.addLine1.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.addLine1.errors.required\">Addressline1 is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputAddress2\">Address 2</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, studio, or floor\"\n                            formControlName=\"addLine2\">\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputCity\">City</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"city\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.city.errors}\">\n                            <div *ngIf=\"signUpsubmitted && rf.city.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.city.errors.required\">City is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"inputState\">State</label>\n                            <select id=\"inputState\" class=\"form-control\" formControlName=\"state\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.state.errors}\">\n                                <option selected>Choose...</option>\n                                <option>...</option>\n                            </select>\n                            <div *ngIf=\"signUpsubmitted && rf.state.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.state.errors.required\">Select one option</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <label for=\"inputZip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.zipCode.errors}\">\n                            <div *ngIf=\"signUpsubmitted && rf.zipCode.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.zipCode.errors.required\">Zipcode is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Language You Know</label>\n                        <select multiple class=\"form-control\" formControlName=\"language\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.language.errors}\">\n                            <option>English</option>\n                            <option>Hindi</option>\n                            <option>Oriya/Odiya</option>\n                            <option>Bengali</option>\n                            <option>Other</option>\n                        </select>\n                        <div *ngIf=\"signUpsubmitted && rf.language.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.language.errors.required\">Select atleast one language</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Gender</label><br>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Male\"\n                                [ngClass]=\"{'is-invalid':signUpsubmitted && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Female\"\n                                [ngClass]=\"{'is-invalid':signUpsubmitted && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Other\"\n                                disabled [ngClass]=\"{'is-invalid':signUpsubmitted && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio3\">Other (disabled)</label>\n                        </div>\n                        <!-- <div *ngIf=\"signUpsubmitted && rf.gender.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"rf.gender.errors.required\">Select gender</div>\n            </div> -->\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Something About You</label>\n                        <textarea class=\"form-control\" rows=\"3\" formControlName=\"aboutYou\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.aboutYou.errors}\"></textarea>\n                        <div *ngIf=\"signUpsubmitted && rf.aboutYou.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.aboutYou.errors.required\">Write something about you</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlFile1\">Upload Your Photo</label>\n                        <input type=\"file\" class=\"form-control-file\" formControlName=\"uploadPhoto\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.uploadPhoto.errors}\">\n                        <div *ngIf=\"signUpsubmitted && rf.uploadPhoto.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.uploadPhoto.errors.required\">Please upload file</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"form-check\">\n                            <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"agreetc\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.agreetc.errors}\">\n                            <label class=\"form-check-label\" for=\"gridCheck\">\n                                Agree our term and condition\n                            </label>\n                            <div *ngIf=\"signUpsubmitted && rf.agreetc.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.agreetc.errors.required\">Accept term and cpndition</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"roleSelect\">What You Want To Do</label>\n                        <select class=\"form-control\" formControlName=\"role\" [ngClass]=\"{'is-invalid':signUpsubmitted && rf.role.errors}\">\n                            <option value=\"seller\">Shell</option>\n                            <option value=\"buyer\">Buy</option>\n                        </select>\n                        <div *ngIf=\"signUpsubmitted && rf.role.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.role.errors.required\">Select one option</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Register</button>\n                    </div>\n                </form>\n                <p routerLink=\"/sign-in\" class=\"sim-pointer\">Already have an account click here for login</p>\n            </div>\n            <div class=\"col-md-6 offset-md-3\" *ngIf=\"!regForm\">\n                <h3>Login - Angular 8 Template Driven Form With Validation</h3>\n                <form name=\"form\" #tf=\"ngForm\" (ngSubmit)=\"tf.form.valid && onSubmitSignIn()\" novalidate>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"email\" class=\"form-control\" name=\"userEmail\" [(ngModel)]=\"signInFormValue.userEmail\"\n                            #userEmail=\"ngModel\" [ngClass]=\"{ 'is-invalid': tf.submitted && userEmail.invalid }\"\n                            required email />\n                        <div *ngIf=\"tf.submitted && userEmail.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userEmail.errors.required\">First Name is required</div>\n                            <div *ngIf=\"userEmail.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"userPassword\" [(ngModel)]=\"signInFormValue.userPassword\"\n                            #userPassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': tf.submitted && userPassword.invalid }\"\n                            required minlength=\"5\" togglePassword />\n                        <div *ngIf=\"tf.submitted && userPassword.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userPassword.errors.required || userPassword.errors.minlength\">Password must be\n                                at least 6 characters\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Login</button>\n                    </div>\n                </form>\n                <p routerLink=\"/sign-up\" class=\"sim-pointer\">Don't have an account click here for register</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <!-- <h1 class=\"intro\">{{ 'intro' | translate }}</h1> -->\n    <h1 class=\"intro\">{{'proj_name' | translate}}</h1>\n\n<!-- <h1>Another way: <span translate>intro</span></h1> -->\n\n<h3 class=\"short_desc\"><span translate>project_short_desc</span></h3>\n\n<p><a href=\"https://docs.google.com/document/d/1NdB3SdAbKSFcPooap-ddpHdQQxBDvAieH2bPF4NCLMU/edit?usp=sharing\" target=\"_blank\" class=\"btn btn-primary\">{{'view_detail_doc_btn' | translate}}</a>\n</p>\n<p>\n    <a href=\"https://github.com/srikrushnap\" target=\"_blank\" class=\"btn btn-primary\">Github</a>\n    <a href=\"https://stackoverflow.com/users/5852550/srikrushna?tab=profile\" target=\"_blank\" class=\"btn btn-success\">Stackoverflow</a>\n    <a href=\"https://github.com/srikrushnap\" target=\"_blank\" class=\"btn btn-primary\">Linkedin</a>\n</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-crud/product-crud.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-crud/product-crud.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-md-10\">\n        <strong>All Product List</strong>\n    </div>\n    <div class=\"col-md-2\">\n        <button type=\"button\" class=\"btn btn-dark float-right\" (click)=\"addProductPopup()\" data-toggle=\"modal\"\n            data-target=\"#addEditProductModal\">\n            Add New Product\n        </button>\n    </div>\n</div>\n<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Product Name</th>\n            <!-- <th scope=\"col\">Display Image</th> -->\n            <th scope=\"col\">MRP</th>\n            <th scope=\"col\">DP</th>\n            <!-- <th scope=\"col\">Description</th> -->\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product_data of all_product_data; let i = index\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{product_data.name}}</td>\n            <!-- <td>{{product_data.uploadPhoto}}</td> -->\n            <td>{{product_data.mrp}}</td>\n            <td>{{product_data.dp}}</td>\n            <!-- <td>{{product_data.productDesc}}</td> -->\n            <td>{{product_data.status}}</td>\n            <td>\n                <span class=\"sim-pointer\" (click)=\"editProductPopup(product_data.id)\" data-toggle=\"modal\" data-target=\"#addEditProductModal\"><i\n                        class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span>\n                &nbsp;&nbsp;&nbsp;\n                <span class=\"sim-pointer\" (click)=\"deleteProduct(product_data.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<!-- Modal for add and edit user  -->\n<div class=\"modal fade\" id=\"addEditProductModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addEditUserTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{popup_header}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-10 offset-md-1\">\n                        <form [formGroup]=\"addEditProductForm\">\n                            <div class=\"form-group\">\n                                <label for=\"productName\">Product Name</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':addEditProduct && rf.name.errors}\" />\n                                <div *ngIf=\"addEditProduct && rf.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.name.errors.required\">Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"productImage\">Product Image URL</label>\n                                <input type=\"url\" class=\"form-control\" formControlName=\"uploadPhoto\" [ngClass]=\"{'is-invalid':addEditProduct && rf.uploadPhoto.errors}\">\n                                <div *ngIf=\"addEditProduct && rf.uploadPhoto.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.uploadPhoto.errors.required\">Please upload file</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"productDescription\">Description</label>\n                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"productDesc\" [ngClass]=\"{'is-invalid':addEditProduct && rf.productDesc.errors}\"></textarea>\n                                <div *ngIf=\"addEditProduct && rf.productDesc.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.productDesc.errors.required\">Write something about product</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"productMRP\">MRP</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"mrp\" [ngClass]=\"{'is-invalid':addEditProduct && rf.mrp.errors}\" />\n                                <div *ngIf=\"addEditProduct && rf.mrp.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.mrp.errors.required\">MRP is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"productDP\">DP</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"dp\" [ngClass]=\"{'is-invalid':addEditProduct && rf.dp.errors}\" />\n                                <div *ngIf=\"addEditProduct && rf.dp.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.dp.errors.required\">DP is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"productStatus\">Status</label>\n                                <select class=\"form-control\" formControlName=\"status\" [ngClass]=\"{'is-invalid':addEditProduct && rf.status.errors}\">\n                                    <option value=\"draft\">Draft</option>\n                                    <option value=\"publish\">Publish</option>\n                                    <option value=\"inactive\">Inactive</option>\n                                </select>\n                                <div *ngIf=\"addEditProduct && rf.status.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"rf.status.errors.required\">Select one option</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary\" (click)=\"addNewProduct()\" *ngIf=\"add_product\">Add New</button>\n                                <button class=\"btn btn-primary\" (click)=\"updateProduct()\" *ngIf=\"edit_product\">Update</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/footer/footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/footer/footer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer class=\"container\">\n    <p class=\"float-right\"><a>{{\"footer.tc\" | translate}}</a></p>\n    <p>&copy; {{\"footer.year\" | translate}} - {{\"footer.d&d_by\" | translate}} &middot;\n        <a target=\"_bank\" href=\"http://krishna.developerstips.com/\">\n            {{\"footer.my_name\" | translate}}\n        </a>\n    </p>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/header/header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/header/header.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">{{'header.ecommerce' | translate}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{language}}\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" (click)=\"switchLanguage('en')\">{{'header.lang_en' | translate}}</a>\n                    <a class=\"dropdown-item\" (click)=\"switchLanguage('hn')\">{{'header.lang_hn' | translate}}</a>\n                </div>\n            </li>\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">{{'header.home' | translate}} <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">{{'header.service' | translate}}</a>\n            </li> -->\n            <li class=\"nav-item\">\n                <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">\n                    {{'header.about_us' | translate}}\n                </a>\n            </li>\n            \n            <li class=\"nav-item\" *ngIf=\"user_role == 'buyer'\">\n                    <a class=\"nav-link\" routerLink=\"/my-order\">{{'header.order' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"user_role == 'admin'\">\n                    <a class=\"nav-link\" routerLink=\"/all-order\">{{'header.order' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"user_role == 'seller'\">\n                    <a class=\"nav-link\" routerLink=\"/seller/product\">{{'header.product' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"user_role == 'admin'\">\n                    <a class=\"nav-link\" routerLink=\"/admin/product\">{{'header.product' | translate}}</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"user_role == 'admin'\">\n                    <a class=\"nav-link\" routerLink=\"/admin/user\">{{'header.user' | translate}}</a>\n            </li>\n            <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/contact-us\">{{'header.contact_us' | translate}}</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"{{'header.search' | translate}}\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{'header.search' | translate}}</button>\n        </form>\n        <ul class=\"navbar-nav ml-auto\" *ngIf=\"!logged_in\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/sign-in\">{{'header.signin' | translate}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/sign-up\">{{'header.signup' | translate}}</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\" *ngIf=\"logged_in\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link sim-pointer\" routerLink=\"/my-profile\">{{'header.my_profile' | translate}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link sim-pointer\" (click)=\"logOut()\">{{'header.signout' | translate}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n    <div class=\"notfound\">\n        <div class=\"notfound-404\">\n        <h1>404</h1>\n        </div>\n        <h2>We are sorry, Page not found!</h2>\n        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\n        <a (click)=\"cancel()\">Go Back</a>\n    </div>\n</div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-md-1\">\n                <h2 class=\"text-center\">Update User Profile</h2>\n                <form [formGroup]=\"userProfileForm\" (ngSubmit)=\"updateProfile()\">\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{'is-invalid':userProfile && rf.name.errors}\" />\n                        <div *ngIf=\"userProfile && rf.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Mobile Number</label>\n                        <input type=\"tel\" class=\"form-control\" formControlName=\"mobNumber\" [ngClass]=\"{'is-invalid':userProfile && rf.mobNumber.errors}\"\n                            numberOnly />\n                        <div *ngIf=\"userProfile && rf.mobNumber.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.mobNumber.errors.required\">Mobile Number is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Enter Your Age</label>\n                        <input type=\"number\" class=\"form-control\" formControlName=\"age\" [ngClass]=\"{'is-invalid':userProfile && rf.age.errors}\" />\n                        <div *ngIf=\"userProfile && rf.age.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.age.errors.required\">Age is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>ENter Your DOB</label>\n                        <input type=\"date\" class=\"form-control\" formControlName=\"dob\" [ngClass]=\"{'is-invalid':userProfile && rf.dob.errors}\" />\n                        <div *ngIf=\"userProfile && rf.dob.errors\" class=\"invalid-feedback\" [ngClass]=\"{'is-invalid':userProfile && rf.dob.errors}\">\n                            <div *ngIf=\"rf.dob.errors.required\">Date Of Birth is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputEmail4\">Email</label>\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\n                                [ngClass]=\"{'is-invalid':userProfile && rf.email.errors}\">\n                            <div *ngIf=\"userProfile && rf.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"rf.email.errors.email\">Enter valid email</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputPassword4\">Password</label>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                                [ngClass]=\"{'is-invalid':userProfile && rf.password.errors}\">\n                            <div *ngIf=\"userProfile && rf.password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.password.errors.required\">Password is required</div>\n                                <div *ngIf=\"rf.password.errors.minlength\">Name must be at least 6 characters</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputAddress\">Address</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"1234 Main St\" formControlName=\"addLine1\"\n                            [ngClass]=\"{'is-invalid':userProfile && rf.addLine1.errors}\">\n                        <div *ngIf=\"userProfile && rf.addLine1.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.addLine1.errors.required\">Addressline1 is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputAddress2\">Address 2</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, studio, or floor\"\n                            formControlName=\"addLine2\">\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputCity\">City</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"city\" [ngClass]=\"{'is-invalid':userProfile && rf.city.errors}\">\n                            <div *ngIf=\"userProfile && rf.city.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.city.errors.required\">City is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"inputState\">State</label>\n                            <select id=\"inputState\" class=\"form-control\" formControlName=\"state\" [ngClass]=\"{'is-invalid':userProfile && rf.state.errors}\">\n                                <option selected>Choose...</option>\n                                <option>...</option>\n                            </select>\n                            <div *ngIf=\"userProfile && rf.state.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.state.errors.required\">Select one option</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <label for=\"inputZip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"zipCode\" [ngClass]=\"{'is-invalid':userProfile && rf.zipCode.errors}\"\n                                numberOnly>\n                            <div *ngIf=\"userProfile && rf.zipCode.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"rf.zipCode.errors.required\">Zipcode is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Gender</label><br>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Male\"\n                                [ngClass]=\"{'is-invalid':userProfile && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Female\"\n                                [ngClass]=\"{'is-invalid':userProfile && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" value=\"Other\"\n                                disabled [ngClass]=\"{'is-invalid':userProfile && rf.gender.errors}\">\n                            <label class=\"form-check-label\" for=\"inlineRadio3\">Other (disabled)</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Something About You</label>\n                        <textarea class=\"form-control\" rows=\"3\" formControlName=\"aboutYou\" [ngClass]=\"{'is-invalid':userProfile && rf.aboutYou.errors}\"></textarea>\n                        <div *ngIf=\"userProfile && rf.aboutYou.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.aboutYou.errors.required\">Write something about you</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlFile1\">Upload Your Photo</label>\n                        <input type=\"file\" class=\"form-control-file\" formControlName=\"uploadPhoto\" [ngClass]=\"{'is-invalid':userProfile && rf.uploadPhoto.errors}\">\n                        <div *ngIf=\"userProfile && rf.uploadPhoto.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"rf.uploadPhoto.errors.required\">Please upload file</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary\">Update Your Profile</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progressbar-div .progress {\n  margin-top: 0.7rem;\n  height: 1.5rem;\n}\n.progressbar-div .progress .progress-bar {\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7QURDSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc2Jhci1kaXZ7XG4gICAgLnByb2dyZXNze1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICBoZWlnaHQ6MS41cmVtO1xuICAgIC5wcm9ncmVzcy1iYXJ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxufSIsIi5wcm9ncmVzc2Jhci1kaXYgLnByb2dyZXNzIHtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbi5wcm9ncmVzc2Jhci1kaXYgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");




var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.total_user = 0;
        this.admin_user = 0;
        this.seller_user = 0;
        this.buyer_user = 0;
        this.total_product = 0;
        this.publish_product = 0;
        this.inactive_product = 0;
        this.draft_product = 0;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.adminUserDashboardData();
        this.adminProductDashboardData();
    };
    AdminDashboardComponent.prototype.userDashboard = function () {
        this.router.navigateByUrl("/admin/user");
    };
    AdminDashboardComponent.prototype.productDashboard = function () {
        this.router.navigateByUrl("/admin/product");
    };
    AdminDashboardComponent.prototype.adminUserDashboardData = function () {
        var _this = this;
        this.adminService.userDashboardData().subscribe(function (data) {
            _this.user_dashboard_data = data;
            for (var user in _this.user_dashboard_data) {
                // console.log(this.user_dashboard_data[status].status);
                if (_this.user_dashboard_data[user].role == 'admin') {
                    ++_this.admin_user;
                }
                else if (_this.user_dashboard_data[user].role == 'seller') {
                    ++_this.seller_user;
                }
                else if (_this.user_dashboard_data[user].role == 'buyer') {
                    ++_this.buyer_user;
                }
                ++_this.total_user;
            }
        }, function (error) {
            console.log("My error", error);
        });
    };
    AdminDashboardComponent.prototype.adminProductDashboardData = function () {
        var _this = this;
        this.adminService.productDashboardData().subscribe(function (data) {
            _this.product_dashboard_data = data;
            console.log(_this.product_dashboard_data);
            for (status in _this.product_dashboard_data) {
                // console.log(this.product_dashboard_data[status].status);
                if (_this.product_dashboard_data[status].status == 'publish') {
                    ++_this.publish_product;
                }
                else if (_this.product_dashboard_data[status].status == 'inactive') {
                    ++_this.inactive_product;
                }
                else if (_this.product_dashboard_data[status].status == 'draft') {
                    ++_this.draft_product;
                }
                ++_this.total_product;
            }
        }, function (error) {
            console.log("My error", error);
        });
    };
    AdminDashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
    ]; };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/login-signup.service */ "./src/app/shared/services/login-signup.service.ts");




var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(router, logsign_service) {
        this.router = router;
        this.logsign_service = logsign_service;
        this.signInFormValue = {};
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onSubmitSignIn = function () {
        var _this = this;
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
        this.logsign_service.adminLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(function (data) {
            _this.user_data = data;
            if (_this.user_data.length == 1) {
                // alert("Validate")
                sessionStorage.setItem("user_session_id", _this.user_data[0].id);
                sessionStorage.setItem("role", _this.user_data[0].role);
                _this.router.navigateByUrl('/admin-dashboard');
            }
            else {
                alert("Invalid");
            }
            console.log(_this.user_data);
        }, function (error) {
            console.log("My error", error);
        });
    };
    AdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_3__["LoginSignupService"] }
    ]; };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.scss */ "./src/app/admin/admin-login/admin-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_3__["LoginSignupService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-crud/user-crud.component */ "./src/app/admin/user-crud/user-crud.component.ts");







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"], _user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_6__["UserCrudComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");




var AdminService = /** @class */ (function () {
    function AdminService(apiService) {
        this.apiService = apiService;
        this.user_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + "/user/";
        this.product_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + "/products/";
        this.all_user = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + "/user";
    }
    AdminService.prototype.userDashboardData = function () {
        return this.apiService.get(this.user_url);
    };
    AdminService.prototype.productDashboardData = function () {
        return this.apiService.get(this.product_url);
    };
    AdminService.prototype.allUser = function () {
        return this.apiService.get(this.all_user);
    };
    AdminService.prototype.addUser = function (user_dto) {
        return this.apiService.post(this.user_url, user_dto);
    };
    //get data of individual user
    AdminService.prototype.singleUser = function (user_id) {
        return this.apiService.get(this.user_url + user_id);
    };
    //update data of individual user
    AdminService.prototype.editUser = function (user_id, user_dto) {
        return this.apiService.put(this.user_url + user_id, user_dto);
    };
    //Delete individual user
    AdminService.prototype.deleteUser = function (user_id) {
        return this.apiService.delete(this.user_url + user_id);
    };
    AdminService.ctorParameters = function () { return [
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/user-crud/user-crud.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-crud/user-crud.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItY3J1ZC91c2VyLWNydWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-crud/user-crud.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-crud/user-crud.component.ts ***!
  \********************************************************/
/*! exports provided: UserCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCrudComponent", function() { return UserCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");





var UserCrudComponent = /** @class */ (function () {
    function UserCrudComponent(formBuilder, router, admin_service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.admin_service = admin_service;
        this.addEditUser = false; //for form validation
        this.add_user = false;
        this.edit_user = false;
        this.signInFormValue = {};
    }
    UserCrudComponent.prototype.ngOnInit = function () {
        this.getAllUser();
        this.addEditUserForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            addLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addLine2: [],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            aboutYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            uploadPhoto: [],
            agreetc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    UserCrudComponent.prototype.getAllUser = function () {
        var _this = this;
        this.admin_service.allUser().subscribe(function (data) {
            _this.all_user_data = data;
            // console.log("getAllUser",this.all_user_data);
        }, function (error) {
            console.log("My error", error);
        });
    };
    Object.defineProperty(UserCrudComponent.prototype, "rf", {
        get: function () { return this.addEditUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    //popup when add
    UserCrudComponent.prototype.addUserPopup = function () {
        this.edit_user = false;
        this.add_user = true;
        this.popup_header = "Add New User";
        this.addEditUserForm.reset();
    };
    UserCrudComponent.prototype.addUser = function () {
        var _this = this;
        this.addEditUser = true;
        if (this.addEditUserForm.invalid) {
            alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value));
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
        // console.log(this.addEditUserForm.value)
        this.user_reg_data = this.addEditUserForm.value;
        this.user_dto = {
            name: this.user_reg_data.name,
            mobNumber: this.user_reg_data.mobNumber,
            age: this.user_reg_data.age,
            dob: this.user_reg_data.dob,
            email: this.user_reg_data.email,
            password: this.user_reg_data.password,
            language: this.user_reg_data.language,
            gender: this.user_reg_data.gender,
            address: {
                id: 0,
                addLine1: this.user_reg_data.addLine1,
                addLine2: this.user_reg_data.addLine2,
                city: this.user_reg_data.city,
                state: this.user_reg_data.state,
                zipCode: this.user_reg_data.zipCode,
            },
            aboutYou: this.user_reg_data.aboutYou,
            uploadPhoto: this.user_reg_data.uploadPhoto,
            agreetc: this.user_reg_data.agreetc,
            role: this.user_reg_data.role
        };
        this.admin_service.addUser(this.user_dto).subscribe(function (data) {
            _this.getAllUser();
            jQuery('#addEditUserModal').modal('toggle');
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    // popup when edit
    UserCrudComponent.prototype.editUserPopup = function (user_id) {
        var _this = this;
        this.edit_user_id = user_id;
        this.edit_user = true;
        this.add_user = false;
        this.popup_header = "Edit User";
        this.admin_service.singleUser(user_id).subscribe(function (data) {
            _this.single_user_data = data;
            _this.upload_file_name = _this.single_user_data.uploadPhoto;
            // console.log("editUserPopup:::", this.single_user_data);
            _this.addEditUserForm.setValue({
                name: _this.single_user_data.name,
                mobNumber: _this.single_user_data.mobNumber,
                age: _this.single_user_data.age,
                dob: _this.single_user_data.dob,
                email: _this.single_user_data.email,
                password: _this.single_user_data.password,
                language: _this.single_user_data.language,
                gender: _this.single_user_data.gender,
                addLine1: _this.single_user_data.address.addLine1,
                addLine2: _this.single_user_data.address.addLine2,
                city: _this.single_user_data.address.city,
                state: _this.single_user_data.address.state,
                zipCode: _this.single_user_data.address.zipCode,
                aboutYou: _this.single_user_data.aboutYou,
                uploadPhoto: '',
                agreetc: _this.single_user_data.agreetc,
                role: _this.single_user_data.role,
            });
            // console.log("Individual User", this.single_user_data);
        }, function (error) {
            console.log("My error", error);
        });
    };
    UserCrudComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.addEditUserForm.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
        // console.log(this.addEditUserForm.value)
        this.user_reg_data = this.addEditUserForm.value;
        this.user_dto = {
            name: this.user_reg_data.name,
            mobNumber: this.user_reg_data.mobNumber,
            age: this.user_reg_data.age,
            dob: this.user_reg_data.dob,
            email: this.user_reg_data.email,
            password: this.user_reg_data.password,
            language: this.user_reg_data.language,
            gender: this.user_reg_data.gender,
            address: {
                id: 0,
                addLine1: this.user_reg_data.addLine1,
                addLine2: this.user_reg_data.addLine2,
                city: this.user_reg_data.city,
                state: this.user_reg_data.state,
                zipCode: this.user_reg_data.zipCode,
            },
            aboutYou: this.user_reg_data.aboutYou,
            uploadPhoto: (this.user_reg_data.uploadPhoto == "" ? this.upload_file_name : this.user_reg_data.uploadPhoto),
            agreetc: this.user_reg_data.agreetc,
            role: this.user_reg_data.role
        };
        this.admin_service.editUser(this.edit_user_id, this.user_dto).subscribe(function (data) {
            _this.getAllUser();
            jQuery('#addEditUserModal').modal('toggle');
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    UserCrudComponent.prototype.deleteUser = function (user_id) {
        var _this = this;
        this.admin_service.deleteUser(user_id).subscribe(function (data) {
            _this.getAllUser();
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    UserCrudComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    UserCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-crud',
            template: __webpack_require__(/*! raw-loader!./user-crud.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-crud/user-crud.component.html"),
            styles: [__webpack_require__(/*! ./user-crud.component.scss */ "./src/app/admin/user-crud/user-crud.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], UserCrudComponent);
    return UserCrudComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_layouts_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/page-not-found-error/page-not-found-error.component */ "./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.ts");
/* harmony import */ var _shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/auth-gaurd.service */ "./src/app/shared/services/auth-gaurd.service.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _customer_seller_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/seller/seller-dashboard/seller-dashboard.component */ "./src/app/customer/seller/seller-dashboard/seller-dashboard.component.ts");
/* harmony import */ var _customer_buyer_buyer_dashboard_buyer_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/buyer/buyer-dashboard/buyer-dashboard.component */ "./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.ts");
/* harmony import */ var _customer_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/signin-signup/signin-signup.component */ "./src/app/customer/signin-signup/signin-signup.component.ts");
/* harmony import */ var _admin_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/user-crud/user-crud.component */ "./src/app/admin/user-crud/user-crud.component.ts");
/* harmony import */ var _product_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-crud/product-crud.component */ "./src/app/product/product-crud/product-crud.component.ts");
/* harmony import */ var _customer_buyer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/buyer/checkout/checkout.component */ "./src/app/customer/buyer/checkout/checkout.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
















var routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "my-profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"] },
    { path: "contact-us", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"] },
    //Path/component you want to access before admin login/signin
    {
        path: '', canActivate: [_shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGuardLogin"]], children: [
            { path: "admin-login", component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"] },
        ]
    },
    //Path/component you want to access after admin login/signin
    {
        path: '', canActivate: [_shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthGaurdService"]], children: [
            { path: "admin-dashboard", component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AdminDashboardComponent"] },
            { path: "admin/user", component: _admin_user_crud_user_crud_component__WEBPACK_IMPORTED_MODULE_11__["UserCrudComponent"] },
            { path: "admin/product", component: _product_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_12__["ProductCrudComponent"] }
        ]
    },
    //Path/component you want to access before customer(seller and buyer) login/signin
    {
        path: '', canActivate: [_shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["SellerBuyerAuthGuardLogin"]], children: [
            { path: "sign-in", component: _customer_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_10__["SigninSignupComponent"] },
            { path: "sign-up", component: _customer_signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_10__["SigninSignupComponent"] },
        ]
    },
    //Path/component you want to access after customer(seller) login/signin
    {
        path: '', canActivate: [_shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["SellerAuthGaurdService"]], children: [
            { path: "seller-dashboard", component: _customer_seller_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["SellerDashboardComponent"] },
            { path: "seller/product", component: _product_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_12__["ProductCrudComponent"] },
        ]
    },
    //Path/component you want to access after customer(buyer) login/signin
    {
        path: '', canActivate: [_shared_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["BuyerAuthGaurdService"]], children: [
            { path: "buyer-dashboard", component: _customer_buyer_buyer_dashboard_buyer_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["BuyerDashboardComponent"] },
            { path: "checkout", component: _customer_buyer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"] }
        ]
    },
    { path: "**", component: _shared_layouts_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'angular-ecommerce';
        translate.setDefaultLang('en');
        this.getScreenSize();
    }
    AppComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        // console.log(this.screenHeight, this.screenWidth);
        this.footerMaxHeight = this.screenHeight - 130; //header and footer aprox
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "getScreenSize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _product_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-crud/product-crud.component */ "./src/app/product/product-crud/product-crud.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _product_product_crud_product_crud_component__WEBPACK_IMPORTED_MODULE_15__["ProductCrudComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_14__["CustomerModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }
                })
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us h1 {\n  padding-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11c3tcbiAgICBoMXtcbiAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgfVxufSIsIi5jb250YWN0LXVzIGgxIHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            })
        };
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        return this.http.get(path, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http
            .put(path, JSON.stringify(body), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http
            .post(path, JSON.stringify(body), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.formatErrors));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  margin-top: 1rem;\n}\n.product .card img {\n  height: 9rem;\n  padding: 1rem;\n}\n.product .card .card-body .product-desc {\n  height: 9rem;\n  overflow: hidden;\n}\n.product .card .card-body .card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9jdXN0b21lci9idXllci9idXllci1kYXNoYm9hcmQvYnV5ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21lci9idXllci9idXllci1kYXNoYm9hcmQvYnV5ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDWjtBREVZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQWhCO0FER1k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9idXllci9idXllci1kYXNoYm9hcmQvYnV5ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3R7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAuY2FyZHtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1ib2R5e1xuICAgICAgICAgICAgLnByb2R1Y3QtZGVzY3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDlyZW07XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC8vICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLXRpdGxle1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5wcm9kdWN0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5wcm9kdWN0IC5jYXJkIGltZyB7XG4gIGhlaWdodDogOXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5wcm9kdWN0IC5jYXJkIC5jYXJkLWJvZHkgLnByb2R1Y3QtZGVzYyB7XG4gIGhlaWdodDogOXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0IC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuyerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerDashboardComponent", function() { return BuyerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/customer/services/customer.service.ts");




var BuyerDashboardComponent = /** @class */ (function () {
    function BuyerDashboardComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.show_checkout = false;
    }
    BuyerDashboardComponent.prototype.ngOnInit = function () {
        this.getAllProduct();
    };
    BuyerDashboardComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.customerService.allProduct().subscribe(function (data) {
            _this.all_products = data;
            // console.log("ALl Product", this.all_products);
        }, function (error) {
            console.log("My error", error);
        });
    };
    BuyerDashboardComponent.prototype.buyProduct = function (id) {
        this.show_checkout = true;
        this.customerService.quickBuyProduct(id); //We pass to serice from service we can access in another component
        this.router.navigateByUrl("/checkout");
    };
    BuyerDashboardComponent.prototype.addToCart = function () {
        alert("This a showcase, if you need this feature comment in the comment section");
    };
    BuyerDashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
    ]; };
    BuyerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-dashboard',
            template: __webpack_require__(/*! raw-loader!./buyer-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./buyer-dashboard.component.scss */ "./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], BuyerDashboardComponent);
    return BuyerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/customer/buyer/checkout/checkout.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/customer/buyer/checkout/checkout.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-detail img {\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9jdXN0b21lci9idXllci9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tZXIvYnV5ZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9idXllci9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRldGFpbHtcbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgfVxufSIsIi5wcm9kdWN0LWRldGFpbCBpbWcge1xuICBoZWlnaHQ6IDE1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer/buyer/checkout/checkout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customer/buyer/checkout/checkout.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/customer/services/customer.service.ts");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.currentProduct.subscribe(function (product) { return _this.single_product_id = product; });
        this.user_id = Number(sessionStorage.getItem('user_session_id'));
        this.productDetail(this.single_product_id);
        this.userAddress(this.user_id);
    };
    CheckoutComponent.prototype.productDetail = function (single_product_id) {
        var _this = this;
        this.customerService.individualProduct(single_product_id).subscribe(function (data) {
            _this.individual_product = data;
            // console.log("One Product", this.individual_product);
        }, function (error) {
            console.log("My error", error);
        });
    };
    CheckoutComponent.prototype.userAddress = function (user_id) {
        var _this = this;
        this.customerService.userDetail(user_id).subscribe(function (data) {
            // this.user_detail = data.address;
            _this.user_address = data.address;
            _this.user_contact_no = data.mobNumber;
        }, function (error) {
            console.log("My error", error);
        });
    };
    CheckoutComponent.prototype.placeOrder = function () {
        var _this = this;
        this.order_dto = {
            id: 0,
            userId: this.user_id,
            sellerId: 2,
            product: {
                id: this.individual_product.id,
                name: this.individual_product.name,
                uploadPhoto: this.individual_product.uploadPhoto,
                productDesc: this.individual_product.productDesc,
                mrp: this.individual_product.mrp,
                dp: this.individual_product.dp,
                status: this.individual_product.status
            },
            deliveryAddress: {
                id: 0,
                addLine1: this.user_address.addLine1,
                addLine2: this.user_address.addLine2,
                city: this.user_address.city,
                state: this.user_address.state,
                zipCode: Number(this.user_address.zipCode)
            },
            contact: this.user_contact_no,
            dateTime: new Date().toLocaleDateString()
        };
        // console.log("Place order dto", this.order_dto);
        this.customerService.insertNewOrder(this.order_dto).subscribe(function (data) {
            // console.log("Order placed successfully", data);
            alert("Order places successfully");
            _this.router.navigateByUrl("/buyer-dashboard");
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/buyer/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/customer/buyer/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buyer_buyer_dashboard_buyer_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer/buyer-dashboard/buyer-dashboard.component */ "./src/app/customer/buyer/buyer-dashboard/buyer-dashboard.component.ts");
/* harmony import */ var _seller_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seller/seller-dashboard/seller-dashboard.component */ "./src/app/customer/seller/seller-dashboard/seller-dashboard.component.ts");
/* harmony import */ var _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-signup/signin-signup.component */ "./src/app/customer/signin-signup/signin-signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buyer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buyer/checkout/checkout.component */ "./src/app/customer/buyer/checkout/checkout.component.ts");









var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_buyer_buyer_dashboard_buyer_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["BuyerDashboardComponent"], _seller_seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SellerDashboardComponent"], _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_5__["SigninSignupComponent"], _buyer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/seller/seller-dashboard/seller-dashboard.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/customer/seller/seller-dashboard/seller-dashboard.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progressbar-div .progress {\n  margin-top: 0.7rem;\n  height: 1.5rem;\n}\n.progressbar-div .progress .progress-bar {\n  color: black;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9jdXN0b21lci9zZWxsZXIvc2VsbGVyLWRhc2hib2FyZC9zZWxsZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21lci9zZWxsZXIvc2VsbGVyLWRhc2hib2FyZC9zZWxsZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7QURDSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvc2VsbGVyL3NlbGxlci1kYXNoYm9hcmQvc2VsbGVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc2Jhci1kaXZ7XG4gICAgLnByb2dyZXNze1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICBoZWlnaHQ6MS41cmVtO1xuICAgIC5wcm9ncmVzcy1iYXJ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxufSIsIi5wcm9ncmVzc2Jhci1kaXYgLnByb2dyZXNzIHtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbi5wcm9ncmVzc2Jhci1kaXYgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer/seller/seller-dashboard/seller-dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/customer/seller/seller-dashboard/seller-dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: SellerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerDashboardComponent", function() { return SellerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/customer/services/customer.service.ts");




var SellerDashboardComponent = /** @class */ (function () {
    function SellerDashboardComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.total_product = 0;
        this.publish_product = 0;
        this.inactive_product = 0;
        this.draft_product = 0;
    }
    SellerDashboardComponent.prototype.ngOnInit = function () {
        this.sellerOrderDashboardData();
        this.sellerProductDashboardData();
    };
    SellerDashboardComponent.prototype.sellerProductDashboard = function () {
        this.router.navigateByUrl("/seller/product");
    };
    SellerDashboardComponent.prototype.sellerOrderDashboard = function () {
        alert("WIP");
    };
    SellerDashboardComponent.prototype.sellerOrderDashboardData = function () {
        var _this = this;
        this.customerService.orderDashboardData().subscribe(function (data) {
            _this.order_dashboard_data = data;
            _this.total_order = Number(_this.order_dashboard_data.length);
            _this.last_order_date = _this.order_dashboard_data[_this.total_order - 1].dateTime;
            // console.log("product_dashboard_data", this.order_dashboard_data);
        }, function (error) {
            console.log("My error", error);
        });
    };
    SellerDashboardComponent.prototype.sellerProductDashboardData = function () {
        var _this = this;
        this.customerService.productDashboardData().subscribe(function (data) {
            _this.product_dashboard_data = data;
            for (status in _this.product_dashboard_data) {
                // console.log(this.product_dashboard_data[status].status);
                if (_this.product_dashboard_data[status].status == 'publish') {
                    ++_this.publish_product;
                }
                else if (_this.product_dashboard_data[status].status == 'inactive') {
                    ++_this.inactive_product;
                }
                else if (_this.product_dashboard_data[status].status == 'draft') {
                    ++_this.draft_product;
                }
                ++_this.total_product;
            }
            // console.log(this.publish_product);
            // console.log("product_dashboard_data", this.product_dashboard_data[this.product_dashboard_data.length - 1]);
        }, function (error) {
            console.log("My error", error);
        });
    };
    SellerDashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
    ]; };
    SellerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seller-dashboard',
            template: __webpack_require__(/*! raw-loader!./seller-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/seller/seller-dashboard/seller-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./seller-dashboard.component.scss */ "./src/app/customer/seller/seller-dashboard/seller-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], SellerDashboardComponent);
    return SellerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/customer/services/customer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/services/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var CustomerService = /** @class */ (function () {
    function CustomerService(apiService) {
        this.apiService = apiService;
        this.single_product_id = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentProduct = this.single_product_id.asObservable();
        this.product_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url + '/products/';
        this.user_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url + '/user/';
        this.order_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url + '/orders/';
    }
    CustomerService.prototype.allProduct = function () {
        return this.apiService.get(this.product_url);
    };
    CustomerService.prototype.quickBuyProduct = function (product_id) {
        this.single_product_id.next(product_id);
    };
    CustomerService.prototype.individualProduct = function (id) {
        return this.apiService.get(this.product_url + id);
    };
    CustomerService.prototype.userDetail = function (id) {
        return this.apiService.get(this.user_url + id);
    };
    CustomerService.prototype.insertNewOrder = function (order_dto) {
        return this.apiService.post(this.order_url, order_dto);
    };
    CustomerService.prototype.orderDashboardData = function () {
        return this.apiService.get(this.order_url);
    };
    CustomerService.prototype.productDashboardData = function () {
        return this.apiService.get(this.product_url);
    };
    CustomerService.ctorParameters = function () { return [
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/signin-signup/signin-signup.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/customer/signin-signup/signin-signup.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3NpZ25pbi1zaWdudXAvc2lnbmluLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/signin-signup/signin-signup.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/signin-signup/signin-signup.component.ts ***!
  \*******************************************************************/
/*! exports provided: SigninSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninSignupComponent", function() { return SigninSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/login-signup.service */ "./src/app/shared/services/login-signup.service.ts");





var SigninSignupComponent = /** @class */ (function () {
    function SigninSignupComponent(formBuilder, router, logsign_service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.logsign_service = logsign_service;
        this.regForm = false;
        this.signUpsubmitted = false;
        this.href = '';
        this.signInFormValue = {};
    }
    SigninSignupComponent.prototype.ngOnInit = function () {
        this.href = this.router.url;
        if (this.href == '/sign-up') {
            this.regForm = true;
        }
        else if (this.href == '/sign-in') {
            this.regForm = false;
        }
        this.signUpform = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            addLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addLine2: [],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            aboutYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uploadPhoto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            agreetc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.signInform = this.formBuilder.group({});
    };
    Object.defineProperty(SigninSignupComponent.prototype, "rf", {
        get: function () { return this.signUpform.controls; },
        enumerable: true,
        configurable: true
    });
    SigninSignupComponent.prototype.onSubmitSignUp = function () {
        var _this = this;
        this.signUpsubmitted = true;
        if (this.signUpform.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.signUpform.value))
            return;
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpform.value))
        // console.log(this.signUpform.value)
        this.user_reg_data = this.signUpform.value;
        this.user_dto = {
            aboutYou: this.user_reg_data.aboutYou,
            // addLine1: this.user_reg_data.addLine1,
            // addLine2: this.user_reg_data.addLine2,
            age: this.user_reg_data.age,
            agreetc: this.user_reg_data.agreetc,
            // city: this.user_reg_data.city,
            dob: this.user_reg_data.dob,
            email: this.user_reg_data.email,
            gender: this.user_reg_data.gender,
            address: {
                id: 0,
                addLine1: this.user_reg_data.addLine1,
                addLine2: this.user_reg_data.addLine2,
                city: this.user_reg_data.city,
                state: this.user_reg_data.state,
                zipCode: this.user_reg_data.zipCode,
            },
            language: this.user_reg_data.language,
            mobNumber: this.user_reg_data.mobNumber,
            name: this.user_reg_data.name,
            password: this.user_reg_data.password,
            // state: this.user_reg_data.state,
            uploadPhoto: this.user_reg_data.uploadPhoto,
            // zipCode: this.user_reg_data.zipCode,
            role: this.user_reg_data.role
        };
        this.logsign_service.userRegister(this.user_dto).subscribe(function (data) {
            // console.log(data);
            alert("Success");
            _this.router.navigateByUrl('/sign-in');
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    SigninSignupComponent.prototype.onSubmitSignIn = function () {
        var _this = this;
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
        this.logsign_service.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(function (data) {
            _this.user_data = data;
            if (_this.user_data.length == 1) {
                // alert("Validate")
                if (_this.user_data[0].role == "seller") {
                    sessionStorage.setItem("user_session_id", _this.user_data[0].id);
                    sessionStorage.setItem("role", _this.user_data[0].role);
                    _this.router.navigateByUrl('/seller-dashboard');
                }
                else if (_this.user_data[0].role == "buyer") {
                    sessionStorage.setItem("user_session_id", _this.user_data[0].id);
                    sessionStorage.setItem("role", _this.user_data[0].role);
                    _this.router.navigateByUrl('/buyer-dashboard');
                }
                else {
                    alert("Invalid-user-role");
                }
            }
            else {
                alert("Invalid");
            }
            console.log(_this.user_data);
        }, function (error) {
            console.log("My error", error);
        });
    };
    SigninSignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_4__["LoginSignupService"] }
    ]; };
    SigninSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin-signup',
            template: __webpack_require__(/*! raw-loader!./signin-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/signin-signup/signin-signup.component.html"),
            styles: [__webpack_require__(/*! ./signin-signup.component.scss */ "./src/app/customer/signin-signup/signin-signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_login_signup_service__WEBPACK_IMPORTED_MODULE_4__["LoginSignupService"]])
    ], SigninSignupComponent);
    return SigninSignupComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  text-align: center;\n}\n.home .intro {\n  padding-top: 5rem;\n}\n.home .short_desc {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVI7QURBSTtFQUNJLG9CQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmludHJve1xuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICB9XG4gICAgLnNob3J0X2Rlc2N7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cbn0iLCIuaG9tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lIC5pbnRybyB7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xufVxuLmhvbWUgLnNob3J0X2Rlc2Mge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/product/product-crud/product-crud.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/product/product-crud/product-crud.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1jcnVkL3Byb2R1Y3QtY3J1ZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-crud/product-crud.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-crud/product-crud.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCrudComponent", function() { return ProductCrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");





var ProductCrudComponent = /** @class */ (function () {
    function ProductCrudComponent(formBuilder, router, product_service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.product_service = product_service;
        this.addEditProduct = false; //for form validation
    }
    ProductCrudComponent.prototype.ngOnInit = function () {
        this.addEditProductForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uploadPhoto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productDesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getAllProduct();
    };
    Object.defineProperty(ProductCrudComponent.prototype, "rf", {
        get: function () { return this.addEditProductForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProductCrudComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.product_service.allProduct().subscribe(function (data) {
            _this.all_product_data = data;
        }, function (error) {
            console.log("My error", error);
        });
    };
    ProductCrudComponent.prototype.addProductPopup = function () {
        this.add_product = true;
        this.edit_product = false;
        this.popup_header = "Add New Product";
        this.addEditProductForm.reset();
    };
    ProductCrudComponent.prototype.addNewProduct = function () {
        var _this = this;
        this.addEditProduct = true;
        if (this.addEditProductForm.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
            return;
        }
        this.product_data = this.addEditProductForm.value;
        this.product_dto = {
            id: 0,
            name: this.product_data.name,
            uploadPhoto: this.product_data.uploadPhoto,
            productDesc: this.product_data.productDesc,
            mrp: this.product_data.mrp,
            dp: this.product_data.dp,
            status: this.product_data.status
        };
        this.product_service.addNewProduct(this.product_dto).subscribe(function (data) {
            // console.log(data);
            jQuery('#addEditProductModal').modal('toggle');
            _this.getAllProduct();
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    ProductCrudComponent.prototype.editProductPopup = function (id) {
        var _this = this;
        this.add_product = false;
        this.edit_product = true;
        this.popup_header = "Edit Product";
        this.addEditProductForm.reset();
        this.product_service.singleProduct(id).subscribe(function (data) {
            _this.single_product_data = data;
            _this.edit_product_id = data.id;
            // console.log("single_product_data", this.single_product_data)
            _this.addEditProductForm.setValue({
                name: _this.single_product_data.name,
                // uploadPhoto: '',
                uploadPhoto: _this.single_product_data.uploadPhoto,
                productDesc: _this.single_product_data.productDesc,
                mrp: _this.single_product_data.mrp,
                dp: _this.single_product_data.dp,
                status: _this.single_product_data.status
            });
        });
    };
    ProductCrudComponent.prototype.updateProduct = function () {
        var _this = this;
        this.addEditProduct = true;
        if (this.addEditProductForm.invalid) {
            // alert('Error!! :-)\n\n' + JSON.stringify(this.addEditUserForm.value))
            return;
        }
        this.product_data = this.addEditProductForm.value;
        this.product_dto = {
            id: 0,
            name: this.product_data.name,
            uploadPhoto: this.product_data.uploadPhoto,
            productDesc: this.product_data.productDesc,
            mrp: this.product_data.mrp,
            dp: this.product_data.dp,
            status: this.product_data.status
        };
        this.product_service.updateProduct(this.edit_product_id, this.product_dto).subscribe(function (data) {
            // console.log(data);
            jQuery('#addEditProductModal').modal('toggle');
            _this.getAllProduct();
        }, function (err) {
            alert("Some Error Occured");
        });
    };
    ProductCrudComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        var r = confirm("Do you want to delete the product ID: " + id + "?");
        if (r == true) {
            this.product_service.deleteProduct(id).subscribe(function (data) {
                console.log("deleted successfully", data);
                _this.getAllProduct();
            }, function (err) {
                alert("Some Error Occured");
            });
        }
        else {
            alert("You pressed Cancel!");
        }
    };
    ProductCrudComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    ProductCrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-crud',
            template: __webpack_require__(/*! raw-loader!./product-crud.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-crud/product-crud.component.html"),
            styles: [__webpack_require__(/*! ./product-crud.component.scss */ "./src/app/product/product-crud/product-crud.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductCrudComponent);
    return ProductCrudComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/number-only.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/number-only.directive.ts ***!
  \************************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(_el) {
        this._el = _el;
    }
    NumberOnlyDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        if (initalValue == 0) {
            this._el.nativeElement.value = "";
        }
        else {
            this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
            if (initalValue !== this._el.nativeElement.value) {
                event.stopPropagation();
            }
        }
    };
    NumberOnlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onInputChange", null);
    NumberOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[numberOnly]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared/layouts/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/footer/footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/layouts/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/layouts/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/header/header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/layouts/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        this.logged_in = false;
        this.language = 'English';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.user_role = sessionStorage.getItem("role");
        // console.log(this.user_role);
        var user_session_id = sessionStorage.getItem("user_session_id");
        if (user_session_id) {
            this.logged_in = true;
        }
    };
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
        if (language == 'en') {
            this.language = "English";
        }
        else if (language == 'hn') {
            this.language = "हिंदी(Hindi)";
        }
    };
    HeaderComponent.prototype.logOut = function () {
        sessionStorage.removeItem("user_session_id");
        sessionStorage.removeItem("role");
        this.router.navigateByUrl('/sign-in');
        location.reload();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/layouts/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\n  position: relative;\n  height: 79vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 920px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.notfound .notfound-404 {\n  position: absolute;\n  height: 100px;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  z-index: -1;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Maven Pro\", sans-serif;\n  color: #ececec;\n  font-weight: 900;\n  font-size: 276px;\n  margin: 0px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound h2 {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 46px;\n  color: #000;\n  font-weight: 900;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.notfound p {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-top: 15px;\n}\n\n.notfound a {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background: #189cf0;\n  display: inline-block;\n  padding: 16px 38px;\n  border: 2px solid transparent;\n  border-radius: 40px;\n  color: #fff;\n  font-weight: 400;\n  transition: 0.2s all;\n}\n\n.notfound a:hover {\n  background-color: #fff;\n  border-color: #189cf0;\n  color: #189cf0;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 h1 {\n    font-size: 162px;\n  }\n\n  .notfound h2 {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvYW5ndWxhci1lY29tbWVyY2Uvc3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9wYWdlLW5vdC1mb3VuZC1lcnJvci9wYWdlLW5vdC1mb3VuZC1lcnJvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dHMvcGFnZS1ub3QtZm91bmQtZXJyb3IvcGFnZS1ub3QtZm91bmQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0FDQ1o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUVRLDJCQUFBO0VBQ1IsV0FBQTtBQ0dKOztBRERFO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFFUSxnQ0FBQTtBQ0laOztBREZFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0FDT0o7O0FETEU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNRSjs7QURORTtFQUNFO0lBQ0UsZ0JBQUE7RUNTSjs7RURQRTtJQUNFLGVBQUE7RUNVSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvcGFnZS1ub3QtZm91bmQtZXJyb3IvcGFnZS1ub3QtZm91bmQtZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNub3Rmb3VuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNzl2aDtcbiAgfVxuICAjbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5ub3Rmb3VuZCB7XG4gICAgbWF4LXdpZHRoOiA5MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZWNlY2VjO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyNzZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5ub3Rmb3VuZCBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLm5vdGZvdW5kIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLm5vdGZvdW5kIGEge1xuICAgIGZvbnQtZmFtaWx5OiAnTWF2ZW4gUHJvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZDogIzE4OWNmMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTZweCAzOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB9XG4gIC5ub3Rmb3VuZCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzE4OWNmMDtcbiAgICBjb2xvcjogIzE4OWNmMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMTYycHg7XG4gICAgfVxuICAgIC5ub3Rmb3VuZCBoMiB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICB9IiwiI25vdGZvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDc5dmg7XG59XG5cbiNub3Rmb3VuZCAubm90Zm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ub3Rmb3VuZCB7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNlY2VjZWM7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjc2cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ub3Rmb3VuZCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLm5vdGZvdW5kIHAge1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICMxODljZjA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTZweCAzOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4ubm90Zm91bmQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzE4OWNmMDtcbiAgY29sb3I6ICMxODljZjA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiAxNjJweDtcbiAgfVxuXG4gIC5ub3Rmb3VuZCBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageNotFoundErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundErrorComponent", function() { return PageNotFoundErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PageNotFoundErrorComponent = /** @class */ (function () {
    function PageNotFoundErrorComponent(location) {
        this.location = location;
    }
    PageNotFoundErrorComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundErrorComponent.prototype.cancel = function () {
        this.location.back();
    };
    PageNotFoundErrorComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    PageNotFoundErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found-error',
            template: __webpack_require__(/*! raw-loader!./page-not-found-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found-error.component.scss */ "./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PageNotFoundErrorComponent);
    return PageNotFoundErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-gaurd.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-gaurd.service.ts ***!
  \*******************************************************/
/*! exports provided: AdminAuthGuardLogin, AdminAuthGaurdService, SellerBuyerAuthGuardLogin, SellerAuthGaurdService, BuyerAuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardLogin", function() { return AdminAuthGuardLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGaurdService", function() { return AdminAuthGaurdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerBuyerAuthGuardLogin", function() { return SellerBuyerAuthGuardLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAuthGaurdService", function() { return SellerAuthGaurdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerAuthGaurdService", function() { return BuyerAuthGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//Admin before login check
var AdminAuthGuardLogin = /** @class */ (function () {
    function AdminAuthGuardLogin(router) {
        this.router = router;
    }
    AdminAuthGuardLogin.prototype.canActivate = function (route, state) {
        var role = sessionStorage.getItem("role");
        if (role == "admin") {
            this.router.navigate(["/admin-dashboard"]);
            return false;
        }
        else {
            return true;
        }
    };
    AdminAuthGuardLogin.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminAuthGuardLogin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminAuthGuardLogin);
    return AdminAuthGuardLogin;
}());

//Admin after login check
var AdminAuthGaurdService = /** @class */ (function () {
    function AdminAuthGaurdService(router) {
        this.router = router;
    }
    AdminAuthGaurdService.prototype.canActivate = function (route, state) {
        var role = sessionStorage.getItem("role");
        if (role == 'admin') {
            return true;
        }
        else {
            this.router.navigate(["/admin-login"]);
            return false;
        }
    };
    AdminAuthGaurdService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminAuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminAuthGaurdService);
    return AdminAuthGaurdService;
}());

//Customer(Buyer & Seller) before login
var SellerBuyerAuthGuardLogin = /** @class */ (function () {
    function SellerBuyerAuthGuardLogin(router) {
        this.router = router;
    }
    SellerBuyerAuthGuardLogin.prototype.canActivate = function (route, state) {
        var role = sessionStorage.getItem("role");
        if (role == "seller") {
            this.router.navigate(["/seller-dashboard"]);
            return false;
        }
        else if (role == "buyer") {
            this.router.navigate(["/buyer-dashboard"]);
            return false;
        }
        else {
            return true;
        }
    };
    SellerBuyerAuthGuardLogin.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SellerBuyerAuthGuardLogin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SellerBuyerAuthGuardLogin);
    return SellerBuyerAuthGuardLogin;
}());

//Seller(Customer) after login
var SellerAuthGaurdService = /** @class */ (function () {
    function SellerAuthGaurdService(router) {
        this.router = router;
    }
    SellerAuthGaurdService.prototype.canActivate = function (route, state) {
        var role = sessionStorage.getItem("role");
        if (role == 'seller') {
            return true;
        }
        else {
            this.router.navigate(["/sign-in"]);
            return false;
        }
    };
    SellerAuthGaurdService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SellerAuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SellerAuthGaurdService);
    return SellerAuthGaurdService;
}());

//Buyer(Customer) after login
var BuyerAuthGaurdService = /** @class */ (function () {
    function BuyerAuthGaurdService(router) {
        this.router = router;
    }
    BuyerAuthGaurdService.prototype.canActivate = function (route, state) {
        var role = sessionStorage.getItem("role");
        if (role == 'buyer') {
            return true;
        }
        else {
            this.router.navigate(["/sign-in"]);
            return false;
        }
    };
    BuyerAuthGaurdService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BuyerAuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuyerAuthGaurdService);
    return BuyerAuthGaurdService;
}());



/***/ }),

/***/ "./src/app/shared/services/login-signup.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/login-signup.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginSignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupService", function() { return LoginSignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var LoginSignupService = /** @class */ (function () {
    function LoginSignupService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.login_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
        this.reg_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url;
    }
    LoginSignupService.prototype.authLogin = function (user_name, password) {
        return this.apiService.get(this.login_url + '/user?email=' + user_name + '&password=' + password);
    };
    LoginSignupService.prototype.userRegister = function (user_dto) {
        return this.apiService.post(this.reg_url + '/user', user_dto);
    };
    LoginSignupService.prototype.adminLogin = function (user_name, password) {
        return this.apiService.get(this.login_url + '/user?email=' + user_name + '&password=' + password + '&role=admin');
    };
    LoginSignupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    LoginSignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginSignupService);
    return LoginSignupService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ProductService = /** @class */ (function () {
    function ProductService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.product_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_url + '/products/';
    }
    ProductService.prototype.allProduct = function () {
        return this.apiService.get(this.product_url);
    };
    ProductService.prototype.addNewProduct = function (product_dto) {
        return this.apiService.post(this.product_url, product_dto);
    };
    ProductService.prototype.singleProduct = function (id) {
        return this.apiService.get(this.product_url + id);
    };
    ProductService.prototype.updateProduct = function (id, product_dto) {
        return this.apiService.put(this.product_url + id, product_dto);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.apiService.delete(this.product_url + id);
    };
    ProductService.ctorParameters = function () { return [
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.user_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server_url + "/user/";
    }
    //get data of individual user
    UserService.prototype.getUserData = function (user_id) {
        return this.apiService.get(this.user_url + user_id);
    };
    //update data of individual user
    UserService.prototype.updateUserData = function (user_id, user_dto) {
        return this.apiService.put(this.user_url + user_id, user_dto);
    };
    UserService.ctorParameters = function () { return [
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/header/header.component */ "./src/app/shared/layouts/header/header.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/shared/layouts/footer/footer.component.ts");
/* harmony import */ var _layouts_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/page-not-found-error/page-not-found-error.component */ "./src/app/shared/layouts/page-not-found-error/page-not-found-error.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/number-only.directive */ "./src/app/shared/directives/number-only.directive.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _layouts_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundErrorComponent"],
                _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_8__["NumberOnlyDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            exports: [
                _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_8__["NumberOnlyDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(formBuilder, router, user_service, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.user_service = user_service;
        this.toastr = toastr;
        this.userProfile = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user_id = Number(sessionStorage.getItem('user_session_id'));
        this.userProfileForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            addLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addLine2: [],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            aboutYou: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            uploadPhoto: [],
        });
        this.editUserData(this.user_id);
    };
    Object.defineProperty(UserProfileComponent.prototype, "rf", {
        get: function () { return this.userProfileForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent.prototype.editUserData = function (user_id) {
        var _this = this;
        this.user_service.getUserData(user_id).subscribe(function (data) {
            _this.user_data = data;
            _this.user_profile_pic = _this.user_data.uploadPhoto;
            _this.user_language = _this.user_data.language;
            _this.user_role = _this.user_data.role;
            _this.userProfileForm.setValue({
                name: _this.user_data.name,
                mobNumber: _this.user_data.mobNumber,
                age: _this.user_data.age,
                dob: _this.user_data.dob,
                email: _this.user_data.email,
                password: _this.user_data.password,
                addLine1: _this.user_data.address.addLine1,
                addLine2: _this.user_data.address.addLine2,
                city: _this.user_data.address.city,
                state: _this.user_data.address.state,
                zipCode: _this.user_data.address.zipCode,
                gender: _this.user_data.gender,
                aboutYou: _this.user_data.aboutYou,
                uploadPhoto: '',
            });
        }, function (error) {
            console.log("My error", error);
        });
    };
    UserProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.userProfile = true;
        if (this.userProfileForm.invalid) {
            this.toastr.error('Some Error Occured!', 'User Profile!');
            // alert('Error!! :-)\n\n' + JSON.stringify(this.userProfileForm.value))
            return;
        }
        this.user_updated_data = this.userProfileForm.value;
        this.user_dto = {
            name: this.user_updated_data.name,
            mobNumber: this.user_updated_data.mobNumber,
            age: this.user_updated_data.age,
            dob: this.user_updated_data.dob,
            email: this.user_updated_data.email,
            password: this.user_updated_data.password,
            language: this.user_updated_data.language,
            gender: this.user_updated_data.gender,
            address: {
                id: 0,
                addLine1: this.user_updated_data.addLine1,
                addLine2: this.user_updated_data.addLine2,
                city: this.user_updated_data.city,
                state: this.user_updated_data.state,
                zipCode: this.user_updated_data.zipCode,
            },
            aboutYou: this.user_updated_data.aboutYou,
            uploadPhoto: (this.user_updated_data.uploadPhoto == "" ? this.user_profile_pic : this.user_updated_data.uploadPhoto),
            agreetc: this.user_updated_data.agreetc,
            role: this.user_role
        };
        this.user_service.updateUserData(this.user_id, this.user_dto).subscribe(function (data) {
            _this.toastr.success('Profile Updated Successfully!', 'User Profile!');
            if (_this.user_role == 'admin') {
                _this.router.navigateByUrl('/admin-dashboard');
            }
            else if (_this.user_role == 'seller') {
                _this.router.navigateByUrl('/seller-dashboard');
            }
            else if (_this.user_role == 'buyer') {
                _this.router.navigateByUrl('/buyer-dashboard');
            }
        }, function (err) {
            _this.toastr.error('Some Error Occured!', 'User Profile!');
            // alert("Some Error Occured");
        });
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    server_url: "http://localhost:3000",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /tmp/angular-ecommerce/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map