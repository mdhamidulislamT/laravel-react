<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;


class EmployeeController extends Controller
{
  public function list_role()
  {
    $data = Role::get();

    $response['data'] = $data;
    $response['success'] = true;
    return $response;
  }



  // $response=$request->all();
  // return $response;
  public function save(Request $request)
  {


    // dd($request->all());
    $response['message'] = "Save succesful";
    $response['success'] = true;

    return "TEEEEEEEEEEEST";
  }


  public function create(Request $request)
  {

    // return $request->all();

    try {

      $employee = new Employee();

      $employee->name_lastname = $request->name;
      $employee->email = $request->email;
      $employee->city = $request->city;
      $employee->direction = $request->address;
      $employee->phone = $request->phone;
      $employee->rol = $request->rol;
      $result = $employee->save();
      if ($result) {
        $response['message'] = "Save succesful";
        $response['success'] = true;
      }
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = true;
    }

    return $response;
  }

  public function list()
  {
    try {

      $data = Employee::with('role')->orderBy('id','DESC')->get();
      $response['data'] = $data;

      $response['message'] = "Data Load succesful";
      $response['success'] = true;
    } catch (\Exception $e) {

      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }

    return $response;
  }


  public function get($id)
  {
    try {

      $data = Employee::with('role')->find($id);
      if ($data) {
        $response['data'] = $data;

        $response['message'] = "Data Load successful";
        $response['success'] = true;
      } else {
        $response['data'] = null;

        $response['message'] = "Not Found Data ID : " . $id;
        $response['success'] = false;
      }
    } catch (\Exception $e) {

      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }

    return $response;
  }

  public function update(Request $request)
  {

    $id = $request->id;

    try {

      $employee = Employee::find($id);

      $employee->name_lastname = $request->name;
      $employee->email = $request->email;
      $employee->city = $request->city;
      $employee->direction = $request->address;
      $employee->phone = $request->phone;
      $employee->rol = $request->rol;
      $result = $employee->save();
      if ($result) {
        $response['message'] = "update succesful";
        $response['success'] = true;
      }
    } catch (\Exception $e) {
      $response['message'] = $e->getMessage();
      $response['success'] = true;
    }

    return $response;
  }

  public function delete($id)
  {

    try {

      $data = Employee::find($id)->delete();
      //$response['data'] = $data;

      $response['message'] = "Data  deleted";
      $response['success'] = true;
    } catch (\Exception $e) {

      $response['message'] = $e->getMessage();
      $response['success'] = false;
    }

    return $response;
  }
}
