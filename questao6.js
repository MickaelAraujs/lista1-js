var primeiroNum = prompt("Informe um número:");
var segundoNum = prompt("Informe um número:");

var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
document.body.appendChild(x);

var y = document.createElement("TR");
y.setAttribute("id", "myTr");
document.getElementById("myTable").appendChild(y);

var z = document.createElement("TD");
var t = document.createTextNode(primeiroNum + "+" + segundoNum);
z.appendChild(t);
document.getElementById("myTr").appendChild(z);

var z2 = document.createElement("TD");
var t2 = document.createTextNode((1 *primeiroNum) + (1 * segundoNum));
z2.appendChild(t2);
document.getElementById("myTr").appendChild(z2);


var y2 = document.createElement("TR");
y2.setAttribute("id", "myTr2");
document.getElementById("myTable").appendChild(y2);

var k = document.createElement("TD");
var g = document.createTextNode(primeiroNum + "*" + segundoNum);
k.appendChild(g);
document.getElementById("myTr2").appendChild(k);

var k2 = document.createElement("TD");
var g2 = document.createTextNode((1 *primeiroNum) * (1 * segundoNum));
k2.appendChild(g2);
document.getElementById("myTr2").appendChild(k2);


var y3 = document.createElement("TR");
y3.setAttribute("id", "myTr3");
document.getElementById("myTable").appendChild(y3);

var s = document.createElement("TD");
var d = document.createTextNode(primeiroNum + "/" + segundoNum);
s.appendChild(d);
document.getElementById("myTr3").appendChild(s);

var s2 = document.createElement("TD");
var d2 = document.createTextNode((1 *primeiroNum) / (1 * segundoNum));
s2.appendChild(d2);
document.getElementById("myTr3").appendChild(s2);


var y4 = document.createElement("TR");
y4.setAttribute("id", "myTr4");
document.getElementById("myTable").appendChild(y4);

var c = document.createElement("TD");
var v = document.createTextNode(primeiroNum + "%" + segundoNum);
c.appendChild(v);
document.getElementById("myTr4").appendChild(c);

var c2 = document.createElement("TD");
var v2 = document.createTextNode((1 *primeiroNum) % (1 * segundoNum));
c2.appendChild(v2);
document.getElementById("myTr4").appendChild(c2);