<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\clientes;
use Exception;

class ClientesController extends Controller
{
    public function index()
    {        
        return clientes::all();
    }

  
    public function store(Request $request)
    {
        try
        {
            clientes::create($request->all());   

            return [
                'status' => true,
                'data'   => [],
                'msg'    => 'sucesso'
            ];            
        }
        catch(Exception $e){

            return [
                'status' => false,
                'data'   => [],
                'msg'    => $e->getMessage()
            ];           
        }        

    }

  
    public function show(int $id)
    {
        return clientes::find($id);
    }
    
    public function update(Request $request, $id)
    {        

        clientes::find($id)->update($request->all());

        return [
            'status' => true,
            'data' =>[],
            'msg' => 'sucesso'
        ];
        
    }

  
    public function destroy($id)
    {
        try{
            clientes::find($id)->delete();   

            return [
                'status' => true,
                'data'   => [],
                'msg'    => 'sucesso'
            ];            
        }
        catch(Exception $e){

            return [
                'status' => false,
                'data'   => [],
                'msg'    => $e->getMessage()
            ];           
        }
    }
}
