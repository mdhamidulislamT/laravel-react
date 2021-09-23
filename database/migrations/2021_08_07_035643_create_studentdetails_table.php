<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('studentdetails', function (Blueprint $table) {
            $table->id();
            $table->string("std_name");
            $table->string("std_email");
            $table->string("std_district");
            $table->string("std_phone");
            $table->string("std_class");
            $table->string("std_gender");
            $table->string("std_image");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('studentdetails');
    }
}
