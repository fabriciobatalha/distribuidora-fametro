<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\funcionarios;
use Illuminate\Http\Request;
use Exception;

class FuncionariosController extends Controller
{
    
    public function index()
    {
        return funcionarios::all();
    }


   
    public function store(Request $request)
    {
        try
        {
            funcionarios::create($request->all());   

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
        return funcionarios::find($id);
    }


   
    public function update(Request $request, $id)
    {
        funcionarios::find($id)->update($request->all());

        return [
            'status' => true,
            'data' =>[],
            'msg' => 'sucesso'
        ];
    }

  
    public function destroy($id)
    {
        try{
            funcionarios::find($id)->delete();   

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
