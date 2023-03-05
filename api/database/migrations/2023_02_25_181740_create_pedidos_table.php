<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->integerIncrements('nr_pedidos');
            $table->date('data');
            $table->timestamps();
        });
    }

   
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}
