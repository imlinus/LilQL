'use strict';

var LilQL = function LilQL (data) {
  this.data = data;
  return this
};

LilQL.prototype.where = function where (key, val) {
  this.data = this.data.filter(function (obj) { return obj[key] === val; });
  return this
};

LilQL.prototype.includes = function includes (key, val) {
  this.data = this.data.filter(function (obj) { return obj[key].toLowerCase().indexOf(val) >= 0; });
  return this
};

LilQL.prototype.except = function except (key, val) {
  this.data = this.data.filter(function (obj) { return obj[key].toLowerCase().indexOf(val) === -1; });
  return this
};

LilQL.prototype.orderBy = function orderBy (key, val) {
  this.data.sort(function (a, b) { return val === 'asc' ? (a[key] - b[key]) : (b[key] - a[key]); });
  return this
};

LilQL.prototype.limit = function limit (lng) {
  this.data.splice(lng, this.data.length);
  return this
};

LilQL.prototype.then = function then (cb) {
  cb(this.data);
  return this
};

module.exports = LilQL;
