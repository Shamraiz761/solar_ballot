<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plots', function (Blueprint $table) {
            $table->id();
            $table->string('rel_no', 30)->nullable();
            $table->string('applicant_name', 150);
            $table->string('cnic_no', 30)->nullable();
            $table->string('mobile', 15);
            $table->string('tehsil', 200);
            $table->string('applicant_type', 30);
            $table->string('address', 200)->nullable();
            $table->integer('status')->default(1);
            $table->date('date_of_birth')->nullable();
            $table->string('father_name', 30);
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
        Schema::dropIfExists('plots');
    }
}
