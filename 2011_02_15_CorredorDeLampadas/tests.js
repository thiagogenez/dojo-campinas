function tests_main() {
    var tests = [test_walk_one_lamp, test_walk_two_lamps,
    test_walk_three_lamps, test_walk_four_lamps,
    test_walk_five_lamps,
    test_cria_lampadas,test_walk_pass_1_lamps_4 ];
    var result;
    var out = document.getElementById("stdout");
    output = "";
    for (test in tests) {
        result = tests[test]();
        output += result? "pass <br />": ( test + "fail <br />");
    }
    out.innerHTML = output;
}

function teste(test_num,retorno) {
    var test_db = [
        [true],
        [true,false],
        [true,false,false],
        [true, false, false, true],
        [true,false,false,true,false]
        ];
        test_num -= 1;
        for(var indice_teste = 0; indice_teste < test_num; indice_teste++) {
            if(
            test_db[test_num][indice_teste]!= retorno[indice_teste])
                return false;
        }
    return true;
}
function test_walk_one_lamp() {
    return (teste(1,walk(1)));
    }

function test_walk_two_lamps() {
    return (teste(2,walk(2)));
}

function test_walk_three_lamps() {
    return (teste(3,walk(3)));
}
function test_walk_four_lamps() {
    return teste(4, walk(4));
}
function test_walk_five_lamps() {
    return teste(5, walk(5));
}
function test_cria_lampadas() {
    var result = walk_n(1);
    return result.length == 1;
}


function test_walk_pass_1_lamps_4() {
    var lamps = walk_n(4);
    if (lamps.length != 4) return false;
    result = pass(lamps, 1);
    for (var i=0; i<4; i++) {
        if (result[i] != true) return false;
    }
    return true;
    
}