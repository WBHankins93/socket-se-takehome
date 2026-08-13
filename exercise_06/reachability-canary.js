"use strict";

const underscore = require("underscore");

// Controlled path for CVE-2021-23358. The vulnerable release evaluates the
// `variable` setting when compiling a template.
module.exports = function compileTemplate(template, variable) {
  return underscore.template(template, { variable });
};
