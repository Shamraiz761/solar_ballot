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
            $table->varchar('rel-no',30);
            $table->varchar('rel-no',30);
            $table->varchar('rel-no',30);
            $table->varchar('rel-no',30);
            $table->varchar('rel-no',30);
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
