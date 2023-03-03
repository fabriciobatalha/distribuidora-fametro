<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\produto;
use Illuminate\Http\Request;
use Exception;

class ProdutoController extends Controller
{
    
    public function index()
    {
        return produto::all();
    }


   
    public function store(Request $request)
    {
        try
        {
            produto::create($request->all());   

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
        return produto::find($id);
    }


   
    public function update(Request $request, $id)
    {
        produto::find($id)->update($request->all());

        return [
            'status' => true,
            'data' =>[],
            'msg' => 'sucesso'
        ];
    }

  
    public function destroy($id)
    {
        try{
            produto::find($id)->delete();   

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
