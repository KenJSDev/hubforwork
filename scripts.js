/* DC Variables */
var dc1Selected = 0;
var dc2Selected = 0;
var dc3Selected = 0;
var dc4Selected = 0;
var dc5Selected = 0;
var dc6Selected = 0;
var dc7Selected = 0;
var dc8Selected = 0;

/* Home Variables */
var access1URL = "https://www.duckduckgo.com";
var case1URL = "https://www.duckduckgo.com";
var case2URL = "https://www.duckduckgo.com";
var case3URL = "https://www.duckduckgo.com";
var case4URL = "https://www.duckduckgo.com";
var case5URL = "https://www.duckduckgo.com";
var issue1URL = "https://www.duckduckgo.com";
var issue2URL = "https://www.duckduckgo.com";
var issue3URL = "https://www.duckduckgo.com";
var research1URL = "https://www.duckduckgo.com";
var research2URL = "https://www.duckduckgo.com";
var research3URL = "https://www.duckduckgo.com";
var research4URL = "https://www.duckduckgo.com";

/* DC1 Variables */
var dc1Product1 = "https://www.duckduckgo.com";
var dc1Product2 = "https://www.duckduckgo.com";
var dc1Product3 = "https://www.duckduckgo.com";
var dc1Common1 = "https://www.duckduckgo.com";
var dc1Common2 = "https://www.duckduckgo.com";
var dc1Tool1 = "https://www.duckduckgo.com";
var dc1Tool2 = "https://www.duckduckgo.com";
var dc1Tool3 = "https://www.duckduckgo.com";
var dc1Tool4 = "https://www.duckduckgo.com";

/* DC2 Variables */
var dc2Product1 = "https://www.duckduckgo.com";
var dc2Product2 = "https://www.duckduckgo.com";
var dc2Product3 = "https://www.duckduckgo.com";
var dc2Common1 = "https://www.duckduckgo.com";
var dc2Common2 = "https://www.duckduckgo.com";
var dc2Tool1 = "https://www.duckduckgo.com";
var dc2Tool2 = "https://www.duckduckgo.com";
var dc2Tool3 = "https://www.duckduckgo.com";
var dc2Tool4 = "https://www.duckduckgo.com";

/* DC3 Variables */
var dc3Product1 = "https://www.duckduckgo.com";
var dc3Product2 = "https://www.duckduckgo.com";
var dc3Product3 = "https://www.duckduckgo.com";
var dc3Common1 = "https://www.duckduckgo.com";
var dc3Common2 = "https://www.duckduckgo.com";
var dc3Tool1 = "https://www.duckduckgo.com";
var dc3Tool2 = "https://www.duckduckgo.com";
var dc3Tool3 = "https://www.duckduckgo.com";
var dc3Tool4 = "https://www.duckduckgo.com";

/* DC4 Variables */
var dc4Product1 = "https://www.duckduckgo.com";
var dc4Product2 = "https://www.duckduckgo.com";
var dc4Product3 = "https://www.duckduckgo.com";
var dc4Common1 = "https://www.duckduckgo.com";
var dc4Common2 = "https://www.duckduckgo.com";
var dc4Tool1 = "https://www.duckduckgo.com";
var dc4Tool2 = "https://www.duckduckgo.com";
var dc4Tool3 = "https://www.duckduckgo.com";
var dc4Tool4 = "https://www.duckduckgo.com";

/* DC5 Variables */
var dc5Product1 = "https://www.duckduckgo.com";
var dc5Product2 = "https://www.duckduckgo.com";
var dc5Product3 = "https://www.duckduckgo.com";
var dc5Common1 = "https://www.duckduckgo.com";
var dc5Common2 = "https://www.duckduckgo.com";
var dc5Tool1 = "https://www.duckduckgo.com";
var dc5Tool2 = "https://www.duckduckgo.com";
var dc5Tool3 = "https://www.duckduckgo.com";
var dc5Tool4 = "https://www.duckduckgo.com";

/* DC6 Variables */
var dc6Product1 = "https://www.duckduckgo.com";
var dc6Product2 = "https://www.duckduckgo.com";
var dc6Product3 = "https://www.duckduckgo.com";
var dc6Common1 = "https://www.duckduckgo.com";
var dc6Common2 = "https://www.duckduckgo.com";
var dc6Tool1 = "https://www.duckduckgo.com";
var dc6Tool2 = "https://www.duckduckgo.com";
var dc6Tool3 = "https://www.duckduckgo.com";
var dc6Tool4 = "https://www.duckduckgo.com";

/* DC7 Variables */
var dc7Product1 = "https://www.duckduckgo.com";
var dc7Product2 = "https://www.duckduckgo.com";
var dc7Product3 = "https://www.duckduckgo.com";
var dc7Common1 = "https://www.duckduckgo.com";
var dc7Common2 = "https://www.duckduckgo.com";
var dc7Tool1 = "https://www.duckduckgo.com";
var dc7Tool2 = "https://www.duckduckgo.com";
var dc7Tool3 = "https://www.duckduckgo.com";
var dc7Tool4 = "https://www.duckduckgo.com";

/* DC8 Variables */
var dc8Product1 = "https://www.duckduckgo.com";
var dc8Product2 = "https://www.duckduckgo.com";
var dc8Product3 = "https://www.duckduckgo.com";
var dc8Common1 = "https://www.duckduckgo.com";
var dc8Common2 = "https://www.duckduckgo.com";
var dc8Tool1 = "https://www.duckduckgo.com";
var dc8Tool2 = "https://www.duckduckgo.com";
var dc8Tool3 = "https://www.duckduckgo.com";
var dc8Tool4 = "https://www.duckduckgo.com";

/* Nav Menu Functions */
function displayHome() {
  document.getElementById("home").style.display="block";
  document.getElementById("dc").style.display="none";
  document.getElementById("tools").style.display="none";

  document.getElementById("buttonHome").disabled=true;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayHome");
}

function displayDC1() {
  dc1Selected = 1;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 0;  

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC1";

  document.getElementById("buttonHome").disabled =false;
  document.getElementById("buttonDC1").disabled =true;
  document.getElementById("buttonDC2").disabled =false; 
  document.getElementById("buttonDC3").disabled =false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC1");
}

function displayDC2() {
  dc1Selected = 0;
  dc2Selected = 1;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 0;

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC2";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=true;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC2");
}

function displayDC3() {

  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 1;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 0; 
    
  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC3";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=true;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC3");
}
  
function displayDC4() {
  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 1;    
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 0; 

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC4";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=true;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC4");
}

function displayDC5() {
  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 1;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 0;   
  
  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC5";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=true;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC5");
}
  
function displayDC6() {
  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 1;
  dc7Selected = 0;
  dc8Selected = 0; 

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC6";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=true;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC6");
}


function displayDC7() {
  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 1;
  dc8Selected = 0; 

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC7";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=true;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC7");
}
  
function displayDC8() {
  dc1Selected = 0;
  dc2Selected = 0;
  dc3Selected = 0;
  dc4Selected = 0;
  dc5Selected = 0;
  dc6Selected = 0;
  dc7Selected = 0;
  dc8Selected = 1;

  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="block";
  document.getElementById("tools").style.display="none";

  document.getElementById("pagetitle").innerHTML = "DC8";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=true;
  document.getElementById("buttonTools").disabled=false;

  console.log("displayDC8");
}

function displayTools() {
  document.getElementById("home").style.display="none";
  document.getElementById("dc").style.display="none";
  document.getElementById("tools").style.display="flex";

  document.getElementById("pagetitle").innerHTML = "DC8";

  document.getElementById("buttonHome").disabled=false;
  document.getElementById("buttonDC1").disabled=false;
  document.getElementById("buttonDC2").disabled=false;
  document.getElementById("buttonDC3").disabled=false;
  document.getElementById("buttonDC4").disabled=false;
  document.getElementById("buttonDC5").disabled=false;
  document.getElementById("buttonDC6").disabled=false;
  document.getElementById("buttonDC7").disabled=false;
  document.getElementById("buttonDC8").disabled=false;
  document.getElementById("buttonTools").disabled=true;

  console.log("displayTools");
}

/* Home Functions */
function openAccess1() {
  window.open(access1URL, "_blank");
}

function openCase1() {
  window.open(case1URL, "_blank");
}

function openCase2() {
  window.open(case2URL, "_blank");
}

function openCase3() {
  window.open(case3URL, "_blank");
}

function openCase4() {
  window.open(case4URL, "_blank");
}

function openCase5() {
  window.open(case5URL, "_blank");
}

function openIssue1() {
  window.open(issue1URL, "_blank");
}

function openIssue2() {
  window.open(issue2URL, "_blank");
}

function openIssue3() {
  window.open(issue3URL, "_blank");
}

function openResearch1() {
  window.open(research1URL, "_blank");
}

function openResearch2() {
  window.open(research2URL, "_blank");
}

function openResearch3() {
  window.open(research3URL, "_blank");
}

function openResearch4() {
  window.open(research4URL, "_blank");
}

/* DC Functions */

/* Product Buttons Functions */

function openProduct1() {
  if (dc1Selected === 1) {
    window.open(dc1Product1, "_blank");
  };
  if (dc2Selected === 1) {
    window.open(dc2Product1, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Product1, "_blank");
  };
  if (dc4Selected === 1) {
    window.open(dc4Product1, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Product1, "_blank");
  };
  if (dc6Selected === 1) {
    window.open(dc6Product1, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Product1, "_blank");
  };
  if (dc8Selected === 1) {
    window.open(dc8Product1, "_blank");
  }
}


function openProduct2() {
  if (dc1Selected === 1) {
    window.open(dc1Product2, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Product2, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Product2, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Product2, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Product2, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Product2, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Product2, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Product2, "_blank");
  }
}

function openProduct3() {
  if (dc1Selected === 1) {
    window.open(dc1Product3, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Product3, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Product3, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Product3, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Product3, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Product3, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Product3, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Product3, "_blank");
  }
}

function openCommon1() {
  if (dc1Selected === 1) {
    window.open(dc1Common1, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Common1, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Common1, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Common1, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Common1, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Common1, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Common1, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Common1, "_blank");
  }
}

function openCommon2() {
  if (dc1Selected === 1) {
    window.open(dc1Common2, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Common2, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Common2, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Common2, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Common2, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Common2, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Common2, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Common2, "_blank");
  }
}

function openTool1() {
  if (dc1Selected === 1) {
    window.open(dc1Tool1, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Tool1, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Tool1, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Tool1, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Tool1, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Tool1, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Tool1, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Tool1, "_blank");
  }
}

function openTool2() {
  if (dc1Selected === 1) {
    window.open(dc1Tool2, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Tool2, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Tool2, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Tool2, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Tool2, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Tool2, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Tool2, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Tool2, "_blank");
  }
}

function openTool3() {
  if (dc1Selected === 1) {
    window.open(dc1Tool3, "_blank");
  }
  if (dc2Selected === 1) {
    window.open(dc2Tool3, "_blank");
  }
  if (dc3Selected === 1) {
    window.open(dc3Tool3, "_blank");
  }
  if (dc4Selected === 1) {
    window.open(dc4Tool3, "_blank");
  }
  if (dc5Selected === 1) {
    window.open(dc5Tool3, "_blank");
  }
  if (dc6Selected === 1) {
    window.open(dc6Tool3, "_blank");
  }
  if (dc7Selected === 1) {
    window.open(dc7Tool3, "_blank");
  }
  if (dc8Selected === 1) {
    window.open(dc8Tool3, "_blank");
  }
}


