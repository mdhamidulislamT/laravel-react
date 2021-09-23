<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Classs;
use App\Models\studentdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Standard;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    public function index()
    {
        $classes = Standard::all();
       $response['data'] = $classes;

        $response['message'] = "Data Load succesful";
        $response['succes'] = true;
        
       return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return "okk";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$inputs = $request->all();
        $ImgPath = $request->file('stdImage')->store('StudentImages');
        
        //dd($path);
        $student = new studentdetail();
        $student->std_name = $request->stdName;
        $student->std_email = $request->stdEmail;
        $student->std_district = $request->stdDistrict;
        $student->std_phone = $request->stdPhone;
        $student->std_class = $request->stdClass;
        $student->std_gender = $request->stdGender;
        $student->std_image = $ImgPath;
        $result = $student->save();
        if ($result) {
            $response['message'] = "  new student has beed added ";
            $response['success'] = true;
        }else{
            $response['message'] = " new student has not been added! ";
            $response['success'] = false;

        }

        //return response()->json(' new student added ');
        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
