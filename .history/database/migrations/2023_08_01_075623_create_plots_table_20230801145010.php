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
            $table->integer('plot_no', 30)->nullable();
            $table->string('plot_code', 150)->nullable();
            $table->string('plot_site', 30)->nullable();
            $table->string('plot_category', 50)->nullable();
            $table->string('tehsil', 200);
            $table->string('applicant_type', 30);
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
