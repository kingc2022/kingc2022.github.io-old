let number = random(1, 101);
let guess_num = 1;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function check() {
    let input_number = document.getElementById("num").value;
    let input_number_int = parseInt(input_number);
    if (input_number_int >= 1 && input_number_int <= 100) {
        if (input_number_int == number) {
            $("#tishi").removeClass("btn-outline-danger").removeClass("btn-outline-primary")
                .addClass("btn-outline-success")
                .html("(*╹▽╹*) 猜对啦! (*╹▽╹*)<br>你一共猜了" + guess_num + "次");
            $("#num").attr("disabled", "disabled");
            $("#conf").attr("disabled", "disabled");
            $("#rs").show();
            console.clear();
        } else if (input_number_int < number) {
            $("#tishi").removeClass("btn-outline-danger").removeClass("btn-outline-primary")
                .removeClass("btn-outline-success").addClass("btn-outline-primary").html("(*╹▽╹*) 猜小啦! (*╹▽╹*)");
            $("#num").val("");
            guess_num = guess_num + 1;
            console.clear();
        } else if (input_number_int > number) {
            $("#tishi").removeClass("btn-outline-danger").removeClass("btn-outline-primary")
                .removeClass("btn-outline-success").addClass("btn-outline-primary").html("(*╹▽╹*) 猜大啦! (*╹▽╹*)");
            $("#num").val("");
            guess_num = guess_num + 1;
            console.clear();
        }
    } else {
        $("#tishi").removeClass("btn-outline-primary").addClass("btn-outline-danger").html("你的输入不合法");
        $("#num").val("");
        console.clear();
    }
}

function reset() {
    number = random(1, 101);
    guess_num = 0;
    $("#tishi").removeClass("btn-outline-danger").removeClass("btn-outline-primary")
        .removeClass("btn-outline-success").addClass("btn-outline-primary").html("(*╹▽╹*) 提示区 (*╹▽╹*)");
    $("#num").removeAttr("disabled").val("");
    $("#conf").removeAttr("disabled");
    $("#rs").hide();
    console.clear();
}

let input = document.getElementById("num");
input.addEventListener("keypress", function(event) {
    if (event.code === "Enter") {
        document.getElementById("conf").click();
    }
});