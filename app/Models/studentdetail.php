<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class studentdetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'std_name',
        'std_email',
        'std_city',
        'std_hometwon',
        'std_address',
        'std_phone',
        'std_roll',
        'std_gender',
        'std_image'
    ];
}
