<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class funcionarios extends Model
{
    protected $table = 'funcionarios';
    protected $fillable = ['name', 'cargo', 'cd_funcionarios', 'endereco', 'telefone'];
    
}
