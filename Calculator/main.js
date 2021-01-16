const viewer = document.getElementById('viewer');

function insert(number){
    viewer.value = viewer.value + number;
}

function equal(){
    const operation = viewer.value;
    if(operation){
        viewer.value = eval(operation);
    }
}

function clean(){
    viewer.value = "";
}

function back() {
    const oparation = viewer.value
    viewer.value = oparation.substring(0, oparation.length - 1);
}