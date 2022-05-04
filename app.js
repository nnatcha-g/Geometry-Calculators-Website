// var lang | 0 - ENG (Default) | 1 - TH
var lang = 0

// var dimension | 0 - 2D (Default) | 1 - 3D
var dimension = 0

// var shape | 0 - Circle, Sphere (Default) | 1 - Square, Cube
var shape = 0

//Function Update ข้อมูลต่าง ๆ ภายใน Website
function page_update(){
    switch(lang){
        case 0:
            document.getElementById("page-title").innerHTML = "Geometry Calculators"
            document.getElementById("title").innerHTML = "Geometry Calculators"
            switch(dimension){
                case 0:
                    switch(shape){
                        case 0:
                            document.getElementById("name").innerHTML = "Circle"
                            document.getElementById("shape-img").src="img/circle.png";
                            break;
                        case 1:
                            document.getElementById("name").innerHTML = "Square"
                            document.getElementById("shape-img").src="img/Square.png";
                            break;
                    }
                    break;
                case 1:
                    switch(shape){
                        case 0:
                            document.getElementById("name").innerHTML = "Sphere"
                            document.getElementById("shape-img").src="img/circle.png";
                            break;
                        case 1:
                            document.getElementById("name").innerHTML = "Cube"
                            document.getElementById("shape-img").src="img/Square.png";
                            break;
                    }
                    break;
            }
            break;
        case 1:
            document.getElementById("page-title").innerHTML = "เว็บไซต์คำนวณเรขาคณิต"
            document.getElementById("title").innerHTML = "เว็บไซต์คำนวณเรขาคณิต"
            switch(dimension){
                case 0:
                    switch(shape){
                        case 0:
                            document.getElementById("name").innerHTML = "วงกลม"
                            document.getElementById("shape-img").src="img/circle.png";
                            break;
                        case 1:
                            document.getElementById("name").innerHTML = "สี่เหลี่ยม"
                            document.getElementById("shape-img").src="img/Square.png";
                            break;
                    }
                    break;
                case 1:
                    switch(shape){
                        case 0:
                            document.getElementById("name").innerHTML = "ทรงกลม"
                            document.getElementById("shape-img").src="img/circle.png";
                            break;
                        case 1:
                            document.getElementById("name").innerHTML = "ลูกบาศก์"
                            document.getElementById("shape-img").src="img/Square.png";
                            break;
                    }
                    break;
            }
            break;
    }
}

function EN_lang(){
    lang = 0
    page_update()
}

function TH_lang(){
    lang = 1
    page_update()
}

function two_dimension(){
    dimension = 0
    page_update()
}

function three_dimension(){
    dimension = 1
    page_update()
}

function change_shape_left(){
    shape--
    if(shape < 0){
        shape = 1
        page_update()
    }
    else{
        page_update()
    }
}

function change_shape_right(){
    shape++
    if(shape > 1){
        shape = 0
        page_update()
    }
    else{
        page_update()
    }
}