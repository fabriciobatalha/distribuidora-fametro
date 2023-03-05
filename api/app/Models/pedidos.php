<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pedidos extends Model
{
    protected $table = 'pedidos';
    protected $fillable = ['nr_pedidos', 'data'];
}
