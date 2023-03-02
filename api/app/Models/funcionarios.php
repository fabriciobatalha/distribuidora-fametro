<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class funcionarios extends Model
{
    protected $table = 'funcionarios';
    protected $fillable = ['name', 'cargo', 'cd_funcionario', 'endereco', 'telefone'];
    //use HasFactory;
}
