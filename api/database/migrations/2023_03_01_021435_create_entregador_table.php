<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntregadorTable extends Migration
{
    
    public function up()
    {
        Schema::create('entregador', function (Blueprint $table) {
            $table->bigIncrements('cd_entregador');
            $table->string('nome', 50);
            $table->string('nr_entregador');
            $table->string('nr_pedido');
            $table->string('telefone', 11);
            $table->timestamps();
        });
    }

   
    public function down()
    {
        Schema::dropIfExists('entregador');
    }
}
