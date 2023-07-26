<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id(); 
            $table->varchar('rel_no',30);
            $table->varchar('applicant_name',150);
            $table->varchar('cnic_no',30);
            $table->varchar('mobile',15);
            $table->varchar('tehsil',30);
            $table->varchar('rel-no',30);
            $table->varchar('rel-no',30);


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
        Schema::dropIfExists('applicants');
    }
}
