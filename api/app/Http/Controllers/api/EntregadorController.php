<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\entregador;
use Illuminate\Http\Request;
use Exception;

class EntregadorController extends Controller
{
   
    public function index()
    {
        return entregador::all();
    }
   
    
    public function store(Request $request)
    {
        try
        {
            entregador::create($request->all());   

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

    public function show($id)
    {
        return entregador::find($id);
    }


    public function update(Request $request, $id)
    {
        entregador::find($id)->update($request->all());

        return [
            'status' => true,
            'data' =>[],
            'msg' => 'sucesso'
        ];
    }

  
    public function destroy($id)
    {
        try{
            entregador::find($id)->delete();   

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
