<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\entregador;
use Illuminate\Http\Request;

class EntregadorController extends Controller
{
   
    public function index()
    {
        return entregador::all();
    }
   
    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

  
    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

  
    public function destroy($id)
    {
        //
    }
}
