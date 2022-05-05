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
            document.getElementById("solution").innerHTML = "Solution:"
            document.getElementById("result").innerHTML = "Result:"
            //ใช้ Switch Case ตรวจสอบ Var dimension
            switch(dimension){
                //กรณีที่ dimension = 0 | 2D
                case 0:
                    document.getElementById("formula-left").innerHTML = "Area"
                    document.getElementById("formula-right").innerHTML = "Circum ference"
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
                                    document.getElementById("formula-topic").innerHTML = "Area Formula: π r ²"
                                    document.getElementById("formula-detail").innerHTML= "{ ( 22 / 7 ) × Radius × Radius }"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">Radius ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML = "Circumference Formula: 2 π r"
                                    document.getElementById("formula-detail").innerHTML= "{ 2 × ( 22 / 7 ) × Radius }"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">Radius ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
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
                                    document.getElementById("formula-topic").innerHTML="Area Formula: w ²";
                                    document.getElementById("formula-detail").innerHTML = "( Width × Width )"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="Circumference Formula: w × 4";
                                    document.getElementById("formula-detail").innerHTML = "( Width × 4 )"
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
                                    document.getElementById("formula-topic").innerHTML="Volume Formula: 4 π r ³ / 3";
                                    document.getElementById("formula-detail").innerHTML = "[ { 4 × ( 22 / 7 ) × Radius × Radius × Radius } / 3 ]"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">Radius ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="Surface Area Formula: 4 π r ²";
                                    document.getElementById("formula-detail").innerHTML = "{ 4 × ( 22 / 7 ) × Radius × Radius }"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">Radius ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
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
                                    document.getElementById("formula-topic").innerHTML="Volume Formula: w ² h";
                                    document.getElementById("formula-detail").innerHTML = "( Width × Width × Height )"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="Surface Area Formula: w ² × 6";
                                    document.getElementById("formula-detail").innerHTML = "( Width × Width × 6 )"
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
            document.getElementById("solution").innerHTML = "วิธีทำ:"
            document.getElementById("result").innerHTML = "ผลลัพธ์:"
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
                                    document.getElementById("formula-topic").innerHTML = "สูตรหาพื้นที่: π r ²"
                                    document.getElementById("formula-detail").innerHTML="{ ( 22 / 7 ) × รัศมี × รัศมี }";
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">รัศมี ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML = "สูตรหาเส้นรอบวง: 2 π r"
                                    document.getElementById("formula-detail").innerHTML="{ 2 × ( 22 / 7 ) × รัศมี }";
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">รัศมี ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
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
                                    document.getElementById("formula-topic").innerHTML="สูตรหาพื้นที่: w ²";
                                    document.getElementById("formula-detail").innerHTML = "( ด้าน × ด้าน )"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="สูตรหาเส้นรอบวง: w × 4";
                                    document.getElementById("formula-detail").innerHTML = "( ด้าน × 4 )"
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
                                    document.getElementById("formula-topic").innerHTML="สูตรหาปริมาตร: 4 π r ³ / 3";
                                    document.getElementById("formula-detail").innerHTML = "[ { 4 × ( 22 / 7 ) × รัศมี × รัศมี × รัศมี } / 3 ]"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">รัศมี ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="สูตรหาพื้นที่ผิว: 4 π r ²";
                                    document.getElementById("formula-detail").innerHTML = "{ 4 × ( 22 / 7 ) × รัศมี × รัศมี }"
                                    document.getElementById("input-form").innerHTML = "<label class=\"formula\" for=\"input_1\">รัศมี ( r ) : </label><br><input class=\"formula\" type=\"number\" id=\"input_1\" name=\"input_1\" min=\"0\"><br>"
                                    document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1><h1 class=\"formula\"></h1>"
                                    document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1><h1 class=\"result\"></h1><h1 class=\"result\"></h1><h1 class=\"gap-1\"></h1>"
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
                                    document.getElementById("formula-topic").innerHTML="สูตรหาปริมาตร: w ² h";
                                    document.getElementById("formula-detail").innerHTML = "{ ( ด้าน × ด้าน ) × สูง }"
                                    break;
                                //กรณีที่ formula = 1 | Circumference, Surface Area
                                case 1:
                                    document.getElementById("formula-topic").innerHTML="สูตรหาพื้นที่ผิว: w ² × 6";
                                    document.getElementById("formula-detail").innerHTML = "{ ( ด้าน × ด้าน ) × 6 }"
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
    }
}

//ฟังก์ชั่นเปลี่ยนภาษา เป็น ภาษาอังกฤษ
function EN_lang(){
    lang = 0
    page_update()
}

//ฟังก์ชั่นเปลี่ยนภาษา เป็น ภาษาไทย
function TH_lang(){
    lang = 1
    page_update()
}

//ฟังก์ชั่นเปลี่ยนมิติของภาพ เป็น 2D
function two_dimension(){
    dimension = 0
    page_update()
}

//ฟังก์ชั่นเปลี่ยนมิติของภาพ เป็น 3D
function three_dimension(){
    dimension = 1
    page_update()
}

//ฟังก์ชั่นเปลี่ยนรูปเป็นรูปทางซ้าย
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

//ฟังก์ชั่นเปลี่ยนรูปเป็นรูปทางขวา
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

//ฟังก์ชั่นเปลี่ยนสูตรเป็น Area, Volume
function change_formula_left(){
    formula = 0
    page_update()
}

//ฟังก์ชั่นเปลี่ยนสูตรเป็น Circumference, Surface Area
function change_formula_right(){
    formula = 1
    page_update()
}

//var เก็บค่า radius, diameter, width, height
var radius = 0
var diameter = 0
var width = 0
var height = 0

//var เก็บค่าผลัพธ์ที่ได้จากการคำนวณ
var result = 0

//ฟังก์ชั่นเครื่องคิดเลข ใช้ในการคำนวณหาผลลัพธ์
function calculator(){
    //
    switch(dimension){
        //
        case 0:
            //
            switch(shape){
                //
                case 0:
                    //
                    switch(formula){
                        //
                        case 0:
                            radius = document.getElementById("input_1").value;
                            result = (22/7*radius*radius)
                            document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1>"
                            document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1>"
                            document.getElementById("formula-1").innerHTML = "π r ²"
                            document.getElementById("formula-2").innerHTML = "{ ( 22 / 7 ) × Radius × Radius }"
                            document.getElementById("formula-3").innerHTML = "( 22 / 7 ) × " + radius + " × " + radius
                            document.getElementById("formula-4").innerHTML = "( 22 / 7 ) × " + radius*radius
                            document.getElementById("formula-5").innerHTML = result.toFixed(2)
                            document.getElementById("result-1").innerHTML = result.toFixed(2)
                            break;
                        //
                        case 1:
                            radius = document.getElementById("input_1").value;
                            result = (2*22/7*radius)
                            document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1>"
                            document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1>"
                            document.getElementById("formula-1").innerHTML = "2 π r"
                            document.getElementById("formula-2").innerHTML = "{ 2 × ( 22 / 7 ) × Radius }"
                            document.getElementById("formula-3").innerHTML = "2 × ( 22 / 7 ) × " + radius
                            document.getElementById("formula-4").innerHTML = "( 22 / 7 ) × " + radius*2
                            document.getElementById("formula-5").innerHTML = result.toFixed(2)
                            document.getElementById("result-1").innerHTML = result.toFixed(2)
                            break;
                    }
                    break;
                //
                case 1:

                    break;
            }
            break;
        //
        case 1:
            //
            switch(shape){
                //
                case 0:
                    //
                    switch(formula){
                        //
                        case 0:
                            radius = document.getElementById("input_1").value;
                            result = (4*(22/7)*radius*radius*radius)/3
                            document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1>"
                            document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1>"
                            document.getElementById("formula-1").innerHTML = "4 π r ³ / 3"
                            document.getElementById("formula-2").innerHTML = "[ { 4 × ( 22 / 7 ) × Radius × Radius × Radius } / 3 ]"
                            document.getElementById("formula-3").innerHTML = "[ { 4 × ( 22 / 7 ) × " + Radius + " × " +  Radius + " × " + Radius + " } / 3 ]"
                            document.getElementById("formula-4").innerHTML = "( " + (4*(22/7)*radius*radius*radius) + " ) / 3"
                            document.getElementById("formula-5").innerHTML = result.toFixed(2)
                            document.getElementById("result-1").innerHTML = result.toFixed(2)
                            break;
                        //
                        case 1:
                            radius = document.getElementById("input_1").value;
                            result = (2*22/7*radius)
                            document.getElementById("solution-box").innerHTML = "<h1 class=\"formula\" id=\"formula-1\"></h1><h1 class=\"formula\" id=\"formula-2\"></h1><h1 class=\"formula\" id=\"formula-3\"></h1><h1 class=\"formula\" id=\"formula-4\"></h1><h1 class=\"formula\" id=\"formula-5\"></h1>"
                            document.getElementById("result-box").innerHTML = "<h1 class=\"result\"></h1><h1 class=\"result\" id=\"result-1\"></h1><h1 class=\"result\"></h1><h1 class=\"formula\"></h1>"
                            document.getElementById("formula-1").innerHTML = "4 π r ²"
                            document.getElementById("formula-2").innerHTML = "{ 4 × ( 22 / 7 ) × Radius × Radius }"
                            document.getElementById("formula-3").innerHTML = "{ 4 × ( 22 / 7 ) × " + Radius +  " × " + Radius + " }"
                            document.getElementById("formula-4").innerHTML = "( 22 / 7 ) × " + radius*radius*4
                            document.getElementById("formula-5").innerHTML = result.toFixed(2)
                            document.getElementById("result-1").innerHTML = result.toFixed(2)
                            break;
                    }
                    break;
                //
                case 1:

                    break;
            }
            break;
    }
}