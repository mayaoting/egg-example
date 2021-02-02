'use strict';
module.exports = app => {
 class AdminController extends app.Controller {
    async index() {
        this.ctx.body = "user control"
    }
 }
 return AdminController;
};
