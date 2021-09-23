<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;






Route::get('{ReactRoutePath}', function () {
    return view('home');
})->where('ReactRoutePath', '.*');










