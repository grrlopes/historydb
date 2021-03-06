<?php
/**
 * @autor  Gabriel Lopes
 * @email   gabrielrrlopes@gmail.com
 **/
require_once '../config.inc.php';
session_start();
if(!isset($_SESSION['user']) &&
!isset($_SESSION['pass'])) return;
$systemc = new systemc;
$dados = filter_input(INPUT_POST,'dados');
function replace_unicode_escape_sequence($match){
    return mb_convert_encoding(pack(
    'H*', $match[1]), 'UTF-8', 'UCS-2BE');
}
function unicode_decode($str){
    return preg_replace_callback('/\\\\u([0-9a-f]{4})/i',
    'replace_unicode_escape_sequence', $str);
}
$data = json_decode(unicode_decode($dados));
$funcao = $data->funcao;
$sistema = $data->sistema;
$autor = $_SESSION['user'];
$comando = $data->comando;
$data = new MongoDB\BSON\UTCDateTime;
$Dados = [
    'funcao' => "$funcao", 'sistema' => "$sistema",
    'autor' => "$autor", 'comando' => "$comando",
];
$systemc->ExeCriacao('comandos', $Dados);
echo json_encode(array(
    "success" => true,
    "dados" => array(
        "_id" => $systemc->ObterOid(),
        "funcao" => $funcao,
        "sistema" => $sistema,
        "autor" => $autor,
        "comando" => $comando,
        "data" => $systemc->ObterData()

    )
));