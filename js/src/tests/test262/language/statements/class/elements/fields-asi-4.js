// |reftest| skip-if((function(){try{eval('c=class{x;}');return(false);}catch{return(true);}})()) error:SyntaxError -- class-fields-public is not enabled unconditionally
// Copyright (C) 2017 Valerie Young. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: ASI test in field declarations -- error when generator interpreted as multiplication
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public, generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C {
  x = 42
  *gen() {}
}