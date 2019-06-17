<?php

function readData(){
echo "ip";
echo "\n";
$lines = file("diapozon.txt", FILE_IGNORE_NEW_LINES);
for ($i=0;$i<count($lines);$i++){
    echo $lines[$i];
    $worlsArrsy=explode(",",$lines[$i]);
    print_r($worlsArrsy);
}
}

//нужно расчитать маску по дианазону
 function calcMaskByRange($first,$last){
    
}


//считакм длину маски в битак по маске типа . 255.255.255.128 = 25
 function netmask2cidr($netmask)
    {
        $bits = 0;
        $netmask = explode(".", $netmask);

        foreach($netmask as $octect)
        $bits += strlen(str_replace("0", "", decbin($octect)));

    return $bits;
    }