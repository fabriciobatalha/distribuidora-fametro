<?php

use Illuminate\Support\Facades\Route;

//Route::apiResource('clientes', 'api\ClientesController');

//Route::get('clientes', [ClientesController::class, 'index']);


Route::apiResource('clientes','App\Http\Controllers\api\ClientesController');

Route::apiResource('entregador', 'App\Http\Controllers\api\EntregadorController');

