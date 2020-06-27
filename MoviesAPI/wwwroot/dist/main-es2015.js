(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-movie/add-movie.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-movie/add-movie.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">Add a movie</h2>\r\n<br>\r\n\r\n\r\n<form [formGroup]=\"movieReactiveForm\" [hidden]=\"success\" autocomplete=\"on\" (ngSubmit)=\"onSubmit(movieReactiveForm)\">\r\n\r\n    <input type=\"hidden\" name=\"Id\" [value]=\"service.formDataMovie.Id\">\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"Title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required maxlength=\"50\" minlength=\"3\">\r\n            <div *ngIf=\"(Title.dirty || Title.touched) && Title.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Title.errors.required\">Title is required.</div>\r\n                <div *ngIf=\"Title.errors.minlength\">Title should have at least 3 characters.</div>\r\n                <div *ngIf=\"Title.errors.maxlength\">Title should have at most 50 characters.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <textarea formControlName=\"Description\" type=\"text\" class=\"form-control\" placeholder=\"Description\" rows=\"5\" cols=\"50\" required></textarea>\r\n            <div *ngIf=\"(Description.dirty || Description.touched) && Description.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Description.errors.required\">Description is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <label for=\"Genre\">Genre: </label>\r\n            <select id=\"genre \" formControlName=\"Genre\" type=\"text\" class=\"form-control\" placeholder=\"Genre\" required>\r\n                <option value=\"Adventure\">Adventure</option>\r\n                <option value=\"Comedy\">Comedy</option>\r\n                <option value=\"Horror\">Horror</option>\r\n                <option value=\"SciFi\">SciFi</option>\r\n            </select>\r\n            <div *ngIf=\"(Genre.dirty || Genre.touched) && Genre.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Genre.errors.required\">Genre is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"Duration\" type=\"number\" placeholder=\"Duration\" required>\r\n            <div *ngIf=\"(Duration.dirty || Duration.touched) && Duration.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Duration.errors.required\">Duration is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"YearOfRelease\" type=\"number\" placeholder=\"Year of release\" min=\"1900\" max=\"2020\" required>\r\n            <div *ngIf=\"(YearOfRelease.dirty || YearOfRelease.touched) && YearOfRelease.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"YearOfRelease.errors.required\">Year of release is required.</div>\r\n                <div *ngIf=\"YearOfRelease.errors?.min\">Year of release should be at least 1900.</div>\r\n                <div *ngIf=\"YearOfRelease.errors?.max\">Year of release should be at most the current year.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"Director\" type=\"text\" class=\"form-control\" placeholder=\"Director\" required>\r\n            <div *ngIf=\"(Director.dirty || Director.touched) && Director.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Director.errors.required\">Director is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <label for=\"DateAdded\">Date added: </label>\r\n            <input formControlName=\"DateAdded\" type=\"date\" placeholder=\"yyyy-MM-dd\" required>\r\n            <div *ngIf=\"(DateAdded.dirty || DateAdded.touched) && DateAdded.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"DateAdded.errors.required\">Date added is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n        <div class=\"input-group\">\r\n            <label for=\"Rating\">Rating: </label>\r\n            <input formControlName=\"Rating\" type=\"number\" class=\"form-control\" min=\"0\" max=\"10\" required>\r\n            <div *ngIf=\"(Rating.dirty || Rating.touched) && Rating.invalid\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Rating.errors.required\">Rating is required.</div>\r\n            </div>\r\n        </div> <br>\r\n\r\n               <div class=\"input-group\">\r\n                   <label for=\"Watched\">Watched:</label>\r\n                   <input formControlName=\"Watched\" type=\"radio\" value=\"true\">\r\n                   <label for=\"Watched\">Never watched:</label>\r\n                   <input formControlName=\"Watched\" type=\"radio\" value=\"false\">\r\n                   <div *ngIf=\"(Watched.dirty || Watched.touched) && Watched.invalid\" class=\"alert alert-danger\">\r\n                       <div *ngIf=\"Watched.errors.required\">Please select your option.</div>\r\n                   </div>\r\n               </div> <br>\r\n\r\n\r\n\r\n\r\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"formMovie.invalid\">\r\n            Submit\r\n        </button>\r\n        <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"movieReactiveForm.reset()\">Reset</button>\r\n    </div>\r\n\r\n\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">Add user</h2>\r\n<br>\r\n\r\n\r\n<form [formGroup]=\"userReactiveForm\" [hidden]=\"success\" autocomplete=\"on\" (ngSubmit)=\"onSubmit(userReactiveForm)\">\r\n\r\n    <input type=\"hidden\" name=\"Id\" [value]=\"service.formDataMovie.Id\">\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"FirstName\" type=\"text\" class=\"form-control\" placeholder=\"FirstName\" required maxlength=\"50\" minlength=\"3\">\r\n        </div> <br>\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"LastName\" type=\"text\" class=\"form-control\" placeholder=\"LastName\" required maxlength=\"50\" minlength=\"3\">\r\n        </div> <br>\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"Username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" required maxlength=\"50\" minlength=\"3\">\r\n        </div> <br>\r\n        <div class=\"input-group\">\r\n            <input formControlName=\"Password\" type=\"text\" class=\"form-control\" placeholder=\"Password\" required maxlength=\"50\" minlength=\"3\">\r\n        </div> <br>\r\n\r\n\r\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">\r\n            Submit\r\n        </button>\r\n        <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"userReactiveForm.reset()\">Reset</button>\r\n    </div>\r\n\r\n\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <app-nav-menu></app-nav-menu>\r\n\r\n    <div class=\"container\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n    </div>\r\n\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h2 class=\"text-center\">Details for {{movieCommService.selectedMovie.Title}}</h2>\r\n<br>\r\n\r\n<label>Id: {{movieCommService.selectedMovie.Id}}</label>\r\n<br>\r\n<label>Title: {{movieCommService.selectedMovie.Title}}</label>\r\n<br>\r\n<label>Description: {{movieCommService.selectedMovie.Description}}</label>\r\n<br>\r\n<label>Genre: {{movieCommService.selectedMovie.Genre}}</label>\r\n<br>\r\n<label>Duration: {{movieCommService.selectedMovie.Duration}}</label>\r\n<br>\r\n<label>Year of release: {{movieCommService.selectedMovie.YearOfRelease}}</label>\r\n<br>\r\n<label>Director: {{movieCommService.selectedMovie.Director}}</label>\r\n<br>\r\n<label>Date added: {{movieCommService.selectedMovie.DateAdded | date: 'yyyy-MM-dd'}}</label>\r\n<br>\r\n<label>Rating: {{movieCommService.selectedMovie.Rating}}</label>\r\n<br>\r\n<label>Watched: {{movieCommService.selectedMovie.Watched}}</label>\r\n<br>\r\n<br>\r\n<h3>Comments:</h3>\r\n\r\n<table class=\"table table-hover\">\r\n\r\n    <thead class=\"thead-dark\">\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>Text</th>\r\n            <th>Important</th>\r\n        </tr>\r\n    </thead>\r\n\r\n     \r\n        <tr *ngFor=\"let c of movieCommService.selectedMovie.Comments\">\r\n            <td>{{c.Id}}</td>\r\n            <td>{{c.Text}}</td>\r\n            <td>{{c.Important}}</td>\r\n            <td (click)=\"onDelete(c.Id)\"> Delete</td>\r\n            <td (click)=\"populateForm(c)\"> Update</td>\r\n        </tr>\r\n\r\n\r\n\r\n    <!--\r\n    <ng-container *ngFor=\"let c of comments\">        iterez prin comments adica apelez get din controller de Comm\r\n    Nu pot avea ngFor si ngIf in acelasi element; creez un ng-container, care nu afecteaza DOM \r\n    <tr *ngIf=\"c.movieID == movieService.selectedMovie.Id\">\r\n        <td>{{c.Id}}</td>\r\n        <td>{{c.Text}}</td>\r\n        <td>{{c.Important}}</td>\r\n        <td (click)=\"onDelete(c.id)\"> Delete</td>\r\n        <td (click)=\"onUpdate(c.id)\"> Update</td>\r\n    </tr>\r\n    </ng-container>\r\n    -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n</table>\r\n\r\n\r\n    <br><br>\r\n    <h3>Add comment:</h3><br>\r\n                         <form #formComment=\"ngForm\" (submit)=\"onSubmit(formComment)\">\r\n\r\n                             <input type=\"hidden\" name=\"Id\" [value]=\"commentService.formDataComm.Id\">\r\n\r\n                             <div class=\"input-group\">\r\n                                 <textarea name=\"Text\" #Text=\"ngModel\" [(ngModel)]=\"commentService.formDataComm.Text\" type=\"text\" class=\"form-control\" placeholder=\"Text\" rows=\"5\" cols=\"50\" required></textarea>\r\n                             </div>\r\n                             <br>\r\n                             <div class=\"input-group\">\r\n                                 <label for=\"Important\">Important: </label>\r\n                                 <input name=\"Important\" #Important=\"ngModel\" [(ngModel)]=\"commentService.formDataComm.Important\" class=\"form-control\" type=\"radio\" value=\"true\">\r\n                                 <label for=\"Important\">Not important: </label>\r\n                                 <input name=\"Important\" #Important=\"ngModel\" [(ngModel)]=\"commentService.formDataComm.Important\" class=\"form-control\" type=\"radio\" value=\"false\">\r\n                             </div>\r\n                             <br>\r\n                             <div class=\"input-group\">\r\n                                 <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"formComment.invalid\">\r\n                                     Add comment\r\n                                 </button>\r\n                             </div>\r\n\r\n                         </form>\r\n\r\n    <br>\r\n    <button (click)=\"goBack()\">Back</button>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">List of movies</h2>\r\n<br>\r\n\r\n\r\n<!--<h4>Filter by date added</h4>\r\n<br>\r\n<form #form=\"ngForm\" autocomplete=\"on\" (submit)=\"onSubmit(form)\">\r\n    <p>From date:</p>\r\n    <input name=\"from\" [(ngModel)]=\"from\">\r\n    <br>\r\n    <p>To date:</p>\r\n    <input name=\"to\" [(ngModel)]=\"to\">\r\n    <br>\r\n    <button type=\"submit\">Filter</button>\r\n    <br>\r\n</form>\r\n<br>\r\n<br>\r\n<button (click)=\"refreshList()\">Refresh</button>\r\n<br>-->\r\n\r\n\r\n    <table class=\"table table-hover\">\r\n\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Title</th>\r\n                <th>Description</th>\r\n                <th>Genre</th>\r\n                <th>Duration</th>\r\n                <th>Year of release</th>\r\n                <th>Director</th>\r\n                <th>Date added</th>\r\n                <th>Rating</th>\r\n                <th>Watched</th>\r\n                <th>Number of comments</th>\r\n                <th>Operations</th>\r\n\r\n            </tr>\r\n        </thead>\r\n\r\n\r\n        <tr *ngFor=\"let m of movies\">\r\n\r\n            <td>{{m.Id}}</td>\r\n            <td>{{m.Title}}</td>\r\n            <td>{{m.Description}}</td>\r\n            <td>{{m.Genre}}</td>\r\n            <td>{{m.Duration}}</td>\r\n            <td>{{m.YearOfRelease}}</td>\r\n            <td>{{m.Director}}</td>\r\n            <td>{{m.DateAdded | date: 'yyyy-MM-dd'}}</td>  <!-- pipe format date-->\r\n            <td>{{m.Rating}}</td>\r\n            <td>{{m.Watched}}</td>\r\n            <td>{{m.NumberOfComments}}</td>  \r\n            <td>\r\n                <a [routerLink]=\"['/fetch-data', m.Id]\" routerLinkActive=\"active\"> Details</a>\r\n                <a [routerLink]=\"['/update', m.Id]\" routerLinkActive=\"active\" (click)=\"populateForm(m)\"> Update</a>\r\n                <a [routerLink]=\"['/delete', m.Id]\" routerLinkActive=\"active\" (click)=\"onDelete(m.Id)\"> Delete</a>\r\n            </td>  <!-- transmit id prin router link -->\r\n\r\n        </tr>\r\n\r\n    </table>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">Home</a>\r\n            <button class=\"navbar-toggler\"\r\n                    type=\"button\"\r\n                    data-toggle=\"collapse\"\r\n                    data-target=\".navbar-collapse\"\r\n                    aria-label=\"Toggle navigation\"\r\n                    [attr.aria-expanded]=\"isExpanded\"\r\n                    (click)=\"toggle()\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav flex-grow\">\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\">Fetch data</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/add']\">Add movie</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/addUser']\">Register</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">Update movie \"{{service.formDataMovie.Title}}\"</h2>\r\n<br>\r\n\r\n<form #formMovie=\"ngForm\" autocomplete=\"on\" (submit)=\"onSubmit(formMovie)\">\r\n\r\n    <input type=\"hidden\" name=\"Id\" [value]=\"service.formDataMovie.Id\">\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input name=\"Title\" #Title=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Title\" type=\"text\" class=\"form-control\" placeholder=\"Title\" required maxlength=\"50\" minlength=\"3\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <textarea name=\"Description\" #Description=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Description\" type=\"text\" class=\"form-control\" placeholder=\"Description\" rows=\"5\" cols=\"50\" required></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <label for=\"Genre\">Genre: </label>\r\n            <select id=\"genre \" form=\"Genre\" name=\"Genre\" #Genre=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Genre\" type=\"text\" class=\"form-control\" placeholder=\"Genre\" required>\r\n                <option value=\"Adventure\">Adventure</option>\r\n                <option value=\"Comedy\">Comedy</option>\r\n                <option value=\"Horror\">Horror</option>\r\n                <option value=\"SciFi\">SciFi</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input name=\"Duration\" #Duration=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Duration\" type=\"number\" class=\"form-control\" placeholder=\"Duration\" required>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input name=\"YearOfRelease\" #YearOfRelease=\"ngModel\" [(ngModel)]=\"service.formDataMovie.YearOfRelease\" type=\"number\" class=\"form-control\" placeholder=\"Year of release\" min=\"1900\" max=\"2020\" required>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input name=\"Director\" #Director=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Director\" type=\"text\" class=\"form-control\" placeholder=\"Director\" required>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <label>Date added: </label>\r\n            <!-- [(ngModel)] = 2 way data-binding-->\r\n            <input name=\"DateAdded\" #DateAdded=\"ngModel\" [(ngModel)]=\"service.formDataMovie.DateAdded\" type=\"date\" class=\"form-control\" placeholder=\"Date added\" required>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <label for=\"Rating\">Rating: </label>\r\n            <input name=\"Rating\" #Rating=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Rating\" type=\"number\" class=\"form-control\" min=\"0\" max=\"10\" required>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <label for=\"Watched\">Watched:</label>\r\n            <input name=\"Watched\" #Watched=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Watched\" class=\"form-control\" type=\"radio\" value=\"true\">\r\n            <label for=\"Watched\">Never watched:</label>\r\n            <input name=\"Watched\" #Watched=\"ngModel\" [(ngModel)]=\"service.formDataMovie.Watched\" class=\"form-control\" type=\"radio\" value=\"false\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\" [disabled]=\"formMovie.invalid\">\r\n            Submit\r\n        </button>\r\n    </div>\r\n\r\n\r\n</form>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-movie/add-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-movie/add-movie.component.ts ***!
  \**************************************************/
/*! exports provided: AddMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieComponent", function() { return AddMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movie.service */ "./src/app/shared/movie.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let AddMovieComponent = class AddMovieComponent {
    constructor(service, location, fb) {
        this.service = service;
        this.location = location;
        this.fb = fb;
        // Form state
        this.loading = false;
        this.success = false;
    }
    get Title() {
        return this.movieReactiveForm.get('Title');
    }
    get Description() {
        return this.movieReactiveForm.get('Description');
    }
    get Genre() {
        return this.movieReactiveForm.get('Genre');
    }
    get Duration() {
        return this.movieReactiveForm.get('Duration');
    }
    get YearOfRelease() {
        return this.movieReactiveForm.get('YearOfRelease');
    }
    get Director() {
        return this.movieReactiveForm.get('Director');
    }
    get DateAdded() {
        return this.movieReactiveForm.get('DateAdded');
    }
    get Rating() {
        return this.movieReactiveForm.get('Rating');
    }
    get Watched() {
        return this.movieReactiveForm.get('Watched');
    }
    ngOnInit() {
        this.movieReactiveForm = this.fb.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            Description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Genre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            YearOfRelease: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2020)]],
            Director: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            DateAdded: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Rating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Watched: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.resetForm(); // initialize model property  
    }
    onSubmit(form) {
        this.movieReactiveForm = form; // form transmis ca parametru din html
        this.service.formDataMovie = this.movieReactiveForm.value; // service.formDataMovie ia valoarea form din html
        this.service.postMovie()
            // .subscribe(   // // Call subscribe() to start listening for updates.
            .toPromise()
            .then(response => {
            console.log("successfully added");
            this.resetForm();
            this.service.getMovies(); // refresh la lista;
            this.location.back();
        }, error => {
            console.log(error);
        });
    }
    resetForm() {
        this.service.formDataMovie = {
            Id: 0,
            Title: '',
            Description: '',
            Genre: null,
            Duration: null,
            YearOfRelease: null,
            Director: '',
            DateAdded: '',
            Rating: null,
            Watched: null
        };
    }
};
AddMovieComponent.ctorParameters = () => [
    { type: _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddMovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-movie/add-movie.component.html")).default
    }),
    __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddMovieComponent);



/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let AddUserComponent = class AddUserComponent {
    constructor(service, location, fb) {
        this.service = service;
        this.location = location;
        this.fb = fb;
        // Form state
        this.loading = false;
        this.success = false;
    }
    get FirstName() {
        return this.userReactiveForm.get('FirstName');
    }
    get LastName() {
        return this.userReactiveForm.get('LastName');
    }
    get Username() {
        return this.userReactiveForm.get('Username');
    }
    ngOnInit() {
        this.userReactiveForm = this.fb.group({
            FirstName: ['', ['']],
            LastName: ['', ['']],
            Username: ['', ['']],
            Password: ['', ['']],
        });
        this.resetForm(); // initialize model property  
    }
    onSubmit(form) {
        this.userReactiveForm = form; // form transmis ca parametru din html
        this.service.formDataUser = this.userReactiveForm.value; // service.formDataMovie ia valoarea form din html
        this.service.postUser()
            // .subscribe(   // // Call subscribe() to start listening for updates.
            .toPromise()
            .then(response => {
            console.log("successfully added");
            this.resetForm();
            this.service.getUsers(); // refresh la lista;
            this.location.back();
        }, error => {
            console.log(error);
        });
    }
    resetForm() {
        this.service.formDataUser = {
            Id: 0,
            FirstName: '',
            LastName: '',
            Username: '',
            Password: '',
        };
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html")).default
    }),
    __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], AddUserComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-movie/add-movie.component */ "./src/app/add-movie/add-movie.component.ts");
/* harmony import */ var _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-movie/update-movie.component */ "./src/app/update-movie/update-movie.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__["FetchDataComponent"] },
    { path: 'fetch-data/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'add', component: _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_5__["AddMovieComponent"] },
    { path: 'update/:id', component: _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_6__["UpdateMovieComponent"] },
    { path: 'delete/:id', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__["FetchDataComponent"] },
    { path: 'addUser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/movie.service */ "./src/app/shared/movie.service.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-movie/add-movie.component */ "./src/app/add-movie/add-movie.component.ts");
/* harmony import */ var _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-movie/update-movie.component */ "./src/app/update-movie/update-movie.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_11__["AddMovieComponent"],
            _update_movie_update_movie_component__WEBPACK_IMPORTED_MODULE_12__["UpdateMovieComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [_shared_movie_service__WEBPACK_IMPORTED_MODULE_8__["MovieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/comment.service */ "./src/app/shared/comment.service.ts");
/* harmony import */ var _shared_movieComm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/movieComm.service */ "./src/app/shared/movieComm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let DetailsComponent = class DetailsComponent {
    constructor(movieCommService, // importam service-ul care include si proprietatea Comments in Movie
    commentService, activatedRoute, location) {
        this.movieCommService = movieCommService;
        this.commentService = commentService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    // https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
    // https://angular.io/tutorial/toh-pt5
    ngOnInit() {
        // this.resetForm();   // initialize model property
        this.getMovieById();
        //  this.getComments();
        //if (this.commentService.updateBtnCommClicked == true) // daca s-a apasat butonul de Update
        //{
        //    this.populateForm();
        //    console.log("dsgvds" + this.commentService.commentList);
        //}
        // else
        this.resetForm(); // initialize model property
    }
    getMovieById() {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        console.log("id din  details " + id);
        this.movieCommService.getMovieById(id) // returneaza un Observable si nu mai este asincron
            // .subscribe(m => this.selectedMovie = m);  // tratez in service getById, aici doar apelez
            .toPromise()
            .then(response => {
            this.movieCommService.selectedMovie = response;
            this.copyOfSelectedComment = this.movieCommService.selectedMovie; // e tip MovieComm
        });
        console.log(this.movieCommService.selectedMovie); // daca foloseam Subscribe, getMovieById era asincron si intarzia functia pana sa se proceseze si atunci selectedMovie ramanea tot undefined pt ca nu e initializat sus
    }
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL.The "id" key returns the id of the movie to fetch.
    // Route parameters are always strings. The JavaScript(+) operator converts the string to a number, which is what a movie id should be.
    //// Populam tabelul din Form; in form verific cu ngIf daca comm.movieId = movie.id
    //getComments() {         // Get din controller de Comm
    //    this.commentService.getComments()
    //        .subscribe(data => this.comments = data)
    //}
    resetForm(formComment) {
        //if (this.commentService.updateBtnCommClicked == true) // daca s-a apasat butonul de Update
        //    this.populateForm();
        if (formComment != null)
            formComment.form.reset(); // form.reset() -> all desccendents are marked pristine and untouched and values are null
        this.commentService.formDataComm = {
            Id: 0,
            MovieID: 0,
            Text: '',
            Important: true,
        };
        this.commToBeUpdated = {
            Id: 0,
            MovieID: 0,
            Text: '',
            Important: true,
        };
        this.commentService.formDataComm.Id = 0; // il fac explicit 0 pt ca ramane suprascris cu idComment updatat anterior din cauza apelului  autofillFormForUpdate()  daca am apucat sa fac inainte update
        //  console.log(formComment.value.Id);
    }
    onSubmit(formComment) {
        // facem diferenta intre Post si PUT verificand Id; undefined sau 0
        // if (formComment.value.Id == 0 && this.commentService.updateBtnCommClicked == false)         //{)
        if (this.commentService.formDataComm.Id == 0)
            this.insertRecord(formComment);
        else // update
            this.updateRecord(formComment);
    }
    insertRecord(formComment) {
        this.commentService.formDataComm.MovieID = +this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.commentService.formDataComm); // aici inca nu are id, abia dupa ce ii fac post primeste id
        this.commentService.postComment() //.subscribe(   // // Call subscribe() to start listening for updates.
            .toPromise()
            .then(response => {
            console.log(this.commentService.formDataComm);
            this.resetForm(formComment);
            this.getMovieById(); // refresh la lista, care e o lista de moviesComm
            // this.getComments();   // Nu, lista are obiecte Comm
        }, error => {
            console.log(error);
        });
    }
    // e asincron si folosim Promise in loc de subscribe
    updateRecord(formComment) {
        formComment.value.Id = this.commToBeUpdated.Id; // asignez lui formDataComm id-ul lui commToBeUpdated;                 copiat din apelul onUpdate() la click event
        //formComment.value.MovieID = +this.activatedRoute.snapshot.paramMap.get('id');  // asignez movieID din ruta, sa pot avea toate proprietatile pt a putea construi un movie, pt ca nu iau toate proprietatile din form
        console.log(formComment.value.Id);
        //this.getMovieById();
        console.log("am intrat in updateRecord " + formComment.value);
        this.commentService.updateComment(formComment.value) // ID
            //.subscribe(   // // Call subscribe() to start listening for updates.
            //    response => {    // if PUT operation succeeds we set the form to initial values
            //        this.resetForm(form);
            //           this.getMovieById(); // refresh la lista;                                                          // success ia ca parametri un mesaj si numele aplicatiei 'Title' tip string
            //      //  this.getComments();
            //    },
            .toPromise()
            .then(response => {
            //this.copyOfSelectedComment = this.movieCommService.selectedMovie;  // e tip MovieComm
            this.resetForm(formComment);
            this.getMovieById(); // refresh la lista;                                                          // success ia ca parametri un mesaj si numele aplicatiei 'Title' tip string
            //  this.getComments();
            console.log("Update comment successfully");
        }, error => {
            console.log(error);
        });
        this.resetForm(formComment);
        this.commentService.updateBtnCommClicked = false; // setam inapoi butonul de update la false
        //this.getMovieById(); // refresh la lista; 
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // ATENTIE: IN TABEL AM TIPUL MOVIECOMM, NU COMMENT!!
    populateForm(c) {
        console.log(this.copyOfSelectedComment);
        console.log(this.commentService.getCommentById(c.Id));
        //this.commentService.updateBtnCommClicked = true; // s-a apasat butotnul de Update
        //c.Id = this.copyOfSelectedComment.Comments.Id;   // fac legaturi intre cele 2 obiecte; transfer proprietati de la copie la obiectul nou construit
        //c.MovieID = this.copyOfSelectedComment.Comments.MovieID;
        //c.Text = this.copyOfSelectedComment.Comments.Text;
        //c.Important = this.copyOfSelectedComment.Comments.Important;
        this.commentService.getCommentById(c.Id)
            .toPromise()
            .then(result => {
            this.commentService.selectedComment = result;
            console.log("comment selectat este " + this.commentService.selectedComment.Text);
            this.commToBeUpdated.Id = this.commentService.selectedComment.Id; // this.idCommSelected;
            this.commToBeUpdated.MovieID = this.commentService.selectedComment.MovieID; // valorile sunt luate din tabel, vezi structura campurilor
            this.commToBeUpdated.Text = this.commentService.selectedComment.Text;
            this.commToBeUpdated.Important = this.commentService.selectedComment.Important;
            console.log(this.commToBeUpdated);
        }, error => console.error(error));
        //this.commToBeUpdated.Id = this.commentService.getCommentById(c.Id);     // this.idCommSelected;
        //this.commToBeUpdated.MovieID = c.Comments.MovieID;        // valorile sunt luate din tabel, vezi structura campurilor
        //this.commToBeUpdated.Text = c.Comments.Text
        //this.commToBeUpdated.Important = c.Comments.Important;
        // transformam MovieComm in Comm
        //this.commToBeUpdated.Id = c.Comments.Id;     // this.idCommSelected;
        //this.commToBeUpdated.MovieID = c.Comments.MovieID;        // valorile sunt luate din tabel, vezi structura campurilor
        //this.commToBeUpdated.Text = c.Comments.Text
        //this.commToBeUpdated.Important = c.Comments.Important;
        this.commentService.formDataComm = this.commToBeUpdated; // formData din service ia valoarea noului obiect construit
        console.log(this.commentService.formDataComm.Text);
    } // formDataComm este suprascris si il pot apela ca parametru la populateForm in ngOnInit
    //onUpdate(id) {  
    //    this.idCommSelected = id;
    //    console.log("clicked, id = ", this.idCommSelected);
    //    this.commentService.updateBtnCommClicked = true; // s-a apasat butotnul de Update
    //}
    onDelete(id) {
        console.log(id);
        this.commentService.deleteComment(id)
            .subscribe(response => {
            console.log("successfully deleted");
            this.getMovieById(); // refresh
        }, error => {
            console.log(error);
        });
    }
    goBack() {
        this.location.back();
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _shared_movieComm_service__WEBPACK_IMPORTED_MODULE_4__["MovieCommService"] },
    { type: _shared_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }
];
DetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html")).default
    }),
    __metadata("design:paramtypes", [_shared_movieComm_service__WEBPACK_IMPORTED_MODULE_4__["MovieCommService"],
        _shared_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
], DetailsComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movie.service */ "./src/app/shared/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(service) {
        this.service = service;
        this.rootURL = "https://localhost:44335";
        this.submitPressed = false;
    }
    ngOnInit() {
        this.getAllMovies();
    }
    onSubmit(form) {
        this.submitPressed = true; // inseamna  ca s-a accesat input-ul de filter si returnam filteredMovies
        this.getFilteredMoviesByDate(form);
    }
    // in acelasi tabel afisez fie toate filmele, fie pe cele filtrate
    // diferenta o face o variabila submitPressed care initial este false si isi schimba valoarea daca se apasa submit
    getAllMovies() {
        this.service.getMovies()
            .subscribe(data => this.movies = data);
    }
    getFilteredMoviesByDate(form) {
        console.log(form.value.from);
        this.service.filterMoviesByDate(form.value.from, form.value.to) //form.value.
            // .subscribe(data => {
            .toPromise()
            .then(response => {
            this.movies = response;
            console.log(this.movies);
        });
    }
    onDelete(id) {
        console.log("id este " + id);
        this.service.deleteMovie(id)
            .subscribe(response => {
            console.log("successfully deleted");
            this.getAllMovies(); // refresh
        }, error => {
            console.log(error);
        });
    }
    // auto fill form
    populateForm(movie) {
        this.service.formDataMovie = movie;
        this.service.updateBtnMovieClicked = true; // se apasa butonul, il apelez in add-movie
        this.service.idCopied = movie.Id; // copiez valoare id si apelez din add-movie la update
        console.log(movie);
        //this.service.formData = Object.assign({}, movie);  // in formData pune o copie a obiectului meu movie
        //console.log(this.service.formData);
        // Since the form is bound to formData properties,
        // the form field will get with populated corresponding details.
    }
    refreshList() {
        console.log("refresh clicked");
        this.getAllMovies();
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
], FetchDataComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/shared/comment.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/comment.service.ts ***!
  \*******************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
        this.rootURL = "https://localhost:44335";
    }
    postComment() {
        return this.http.post(this.rootURL + '/comments', this.formDataComm); // POST function returns Observable
    }
    getComments() {
        return this.http.get(this.rootURL + '/comments');
    }
    getCommentById(id) {
        console.log("id este " + id);
        return this.http.get(this.rootURL + '/comments/' + id);
        // .subscribe(result => {
        //.toPromise()
        //.then(result => {
        //     this.selectedComment= result;
        //     console.log("comment selectat este " + this.selectedComment.Text);
        // }, error => console.error(error));
    }
    updateComment(formData) {
        return this.http.put(this.rootURL + '/comments/' + formData.Id, this.formDataComm);
    }
    deleteComment(id) {
        return this.http.delete(this.rootURL + '/comments/' + id);
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommentService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CommentService);



/***/ }),

/***/ "./src/app/shared/movie.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/movie.service.ts ***!
  \*****************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.rootURL = "https://localhost:44335";
        this.updateBtnMovieClicked = false; // initial butonul de update nu e apasat; il importam in fetch-data
    }
    postMovie() {
        console.log("din service" + this.formDataMovie.Title);
        return this.http.post(this.rootURL + '/movies', this.formDataMovie); // POST function returns Observable
        // returneaza un movie tip service.formData
    }
    getMovies() {
        return this.http.get(this.rootURL + '/movies');
    }
    //getMovieById(id) {                // in serviceComm pt ca returnez si lista de Comments
    //    console.log("id este " + id);
    //    return this.http.get<Movie>(this.rootURL + '/movies/' + id)
    //}
    // GET: movies/filter?from=a&to=b
    filterMoviesByDate(from, to) {
        return this.http.get(this.rootURL + '/movies/filter?from=' + from + '&to=' + to);
    }
    updateMovie(formData) {
        console.log(formData);
        return this.http.put(this.rootURL + '/movies/' + this.idCopied, this.formDataMovie); // transmite URL si ID in PUT request prin concatenare
        // returneaza un Observable
        // in idCopied e copiata valoarea id caruia i se face update; daca zic this.formData.Id e undefined pt ca l-am resetat in Add-Movie
    }
    deleteMovie(id) {
        return this.http.delete(this.rootURL + '/movies/' + id);
        // returneaza un Observable
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MovieService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MovieService);



/***/ }),

/***/ "./src/app/shared/movieComm.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/movieComm.service.ts ***!
  \*********************************************/
/*! exports provided: MovieCommService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCommService", function() { return MovieCommService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MovieCommService = class MovieCommService {
    constructor(http) {
        this.http = http;
        this.rootURL = "https://localhost:44335";
    }
    getMovieById(id) {
        console.log("id este " + id);
        return this.http.get(this.rootURL + '/movies/' + id);
        //.toPromise()
        //.then(response => {
        //    this.selectedMovie = response as MovieComm;
        //});
        //.subscribe(m => {                     // Nu merge pt ca returneaza un rezultat asincron care va fi undefined mai tarziu pt ca procesarea merge in conitnuare pana sa imi returneaze mie movie
        //    this.selectedMovie = m;                   // Subscribe nu este bun, dar Promise este pt ca returneaza Observable si asta imi trebuie.
        //    console.log(this.selectedMovie);
        //});
    }
};
MovieCommService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MovieCommService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MovieCommService);



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.rootURL = "https://localhost:44335";
        this.updateBtnUserClicked = false; // initial butonul de update nu e apasat; il importam in fetch-data
    }
    postUser() {
        return this.http.post(this.rootURL + '/users', this.formDataUser); // POST function returns Observable
        // returneaza un movie tip service.formData
    }
    getUsers() {
        return this.http.get(this.rootURL + '/users');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/update-movie/update-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/update-movie/update-movie.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovieComponent", function() { return UpdateMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movie.service */ "./src/app/shared/movie.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UpdateMovieComponent = class UpdateMovieComponent {
    constructor(service, location) {
        this.service = service;
        this.location = location;
    }
    ngOnInit() {
        if (this.service.updateBtnMovieClicked == true) // daca s-a apasat butonul de Update
            this.autofillFormForUpdate();
    }
    resetForm(formMovie) {
        if (formMovie != null) {
            console.log(this.idCopied);
            formMovie.form.reset(); // form.reset() -> all desccendents are marked pristine and untouched and values are null
        }
        this.service.updateBtnMovieClicked = false; // resetez la false, altfel ramane marcat ca apasat
        this.service.formDataMovie.Id = 0; // il fac explicit 0 pt ca ramane suprascris cu id movie updatat anterior din cauza apelului  autofillFormForUpdate()  daca am apucat sa fac inainte update
    }
    onSubmit(formMovie) {
        this.updateRecord(formMovie); // daca e undefined e update
        formMovie.reset(); // form.reset() -> all desccendents are marked pristine and untouched and values are null
        this.service.updateBtnMovieClicked == false; // il resetez la false ca altfel ramane parcat ca true daca am apucat sa fac update inainte
    }
    updateRecord(formMovie) {
        console.log(formMovie);
        this.service.updateMovie(formMovie.value) // ID
            //  .subscribe(   // // Call subscribe() to start listening for updates.
            .toPromise()
            .then(response => {
            console.log("successfully updated");
            this.resetForm(formMovie);
            this.service.getMovies(); // refresh la lista;
            this.location.back();
        }, error => {
            console.log(error);
        });
    }
    autofillFormForUpdate() {
        this.service.formDataMovie.Id = this.service.idCopied; // reatribui valoarea id din fetch-data cand l-am selectat, pt ca acum este undefined
        console.log(this.service.formDataMovie.Id);
        this.service.formDataMovie;
        console.log(this.service.formDataMovie);
    }
};
UpdateMovieComponent.ctorParameters = () => [
    { type: _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
UpdateMovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-movie/update-movie.component.html")).default
    }),
    __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], UpdateMovieComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Diana\Desktop\Lab4\MoviesAPI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map