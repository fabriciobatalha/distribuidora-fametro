<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class produto extends Model
{
    protected $table = 'produto';
    protected $fillable = ['cd_produto', 'descricao', 'quantidade', 'preco'];

}
