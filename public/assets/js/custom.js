var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
            }
        }
        h.click();
    });
    b.appendChild(c);
    }
    x[i].appendChild(b);

    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        closeAllCheckSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
        arrNo.push(i)
    } else {
        y[i].classList.remove("select-arrow-active");
    }
    }
    for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
    }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

var x1, i1, j1, l1, ll1, selElmnt1, a1, b1, c1;
/*look for any elements with the class "custom-select":*/
x1 = document.getElementsByClassName("custom-select-check");
l1 = x1.length;
for (i1 = 0; i1 < l1; i1++) {
    selElmnt1 = x1[i1].getElementsByTagName("select")[0];
    ll1 = selElmnt1.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a1 = document.createElement("DIV");
    a1.setAttribute("class", "select-check-selected");
    a1.innerHTML = selElmnt1.options[selElmnt1.selectedIndex].innerHTML;
    x1[i1].appendChild(a1);
    /*for each element, create a new DIV that will contain the option list:*/
    b1 = document.createElement("DIV");
    b1.setAttribute("class", "select-check-items select-check-hide");
    for (j1 = 1; j1 < ll1; j1++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c1 = document.createElement("DIV");
    c1.innerHTML = selElmnt1.options[j1].innerHTML;
    c1.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y1, i1, k1, s1, h1, sl1, yl1;
        s1 = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl1 = s1.length;
        h1 = this.parentNode.previousSibling;
        for (i1 = 0; i1 < sl1; i1++) {
            if (s1.options[i1].innerHTML == this.innerHTML) {
            s1.selectedIndex = i1;
            h1.innerHTML = this.innerHTML;
            y1 = this.parentNode.getElementsByClassName("same-as-check-selected");
            yl1 = y1.length;
            for (k1 = 0; k1 < yl1; k1++) {
                y1[k1].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-check-selected");
            break;
            }
        }
        h1.click();
    });
    b1.appendChild(c1);
    }
    x1[i1].appendChild(b1);
    a1.addEventListener("click", function(e1) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e1.stopPropagation();
        closeAllSelect(this);
        closeAllCheckSelect(this);
        this.nextSibling.classList.toggle("select-check-hide");
        this.classList.toggle("select-check-arrow-active");
    });
}
function closeAllCheckSelect(elmnt1) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x1, y1, i1, xl1, yl1, arrNo1 = [];
    x1 = document.getElementsByClassName("select-check-items");
    y1 = document.getElementsByClassName("select-check-selected");
    xl1 = x1.length;
    yl1 = y1.length;
    for (i1 = 0; i1 < yl1; i1++) {
    if (elmnt1 == y1[i1]) {
        arrNo1.push(i1)
    } else {
        y1[i1].classList.remove("select-check-arrow-active");
    }
    }
    for (i1 = 0; i1 < xl1; i1++) {
    if (arrNo1.indexOf(i1)) {
        x1[i1].classList.add("select-check-hide");
    }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllCheckSelect);