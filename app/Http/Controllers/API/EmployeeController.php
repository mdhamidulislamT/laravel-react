<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function list_role(){ 
      $data = Role::get();

      $response['data'] = $data;
      $response['succes'] = true;
      return $response;
      }


        // $response=$request->all();
        // return $response;
        public function create(Request $request){

          try {

            $employee =new Employee();

            $employee->name_lastname = $request->name;
            $employee->email = $request->email;
            $employee->city = $request->city;
            $employee->direction = $request->address;
            $employee->phone = $request->phone;
            $employee->rol = $request->rol;
            $result = $employee->save();
            if ($result) {
              $response['message'] = "Save succesful";
              $response['succes'] = true;
            }
    
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['succes'] = true;
          }
           
          return $response;
        }

        public function list(){
          try {

              $data = Employee::with('role')->get();
              $response['data'] = $data;

              $response['message'] = "Data Load succesful";
              $response['succes'] = true;

          } catch (\Exception $e) {

            $response['message'] = $e->getMessage();
            $response['succes'] = true;
          }

          return $response;
        }

        

}
