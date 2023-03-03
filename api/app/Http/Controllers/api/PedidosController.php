<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\pedidos;
use Illuminate\Http\Request;
use Exception;

class PedidosController extends Controller
{
   
    public function index()
    {
        return pedidos::all();
    }

    
    
    public function store(Request $request)
    {
        try
        {
            pedidos::create($request->all());   

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
        return pedidos::find($id);
    }

   
   
    public function update(Request $request, $id)
    {
        pedidos::find($id)->update($request->all());

        return [
            'status' => true,
            'data' =>[],
            'msg' => 'sucesso'
        ];
    }

    
    public function destroy($id)
    {
        try{
            pedidos::find($id)->delete();   

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
