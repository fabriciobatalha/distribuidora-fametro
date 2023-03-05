<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class entregador extends Model
{
    protected $table = 'entregador';
    protected $fillable = ['cd_entregador', 'nome', 'nr_entregador', 'nr_pedido', 'telefone'];
}
