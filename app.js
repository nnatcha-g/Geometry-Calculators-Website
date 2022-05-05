// var lang | 0 - ENG (Default) | 1 - TH
var lang = 0

// var dimension | 0 - 2D (Default) | 1 - 3D
var dimension = 0

// var shape | 0 - Circle, Sphere (Default) | 1 - Square, Cube
var shape = 0

// var formula | 0 - Area, Volume | 1 - Circumference, Surface Area
var formula = 0

//Function Update ข้อมูลต่าง ๆ ภายใน Website
function page_update(){
    //ใช้ Switch Case ตรวจสอบ Var lang
    switch(lang){
        //กรณีที่ lang = 0 | ภาษาอังกฤษ
        case 0:
            document.getElementById("page-title").innerHTML = "Geometry Calculators"
            document.getElementById("title").innerHTML = "Geometry Calculators"
            //ใช้ Switch Case ตรวจสอบ Var dimension
            switch(dimension){
                //กรณีที่ dimension = 0 | 2D
                case 0:
                    document.getElementById("formula-left").innerHTML = "Area"
                    document.getElementById("formula-right").innerHTML = "Circumference"
                    //ใช้ Switch Case ตรวจสอบ Var shape
                    switch(shape){
                        //กรณีที่ shape = 0 | วงกลม, ทรงกลม
                        case 0:
                            document.getElementById("name").innerHTML = "Circle"
                            document.getElementById("shape-img").src="img/circle.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Area -"
                                    document.getElementById("formula").innerHTML="πr²";
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Circumference -"
                                    document.getElementById("formula").innerHTML="2πr";
                                    break;
                            }
                            break;
                        //กรณีที่ shape = 1 | สี่เหลี่ยม, ลูกบาศก์
                        case 1:
                            document.getElementById("name").innerHTML = "Square"
                            document.getElementById("shape-img").src="img/Square.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="w²";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Area -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="w*4";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Circumference -"
                                    break;
                            }
                            break;
                    }
                    break;
                //กรณีที่ dimension = 1 | 3D
                case 1:
                    document.getElementById("formula-left").innerHTML = "Volume"
                    document.getElementById("formula-right").innerHTML = "Surface Area"
                    //ใช้ Switch Case ตรวจสอบ Var shape
                    switch(shape){
                        //กรณีที่ shape = 0 | วงกลม, ทรงกลม
                        case 0:
                            document.getElementById("name").innerHTML = "Sphere"
                            document.getElementById("shape-img").src="img/circle.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="4πr³/3";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Volume -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="4πr²";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Surface Area -"
                                    break;
                            }
                            break;
                        //กรณีที่ shape = 1 | สี่เหลี่ยม, ลูกบาศก์
                        case 1:
                            document.getElementById("name").innerHTML = "Cube"
                            document.getElementById("shape-img").src="img/Square.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="w²h";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Volume -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="w²*6";
                                    document.getElementById("formula-topic").innerHTML = "- Formula: Surface Area -"
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        //กรณีที่ lang = 1 | ภาษาไทย
        case 1:
            document.getElementById("page-title").innerHTML = "เว็บไซต์คำนวณเรขาคณิต"
            document.getElementById("title").innerHTML = "เว็บไซต์คำนวณเรขาคณิต"
            //ใช้ Switch Case ตรวจสอบ Var dimension
            switch(dimension){
                //กรณีที่ dimension = 0 | 2D
                case 0:
                    document.getElementById("formula-left").innerHTML = "พื้นที่"
                    document.getElementById("formula-right").innerHTML = "เส้นรอบวง"
                    //ใช้ Switch Case ตรวจสอบ Var shape
                    switch(shape){
                        //กรณีที่ shape = 0 | วงกลม, ทรงกลม
                        case 0:
                            document.getElementById("name").innerHTML = "วงกลม"
                            document.getElementById("shape-img").src="img/circle.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: พื้นที่ -"
                                    document.getElementById("formula").innerHTML="πr²";
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: เส้นรอบวง -"
                                    document.getElementById("formula").innerHTML="2πr";
                                    break;
                            }
                            break;
                        //กรณีที่ shape = 1 | สี่เหลี่ยม, ลูกบาศก์
                        case 1:
                            document.getElementById("name").innerHTML = "สี่เหลี่ยม"
                            document.getElementById("shape-img").src="img/Square.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="w²";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: พื้นที่ -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="w*4";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: เส้นรอบวง -"
                                    break;
                            }
                            break;
                    }
                    break;
                //กรณีที่ dimension = 1 | 3D
                case 1:
                    document.getElementById("formula-left").innerHTML = "ปริมาตร"
                    document.getElementById("formula-right").innerHTML = "พื้นที่ผิว"
                    //ใช้ Switch Case ตรวจสอบ Var shape
                    switch(shape){
                        //กรณีที่ shape = 0 | วงกลม, ทรงกลม
                        case 0:
                            document.getElementById("name").innerHTML = "ทรงกลม"
                            document.getElementById("shape-img").src="img/circle.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="4πr³/3";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: ปริมาตร -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="4πr²";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: พื้นที่ผิว -"
                                    break;
                            }
                            break;
                        //กรณีที่ shape = 1 | สี่เหลี่ยม, ลูกบาศก์
                        case 1:
                            document.getElementById("name").innerHTML = "ลูกบาศก์"
                            document.getElementById("shape-img").src="img/Square.png";
                            //ใช้ Switch Case ตรวจสอบ Var formula
                            switch(formula){
                                //กรณีที่ formula = 0 | Area, Volume
                                case 0:
                                    document.getElementById("formula").innerHTML="w²h";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: ปริมาตร -"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula").innerHTML="w²*6";
                                    document.getElementById("formula-topic").innerHTML = "- สูตร: พื้นที่ผิว -"
                                    break;
                            }
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

function change_formula_left(){
    formula = 0
    page_update()
}

function change_formula_right(){
    formula = 1
    page_update()
}